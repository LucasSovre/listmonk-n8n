import type { INodeProperties } from 'n8n-workflow';

export const mediaOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['media'],
			},
		},
        options: [
            {
				name: 'Get',
				value: 'getMedia',
				action: 'Get all medias',
				routing: {
					request: {
						method: 'GET',
						url: '/media',
					},
				},
			},
            {
				name: 'Get media by id',
				value: 'getMediaById',
				action: 'Get media by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/media/{{$parameter.id}}',
					},
				},
			},
            {
				name: 'Delete media by id',
				value: 'deleteMedia',
				action: 'Delete media by id',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/media/{{$parameter.id}}',
					},
				},
			},
        ],
        default : "getMedia"
    }
];