import React from 'react';
import { Link } from 'react-router-dom';
import { Carrinho } from '../components/Carrinho'
import { GrFormEdit as EditarProdutos} from 'react-icons/gr'
import { RiDeleteBin2Fill as ExcluirProdutos} from 'react-icons/ri'
import styles from '../css/produtos.module.css'

function Pedido() {
    return (
        <section className={styles.produtosContainer}>
            <h1>Carrinho</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>OBSERVAÇÃO</th>
                            <th>QUANTIDADE</th>
                            <th>EDITAR / EXCLUIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Pegando as informacoes de todos os elementos do array*/}
                        {Carrinho.map((item, indice) => (
                            <tr key={indice}>
                                <td>{item.nome}</td>
                                <td>{item.desc}</td>
                                <td>{item.valor}</td>
                                <td>
                                    {' '}
                                    {/*Link para chamar a tela de editar produtos */}
                                    <Link to={`/editarpedido/pedido/${item.id}`}>
                                        <EditarProdutos />
                                    </Link>{' '}
                                    | {/*Link para chamar a tela de excluir produtos */}
                                    <Link to={`/excluirpedido/pedido/${item.id}`}>
                                        <ExcluirProdutos />
                                        {/*espaço entre os links '' */}
                                    </Link>{' '}
                                    
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.cadastrar}>
                <Link to="/inserirpedido/" >Deseja adicionar mais um?</Link>
            </div>
        </section>
    );
}

export default Pedido;
