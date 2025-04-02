# main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model import gerar_anuncio_texto

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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