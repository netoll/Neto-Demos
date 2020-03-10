//

import React from 'react';
import {AppHome} from './pages/AppHome';

export const App = React.memo(() => {
	return (
		<div>
			<AppHome/>
		</div>
	);
});
