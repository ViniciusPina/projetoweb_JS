import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from'./routes/Error.jsx'
import EditarPedido from './routes/EditarPedido.jsx'
import EditarProduto from './routes/EditarProduto.jsx'
import ExcluirPedido from './routes/ExcluirPedido.jsx'
import ExcluirProduto from './routes/ExcluirProduto.jsx'
import Home from './routes/Home.jsx'
import InserirPedido from './routes/InserirPedido.jsx'
import InserirProduto from './routes/InserirProduto.jsx'
import Login from './routes/Login.jsx'
import Pedido from './routes/Pedido.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Cardapio from './routes/Cardapio.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children:[
      {path: '/', element: <Home/> },
      { path: '/login', element: <Login/> },
      { path: '/produtos', element: <Produtos/> },
      { path: '/sobre', element: <Sobre/> },
      { path: '/pedido', element: <Pedido/> },
      { path: '/inserirproduto/produto', element: <InserirProduto/> },
      { path: '/editarproduto/produtos/:id', element: <EditarProduto/> },
      { path: '/editarpedido/produtos/:id', element: <EditarPedido/> },
      { path: '/excluirproduto/produtos/:id', element: <ExcluirProduto/> },
      { path: '/excluirpedido/pedido/:id', element: <ExcluirPedido/> },
      { path: '/pedido/produtos/:id', element: <Pedido/> },
      { path: '/inserirpedido', element: <InserirPedido/> },
      { path: '/editarpedido/pedido/:id', element: <InserirPedido/> },
      { path: '/editarpedido', element: <Produtos/> },
      { path: '/cardapio', element: <Cardapio/> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
