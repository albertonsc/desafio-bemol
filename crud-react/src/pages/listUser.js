import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Http from "../http";

export default function List() {
  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = () => {
    Http.get("/usuarios/" + id + "/edit").then((res) => {
      setInputs({
        nome: res.data.nome,
        email: res.data.email,
        senha: res.data.senha,
        cpf: res.data.cpf,
        nascimento: res.data.nascimento,
        telefone: res.data.telefone,
        cep: res.data.cep,
        uf: res.data.uf,
        localidade: res.data.localidade,
        bairro: res.data.bairro,
      });
    });
  };

  return (
    <div>
      <h2>Dados do Usuário</h2>
      <div className="row">
        <div className="col-sm-6">
          <div className="card p-4">
            <h4>Name</h4>
            <p>{inputs.nome}</p>
            <h4>Email</h4>
            <p>{inputs.email}</p>
            <h4>CPF</h4>
            <p>{inputs.cpf}</p>
            <h4>Data de Nascimento</h4>
            <p>{inputs.nascimento}</p>
            <h4>Telefone</h4>
            <p>{inputs.telefone}</p>
            <h4>CEP</h4>
            <p>{inputs.cep}</p>
            <h4>Estado</h4>
            <p>{inputs.uf}</p>
            <h4>Cidade</h4>
            <p>{inputs.localidade}</p>
            <h4>Bairro</h4>
            <p>{inputs.bairro}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
