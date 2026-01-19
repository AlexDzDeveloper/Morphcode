import './learn.css';
import img from './../../img/main/3.svg';

function Learn() {
	return(
<div className="learn">
			<div className="container">
				<div className="learn__row">
					<div className="learn__text">
						<div className="header">Learn with Morphocode</div>
						<div className="portfolio__descr">Morphocode Academy is an online school that covers topics in data visualization, creative coding, and urban informatics.</div>
						<div className="portfolio__link">
							<a href="#!">Start Learning</a>
						</div>
					</div>
					<div className="learn__img">
						<img src={img} alt="Learn" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Learn;