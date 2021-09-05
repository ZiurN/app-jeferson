import React from 'react';
import LangButton from '../LangButton/LangButton';
import './LangSelector.sass';

class Home extends React.Component {
	render() {
		return (
			<ul className='lang-selector'>
				<li>
					<LangButton
						language="Español"
						locale="es-MX"
						link="ES"
					/>
				</li>
				<li>
					<LangButton
						language="English"
						locale="en-US"
						link="US"
					/>
				</li>
			</ul>
		);
	}
}
export default Home;