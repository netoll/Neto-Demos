'use strict';

import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	body: {flex: 1, background: '#eee'},
	page: {margin: '0 auto', maxWidth: 1080},
}));
