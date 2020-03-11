//

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {IMenuItem, IMenuSection} from 'src/mui-views/app/AppSecondaryMenu';
import {ViewCardPageOfDemos} from './ViewCardPageOfDemos';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {display: 'flex', flexFlow: 'row wrap'},
}));

interface IProps {
	pages: IMenuSection;
	onSelect: (pageId: string, page: IMenuItem) => any;
}

export const ViewGalleryOfDemoPages = React.memo(({pages, onSelect}: IProps) => {
	const cls = useStyles();
	return (
		<div className={cls.root}>
			{pages.items?.map(page => (
				<ViewCardPageOfDemos key={page._id} page={page} onClick={() => onSelect(page._id, page)}/>
			))}
		</div>
	);
}); 