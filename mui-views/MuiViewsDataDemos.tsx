//

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {ViewCardStatistics} from 'src/mui-views/data/ViewCardStatistics';
import {ViewPlainList} from 'src/mui-views/data/ViewPlainList';
import {ViewInformativeTable} from 'src/mui-views/data/ViewInformativeTable';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	demo: {
		margin: 16, background: '#fff', borderRadius: 5, padding: 16,
		position: 'relative', minHeight: 120,
	},
}));

interface IProps {

}


// Home for app-level components.
export const MuiViewsDataDemos = React.memo(({}: IProps) => {
	const cls = useStyles();

	const renderDemo = (id: string, dom: React.ReactElement) => (
		<div key={id} className={cls.demo}>
			{dom}
		</div>
	);
	const renderDemos = () => [
		<ViewCardStatistics
			title={'ViewCardStatistics'} description={'Some description over the #ViewCardStatistics.'}
			style={{width: 220}}
			data={[
				['Hello', 33],
				['World', 19],
			]}
		/>,
		renderDemo('ViewCardStatistics',
			<ViewCardStatistics
				style={{width: 220}}
				data={[
					['Hello', 33],
					['World', 19],
				]}
			/>),
		renderDemo('ViewInformativeTable',
			<ViewInformativeTable
				mode={'table'}
				dataset={[
					['Hello', 33],
					['World', 19],
				]}
			/>),
		renderDemo('ViewPlainList',
			<ViewPlainList
				list={[
					{
						name: 'Hello',
						children: [
							{name: 'Unknown'},
						],
					},
					{name: 'World', ordered: true},
				]}
			/>),
	];

	return (
		<div>
			{renderDemos()}
		</div>
	);
});
