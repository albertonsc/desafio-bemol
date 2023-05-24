import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Http from "../http";

export default function EditUsuario() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [check, setCheck] = useState(false);
  const { id } = useParams();

  //Confere se o checkbox maior de 18 está marcado;
  const handleChecked = (e) => {
    setCheck(e.target.checked);
  };

  //Realiza a requisição da API CEP
  async function fetchZipCode(value) {
    if (value.length === 8) {
      const res = await axios.get(`https://viacep.com.br/ws/${value}/json`);
      setInputs({ ...inputs, ...res.data });
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    fetchUsuario();
  }, []);

  const fetchUsuario = () => {
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

  const EditeUser = () => {
    Http.put("/usuarios/"+id ,inputs).then((res) => {
      navigate("/");
      console.log("Sucess!!");
    });
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Editar Usuário</h4>
              <p>Aviso: Todos os campos devem ser preenchidos corretamente</p>
              <hr />
              <div className="form-wrapper">
                <Form>
                  <Row>
                    <Col>
                      <Form.Group controlId="Name">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                          onBluer=""
                          type="text"
                          placeholder="Digite seu nome"
                          name="nome"
                          value={inputs.nome}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Email">
                        <Form.Label type="email">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Digite seu email"
                          name="email"
                          value={inputs.email}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Senha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Digite sua senha"
                          name="senha"
                          value={inputs.senha}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="000.000.000-00"
                          name="cpf"
                          value={inputs.cpf}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Nascimento">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Digite sua data de nascimento"
                          name="nascimento"
                          value={inputs.nascimento}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Telefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="(DDD) 00000-0000"
                          name="telefone"
                          value={inputs.telefone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="Cep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control
                          type="number"
                          name="cep"
                          placeholder={inputs.cep}
                          onChange={(event) => fetchZipCode(event.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {inputs.uf !== "AM" && (
                    <p className="text-danger">CEP deve ser do amazonas.</p>
                  )}
                  <Row>
                    <Col>
                      <Form.Group controlId="Estado">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                          type="text"
                          name="estado"
                          value={inputs.uf}
                          onChange={(value) => handleChange(value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Cidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                          type="text"
                          name="cidade"
                          value={inputs.localidade}
                          onChange={(e) => handleChange(e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group controlId="Bairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                          type="text"
                          name="bairro"
                          value={inputs.bairro}
                          onChange={(e) => handleChange(e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <button
                    type="button"
                    onClick={EditeUser}
                    disabled={inputs.uf !== "AM"} //Condições que habilitam o botão criar usuário
                    className="btn btn-info mt-2"
                  >
                    Editar Usuário
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
