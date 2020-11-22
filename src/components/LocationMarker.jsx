import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import Circle from '../components/Circle';

const LocationMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="location-marker" onClick={onClick}>
			<Icon icon={locationIcon} className="location-icon" />
			<Circle />
		</div>
	);
};

export default LocationMarker;
