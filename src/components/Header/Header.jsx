// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';
import MeMoji from '../../images/MeMoji.webp';
import './Header.css';

const Header = () => {
	return (
		<header className="header__nav">
			<a href="http://samluvs.pizza/">
				<img src={MeMoji} alt="Nasa Logo" className="header__logo" />
			</a>
			<h1 className="navbar-brand mx-auto align-middle">Wildfire Tracker</h1>
			<img src={MeMoji} alt="Memoji" className="header__logo-hidden" />
		</header>
	);
};

export default Header;
