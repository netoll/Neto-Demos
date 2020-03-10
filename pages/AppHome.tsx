//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {RB} from './resources';
import {useStyles} from './styles';

export const AppHome = React.memo(() => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const renderAppBody = () => (
		// <AppPageHeader title={R.headerAboutNetoDemos} secondary/>
		<div className={cls.body}>
			<div className={cls.page}>
				<AppPageParagraph description={R.contentAboutNetoDemos}/>

				<AppPageHeader title={R.headerGalleryOfLibraries} secondary/>

				{renderGalleryOfLibraries()}
			</div>
		</div>
	);

	const renderGalleryOfLibraries = () => (
		<div>
		</div>
	);

	return (
		<LayoutAppHeader
			title={R.title}
			body={renderAppBody()}
		/>
	);
});
