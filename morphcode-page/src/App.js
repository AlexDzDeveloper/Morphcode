import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Portfolio from './components/portfolio/Portfolio';
import Learn from './components/learn/Learn';
import Blog from './components/blog/Blog';
import Subscribe from './components/subscribe/Subscribe';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
		<Header/>
		<Promo/>
		<Portfolio/>
		<Learn/>
		<Blog/>
		<Subscribe/>
		<Footer/>
    </div>
  );
}

export default App;
