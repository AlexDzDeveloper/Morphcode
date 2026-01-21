import './subscribe.css';

function Subscribe() {
	return (
		<div className="subscribe">
			<div className="container">
				<div className="subscribe__row">
					<div className="subscribe__text">
						<div className="header">Start Learning</div>
						<div className="subscribe__descr">Get the latest articles, tutorials, and free resources from Morphocode</div>
					</div>
					<div className="subscribe__form">
						<input type="email" placeholder="Enter your email"/>
						<button>Subscribe</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Subscribe;