import { createContext } from 'react';

type AppContext = {
	showCompleted: boolean | null;
	showAvatars: boolean | null;
};

const defaultContext: AppContext = {
	showCompleted: null,
	showAvatars: null,
};

export const getQueryContext = (): AppContext => {
	const queryParams = new URLSearchParams(window?.location.search);

	const isEnabled = (setting: string): null | boolean => {
		if (queryParams.get(setting) === '1') {
			return true;
		}

		if (queryParams.get(setting) === '0') {
			return false;
		}

		return null;
	};

	return {
		showCompleted: isEnabled('completed'),
		showAvatars: isEnabled('avatars'),
	};
};

const appContext = createContext<AppContext | null>(defaultContext);

export default appContext;
