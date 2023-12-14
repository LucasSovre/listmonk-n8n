import type { INodeProperties } from 'n8n-workflow';

export const utilsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['utils'],
			},
		},
		options: [
            {
                name: "Charts",
                value: "charts",
                action: "Get charts data points",
                routing: {
                    request: {
                        method: "GET",
                        url: "=/dashboard/charts"

                    }
                }
            },
            {
				name: 'Config',
				value: 'config',
				action: 'Get the config of the listmonk instance',
				routing: {
					request: {
						method: 'GET',
						url: '/config',
					},
				},
			},
			{
				name: 'Health',
				value: 'health',
				action: 'Check the health of the listmonk instance',
				routing: {
					request: {
						method: 'GET',
						url: '/health',
					},
				},
			},
            {
                name: "Langue",
                value: "langue",
                action: "Get the contents for a language",
                routing: {
                    request: {
                        method: "GET",
                        url: "=/lang/{{$parameter.languageId}}"

                    }
                }
            },
            {
                name: 'Stats Counts',
                value: "counts",
                action: "Get stats count data points",
                routing: {
                    request: {
                        method: "GET",
                        url: "=/dashboard/counts"

                    }
                }
            },
		],
		default: 'health',
	},
];


export const settingsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['settings'],
			},
		},
		options: [
            {
                name: "Get Settings",
                value: "getSettings",
                action: "Get the settings from database",
                routing: {
                    request: {
                        method: "GET",
                        url: "=/settings"

                    }
                }
            },
            {
                name: 'Update Settings',
                value: 'updateSettings',
                action: 'Update the settings in the database',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/settings',
                        body: "={{JSON.parse($parameter.settingsOption)}}",
                        encoding: 'json',
                        json: true
                    },
                },
            },
            {
                name: 'Test Smtp Settings',
                value: 'testSMTP',
                action: 'Test the smtp settings',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/settings/smtp/test',
                        body: "={{JSON.parse($parameter.smtpOption)}}",
                        encoding: 'json',
                        json: true
                    },
                },
            },
		],
		default: 'getSettings',
	},
];

export const adminOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['admin'],
			},
		},
		options: [
            {
                name: 'Restart the App',
                value: 'restart',
                action: 'Restart the app',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/admin/reload',
                    },
                },
            },
		],
		default: 'restart',
	},
];

export const transactionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['transaction'],
			},
		},
		options: [
            {
                name: 'Send a Transactional Email',
                value: 'sendTx',
                action: 'Send a transactional email',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/tx',
                        body: `={{JSON.stringify({"subscriber_id":Number($parameter.subscriberId), "template_id":Number($parameter.templateId), "from_email" : $parameter.senderEmail, "messenger": $parameter.messengerTx, content_type: $parameter.contentType, "data": JSON.parse($parameter.dataTx) })}}`,
                        encoding: 'json',
                        json: true
                    },
                },
            },
		],
		default: 'sendTx',
	},
];

export const logsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['logs'],
			},
		},
		options: [
            {
                name: 'Get the Logs',
                value: 'logs',
                action: 'Get the logs',
                routing: {
                    request: {
                        method: 'POST',
                        url: '=/logs',
                    },
                },
            },
		],
		default: 'logs',
	},
];