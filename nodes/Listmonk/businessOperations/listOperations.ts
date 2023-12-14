import type { INodeProperties } from 'n8n-workflow';

export const listOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['list'],
			},
		},
		options: [
            {
                name: 'Create List',
                value: 'createList',
                action: 'Create a list',
                routing: {
					request: {
						method: 'POST',
						url: '/lists',
                        body: "={{JSON.parse($parameter.jsonBody)}}",
                        encoding: 'json',
                        json: true
					},
				},
            },
            {
                name: 'Delete List',
                value: 'deleteList',
                action: 'Delete a list',
                routing: {
                    request: {
                        method: "DELETE",
                        url: "=/lists/{{$parameter.id}}"
                    }
                }
            },
			{
				name: 'Get',
				value: 'get',
				action: 'Get all lists',
				routing: {
					request: {
						method: 'GET',
						url: '/lists',
                        qs: {
                            "per_page" : "={{$parameter.perPage}}",
                            "page" : "={{$parameter.page}}",
                        }
					},
				},
			},
            {
                name: 'Get List',
                value: 'getList',
                action: 'Get a list',
                routing: {
                    request: {
                        method: "GET",
                        url: "=/lists/{{$parameter.id}}"
                    }
                }
            },
            {
                name: 'Update List',
                value: 'updateList',
                action: 'Update a list',
                routing: {
                    request: {
                        method: "PUT",
                        url: "=/lists/{{$parameter.id}}",
                        body: "={{JSON.parse($parameter.jsonBody)}}",
                        encoding: 'json',
                        json: true
                    }
                }
            },
		],
		default: 'get',
	},
];