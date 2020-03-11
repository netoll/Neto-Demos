//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {IMenuItem} from 'src/mui-views/app/AppSecondaryMenu';
import {ViewGalleryOfDemoPages} from '../views/ViewGalleryOfDemoPages';
import {MuiViewsAppDemos} from './MuiViewsAppDemos';
import {MuiViewsDataDemos} from './MuiViewsDataDemos';
import {AppMenuComponents} from '../components/AppMenuComponents';
import {IOpenLibrary} from '../resources/library';
import {useStyles} from '../pages/styles';
import {libMuiViewsMenuPages, libMuiViewsDemoPage, RB} from './resources';

interface IProps {
	library: IOpenLibrary;
}

export const LibMuiViewsHome = React.memo<IProps>(({library}: IProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const [comp, setComponent] = React.useState<IMenuItem | undefined>();

	const onSelectedComponent = (compId: string, comp: IMenuItem) => {
		setComponent(comp);
	};

	const renderPageBody = () => (
		<div className={cls.page}>
			<AppPageHeader title={comp?.name || ''}/>

			{renderCompDemos()}

			<div style={{height: 120}}/>
		</div>
	);

	const page = libMuiViewsDemoPage;
	const renderCompDemos = () => {
		if (!comp) {return renderGalleryOfDemoPages(); }
		switch (comp?._id) {
			case page.app:
				return <MuiViewsAppDemos/>;
			case page.data:
				return <MuiViewsDataDemos/>;
			default:
				return;
		}
	};

	const renderGalleryOfDemoPages = () => (
		<ViewGalleryOfDemoPages pages={libMuiViewsMenuPages} onSelect={onSelectedComponent}/>
	);

	return (
		<LayoutAppHeader
			title={R.getTitle(library)}
			body={renderPageBody()}
			nav={<AppMenuComponents menus={[libMuiViewsMenuPages]} menuId={comp?._id} onSelect={onSelectedComponent}/>}
		/>
	);
});
