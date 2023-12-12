import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ListmonkApi implements ICredentialType {
	name = 'ListmonkApi';
	displayName = 'Listmonk API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.listmonk.app/api/';
	properties: INodeProperties[] = [
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
        {
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://listmonk.example.com',
		},
	];
	/*authenticate = {
		type: 'generic',
		properties: {
			headers: {
				'Authorization': '={{"Basic bGlzdG1vbms6bGlzdG1vbms="}}'
			}
		},
	} as IAuthenticateGeneric;*/
}