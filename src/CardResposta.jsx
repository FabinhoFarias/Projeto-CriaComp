"use client";

import * as React from "react";
import { useState } from "react";
import styles from "./InputDesign.module.css";

const CardResposta = ({ Texto }) => {
    return (
      <>
        <h2 className={styles.promptQuestion}>Legenda:</h2>
        <p>{Texto}</p>
      </>
    );
  };
  
export { CardResposta };