//

import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconComponent from '@material-ui/icons/ClosedCaption';
import {getAppSecondaryMenu, IMenuSection} from 'src/mui-views/app/AppSecondaryMenu';

const icon = <ListItemIcon style={{color: '#663399'}}><IconComponent/></ListItemIcon>;

interface IProps {}

const AppSecondaryMenu = getAppSecondaryMenu();

interface IProps {
	menus: IMenuSection[];
	onSelect: (entryId: string) => any;
	menuId?: string;
}

export const MenuComponents = React.memo(({menus, menuId, onSelect}: IProps) => {
	return (
		<AppSecondaryMenu
			sections={menus} color='#099'
			onSelect={onSelect} selectedMenuItemId={menuId}
			getMenuItemIcon={() => icon}
		/>
	);
});
