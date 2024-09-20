import { useContext, useEffect, useState } from "react";

import { Card } from "antd";

const Profile = () => {
  return (
    <>
      <h1>PROFILE</h1>
      {/* <h1>Profile {user.name}</h1>

      {user.Pedidos && user.Pedidos.length > 0 ? (
        user.Pedidos.map((pedido) => (
          <Card key={pedido.id}>
            <h2>Pedido {pedido.id}</h2>
            <p>Fecha {new Date(pedido.createdAt).toLocaleDateString()}</p>

            <h3>Productos:</h3>
            <ul>
              {pedido.Productos && pedido.Productos.length > 0 ? (
                pedido.Productos.map((producto) => (
                  <li key={producto.id}>
                    {producto.name} - ${producto.price}
                  </li>
                ))
              ) : (
                <li>No hay productos en este pedido</li>
              )}
            </ul>
          </Card>
        ))
      ) : (
        <p>No tienes pedidos</p>
      )} */}
    </>
  );
};

export default Profile;
