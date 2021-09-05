import React from 'react';
import {langContext} from './../context/langContext';

class Home extends React.Component {
	static contextType = langContext;
	constructor(props) {
		super(props);
		this.handleClick = e => {
			e.preventDefault();
			this.context.defineLang(this.props.locale);
		};
	}
	render() {
		return (
			<button onClick={this.handleClick}>{this.props.language}</button>
		);
	}
}
export default Home;