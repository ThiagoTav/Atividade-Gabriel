// Importa a biblioteca React e a função formatarValor do arquivo utils
import React from 'react';
import { formatarValor } from '../components/utils'; // Atualize o caminho conforme necessário

// Importa o arquivo de estilos CSS correspondente ao componente
import '../styles/receita.css';

// Função principal do componente Receita
function Receita({ receitas, onExcluirReceita }) {
  // Função para calcular o total das receitas
  const calcularTotalReceitas = () => {
    // Utiliza o método reduce para somar os valores das receitas
    const total = receitas.reduce((acc, receita) => acc + parseFloat(receita.valor.replace(',', '.')), 0);
    // Formata o total como moeda brasileira (BRL) e retorna como string
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Componente principal da seção de receitas
  return (
    <div className="containerReceita">
      {/* Título da seção de receitas */}
      <h2>Receitas</h2>

      {/* Exibe o total das receitas formatado como moeda brasileira */}
      <p>Total: {calcularTotalReceitas()}</p>

      {/* Tabela para exibir as receitas */}
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Pago por</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapeia e exibe cada receita na tabela */}
          {receitas.map((receita, index) => (
            <tr key={index}>
              <td>{receita.nome}</td>
              {/* Chama a função formatarValor para exibir o valor da receita formatado */}
              <td>{formatarValor(receita.valor)}</td>
              <td>{receita.tipo}</td>
              <td>{receita.pagoPor}</td>
              <td>
                {/* Botão para excluir a receita com base no índice */}
                <button onClick={() => onExcluirReceita(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Exporta o componente Receita para uso em outros arquivos
export default Receita;
