import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ListmonkApi implements ICredentialType {
	name = 'listmonkApi';
	displayName = 'Listmonk API';
	documentationUrl = 'https://listmonk.app/docs/apis/apis/';
	properties: INodeProperties[] = [
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
			description:
				'On listmonk v3+, the name of an API user created under Admin -> Users -> API users',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'On listmonk v3+, the API token of that API user',
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://listmonk.example.com',
		},
	];

	// ponytail: BasicAuth works on both legacy and v3+/v4 listmonk, so no auth-type switch
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			auth: {
				username: '={{$credentials.user}}',
				password: '={{$credentials.password}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.domain.replace(new RegExp("/$"), "")}}',
			url: '/api/health',
		},
	};
}
