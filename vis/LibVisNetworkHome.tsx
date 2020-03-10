//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {IMenuItem} from 'src/mui-views/app/AppSecondaryMenu';
import {VisNetworkDemos} from './VisNetworkDemos';
import {AppMenuComponents} from '../components/AppMenuComponents';
import {IOpenLibrary} from '../resources/library';
import {useStyles} from '../pages/styles';
import {libVisNetworkMenuPages, libVisNetworkDemoPage} from './resources';
import {RB} from '../resources/resources';

interface IProps {
	library?: IOpenLibrary;
}

export const LibVisNetworkHome = React.memo<IProps>(({library}: IProps) => {
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

	const page = libVisNetworkDemoPage;
	const renderCompDemos = () => {
		if (!comp) {return; }
		switch (comp?._id) {
			case page.network:
				return <VisNetworkDemos/>;
			default:
				return;
		}
	};

	return (
		<LayoutAppHeader
			title={R.getTitle(library)}
			body={renderPageBody()}
			nav={<AppMenuComponents menus={[libVisNetworkMenuPages]} menuId={comp?._id} onSelect={onSelectedComponent}/>}
		/>
	);
});
