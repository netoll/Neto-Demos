//

export const R = {
	idDiagramRoot: 'id-diagram-root',
};

import {newMenuItem, newMenuSection} from 'src/mui-views/app/AppSecondaryMenu';

export const libVisNetworkDemoPage = {
	network: 'network',
	timeline: 'timeline',
};

const page = libVisNetworkDemoPage;

export const libVisNetworkMenuPages = newMenuSection('demo', 'Vis Network', [
	newMenuItem(page.network, 'Vis Network'),
	newMenuItem(page.timeline, 'Vis Timeline'),
]);
