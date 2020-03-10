//

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {AppActionButton} from 'src/mui-views/app/AppActionButton';
import {AppLanguagesSelector} from 'src/mui-views/app/AppLanguagesSelector';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {MenuComponents} from '../pages/MenuComponents';
import {libMuiViewsMenuPages} from './resources';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	demo: {
		margin: 16, background: '#fff', borderRadius: 5, padding: 16,
		position: 'relative', minHeight: 120,
	},
}));

interface IProps {

}


// Home for app-level components.
export const MuiViewsAppDemos = React.memo(({}: IProps) => {
	const cls = useStyles();

	const renderDemo = (id: string, dom: React.ReactElement) => (
		<div key={id} className={cls.demo}>
			{dom}
		</div>
	);
	const renderDemos = () => [
		renderDemo(
			'fab',
			<AppActionButton onClick={() => console.log('button is clicked')}/>,
		),
		renderDemo(
			'AppActionButton2',
			<AppActionButton icon='edit' onClick={() => console.log('button is clicked')}/>,
		),
		renderDemo(
			'AppLanguagesSelector',
			<AppLanguagesSelector onSetLanguage={(lang: string) => console.log('selected:', lang)}/>,
		),
		renderDemo(
			'AppPageHeader+AppPageParagraph',
			<div>
				<AppPageHeader title={'App Page Header'}/>
				<AppPageHeader secondary title={'App Secondary Header'}/>
				<AppPageParagraph description={'This is a default description with default styles for a page, to make the initial page more rich.'}/>
			</div>,
		),
		renderDemo(
			'MenuComponents',
			<MenuComponents menus={[libMuiViewsMenuPages]} onSelect={(menuId) => console.log('selected', menuId)}/>,
		),
		renderDemo(
			'LayoutAppHeader',
			<LayoutAppHeader
				title={'LayoutAppHeader'}
				body={() => (
					<div>
						This is the app body.
					</div>
				)}
			/>,
		),
	];

	return (
		<div>
			{renderDemos()}
		</div>
	);
});
