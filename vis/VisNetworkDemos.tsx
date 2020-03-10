//

import React from 'react';
import {R} from './resources';
import {useStyles} from './styles';
import {drawMonitoringDiagramWithVis} from './vis-drawer';

interface IProps {}


// Home for app-level components.
export const VisNetworkDemos = React.memo(({}: IProps) => {
	const cls = useStyles();
	const domDiagramRootRef = React.useRef(null);

	React.useLayoutEffect(() => {
		if (!domDiagramRootRef.current) {return;}
		console.log('Drawing into domDiagramRoot:', domDiagramRootRef.current);
		drawMonitoringDiagramWithVis({}, domDiagramRootRef.current);
	}, []);

	return (
		<div className={cls.root}>
			<div id={R.idDiagramRoot} className={cls.domDiagramRoot} ref={domDiagramRootRef}/>
		</div>
	);

});
