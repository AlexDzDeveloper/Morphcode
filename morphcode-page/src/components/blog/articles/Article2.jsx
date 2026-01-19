import './article.css';
import img from './../../../img/blog/2.jpg';

function Article2() {
	return (
		<article className="article">
			<div className="article__img">
				<img src={img} alt="Interactive tools" />
			</div>
			<div className="article__text">
				<div className="header header__smoll">The making of Morphocode Explorer</div>
				<span className="divider"></span>
				<div className="article__descr">Over the last year, we’ve been working on a new web tool for interactive data exploration [...]</div>
			</div>
		</article>
	);
}

export default Article2;