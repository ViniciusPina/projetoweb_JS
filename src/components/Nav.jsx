import {} from 'react';
import styles from '../css/nav.module.css'
import carrinho from '../assets/cart.svg'
import { Link,useNavigate } from 'react-router-dom';
import sakura from '../assets/sakura.svg'

function Nav() {
  const navigate = useNavigate();
  const handleLogout = async ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("SAINDO DA SESSÃO");
    navigate('/');

  }

  return (

    <>
      <header>
        <nav>
          <div className={styles.links}>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/sobre">SOBRE</Link>
              </li>
              <li>
                <Link to="/cardapio">CARDÁPIO</Link>
              </li>
              <li>
                <Link to="/pedido"><img src={carrinho} alt="" /></Link>
              </li>
            </ul>
          </div>
          <div className={styles.login}>
            <a href="/login">LOGIN</a>
            <button onClick={handleLogout}>LOGOUT</button>
            <img src={sakura} alt="" />
          </div>
        </nav>
      </header>
    </>
  );
}
export default Nav;
