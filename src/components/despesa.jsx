// Importa a biblioteca React e a função formatarValor do arquivo utils
import React from 'react';
import { formatarValor } from '../components/utils'; // Atualize o caminho conforme necessário

// Importa o arquivo de estilos CSS correspondente ao componente
import '../styles/despesa.css';

// Função principal do componente Despesa
function Despesa({ despesas, onExcluirDespesa }) {
  // Função para calcular o total das despesas
  const calcularTotalDespesas = () => {
    // Utiliza o método reduce para somar os valores das despesas
    const total = despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valor.replace(',', '.')), 0);
    // Formata o total como moeda brasileira (BRL) e retorna como string
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Componente principal da seção de despesas
  return (
    <div className="despesa-container">
      {/* Título da seção de despesas */}
      <h2>Despesas</h2>

      {/* Exibe o total das despesas formatado como moeda brasileira */}
      <p>Total: {calcularTotalDespesas()}</p>

      {/* Tabela para exibir as despesas */}
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
          {/* Mapeia e exibe cada despesa na tabela */}
          {despesas.map((despesa, index) => (
            <tr key={index}>
              <td>{despesa.nome}</td>
              {/* Chama a função formatarValor para exibir o valor da despesa formatado */}
              <td>{formatarValor(despesa.valor)}</td>
              <td>{despesa.tipo}</td>
              <td>{despesa.pagoPor}</td>
              <td>
                {/* Botão para excluir a despesa com base no índice */}
                <button onClick={() => onExcluirDespesa(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Exporta o componente Despesa para uso em outros arquivos
export default Despesa;