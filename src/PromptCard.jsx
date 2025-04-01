"use client";

import * as React from "react";
import styles from "./InputDesign.module.css";

const PromptCard = ({ question, example }) => {
  return (
    <article className={styles.promptCard}>
      <h2 className={styles.promptQuestion}>{question}</h2>
      <p className={styles.promptExample}>{example}</p>
    </article>
  );
};

export default PromptCard;
