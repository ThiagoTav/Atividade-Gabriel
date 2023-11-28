// Importa as bibliotecas React e useState do pacote React
import React, { useState } from 'react';

// Importa os componentes personalizados Cadastro, Receita e Despesa
import Cadastro from './components/cadastro';
import Receita from './components/receita';
import Despesa from './components/despesa';

// Função principal do componente App
function App() {
  // Estados para armazenar os cadastros, receitas e despesas
  const [cadastros, setCadastros] = useState([]);
  const [receitas, setReceitas] = useState([]);
  const [despesas, setDespesas] = useState([]);

  // Função para adicionar um novo cadastro
  const adicionarCadastro = (novoCadastro) => {
    // Atualiza o estado dos cadastros com um novo cadastro
    setCadastros([...cadastros, novoCadastro]);

    // Verifica o tipo do cadastro e atualiza o estado correspondente (receitas ou despesas)
    if (novoCadastro.tipo === 'receita') {
      setReceitas([...receitas, novoCadastro]);
    } else if (novoCadastro.tipo === 'despesa') {
      setDespesas([...despesas, novoCadastro]);
    }
  };

  // Função para excluir uma receita com base no índice
  const excluirReceita = (index) => {
    // Cria uma cópia das receitas e remove a receita no índice especificado
    const novasReceitas = [...receitas];
    novasReceitas.splice(index, 1);

    // Atualiza o estado das receitas com a nova lista
    setReceitas(novasReceitas);
  };

  // Função para excluir uma despesa com base no índice
  const excluirDespesa = (index) => {
    // Cria uma cópia das despesas e remove a despesa no índice especificado
    const novasDespesas = [...despesas];
    novasDespesas.splice(index, 1);

    // Atualiza o estado das despesas com a nova lista
    setDespesas(novasDespesas);
  };

  // Componente principal do aplicativo
  return (
    <div>
      {/* Título do aplicativo */}
      <h1 className='titulo'>Atividade Gabriel   27/11/2023</h1>

      {/* Container principal que organiza os componentes na página */}
      <div className="page-container">
        {/* Componente de Cadastro responsável por adicionar novos registros */}
        <Cadastro onAdicionarCadastro={adicionarCadastro} />

        {/* Componente de Receita responsável por exibir e excluir receitas */}
        <Receita receitas={receitas} onExcluirReceita={excluirReceita} />

        {/* Componente de Despesa responsável por exibir e excluir despesas */}
        <Despesa despesas={despesas} onExcluirDespesa={excluirDespesa} />
      </div>
    </div>
  );
}

// Exporta o componente App para uso em outros arquivos
export default App;