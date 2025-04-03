# main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import gerar_anuncio_texto, gerar_anuncio_completo

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input para o anúncio simples (usando OpenAI)
class AnuncioInput(BaseModel):
    nome_produto: str
    caracteristica: str
    problemas: str

@app.post("/gerar-anuncio")
def gerar_anuncio(dados: AnuncioInput):
    try:
        texto = gerar_anuncio_texto(
            dados.nome_produto,
            dados.caracteristica,
            dados.problemas
        )
        return {"anuncio": texto}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Input para o anúncio completo (usando Gemini, Diffusers e Gradio Client)
class AnuncioCompletoInput(BaseModel):
    brand_name: str
    slogan: str = None
    brand_info: str
    post_info: str
    img_prompt: str
    img_path: str = None  # se não for enviada, assume criação de imagem do zero

@app.post("/gerar-anuncio-completo")
def gerar_anuncio_completo_route(dados: AnuncioCompletoInput):
    try:
        resultado = gerar_anuncio_completo(
            brand_name=dados.brand_name,
            slogan=dados.slogan,
            brand_info=dados.brand_info,
            post_info=dados.post_info,
            img_prompt=dados.img_prompt,
            img_path=dados.img_path
        )
        return resultado
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))