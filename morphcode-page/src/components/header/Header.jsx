import './header.css';
import logo from './../../img/main/logo.svg';

function Header() {
	return(
		<header className='header'>
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logo} alt="Logo" />
					</div>
					<div className="header__nav">
						<ul>
							<li>Academy</li>
							<li>Blog</li>
							<li>Work</li>
							<li>Contact</li>
							<li>About</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;