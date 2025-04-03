"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./InputDesign.module.css";

const PromptCardTESTE = ({ question, nomeVariavel, campoObrigatorio }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>
      <input
        type="file"
        className={styles.customFileUpload}
        name={nomeVariavel}
        required={campoObrigatorio}
        autoComplete="off"
        disabled={false}
        readOnly={false}
        autoFocus
        onChange={(e) => setSelectedFile(e.target.files[0])} // Salva o arquivo selecionado
      />
      {selectedFile && <p>Arquivo selecionado: {selectedFile.name}</p>}
    </article>
  );
};

const PromptCard = ({ question, example, nomeVariavel, campoObrigatorio }) => {
  const [value, setValue] = useState("");

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
        disabled={false}
        readOnly={false}
        autoFocus
        rows={4}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </article>
  );
};


const PromptCardImg = ({ question, nomeVariavel, campoObrigatorio }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>

      {/* Botão customizado */}
      {/* <label htmlFor="file-upload" className={styles.customFileUpload}>
        Anexar Arquivos
      </label> */}
      <input
        id="file-upload"
        type="file"
        className={styles.customFileUploadInput}
        name={nomeVariavel}
        required={campoObrigatorio}
        autoComplete="off"
        disabled={false}
        readOnly={false}
        autoFocus
        onChange={handleFileChange}
      />

      {selectedFile && <p>Arquivo selecionado: {selectedFile.name}</p>}
    </article>
  );
};

export { PromptCard, PromptCardImg };
