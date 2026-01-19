import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Portfolio from './components/portfolio/Portfolio';
import Learn from './components/learn/Learn';
import Blog from './components/blog/Blog';

function App() {

  return (
    <div className="App">
		<Header/>
		<Promo/>
		<Portfolio/>
		<Learn/>
		<Blog/>
    </div>
  );
}

export default App;
