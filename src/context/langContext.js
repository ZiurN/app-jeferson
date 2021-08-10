import React, {useState} from 'react';
import en_Info from './../lang/en-US.json';
import es_Info from './../lang/es-MX.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();

const LangProvider = ({children}) => {
	let defaultLocale;
	let defaultLangInfo;
	const lang = localStorage.getItem('lang');
	if(lang) {
		defaultLocale = lang
		if(lang === 'es-MX'){
			defaultLangInfo = es_Info;
		} else if(lang === 'en-US'){
			defaultLangInfo = en_Info
		} else {
			defaultLocale = 'en-US'
			defaultLangInfo = en_Info
		}
	}
	const [langInfo, defineLangInfo] = useState(defaultLangInfo);
	const [locale, defineLocale] = useState(defaultLocale);
	const defineLang = (lang) => {
		switch (lang){
			case 'es-MX':
				defineLangInfo(es_Info);
				defineLocale('es-MX');
				break;
			case 'en-US':
				defineLangInfo(en_Info);
				defineLocale('en-US');
				break;
			default:
				defineLangInfo(en_Info);
				defineLocale('en-US');
		}
        localStorage.setItem('lang', lang !== '' ? lang : 'en-US');
	}
	return (
		<langContext.Provider value={{defineLang: defineLang}}>
			<IntlProvider locale={locale} messages={langInfo}>
				{children}
			</IntlProvider>
		</langContext.Provider>
	);
}
export {LangProvider, langContext};