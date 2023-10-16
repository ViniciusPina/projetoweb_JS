import { } from 'react'
import styles from '../css/footer.module.css'
import { AiFillGithub } from 'react-icons/ai';

function Footer() {
    return (
        <footer>
            <div className={styles.rodapeContainer}>
                <p>SAKURA™ 2023, todos os direitos reservados.</p>
                <ul>
                    <a href="https://github.com/ViniciusPina/projetoweb-main"><AiFillGithub size={30}/></a>
                    
                </ul>
            </div>
        </footer>
    )
}
export default Footer