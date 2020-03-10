//

export interface IGithubUser {
	id: number; // 58797959
	name: string;
	// path
	login: string;
	description?: string;
}

export interface IGithubRepo {
	// = owner.login
	owner?: string;
	// The repo field in the url.
	path: string;
	stars?: number;
	forks?: number;
}

export interface IOpenLibrary {
	id: string;
	name: string;
	description: string;
	// Github owner.
	owner?: IGithubUser;
	// Github repo.
	github: IGithubRepo;
	// Another code source if any.
	source?: string;
	site?: string;
}
