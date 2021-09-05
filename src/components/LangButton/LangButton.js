import React from 'react';
import {LangContext} from '../../context/LangContext';
import './LangButton.sass';

class LangButton extends React.Component {
	static contextType = LangContext;
	constructor(props) {
		super(props);
		console.log(props);
		this.handleClick = e => {
			e.preventDefault();
			this.context.defineLang(this.props.locale);
		};
	}
	render() {
		const imgLink = "https://www.countryflags.io/" + this.props.link + "/flat/64.png";
		return (
			<button className='lang-btn' onClick={this.handleClick}>
				<img className='lang-flag' src={imgLink} alt={this.props.language}/>
				<div className='lang-text'>
					{this.props.language}
				</div>
			</button>
		);
	}
}
export default LangButton;