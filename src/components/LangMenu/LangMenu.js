import React from 'react';
import LangSelected from '../LangSelected/LangSelected';
import LangSelector from '../LangSelector/LangSelector';
import {LangContext} from '../../context/LangContext';
import './LangMenu.sass';

class LangMenu extends React.Component {
	static contextType = LangContext;
	constructor(props) {
		super(props);
		this.state = {showLanguages: false}
		this.showLanguages = e => {
			console.log('click');
			e.preventDefault();
			this.setState({showLanguages: !this.state.showLanguages});
		};
	}
	render() {
		if(this.state.showLanguages){
			return (
				<div className="lang-menu">
					<LangContext.Consumer>
						{context => (
							<LangSelected
								link={context.link}
								onClickToSelect={this.showLanguages}
							/>
						)}
					</LangContext.Consumer>
					<LangSelector />
				</div>
			);
		}else {
			return (
				<div className="lang-menu">
					<LangContext.Consumer>
						{context => (
							<LangSelected
								link={context.link}
								onClickToSelect={this.showLanguages}
							/>
						)}
					</LangContext.Consumer>
				</div>
			);
		}
	}
}
export default LangMenu;