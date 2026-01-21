import './article.css';
import img from './../../../img/blog/6.jpg';

function Article6() {
	return(
		<article className="article">
			<div className="article__img">
				<img src={img} alt="Interactive tools" />
			</div>
			<div className="article__text">
				<div className="header header__smoll">Morphocode in the Best American Infographics</div>
				<span className="divider"></span>
				<div className="article__descr">We are extremely happy to be included in The Best American Infographics. The third volume in the series [...]</div>
			</div>
		</article>
	)
}

export default Article6;