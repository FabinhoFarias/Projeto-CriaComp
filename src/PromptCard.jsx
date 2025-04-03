"use client";

import * as React from "react";
import { useState } from "react";
import styles from "./InputDesign.module.css";

const PromptCard = ({ question, example, nomeVariavel, campoObrigatorio, value, onChange }) => {
  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>
      <textarea
        className={styles.promptExample}
        placeholder={example}
        name={nomeVariavel}
        autoComplete="off"
        maxLength={300}
        minLength={0}
        required={campoObrigatorio}
        rows={4}
        value={value} // Usa o estado do componente pai
        onChange={(e) => onChange(nomeVariavel, e.target.value)} // Envia o nome da variável e o valor corretamente
      ></textarea>
    </article>
  );
};

const PromptCardImg = ({ question, nomeVariavel, campoObrigatorio, onFileChange }) => {
  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>
      <input
        type="file"
        className={styles.customFileUploadInput}
        name={nomeVariavel}
        required={campoObrigatorio}
        autoComplete="off"
        onChange={(e) => onFileChange(nomeVariavel, e.target.files[0])} // Passa o arquivo para o pai
      />
    </article>
  );
};

export { PromptCard, PromptCardImg };
