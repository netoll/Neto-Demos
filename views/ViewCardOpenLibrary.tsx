//

import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {GithubHelper} from '../resources/libraries';
import {IOpenLibrary} from '../resources/library';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {IconGithub} from './github-logo';

export const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		margin: 16, padding: 16, minWidth: 200,
		background: '#fff', boxSizing: 'border-box', width: '46%',
		display: 'flex', flexFlow: 'column nowrap',
	},

	head: {display: 'flex', flexFlow: 'row nowrap', cursor: 'pointer'},
	avatar: {width: 45, height: 45, margin: '0 12px 0 0'},
	names: {flex: '1', display: 'flex', flexFlow: 'column'},
	owner: {color: '#ccc'},
	name: {fontSize: 'x-large', color: '#099', fontWeight: 'bold'},

	body: {height: '64px', overflow: 'hidden', background: '#fcfcfc', margin: '5px 0', cursor: 'pointer'},
	description: {color: '#666', wordBreak: 'break-all'},

	tail: {display: 'flex', flexFlow: 'row nowrap'},
	iconGithub: {color: '#666', cursor: 'pointer'},
}));

interface IProps {
	lib: IOpenLibrary;
	onClick: React.MouseEventHandler;
}

export const ViewCardOpenLibrary = React.memo(({lib, onClick}: IProps) => {
	const cls = useStyles();

	const {owner, github} = lib;

	const goToUserHome = () => window.open(GithubHelper.getUserUrl(owner?.login || ''), '_blank');
	const goToRepoHome = () => window.open(GithubHelper.getRepoUrl(github?.owner || '', github?.path || ''), '_blank');

	// [ Avatar | Owner/Name | Stars ]
	const renderHead = () => (
		<div className={cls.head} onClick={onClick}>
			<div className={cls.avatar}><img className={cls.avatar} src={GithubHelper.getUserAvatar(owner?.id)}/></div>
			<div className={cls.names}>
				<div className={cls.owner}>{owner?.login}</div>
				<div className={cls.name}>{lib.name}</div>
			</div>
		</div>
	);

	const renderBody = () => (
		<div className={cls.body} onClick={onClick}>
			<Typography variant='body1' component='p' className={cls.description}>{lib.description}</Typography>
		</div>
	);


	const renderTail = () => (
		<div className={cls.tail}>
			<div style={{flex: 1}}/>
			<IconGithub className={cls.iconGithub} onClick={goToRepoHome} fontSize='small'/>
		</div>
	);

	return (
		<Paper className={cls.root} elevation={1}>
			{renderHead()}
			{renderBody()}
			{renderTail()}
		</Paper>
	);
});
