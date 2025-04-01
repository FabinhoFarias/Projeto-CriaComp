"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./InputDesign.module.css";

const PromptCard = ({ question, example }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  // Ajusta a altura automaticamente ao digitar
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>
      <div className={styles.inputWrapper}>
        {/* Simula o placeholder */}
        {!value && <div className={styles.fakePlaceholder}>{example}</div>}
        <input
          ref={inputRef}
          className={styles.promptExample}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
      </div>
    </article>
  );
};

export default PromptCard;
