import os
import openai
from dotenv import load_dotenv

load_dotenv()  # Carrega variáveis do .env
openai.api_key = os.getenv("OPENAI_API_KEY")

def gerar_anuncio_texto(nome_produto: str, caracteristica: str, problemas: str) -> str:
    prompt = f"""
    Considere as seguintes informações para criar um anúncio:
    1) Nome do produto/serviço: {nome_produto}
    2) Principal característica/benefício: {caracteristica}
    3) Problemas que resolve: {problemas}

    Sua tarefa:
    - Crie 1 texto de anúncio com até 400 caracteres.
    - Mencione o nome do produto/serviço.
    - Destaque a característica principal ou benefício.
    - Faça referência aos problemas que resolve e ao público-alvo.
    - Se houver promoção/desconto, inclua isso.
    - Incluir CTA (call-to-action).
    - Seja atrativo, claro e objetivo.

    Responda apenas com o texto.
    """

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    return response.choices[0].message.content.strip()



# ---------------------------------------------------------
# Função que integra o fluxo completo (células do Colab)
# ---------------------------------------------------------
import google.generativeai as genai
from diffusers import DiffusionPipeline
import torch
from gradio_client import Client, handle_file
from PIL import Image

# Configura a chave da API do Gemini
GOOGLE_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

def gerar_anuncio_completo(brand_name: str, slogan: str, brand_info: str, post_info: str, img_prompt: str, img_path: str):
    """
    Função que executa as etapas:
    1. Extrai características do texto do post.
    2. Resume as informações da marca.
    3. Gera 4 opções de anúncio.
    4. Seleciona uma opção (a primeira por padrão).
    5. Gera/edita imagem publicitária usando Diffusers e Gradio Client.
    """

    # 1) Extrair características do post_info
    post_extract_prompt = f'List ONLY the characteristics presented in the text: "{post_info}"'
    response = genai.GenerativeModel('models/gemini-1.5-pro').generate_content(post_extract_prompt)
    extracted_post_info = response.text

    # 2) Resumir brand_info
    brand_extract_prompt = f'Summarize this descriptive text, making it more objective and keeping only relevant information: "{brand_info}"'
    response_brand = genai.GenerativeModel('models/gemini-1.5-pro').generate_content(brand_extract_prompt)
    extracted_brand_info = response_brand.text

    # 3) Gerar opções de anúncio
    generation_prompt = (
        f'Create FOUR options of advertising text that is:\n'
        f'{extracted_post_info}\n'
        f'about a brand called {brand_name} and described by: {extracted_brand_info}'
    )
    final_response = genai.GenerativeModel('models/gemini-1.5-pro').generate_content(generation_prompt)
    options = [opt.strip() for opt in final_response.text.split("\n") if brand_name in opt]
    if not options:
        options = [opt.strip() for opt in final_response.text.split("\n")]

    chosen_text = options[0]  # Por simplicidade, escolhemos a primeira opção

    # 4) Preparar prompt para edição da imagem
    if slogan:
        prompt_for_image = f'Write "{brand_name}" and "{slogan}" in empty spaces in the image'
    else:
        prompt_for_image = f'Write "{brand_name}" in an empty space in the image'

    client = Client("ameerazam08/Gemini-Image-Edit")
    final_image_url = None

    # 5) Geração ou edição da imagem
    if not img_path:
        # Não foi enviada imagem, então gera imagem do zero.
        gen_img_prompt = f'Make a prompt to use with an image generative model, following the description provided : "{img_prompt}"'
        final_img_prompt = genai.GenerativeModel('models/gemini-1.5-pro').generate_content(gen_img_prompt).text

        # Carrega o pipeline de geração de imagem
        try:
            pipeline = DiffusionPipeline.from_pretrained(
                "stabilityai/stable-diffusion-xl-base-1.0",
                use_safetensors=True,
                torch_dtype=torch.float16
            )
            pipeline.to("cuda")
        except Exception as e:
            raise Exception("Erro ao carregar o pipeline de difusão: " + str(e))

        image = pipeline(final_img_prompt).images[0]
        image.save("image.png")

        result = client.predict(
            composite_pil=handle_file("image.png"),
            prompt=prompt_for_image,
            gemini_api_key=GOOGLE_API_KEY,
            api_name="/process_image_and_prompt"
        )
        if result and result[0]:
            final_image_url = result[0][0]['image']
    else:
        # Se houver um caminho para imagem, edita a imagem existente.
        gen_img_prompt = f'Summarize in the SHORTEST way possible the following description: "{img_prompt}"'
        short_prompt = genai.GenerativeModel('models/gemini-1.5-pro').generate_content(gen_img_prompt).text
        bg_prompt = f'Make a {short_prompt} background for the image'

        tmp_result = client.predict(
            composite_pil=handle_file(img_path),
            prompt=bg_prompt,
            gemini_api_key=GOOGLE_API_KEY,
            api_name="/process_image_and_prompt"
        )
        if tmp_result and tmp_result[0]:
            url_bg = tmp_result[0][0]['image']
            bg_image = Image.open(url_bg)
            bg_image.save("image_bg.png")

            result = client.predict(
                composite_pil=handle_file("image_bg.png"),
                prompt=prompt_for_image,
                gemini_api_key=GOOGLE_API_KEY,
                api_name="/process_image_and_prompt"
            )
            if result and result[0]:
                final_image_url = result[0][0]['image']

    return {
         "text_options": options,
         "chosen_text": chosen_text,
         "final_image_url": final_image_url
    }
