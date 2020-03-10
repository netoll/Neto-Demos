//

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {IOpenLibrary} from '../pages/resources';
import {ViewCardOpenLibrary} from './ViewCardOpenLibrary';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {display: 'flex', flexFlow: 'row wrap'},
}));

interface IProps {
	libraries: IOpenLibrary[]
	onSelect: (lib: IOpenLibrary) => any;
}

export const ViewGalleryOfLibraries = React.memo(({libraries, onSelect}: IProps) => {
	const cls = useStyles();

	return (
		<div className={cls.root}>
			{libraries.map(lib => (
				<ViewCardOpenLibrary key={lib.id} lib={lib} onClick={() => onSelect(lib)}/>
			))}
		</div>
	);
});
