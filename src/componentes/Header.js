import Button from 'react-bootstrap/Button';
import logo from '../logoimagenes/logo.png';

const Header = () => {
    return(
        <div style={{ position: 'relative' }}>
        <div style={{
          height: "150px",
          display: "flex",
          justifyContent: "center",
        }}>
          <img src={logo} />
        </div>
        <Button style={{
          position: "absolute",
          top: 10,
          right: 10
        }}>Carrito</Button>
      </div>
    )
}

export default Header