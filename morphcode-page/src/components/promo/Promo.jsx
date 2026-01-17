import './promo.css';
import img from './../../img/main/1.svg';

function Promo() {
	return(
		<div className="promo">
			<div className="container">
				<div className="promo__row">
					<div className="promo__text">
						<div className="header header__big">Exploring cities through data analysis and visualization</div>
						<div className="promo__descr">Morphocode is a design and development firm that uses data to visualize urban dynamics and provide location insights. Our team brings together expertise across architecture, urban planning, and software engineering.</div>
					</div>
					<div className="promo__img">
						<img src={img} alt="Promo" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Promo;