import Map from '../../images/map.png';
import './LocationInfoBox.css';

const LocationInfoBox = ({ info, setLocationInfo }) => {
	return (
		<div className="location-info">
			<img src={Map} alt="map" />
			<ul>
				<li>
					<strong>{info.title}</strong>
				</li>
				<li>NASA ID: {info.id}</li>
			</ul>
			<button onClick={() => setLocationInfo(null)}>Close</button>
		</div>
	);
};

export default LocationInfoBox;
