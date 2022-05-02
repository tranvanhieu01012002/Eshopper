
import './App.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Slider from './Content/Slider';
import Promotion from './Content/Promotion';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Promotion></Promotion>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
