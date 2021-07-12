export const postCarrito = async (datos) => {
  const resp = await fetch(`http://localhost:3004/carrito`, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();
  return data;
};

export const getCarrito = async () => {
  let resp = await fetch(`http://localhost:3004/carrito`);
  let data = await resp.json();
  return data;
};

export const getIdCarrito = async (id) => {
  let resp = await fetch(`http://localhost:3004/carrito?idUser=${id}`);
  let data = await resp.json();
  return data;
};

export const deleteCarrito = async (id) => {
  const resp = await fetch(`http://localhost:3004/carrito/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await resp.json();

  return data;
};
