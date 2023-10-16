import { React, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Pratos } from '../components/Pratos';

function ExcluirProduto() {
    const { id } = useParams();
    const navigate = useNavigate();

    const recProdutoListaById = Pratos.filter((item) => item.id == id);
    const produto = recProdutoListaById[0];

    const handleExclude = (event) => {
        event.preventDefault();
        let indice;
        Pratos.forEach((item, index) => {
            if (item.id == produto.id) {
                indice = index;
            }
        });
        Pratos.splice(indice, 1);
        navigate('/produtos');
    };
    

    return (
        <section>
            <h1>Excluir Produto</h1>
            <div>
                <p>Nome: {produto.nome}</p>
                <p>Descrição: {produto.desc}</p>
                <p>Valor: {produto.valor}</p>
            </div>
            <div>
                <button onClick={handleExclude}>
                    EXCLUIR
                </button>
                <button onClick={() => navigate('/produtos')}>
                    CANCELAR
                </button>
            </div>
        </section>
    );
}


export default ExcluirProduto;
