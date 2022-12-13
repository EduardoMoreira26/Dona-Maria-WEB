import styled from "styled-components";
import Button from "../../components/Button/Button";
import NoData from "../../components/NoData/NoData";
import { useJobForms } from "../../context/forms.context";
import { generateFile } from "../../utils/generateFile";

export default function Table() {
  const { forms } = useJobForms();

  function renderTable() {
    return <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Título</th>
          <th>Salário</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {forms.slice(0).reverse().map((form) => {
          const dateForm = new Date(form.date).toLocaleDateString();
          return (
            <tr key={form.id} className="bgColor">
              <td className="title">{dateForm}</td>
              <td>
                {form.title}
              </td>
              <td>
                {'R$' + form.wage}
              </td>
              <td><Button onClick={() => generateFile(form)} variant="primary" label="exportar" /></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  }

  return (
    <TableContainer>
      {
        forms.length === 0 ?
          <NoData /> :
          renderTable()
      }
    </TableContainer>
  )
}

const TableContainer = styled.section`
  margin-top: 10px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #f1f1f1;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
