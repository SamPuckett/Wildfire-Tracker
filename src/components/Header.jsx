import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const Header = () => {
	return (
		<header
			className="navbar navbar-dark bg-dark"
			style={{ position: 'fixed', top: '0', right: '0', left: '0', zIndex: '100' }}
		>
			<h1 className="navbar-brand mx-auto align-middle">
				Wildfire Tracker (Powered By NASA)
			</h1>
		</header>
	);
};

export default Header;
