import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { GlobalStyle } from './components/GlobalStyle';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
