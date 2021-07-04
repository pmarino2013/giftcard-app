import React from "react";

const FormLogin = ({ formValues, handleChange, handleSubmit }) => {
  const { username, password } = formValues;
  return (
    <form onSubmit={handleSubmit}>
      <div className="Form-group">
        <label>Usuario</label>
        <input
          className="form-control"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="Form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-warning mt-3">Entrar</button>
      </div>
    </form>
  );
};

export default FormLogin;
