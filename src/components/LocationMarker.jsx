import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import Circle from '../components/Circle';

const LocationMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="location-marker" onClick={onClick}>
			<FontAwesomeIcon icon={faFire} className="location-icon" />
			<Circle />
		</div>
	);
};

export default LocationMarker;
