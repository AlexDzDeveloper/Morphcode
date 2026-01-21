import './article.css';
import img from './../../../img/blog/5.jpg';

function Article5() {
	return(
		<article className="article">
			<div className="article__img">
				<img src={img} alt="Interactive tools" />
			</div>
			<div className="article__text">
				<div className="header header__smoll">Location + time: urban data visualization</div>
				<span className="divider"></span>
				<div className="article__descr">The most common ways to visually organize information are based on location and time. In this interactive story, [...]</div>
			</div>
		</article>
	)
}

export default Article5;