import React from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';
import LangMenu from '../../components/LangMenu/LangMenu';

class Home extends React.Component {
	componentDidMount() {
		document.title = 'ZiurFreelance';
	}
	render() {
		return (
			<div>
				<div>
					<LangMenu />
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