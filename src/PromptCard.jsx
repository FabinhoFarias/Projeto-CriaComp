"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./InputDesign.module.css";

const PromptCard = ({ question, example, nomeVariavel, campoObrigatorio }) => {
  useState
  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>
      <input
        className={styles.promptExample}
        type="text"
        placeholder={example}
        name={nomeVariavel}
        autoComplete="off"              // Desativa a sugestão automática
        maxLength={200}                 // Limite máximo de caracteres
        minLength={0}                   // Limite mínimo de caracteres
        required={campoObrigatorio}     // Campo obrigatório
        disabled={false}                // Habilitado, troque para true para desabilitar
        readOnly={false}                // Permite edição, defina como true para tornar somente leitura
        autoFocus                       // Foca automaticamente quando o componente é renderizado
        
        onChange={
          (e) => setaVlue(e.target.value)}
          />
    </article>
  );
};
const PromptCardImg = ({ question, example,  nomeVariavel, campoObrigatorio }) => {


  // Ajusta a altura automaticamente ao digitar
  // useEffect(() => {
  //   if (inputRef.current) {
  //     inputRef.current.style.height = "auto";
  //     inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
  //   }
  // }, [value]);

  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>
      <input
        className={styles.promptExample}
        type="text"
        placeholder={example}
      />
    </article>
  );
};

export { PromptCard, PromptCardImg };
