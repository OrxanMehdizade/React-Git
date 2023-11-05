import logo from './logo.svg';
import './App.css';
import GoodsComponent from "./GoodsComponent";
import goodsComponent from "./GoodsComponent";

function App() {
  return (
      <div className={"goodsComponent"}>
          <GoodsComponent
              Name="Bizon"
              price={1.20}
              description="energy drink"
          />
          <GoodsComponent
              Name="natural cappy"
              price={2.30}
              description="multivitamin"
          />
          <GoodsComponent
              Name="Coca Cola"
              price={2.20}
              description="Harmful"
          />
      </div>

  );
}

export default App;
