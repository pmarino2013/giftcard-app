export const getUsuarios = async () => {
  const resp = await fetch("http://localhost:3004/usuarios");
  const data = await resp.json();
  return data;
};

export const getUsuario = async (id) => {
  const resp = await fetch(`http://localhost:3004/usuarios/${id}`);
  const data = await resp.json();

  return data;
};

// export const postCarrito = async (id, datos) => {
//   const resp = await fetch(`http://localhost:3004/usuarios/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(datos),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   const data = await resp.json();
//   return data;
// };
