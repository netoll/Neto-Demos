//

import React from 'react';
import {loadScript} from 'src/utils/HtmlScriptLoader';
import {R} from './resources';
import {useStyles} from './styles';
import {drawMonitoringDiagramWithVis} from './vis-drawer';

interface IProps {}


// Home for app-level components.
export const VisNetworkDemos = React.memo(({}: IProps) => {
	const cls = useStyles();
	const domDiagramRootRef = React.useRef(null);

	const [cached, setCached] = React.useState(false);

	React.useLayoutEffect(() => {
		if (!domDiagramRootRef.current) {return;}
		console.log('Drawing into domDiagramRoot:', domDiagramRootRef.current);
		const vis: any = window['vis'];
		// https://unpkg.com/vis-network/standalone/umd/vis-network.min.js
		if (!vis || !vis.Network) {
			console.warn('Loading the depended script now!', new Date().toLocaleString());
			loadScript('https://unpkg.com/vis-network/standalone/umd/vis-network.min.js').then(() => {
				console.log('Successfully loaded the target script.', new Date().toLocaleString());
				setCached(true);
			}).catch((ex) => {
				console.error('Failed to load the target script:', ex, new Date().toLocaleString());
			});
			return;
		}
		drawMonitoringDiagramWithVis({}, domDiagramRootRef.current);
	}, [cached]);

	return (
		<div className={cls.root}>
			<div id={R.idDiagramRoot} className={cls.domDiagramRoot} ref={domDiagramRootRef}/>
		</div>
	);

});
