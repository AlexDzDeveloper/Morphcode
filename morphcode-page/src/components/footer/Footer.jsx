import './footer.css';
import fb from './../../img/social/facebook.svg';
import li from './../../img/social/LI.svg';
import tw from './../../img/social/twitter.svg';

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__row">
					<ul>
						<span>Academy</span>
						<br />
						<br />
						<li><a href="#!">Start Learning</a></li>
						<li><a href="#!">Mapping Urban Data</a></li>
						<li><a href="#!">Getting started with Rabbit</a></li>
					</ul>
					<ul>
						<span>Works</span>
						<br />
						<br />
						<li><a href="#!">Urban layers</a></li>
						<li><a href="#!">Rabbit</a></li>
						<li><a href="#!">The heritage of Sofia</a></li>
						<li><a href="#!">The pulse of Melbourne</a></li>
					</ul>
					<ul>
						<span>From the Blog</span>
						<br />
						<br />
						<li><a href="#!">The use of color in maps</a></li>
						<li><a href="#!">Global trends of urbanization</a></li>
						<li><a href="#!">Small multiples</a></li>
						<li><a href="#!">Morphocode in the best american infographics</a></li>
						<li><a href="#!">Inspiration</a></li>
						<li><a href="#!">Featured stories</a></li>
					</ul>
					<ul>
						<span>Get to know us</span>
						<br />
						<br />
						<li><a href="#!">About</a></li>
						<li><a href="#!">Contact us</a></li>
						<div className="divider"></div>
						<div className="links">
							<a href="#!">
								<img src={fb} alt="facebook" />
								</a>
								<a href="#!">
									<img src={tw} alt="twitter" />
								</a>
								<a href="#!">
									<img src={li} alt="LinkedIn" />
								</a>
						</div>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;