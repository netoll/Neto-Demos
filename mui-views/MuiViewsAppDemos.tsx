//

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {AppActionButton} from 'src/mui-views/app/AppActionButton';
import {AppLanguagesSelector} from 'src/mui-views/app/AppLanguagesSelector';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {AppMenuComponents} from '../components/AppMenuComponents';
import {libMuiViewsMenuPages} from './resources';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	demo: {
		margin: 16, background: '#fff', borderRadius: 5, padding: 16,
		minHeight: 360,
	},
}));

interface IProps {

}


// Home for app-level components.
export const MuiViewsAppDemos = React.memo(({}: IProps) => {
	const cls = useStyles();

	const renderDemos = () => (
		<LayoutAppHeader
			title={'LayoutAppHeader'}
			body={renderDemoBody()}
			nav={
				<AppMenuComponents menus={[libMuiViewsMenuPages]} onSelect={(menuId) => console.log('selected', menuId)}/>
			}
		/>
	);

	const renderDemoBody = () => (
		<div style={{position: 'relative'}}>
			<AppPageHeader title={'App Page Header'}/>
			<AppPageHeader secondary title={'App Secondary Header'}/>
			<AppPageParagraph description={'This is a default description with default styles for a page, to make the initial page more rich.'}/>
			<AppLanguagesSelector onSetLanguage={(lang: string) => console.log('selected:', lang)}/>
			<AppActionButton onClick={() => console.log('button is clicked')}/>
			<AppActionButton icon='edit' onClick={() => console.log('button is clicked')}/>
		</div>
	);

	return (
		<div className={cls.demo}>
			{renderDemos()}
		</div>
	);
});
