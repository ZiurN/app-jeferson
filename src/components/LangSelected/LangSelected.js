import React from 'react';
import './LangSelected.sass';

class LangSelected extends React.Component {
	render() {
		const imgLink = "https://www.countryflags.io/" + this.props.link + "/flat/64.png";
        console.log(this.props.onClickToSelect);
		return (
            <img className='lang-selected' src={imgLink} alt={this.props.language} onClick={this.props.onClickToSelect}/>
		);
	}
}
export default LangSelected;