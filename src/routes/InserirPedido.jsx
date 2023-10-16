import { useState } from 'react';
import { Carrinho } from '../components/Carrinho';
import { Pratos } from '../components/Pratos';
import { useNavigate } from 'react-router-dom';
import '../css/inserirproduto.css'

function InserirPedido() {
    const navigate = useNavigate();

    let novoId = Carrinho[Carrinho.length - 1].id + 1;

    const [pedido, setProduto] = useState({
        id: novoId,
        nome: '',
        obs: '',
        quantidade: '',
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();
        Carrinho.push(pedido);
        navigate('/pedido');
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setProduto({ ...pedido, [name]: value });
    };

    return (
        <section className='asd'>
            <div>
                <h1>Carrinho</h1>
                {/*chando a função handleSubmit dentro do form */}
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Escolha o seu pedido</legend>
                        <p>
                            <label htmlFor="idNome">{Pratos[0].nome}</label>
                            <input
                                type="radio"
                                name="nome"
                                id="idNome"

                                value={Pratos[0].nome}
                                /*chamando a função handleChange dentro do input */
                                onChange={handleChange}
                            />
                            <label htmlFor="idNome">{Pratos[1].nome}</label>
                            <input
                                type="radio"
                                name="nome"
                                id="idNome"

                                value={Pratos[1].nome}
                                /*chamando a função handleChange dentro do input */
                                onChange={handleChange}
                            />
                            <label htmlFor="idNome">{Pratos[2].nome}</label>
                            <input
                                type="radio"
                                name="nome"
                                id="idNome"

                                value={Pratos[2].nome}
                                /*chamando a função handleChange dentro do input */
                                onChange={handleChange}
                            />
                            <label htmlFor="idNome">{Pratos[3].nome}</label>
                            <input
                                type="radio"
                                name="nome"
                                id="idNome"

                                value={Pratos[3].nome}
                                /*chamando a função handleChange dentro do input */
                                onChange={handleChange}
                            />
                            <label htmlFor="idNome">{Pratos[4].nome}</label>
                            <input
                                type="radio"
                                name="nome"
                                id="idNome"

                                value={Pratos[4].nome}
                                /*chamando a função handleChange dentro do input */
                                onChange={handleChange}
                            />
                            
                            
                        </p>
                        <p>
                            <label htmlFor="idDesc">Observação:</label>
                            <input
                                type="text"
                                name="desc"
                                id="idDesc"

                                value={Carrinho.obs}
                                /*chamando a função handleChange dentro do input */
                                onChange={handleChange}
                            />
                        </p>
                        <p>
                            <label htmlFor="idValor">Quantidade:</label>
                            <input
                                type="text"
                                name="valor"
                                id="idValor"

                                value={Carrinho.quantidade}
                                /*chamando a função handleChange dentro do input */
                                onChange={handleChange}
                            />
                        </p>
                        <p>
                            <button type="submit">
                                ANOTAR
                            </button>
                        </p>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
export default InserirPedido;