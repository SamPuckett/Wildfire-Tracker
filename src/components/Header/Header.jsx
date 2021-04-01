// import { Icon } from '@iconify/react';
// import locationIcon from '@iconify/icons-mdi/fire-alert';
import NasaLogo from '../../images/nasa.png';
import './Header.css';

const Header = () => {
	return (
		<header className="header__nav">
			<img src={NasaLogo} alt="Nasa Logo" className="header__logo" />
			<h1 className="navbar-brand mx-auto align-middle">
				Wildfire Tracker (Powered By NASA)
			</h1>
			<img src={NasaLogo} alt="Nasa Logo" className="header__logo-hidden" />
		</header>
	);
};

export default Header;
