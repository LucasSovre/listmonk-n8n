import type { INodeProperties } from 'n8n-workflow';

export const templateOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['template'],
			},
		},
        options: [
			{
                name: 'Create',
                value: 'createTemplate',
                action: 'Create a template',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/templates',
                        body: `={{JSON.stringify({"name":$parameter.name, "type":$parameter.typeTemplate, "subject":$parameter.subject, "body":$parameter.body})}}`,
                        encoding: 'json',
                        json: true
                    }
                }
            },
			{
				name: 'Delete Template by ID',
				value: 'deleteTemplate',
				action: 'Delete template by id',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/templates/{{$parameter.id}}',
					},
				},
			},
            {
				name: 'Get All',
				value: 'getTemplates',
				action: 'Get all templates',
				routing: {
					request: {
						method: 'GET',
						url: '/templates',
					},
				},
			},
			{
				name: 'Get Preview by ID',
				value: 'getTemplatePreviewById',
				action: 'Get template preview by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/templates/{{$parameter.id}}/preview',
					},
				},
			},
            {
				name: 'Get Template by ID',
				value: 'getTemplateById',
				action: 'Get template by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/templates/{{$parameter.id}}',
					},
				},
			},
            {
                name: 'Modify',
                value: 'modifyTemplate',
                action: 'Modify template',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/templates/{{$parameter.id}}',
                        body: `={{JSON.stringify({"name":$parameter.name, "type":$parameter.typeTemplate, "subject":$parameter.subject, "body":$parameter.body})}}`,
                        encoding: 'json',
                        json: true
                    }
                }
            },
            {
				name: 'Set Template as Default',
				value: 'setTemplateAsDefault',
				action: 'Set template as default',
				routing: {
					request: {
						method: 'PUT',
						url: '=/templates/{{$parameter.id}}/default',
					},
				},
			},
        ],
        default : "getTemplates"
    }
];