import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Carrinho } from '../components/Carrinho';

function EditarPedido() {

    const { id } = useParams();
    const navigate = useNavigate();

    const recPedidoListaById = Carrinho.filter((item) => item.id == id);
    if (recPedidoListaById.length === 0) {
        
        navigate('/pedido');
        return null;
    }

    const produto = recPedidoListaById[0];

    const [pedidoAtualizado, setPedidoAtualizado] = useState({ ...produto });

    const handleSubmit = (event) => {
        event.preventDefault();
        let indice;
        Carrinho.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });
        Carrinho.splice(indice, 1, pedidoAtualizado);
        navigate('/pedido');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPedidoAtualizado({ ...pedidoAtualizado, [name]: value });
    };

    return (
        <section>
            <h1>EDITAR PEDIDO</h1>
            {/* Chamando a função handleSubmit dentro do form */}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>PEDIDO SELECIONADO</legend>
                    <div>
                        <input
                            type="hidden"
                            name="id"
                            value={pedidoAtualizado.id}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idNome">Nome do pedido:</label>
                        <input
                            type="text"
                            name="nome"
                            id="idNome"
                            value={pedidoAtualizado.nome}
                            /* Chamando a função handleChange dentro do input */
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição do pedido:</label>
                        <input
                            type="text"
                            name="desc"
                            id="idDesc"
                            value={pedidoAtualizado.desc}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="idValor">Valor do pedido:</label>
                        <input
                            type="text"
                            name="valor"
                            id="idValor"
                            value={pedidoAtualizado.valor}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">EDITAR</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default EditarPedido;
