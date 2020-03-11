//

import React from 'react';
import IconComponent from '@material-ui/icons/ClosedCaption';
import {AppMenuIcon} from 'src/mui-views/app/AppMenuIcon';
import {getAppSecondaryMenu, IMenuItem, IMenuSection} from 'src/mui-views/app/AppSecondaryMenu';

const icon = <AppMenuIcon color='#663399' icon={<IconComponent/>}/>;

interface IProps {}

const AppSecondaryMenu = getAppSecondaryMenu();

interface IProps {
	menus: IMenuSection[];
	onSelect: (entryId: string, entry: IMenuItem) => any;
	menuId?: string;
}

export const AppMenuComponents = React.memo(({menus, menuId, onSelect}: IProps) => {
	return (
		<AppSecondaryMenu
			sections={menus} color='#099'
			onSelect={onSelect} selectedMenuItemId={menuId}
			getMenuItemIcon={() => icon}
		/>
	);
});
