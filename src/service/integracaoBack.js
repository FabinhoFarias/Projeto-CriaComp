import axios from "axios";

// Criação da instância do axios com configuração base
const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Serviço para gerar anúncio: envia somente os três campos esperados
export const gerarAnuncio = async (dados) => {
  try {
    // Extraindo apen as os campos necessários:
    const payload = {
      nome_produto: dados.nome_produto,
      caracteristica: dados.caracteristica,
      problemas: dados.problemas,
    };
    
    console.log("Enviando payload para API:", payload); // Log para depuração
    
    const response = await api.post("/gerar-anuncio", payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao gerar anúncio:", error);
    
    // Modo de desenvolvimento: simula resposta para testes
    if (process.env.NODE_ENV === "development") {
      console.log("Usando modo de desenvolvimento para gerar anúncio");
      return {
        id: "12345",
        mensagem: "Anúncio gerado com sucesso (modo dev)",
        dadosEnviados: payload,
      };
    }
    
    throw error;
  }
};

export default api;
