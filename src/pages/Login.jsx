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
      if (usuario.password == usuarios[usuarioIndex].password) {
        localStorage.setItem("usuario", JSON.stringify(usuario.username));
        props.history.replace("/");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validarUsuario(formValues);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col col-md-4 offset-md-4">
          <div className="card">
            <h5 className="card-header">Inicio de sesión</h5>
            <div className="card-body">
              {user ? (
                <>
                  <div className="alert alert-success" role="alert">
                    Usuario logueado
                  </div>
                  <Link to="/" className="nav-link">
                    Ir a Home
                  </Link>
                </>
              ) : (
                <FormLogin
                  formValues={formValues}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
