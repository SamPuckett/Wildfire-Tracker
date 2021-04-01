import { useEffect, useState } from 'react';
import Map from './components/Map';
import Header from './components/Header/Header';
import Spinner from './components/Spinner';

const App = () => {
	const [eventData, setEventData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
			const { events } = await res.json();

			setEventData(events);
			setLoading(false);
		};

		fetchEvents();
	}, []);

	return (
		<div>
			<Header />
			{!loading ? <Map eventData={eventData} /> : <Spinner />}
		</div>
	);
};

export default App;
