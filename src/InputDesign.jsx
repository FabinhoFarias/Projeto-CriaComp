"use client";

import * as React from "react";
import styles from "./InputDesign.module.css";
import { PromptCard, PromptCardImg } from "./PromptCard";

const InputDesign = () => {
  const prompts = [
    {
      question: "Qual é o nome do produto ou serviço?",
      example:
        'Ex.: "Tênis Running X100".',
      nomeVariavel: "nomeProduto",
      campoObrigatorio: true
    },
    {
      question: "Qual é a principal característica ou benefício do produto/serviço?",
      example:
      'Ex.: "Confortável para longas distâncias".',
      nomeVariavel: "principalCaracteristica",
      campoObrigatorio: false
    },
    {
      question: "Quais problemas o seu produto/serviço resolve?",
      example:
      'Ex.: "Performance nos treinos".',
      nomeVariavel: "problemaQueResolve",
      campoObrigatorio: false
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
      'Ex.: "Corredores amadores".',
      nomeVariavel: "publicoAlvo",
      campoObrigatorio: true
    },
    {
      question: "Você quer atrair novos clientes ou fidelizar os existentes?",
      example:
      'Ex.: "Atrair novos clientes".',
      nomeVariavel: "atrairNovosClientes",
      campoObrigatorio: false
    },
    {
      question: "Qual é o objetivo do seu anúncio?",
      example:
      'Ex.: "Aumentar vendas".',
      nomeVariavel: "objetivoAnuncio",
      campoObrigatorio: true
    },
    {
      question: "Há uma promoção ou desconto associado ao produto/serviço?",
      example:
      'Ex.: "Desconto de 20%".',
      nomeVariavel: "promocaoOuDesconto",
      campoObrigatorio: false
    },
    {
      question: "Qual é o call-to-action (CTA) que você quer incluir no anúncio?",
      example:
      'Ex.: "Compre agora".',
      nomeVariavel: "callToAction",
      campoObrigatorio: false
    },
    {
      question: "Quais informações você faz questão que estejam no anúncio?",
      example:
      'Ex.: "Data de validade da promoção".',
      nomeVariavel: "informacaoQueFazQuestao",
      campoObrigatorio: false
    },
    {
      question: "Anexe uma imagem do produto, empresa ou serviço (opcional)",
      example:
      'Informação.',
      nomeVariavel: "imagemProduto",
      campoObrigatorio: true
    },
  ];

              {/* <div className={styles.promptsWrapper}>
                {prompts.map((prompt, index) => (
                  <PromptCard
                    key={index}
                    question={prompt.question}
                    example={prompt.example}
                  />
                ))}
              </div> */}


  return (
    <main className={styles.mainContainer}> {/* Container Principal */}



      <div className={styles.contentWrapper}>{/* Quebra em 2 container */}
          {/* Remover classes extra para evitar trabalho */}
          <section className={styles.inputColumn}>
      
              <form className={styles.promptsWrapper}>
                {prompts.map((prompt, index) => (
                  <PromptCard
                    key={index}
                    question={prompt.question}
                    example={prompt.example}
                    nomeVariavel={prompt.nomeVariavel}
                    campoObrigatorio={prompt.campoObrigatorio}
                  />
                ))}
              </form> 
              
              {/* <div className={styles.scrollIndicator}>
                <div className={styles.scrollThumb} />
              </div> */}
            
          </section>

          <section className={styles.previewColumn}>
          
            <div className={styles.previewContainer}>
              
              <div className={styles.previewContent}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0086d7af1c32e4561f99238365d26087016782d5?placeholderIfAbsent=true&apiKey=47fda44c6ea740f9ab46958588fbba02"
                  alt="Preview"
                  className={styles.previewImage}/>
              </div>
            
            </div>
          
          </section>

      </div>
    </main>
  );
};

export default InputDesign;
