// Importa as bibliotecas React e useState do pacote React
import React, { useState } from 'react';

// Importa o arquivo de estilos CSS correspondente ao componente
import '../styles/cadastro.css'; // Certifique-se de que o caminho está correto

// Função principal do componente Cadastro
function Cadastro({ onAdicionarCadastro }) {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('');
  const [pagoPor, setPagoPor] = useState('');

  // Função para lidar com a adição de um novo cadastro
  const handleAdicionarCadastro = () => {
    // Cria um novo objeto de cadastro com os valores dos campos
    const novoCadastro = { nome, valor, tipo, pagoPor };

    // Chama a função de callback para adicionar o novo cadastro
    onAdicionarCadastro(novoCadastro);

    // Limpa os campos após adicionar o cadastro
    setNome('');
    setValor('');
    setTipo('');
    setPagoPor('');
  };

  // Componente principal do formulário de cadastro
  return (
    <div className="cadastro-container">
      {/* Título do formulário */}
      <h2>Cadastro</h2>

      {/* Campo de entrada para o nome */}
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      {/* Campo de entrada para o valor */}
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      {/* Dropdown para selecionar o tipo (receita ou despesa) */}
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Selecione o Tipo</option>
        <option value="receita">Receita</option>
        <option value="despesa">Despesa</option>
      </select>

      {/* Dropdown para selecionar o método de pagamento */}
      <select value={pagoPor} onChange={(e) => setPagoPor(e.target.value)}>
        <option value="">Selecione o Método de Pagamento</option>
        <option value="debito">Débito</option>
        <option value="credito">Crédito</option>
        <option value="pix">PIX</option>
      </select>

      {/* Botão para adicionar o cadastro */}
      <button onClick={handleAdicionarCadastro}>Adicionar</button>
    </div>
  );
}

// Exporta o componente Cadastro para uso em outros arquivos
export default Cadastro;