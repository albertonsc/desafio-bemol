import { useState, useEffect } from "react";
import http from "../http";
import { Link } from "react-router-dom";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchAllUsuarios();
  }, []);

  const fetchAllUsuarios = () => {
    http.get("/usuarios").then((res) => {
      setUsuarios(res.data);
    });
  };

  const deleteUser = (id) => {
    http.delete("/usuarios/"+id).then((res) => {
      fetchAllUsuarios();
    });
  };

  return (
    <div>
      <h2>Lista de Usuários...</h2>
      <table className="table">



        <thead>
          <tr>
            <td>Dados do Usuário</td>
            <td>Ação</td>
          </tr>
        </thead>


        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.id}>
                <td>
                    <ul>
                        <li>Nº: {++index}</li>
                        <li>Nome: {usuario.nome}</li>
                        <li>Email: {usuario.email}</li>
                        <li>CPF: {usuario.cpf}</li>
                        <li>Data de Nascimento: {usuario.nascimento}</li>
                        <li>Telefone: {usuario.telefone}</li>
                        <li>CEP: {usuario.cep}</li>
                        <li>Estado: {usuario.uf}</li>
                        <li>Cidade: {usuario.localidade}</li>
                        <li>Bairro: {usuario.bairro}</li>
                    </ul>
                </td>
              <td>
                <Link
                  className="btn btn-info"
                  to={{ pathname: "/edit/"+usuario.id }}
                >
                  Editar
                </Link>
                &nbsp;
                <Link
                  className="btn btn-primary"
                  to={{ pathname: "/list/"+usuario.id }}
                >
                  Ver
                </Link>
                &nbsp;
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(usuario.id);
                  }}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
