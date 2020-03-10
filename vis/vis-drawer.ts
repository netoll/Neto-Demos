//

import {IOptions} from './drawer-options';
import {mockVisData} from './vis-mock-nodes';

// Called when the Visualization API is loaded.
export const drawMonitoringDiagramWithVis = (options: IOptions = {}, dom: any): [any] => {
	const vis = window['vis'];
	const network = new vis.Network(dom, mockVisData, options);
	return [network];
};
