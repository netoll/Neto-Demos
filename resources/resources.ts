//

import {IOpenLibrary} from './library';

const R = {
	getTitle: (lib?: IOpenLibrary) => lib ? `${lib.name} - Demos` : 'Demos',
};

const R_ZH: typeof R = {
	getTitle: (lib?: IOpenLibrary) => lib ? `${lib.name} - 样例演示` : '样例演示',
};

// Recourse > Bundle
export const RB = {df: R, en: R, zh: R_ZH};
