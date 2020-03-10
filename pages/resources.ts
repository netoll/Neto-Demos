'use strict';

const R = {
	title: 'Demos',
	headerAboutNetoDemos: 'About the Neto Demos',
	contentAboutNetoDemos:
		'A framework that set up demos easily and fast ' +
		'for specific libraries with custom mock data to fit your own use cases.',
	headerGalleryOfLibraries: 'Gallery of Available Libraries',
};

const R_ZH: typeof R = {
	title: '样例集',
	headerAboutNetoDemos: '关于样例库',
	contentAboutNetoDemos:
		'Neto Demos 是一个简单的样例展示站点，' +
		'帮助你为感兴趣的库快速搭建演示样例。',
	headerGalleryOfLibraries: '现有库样例集',
};

// Recourse > Bundle
export const RB = {df: R, en: R, zh: R_ZH};
