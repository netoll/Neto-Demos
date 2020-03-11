'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {appMuiTheme} from 'src/graphic/resources/AppTheme';
import {App} from './app';

ReactDOM.render((
		<MuiThemeProvider theme={appMuiTheme}>
			<App/>
		</MuiThemeProvider>
	), document.getElementById('root-react-mount-point'),
);
