//

import React from 'react';
import {loadScript} from 'src/utils/HtmlScriptLoader';
import {loadStyle} from 'src/utils/HtmlStylesheetLoader';
import {R} from './resources';
import {useStyles} from './styles';
import {getTimelinerItems} from './vis-mock-timeliner';

interface IProps {}

export const VisTimelineDemos = React.memo(({}: IProps) => {
	const cls = useStyles();
	const domDiagramRootRef = React.useRef(null);

	const [cached, setCached] = React.useState(false);

	React.useLayoutEffect(() => {
		if (!domDiagramRootRef.current) {return;}
		console.log('Drawing into domDiagramRoot:', domDiagramRootRef.current);
		const vis: any = window['vis'];
		if (!vis || !vis.Timeline) {
			console.warn('Loading the depended script now!', new Date().toLocaleString());
			Promise.all([
				loadStyle('https://unpkg.com/vis-timeline/styles/vis-timeline-graph2d.min.css'),
				loadScript('https://unpkg.com/vis-timeline/standalone/umd/vis-timeline-graph2d.min.js'),
			]).then(() => {
				console.log('Successfully loaded the target style and script.', new Date().toLocaleString());
				setCached(true);
			}).catch((ex) => {
				console.error('Failed to load the target style and script:', ex, new Date().toLocaleString());
			});
			return;
		}
		// @see https://visjs.github.io/vis-timeline/examples/timeline/standalone-build.html
		const items = getTimelinerItems(vis);
		const timeline = new vis.Timeline(domDiagramRootRef.current, items, {});
	}, [cached]);

	return (
		<div className={cls.root}>
			<div id={R.idDiagramRoot} className={cls.domDiagramRoot} ref={domDiagramRootRef}/>
		</div>
	);
});
