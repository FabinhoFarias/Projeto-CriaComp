"use client";

import * as React from "react";
import styles from "./InputDesign.module.css";
import PromptCard from "./PromptCard";

const InputDesign = () => {
  const prompts = [
    {
      question: "Qual é o nome do produto ou serviço?",
      example:
        'Exemplo: "Tênis Running X100" ou "Serviço de Design Gráfico Personalizado".',
    },
    {
      question:
        "Qual é a principal característica ou benefício do produto/serviço?",
      example:
        'Exemplo: "Super confortável para longas distâncias" ou "Aumenta a produtividade da sua equipe em 30%".',
    },
    {
      question: "Quais problemas o seu produto/serviço resolve?",
      example:
        'Exemplo: "Problema de desconforto durante corridas longas" ou "Falta de tempo para desenvolver materiais gráficos de qualidade".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
    },
    {
      question: "Qual é o público-alvo do seu produto/serviço?",
      example:
        'Exemplo: "Corredores amadores e profissionais de 20 a 40 anos" ou "Pequenas empresas em busca de soluções de design".',
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
            <div className={styles.promptsContainer}>
             
              <div className={styles.promptsWrapper}>
                {prompts.map((prompt, index) => (
                  <PromptCard
                    key={index}
                    question={prompt.question}
                    example={prompt.example}
                  />
                ))}
              </div> 
              
              <div className={styles.scrollIndicator}>
                <div className={styles.scrollThumb} />
              </div>
            
            </div>
          </section>

          <section className={styles.previewColumn}>
          
            <div className={styles.previewContainer}>
              
              <div className={styles.previewContent}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0086d7af1c32e4561f99238365d26087016782d5?placeholderIfAbsent=true&apiKey=47fda44c6ea740f9ab46958588fbba02"
                  alt="Preview"
                  className={styles.previewImage}  />
              
              </div>
            
            </div>
          
          </section>

      </div>
    </main>
  );
};

export default InputDesign;
