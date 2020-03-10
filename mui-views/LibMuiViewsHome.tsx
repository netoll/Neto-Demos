//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {TestHome} from 'src/mui-lib/tests/TestHome';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
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

	const [compId, setComponentId] = React.useState<string | undefined>();

	const onSelectedComponent = (compId: string) => {
		setComponentId(compId);
	};

	const renderPageBody = () => (
		<div className={cls.page}>
			<AppPageHeader title={compId || ''}/>

			<div style={{height: 16}}/>

			{renderCompDemos()}

			<div style={{height: 120}}/>
		</div>
	);

	const page = libMuiViewsDemoPage;
	const renderCompDemos = () => {
		switch (compId) {
			case page.app:
				return <MuiViewsAppDemos/>;
			case page.data:
				return <MuiViewsDataDemos/>;
			case page.editors:
				return <TestHome/>;
			default:
				return;
		}
	};

	return (
		<LayoutAppHeader
			title={R.getTitle(library)}
			body={renderPageBody()}
			nav={<AppMenuComponents menus={[libMuiViewsMenuPages]} menuId={compId} onSelect={onSelectedComponent}/>}
		/>
	);
});
