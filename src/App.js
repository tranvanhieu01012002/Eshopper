
import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Slider from './Content/Slider';
import Promotion from './Content/Promotion';
import Footer from './Footer/Footer';
import {Product} from './Content/Product';
import Contact from './Content/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Promotion></Promotion>
      <Content ></Content>
      <Product click={0}></Product>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
