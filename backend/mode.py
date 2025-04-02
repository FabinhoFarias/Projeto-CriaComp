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
        model="gpt-4",  
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    return response.choices[0].message.content.strip()