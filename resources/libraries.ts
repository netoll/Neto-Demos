//

import {IOpenLibrary} from './library';

export const libIds = {
	muiViews: 'mui-views',
	muiLib: 'mui-lib',
};

const df = (id: string, name: string, github: string, site?: string): IOpenLibrary =>
	({id, name, github, site});

const libs: IOpenLibrary[] = [
	df(libIds.muiLib, 'Mui-Lib', 'https://github.com/mui-lib/mui-lib',
		''),
	df(libIds.muiViews, 'Mui-Views', 'https://github.com/mui-lib/mui-views',
		''),
];

export const libraries = libs;
