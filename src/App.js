import Navbar1 from "./componentes/Papa";
import Header from "./componentes/Header";
import ItemListContainer from "./componentes/ItemListContainer";

const App = () => {
  return (
    <>
      <div className="box" style={{
        backgroundColor: "greenyellow",
      }}>
        <Header />
        <Navbar1 />
      </div>
      <ItemListContainer />
    </>
  );
}

export default App;

