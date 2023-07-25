"use client"
import { useEffect, useState } from "react";
import api from "../services/axios";

export default function Home() {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    const fetchPessoas = async () => {
      try {                
        const resposta = await api.get("/pessoa");        
        console.log("resposta aa:",resposta)
        setPessoas(resposta.data);
        
      } catch (error) {
        console.error("Erro na busca", error);
      }
    };
    fetchPessoas();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>{pessoa.nome}</li>
        ))}
      </ul>
    </div>
  );
}
