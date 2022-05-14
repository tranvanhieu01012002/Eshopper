
import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Slider from './Content/Slider';
import Promotion from './Content/Promotion';
import Footer from './Footer/Footer';
import {Product} from './Content/Product';
import Contact from './Content/Contact';
import FormArea from './Form/FormArea';

function App() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Promotion></Promotion>
      <Content ></Content>
      <Product></Product>
      <FormArea></FormArea>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
