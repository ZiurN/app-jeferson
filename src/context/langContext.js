import React, {useState} from 'react';
import en_Info from '../lang/en-US.json';
import es_Info from '../lang/es-MX.json';
import {IntlProvider} from 'react-intl';

const LangContext = React.createContext();

const LangProvider = ({children}) => {
	let defaultLocale;
	let defaultLangInfo;
	let defaultLInk;
	let defaultLanguague;
	const lang = localStorage.getItem('lang');
	if(lang) {
		defaultLocale = lang
		if(lang === 'es-MX'){
			defaultLangInfo = es_Info;
			defaultLInk = 'ES';
			defaultLanguague = 'Español';
		} else if(lang === 'en-US'){
			defaultLangInfo = en_Info;
			defaultLInk = 'US';
			defaultLanguague = 'English';
		} else {
			defaultLocale = 'en-US';
			defaultLangInfo = en_Info;
			defaultLInk = 'US';
			defaultLanguague = 'English';
		}
	}
	const [langInfo, defineLangInfo] = useState(defaultLangInfo);
	const [locale, defineLocale] = useState(defaultLocale);
	const [language, defineLanguage] = useState(defaultLanguague);
	const [link, defineLink] = useState(defaultLInk);
	const defineLang = (lang) => {
		switch (lang){
			case 'es-MX':
				defineLangInfo(es_Info);
				defineLocale('es-MX');
				defineLink('ES');
				defineLanguage('Español');
				break;
			case 'en-US':
				defineLangInfo(en_Info);
				defineLocale('en-US');
				defineLink('US');
				defineLanguage('English');
				break;
			default:
				defineLangInfo(en_Info);
				defineLocale('en-US');
				defineLink('US');
				defineLanguage('English');
		}
        localStorage.setItem('lang', lang !== '' ? lang : 'en-US');
	}
	return (
		<LangContext.Provider value={{defineLang: defineLang, locale: locale, messages: langInfo, link:link, language: language}}>
			<IntlProvider locale={locale} messages={langInfo} link={link} language={language}>
				{children}
			</IntlProvider>
		</LangContext.Provider>
	);
}
export {LangProvider, LangContext};