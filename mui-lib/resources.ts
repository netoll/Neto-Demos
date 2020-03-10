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

export const libMuiLibDemoPage = {
	dialogs: 'dialogs',
	editors: 'editors',
	layouts: 'layouts',
	views: 'views',
	widgets: 'widgets',
};

const page = libMuiLibDemoPage;

export const libMuiLibMenuPages = newMenuSection('demo', 'App-level Components', [
	newMenuItem(page.dialogs, 'Dialogs'),
	newMenuItem(page.editors, 'Editors'),
	newMenuItem(page.widgets, 'Widgets'),
]);
