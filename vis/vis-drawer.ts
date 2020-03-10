//

import {IOptions} from './drawer-options';
import {mockVisData} from './vis-mock-nodes';

const vis = window['vis'];

// Called when the Visualization API is loaded.
export const drawMonitoringDiagramWithVis = (options: IOptions = {}, dom: any): [any] => {
	const network = new vis.Network(dom, mockVisData, options);
	return [network];
};
