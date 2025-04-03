"use client";

import * as React from "react";
import styles from "./InputDesign.module.css";
import { PromptCard, PromptCardImg } from "./PromptCard";
import { CardResposta } from "./CardResposta.jsx";
import { useState } from "react";
import api, { gerarAnuncio } from "./service/integracaoBack.js";

const InputDesign = () => {
  const prompts = [
    {
      question: "Qual é o nome do produto ou serviço?",
      example:
        'Ex.: "Tênis Running X100".',
      nomeVariavel: "nome_produto",
      campoObrigatorio: true,
      isUploadFile: false
      
    },
    {
      question: "Qual é a principal característica ou benefício do produto/serviço?",
      example:
      'Ex.: "Confortável para longas distâncias".',
      nomeVariavel: "caracteristica",
      campoObrigatorio: false,
      isUploadFile: false
    },
    {
      question: "Quais problemas o seu produto/serviço resolve?",
      example:
      'Ex.: "Performance nos treinos".',
      nomeVariavel: "problemas",
      campoObrigatorio: false,
      isUploadFile: false
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
      'Ex.: "Corredores amadores".',
      nomeVariavel: "publicoAlvo",
      campoObrigatorio: true,
      isUploadFile: false
    },
    {
      question: "Você quer atrair novos clientes ou fidelizar os existentes?",
      example:
      'Ex.: "Atrair novos clientes".',
      nomeVariavel: "atrairNovosClientes",
      campoObrigatorio: false,
      isUploadFile: false
    },
    {
      question: "Qual é o objetivo do seu anúncio?",
      example:
      'Ex.: "Aumentar vendas".',
      nomeVariavel: "objetivoAnuncio",
      campoObrigatorio: true,
      isUploadFile: false
    },
    {
      question: "Há uma promoção ou desconto associado ao produto/serviço?",
      example:
      'Ex.: "Desconto de 20%".',
      nomeVariavel: "promocaoOuDesconto",
      campoObrigatorio: false,
      isUploadFile: false
    },
    {
      question: "Qual é o call-to-action (CTA) que você quer incluir no anúncio?",
      example:
      'Ex.: "Compre agora".',
      nomeVariavel: "callToAction",
      campoObrigatorio: false,
      isUploadFile: false
    },
    {
      question: "Quais informações você faz questão que estejam no anúncio?",
      example:
      'Ex.: "Data de validade da promoção".',
      nomeVariavel: "informacaoQueFazQuestao",
      campoObrigatorio: false,
      isUploadFile: false
    },
    {
      question: "Anexe uma imagem do produto, empresa ou serviço (opcional)",
      example:
      'Informação.',
      nomeVariavel: "imagemProduto",
      campoObrigatorio: true,
      isUploadFile: true
    },
  ];
  
  const [formData, setFormData] = useState({});
  const [respostaApi, setRespostaApi] = useState("Sua legenda aqui");


  const handleChange = (nomeVariavel, valor) => {
    setFormData((prev) => ({ ...prev, [nomeVariavel]: valor }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await gerarAnuncio(formData);
      console.log("Resposta da API:", response, "Tipo:", typeof response); // Depuração  

      setRespostaApi((prev) => response.anuncio); // Usa prev, mesmo que não dependa do estado anterior
                                                  // Está retornando um anuncio
      console.log("Anúncio gerado com sucesso:", response);
    } catch (error) {
      console.error("Erro ao gerar anúncio:", error);
    }
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.inputColumn}>
          <form className={styles.promptsWrapper} onSubmit={handleSubmit}>
            {prompts.map((prompt, index) =>
              prompt.isUploadFile ? (
                <PromptCardImg key={index} question={prompt.question} nomeVariavel={prompt.nomeVariavel} campoObrigatorio={prompt.campoObrigatorio} onChange={handleChange} />
              ) : (
                <PromptCard 
                  key={index} 
                  question={prompt.question} 
                  example={prompt.example} 
                  nomeVariavel={prompt.nomeVariavel} 
                  campoObrigatorio={prompt.campoObrigatorio} 
                  value={formData[prompt.nomeVariavel]}  // Envia para o back
                  onChange={handleChange} 
                />
              )
            )}
            <button type="submit">Gerar anúncio</button>
          </form>
        </section>

        <section className={styles.previewColumn}>
          <div className={styles.previewContainer}>
            <div className={styles.CardPhoto}>
              <div className={styles.previewContent}>
                {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0086d7af1c32e4561f99238365d26087016782d5?placeholderIfAbsent=true&apiKey=47fda44c6ea740f9ab46958588fbba02" alt="Preview" className={styles.previewImage} /> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ew3NHpTTIDcEDYKWuY4nod3ieXO6d4BEhQ&s" alt="Preview" className={styles.previewImage} />
              </div>
              
              <div className={styles.legendaPhoto}>
                <CardResposta
                  Texto={respostaApi}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InputDesign;
