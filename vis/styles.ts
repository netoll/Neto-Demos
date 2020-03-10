'use strict';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {height: '100%', background: '#f6f6f6', borderRadius: 8},
	domDiagramRoot: {minHeight: 750, height: 850, maxHeight: 950},
}));

