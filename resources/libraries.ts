//

import {IGithubRepo, IGithubUser, IOpenLibrary} from './library';

const userMuiLib: IGithubUser = {
	id: 59460099, name: 'mui-lib', login: 'mui-lib',
	description: '',
};

export const libIds = {
	muiViews: 'mui-views',
	muiLib: 'mui-lib',
};

export const repo = (owner: string, path: string, stars: number = -1, forks: number = -1): IGithubRepo =>
	({owner, path, forks, stars});


const df = (id: string, name: string, owner: IGithubUser, github: IGithubRepo, description: string = '', source?: string, site?: string): IOpenLibrary => ({
	id, name, description,
	owner, github,
	source, site,
});

const libs: IOpenLibrary[] = [
	df(libIds.muiLib, 'Mui-Lib', userMuiLib,
		repo('mui-lib', 'mui-lib', -1, -1),
		'A library of more complicated components for material-ui -- clone and use.'),
	df(libIds.muiViews, 'Mui-Views', userMuiLib,
		repo('mui-lib', 'mui-views', -1, -1),
		'An opinionated graphical library depending on the Material-UI, ' +
		'covering topics of views/pages/routes/animations/transitions/etc, ' +
		'and designed for commercialized products, ' +
		'which is also an extended library of the core mui-lib.'),
];

export const libraries = libs;

export const GithubHelper = {
	getUserAvatar: (userId: number = 58797959): string => `https://avatars3.githubusercontent.com/u/${userId}?v=4`,
	getUserUrl: (user: string): string => `https://github.com/${user}`,
	getRepoUrl: (user: string, path: string): string => `https://github.com/${user}/${path}`,
};
