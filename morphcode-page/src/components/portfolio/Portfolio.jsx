import './portfolio.css';
import img from './../../img/main/2.svg';

function Portfolio() {
	return(
		<div className="portfolio">
			<div className="container">
				<div className="portfolio__row">
					<div className="portfolio__img">
						<img src={img} alt="Portfolio" />
					</div>
					<div className="portfolio__text">
						<div className="header">We research, design, and develop</div>
						<div className="portfolio__descr">Our portfolio ranges from interactive web maps and information graphics to custom software tools for data analysis and visualization.</div>
						<div className="portfolio__link">
							<a href="#!">View Projects</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio;