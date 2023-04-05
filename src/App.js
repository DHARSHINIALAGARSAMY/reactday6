import logo from './logo.svg';
import './App.css';
import Productlist from './components/ProductList';

function App() {
  return (
    <div className="App">
       <Productlist products={[{no:"1",name:"RE HIMALAYAN BIKE", price:"1,50,000", 
       imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwF0CYRaF8DfxraYcQdlCAPcfugtPEiFOY1w&usqp=CAU"},
        {no:"2",name:"LAMBORGHINI", price:"4,00,00,000", 
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHPJ-5G1mLqaWTfvWY26bF4pY3U3beFP5YQ&usqp=CAU"}]}/>
    </div>
  );
}

export default App;
