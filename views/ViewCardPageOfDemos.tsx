//

import React from 'react';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {IMenuItem} from 'src/mui-views/app/AppSecondaryMenu';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: 16, padding: 16, minHeight: 120,
		background: '#fff', boxSizing: 'border-box', width: '30%',
		display: 'flex', flexFlow: 'column nowrap',
		cursor: 'pointer',
	},
	name: {},
}));

interface IProps {
	page: IMenuItem;
	onClick: React.MouseEventHandler;
}

export const ViewCardPageOfDemos = React.memo(({page, onClick}: IProps) => {
	const cls = useStyles();

	return (
		<Paper className={cls.root} elevation={1} onClick={onClick}>
			<Typography className={cls.name} variant='h4' component='h3' color='primary'>{page.name}</Typography>
		</Paper>
	);
});
