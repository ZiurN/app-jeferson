import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import {LangProvider} from './context/langContext';

ReactDOM.render(
	<React.StrictMode>
		<LangProvider>
			<Router />
		</LangProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
serviceWorker.unregister();