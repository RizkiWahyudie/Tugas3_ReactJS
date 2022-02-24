import './App.css';
import Footer from './Page/Footer';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';
import Header from './Page/Header';

function App() {
  return (
    <div>
      <Header />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
