import Papa from "./componentes/Papa";
import Button from 'react-bootstrap/Button';
import logo from './logoimagenes/logo.png'
import Navbar1 from "./componentes/Papa";

const App = () => {
return (

    <div className="box" style={{
      backgroundColor: "greenyellow",
      display:"flex",
      flexDirection:"row"}}>
      <h1 style={{
        marginLeft:"50%",
        marginTop:"5%",
        marginBottom:"10%",
        color:"red"
        }}>AutoShop</h1>
      <Button style={{
        display:"Flex",
        flexDirection:"row",
        marginBottom:"10%",
        marginTop:"6%",
        marginLeft:"1%"
        }}>Carrito</Button>
      <div style={{
        width:"5%", 
        height:"150px", 
        marginLeft:"20%",
        marginTop:"3%",
        display:"flex" ,
        justifyContent: "center",
        position:"absolute"
        }}>
     <img src={logo}/>
    </div >
        <Navbar1 />
    </div>
  );
}


export default App;
