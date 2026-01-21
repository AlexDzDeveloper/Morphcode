import './article.css';
import img from './../../../img/blog/4.jpg';

function Article4() {
	return(
		<article className="article">
			<div className="article__img">
				<img src={img} alt="Interactive tools" />
			</div>
			<div className="article__text">
				<div className="header header__smoll">The 5-minute walk</div>
				<span className="divider"></span>
				<div className="article__descr">The five-minute walk, also known as the “pedestrian shed” is considered to be the distance people are willing [...]</div>
			</div>
		</article>
	)
}

export default Article4;