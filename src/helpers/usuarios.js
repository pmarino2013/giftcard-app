export const getUsuarios = async () => {
  const resp = await fetch("http://localhost:3004/usuarios");
  const data = await resp.json();
  return data;
};
