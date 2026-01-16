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
					<nav className="header__nav">
						<ul>
							<li><a href="#!">Academy</a></li>
							<li><a href="#!">Blog</a></li>
							<li><a href="#!">Work</a></li>
							<li><a href="#!">Contact</a></li>
							<li><a href="#!">About</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header;