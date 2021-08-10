import React from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';
import LangButton from './../../components/LangButton';

class Home extends React.Component {
	componentDidMount() {
		document.title = 'ZiurFreelance';
	}
	render() {
		return (
			<div>
				<div >
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
					<h1>
						<FormattedMessage
							id="title"
							defaultMessage="Titulo"
						/>
					</h1>
					<p className="subtitulo">
						<FormattedDate
							value={Date.now()}
							year="numeric"
							month="long"
							day="numeric"
							weekday="long"
						/>
					</p>
				</div>
			</div>
		);
	}
}
export default Home;