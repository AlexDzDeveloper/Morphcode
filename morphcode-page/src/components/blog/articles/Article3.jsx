import './article.css';
import img from './../../../img/blog/3.jpg';

function Article3() {
	return (
		<article className="article">
			<div className="article__img">
				<img src={img} alt="Interactive tools" />
			</div>
			<div className="article__text">
				<div className="header header__smoll">Urban performance measures</div>
				<span className="divider"></span>
				<div className="article__descr">Urban performance measures help communities make informed decisions and measure results against goals. [...]</div>
			</div>
		</article>
	);
}

export default Article3;