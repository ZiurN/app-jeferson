import React from 'react';
import LangButton from './LangButton';

class Home extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<LangButton
						language="Español"
						locale="es-MX"
					/>
				</li>
				<li>
					<LangButton
						language="English"
						locale="en-US"
					/>
				</li>
			</ul>
		);
	}
}
export default Home;