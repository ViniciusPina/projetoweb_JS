import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/cardapio.module.css'
import { Pratos } from '../components/Pratos'

function Pedido() {
    return (
        <div className={styles.containerComidas}>
            <div className={styles.cardapioTitulo}>
                <h1>Cardápio</h1>
                <Link to="/inserirpedido">Fazer um Pedido</Link>
            </div>
            <div className={styles.pedidosFlex}>
                <div className={styles.pedidosGrid}>
                    {renderProduct("/src/assets/img1.jpg", "Image 1", "$10.99")}
                    {renderProduct("/src/assets/imagem2.jpg", "Image 2", "$12.99")}
                    {renderProduct("/src/assets/imagem3.webp", "Image 3", "$9.99")}
                    {renderProduct("/src/assets/peixe-cru.jpg", "Image 4", "$14.99")}
                    {renderProduct("/src/assets/ramen.jpg", "Image 5", "$8.99")}
                    {renderProduct("/src/assets/tofu.jpg", "Image 6", "$11.99")}
                    {renderProduct("/src/assets/file.webp", "Image 7", "$7.99")}
                    {renderProduct("/src/assets/meguro.jpg", "Image 8", "$13.99")}
                </div>
            </div>
            
        </div>
    );
}

function renderProduct(src, alt, price) {
    return (
            <div className={styles.imageContainer}>
                <div>
                    <img src={src} alt={alt} className="image"/>
                </div>
                <span>{price}</span>
            </div>
    )
}

export default Pedido;
