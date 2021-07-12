import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { getUsuarios } from "../helpers/usuarios";

import FormLogin from "../components/FormLogin";

const Login = (props) => {
  let user = JSON.parse(localStorage.getItem("usuario")) || null;
  const [usuarios, setUsuarios] = useState([]);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    getUsuarios().then((datos) => {
      setUsuarios(datos);
    });
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validarUsuario = (usuario) => {
    let usuarioIndex = usuarios.findIndex((item) => {
      return item.username === usuario.username;
    });

    if (usuarioIndex > -1) {
      if (usuario.password === usuarios[usuarioIndex].password.toString()) {
        let datos = {
          username: usuarios[usuarioIndex].username,
          id: usuarios[usuarioIndex].id,
        };
        localStorage.setItem("usuario", JSON.stringify(datos));
        props.history.replace("/");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validarUsuario(formValues);
  };

  if (user) {
    return (
      <>
        <div className="container">
          <div className="row mt-5">
            <div className="col col-md-6 offset-md-3 ">
              <div className="alert alert-success" role="alert">
                Usuario logueado
              </div>
              <div className="d-grid gap-1">
                <Link to="/" className="btn btn-info">
                  Ir a Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col col-md-4 offset-md-4">
          <div className="card">
            <h5 className="card-header">Inicio de sesión</h5>
            <div className="card-body">
              <FormLogin
                formValues={formValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
