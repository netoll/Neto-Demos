//

import {newMenuItem, newMenuSection} from 'src/mui-views/app/AppSecondaryMenu';
import {IOpenLibrary} from '../resources/library';

const R = {
	getTitle: (lib?: IOpenLibrary) => lib ? `${lib.name} - Demos` : 'Demos',
};

const R_ZH: typeof R = {
	getTitle: (lib?: IOpenLibrary) => lib ? `${lib.name} - 样例演示` : '样例演示',
};

// Recourse > Bundle
export const RB = {df: R, en: R, zh: R_ZH};

export const libMuiViewsDemoPage = {
	app: 'app',
	data: 'data',
	dialogs: 'data',
	editors: 'editors',
	layouts: 'layouts',
	views: 'views',
	widgets: 'widgets',
};

const page = libMuiViewsDemoPage;

export const libMuiViewsMenuPages = newMenuSection('demo', 'App-level Components', [
	newMenuItem(page.app, 'App Components'),
	newMenuItem(page.data, 'Data Displaying'),
	newMenuItem(page.editors, 'Editors'),
]);
