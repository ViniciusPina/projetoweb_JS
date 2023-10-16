import { React, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Carrinho } from '../components/Carrinho';

function ExcluirPedido() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recPedidoListaById = Carrinho.filter((item) => item.id == id);
    const pedido = recPedidoListaById[0];

    const handleExclude = (event) => {
        event.preventDefault();
        let indice;
        Carrinho.forEach((item, index) => {
            if (item.id == pedido.id) {
                indice = index;
            }
        });
        Carrinho.splice(indice, 1);
        navigate('/pedido');
    };
    

    return (
        <section>
            <h1>Excluir Produto</h1>
            <div>
                <p>Nome: {pedido.nome}</p>
                <p>Descrição: {pedido.desc}</p>
                <p>Valor: {pedido.valor}</p>
            </div>
            <div>
                <button onClick={handleExclude}>
                    EXCLUIR
                </button>
                <button onClick={() => navigate('/pedido')}>
                    CANCELAR
                </button>
            </div>
        </section>
    );
}


export default ExcluirPedido;
