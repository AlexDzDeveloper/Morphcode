import './article.css';
import img from './../../../img/blog/1.jpg';

function Article1() {
	return(
		<article className="article">
			<div className="article__img">
				<img src={img} alt="Interactive tools" />
			</div>
			<div className="article__text">
				<div className="header header__smoll">The power of interactive tools</div>
				<span className="divider"></span>
				<div className="article__descr">Tools augment our problem-solving capacity. We rely on them to expand our minds and provide ease, accuracy, and [...]</div>
			</div>
		</article>
	)
}

export default Article1;