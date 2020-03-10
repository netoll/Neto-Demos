//

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {IOpenLibrary} from '../resources/library';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: 16, padding: 16, minWidth: 200, minHeight: 200,
		background: '#fff', borderRadius: 5,
	},
}));

interface IProps {
	lib: IOpenLibrary;
	onClick: React.MouseEventHandler;
}

export const ViewCardOpenLibrary = React.memo(({lib, onClick}: IProps) => {
	const cls = useStyles();

	return (
		<div className={cls.root} onClick={onClick}>
			<div>{lib.name}</div>
			<div>{lib.github}</div>
		</div>
	);
});
