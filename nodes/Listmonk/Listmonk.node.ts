import { INodeType, INodeTypeDescription } from 'n8n-workflow';
//@ts-ignores
import { utilsOperations, settingsOperations, adminOperations, logsOperations, transactionOperations } from './operations';
import { listOperations } from './businessOperations/listOperations';
import { resources } from './ressources';
import { listmonkOptions } from './options';
import { campaignOperations } from './businessOperations/campaign';
import { mediaOperations } from './businessOperations/media';
import { templateOperations } from './businessOperations/template';
import { subscriberOperations } from './businessOperations/subscribers';

export class Listmonk implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Listmonk',
        name: 'Listmonk',
        icon: 'file:listmonk.png',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with a listmonk instance',
        defaults: {
            name: 'Listmonk',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'ListmonkApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL : '={{$credentials.domain.replace(new RegExp("/$"), "") + "/api"}}',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            auth: {
                username: "={{$credentials.user}}",
                password: "={{$credentials.password}}"
            }
        },
		properties: [
            resources,
            ...utilsOperations,
            ...settingsOperations,
            ...adminOperations,
            //...logsOperations,
            ...listmonkOptions,
            ...listOperations,
            ...campaignOperations,
            ...mediaOperations,
            ...templateOperations,
            ...transactionOperations,
            ...subscriberOperations,
		]
	};
}