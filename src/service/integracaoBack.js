import axios from "axios";

// Criação da instância do axios com configuração base
const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Serviço para gerar anúncio
export const gerarAnuncio = async (dados) => {
  try {
    // Enviar apenas os três campos esperados pelo backend
    const payload = {
      nome_produto: dados.nomeProduto,
      caracteristica: dados.principalCaracteristica,
      problemas: dados.problemaQueResolve,
    };
    // inserir dados corretos e ajustar nome da variavel
    
    const response = await api.post("/gerar-anuncio", payload);
    return response.data;
  } catch (error) {
    console.error("Erro ao gerar anúncio:", error);

    // Modo de desenvolvimento - simula resposta para testes
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
