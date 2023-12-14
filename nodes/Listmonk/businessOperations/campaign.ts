import type { INodeProperties } from 'n8n-workflow';

export const campaignOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['campaign'],
			},
		},
        options: [
            {
				name: 'Get',
				value: 'get',
				action: 'Get all Campaigns',
				routing: {
					request: {
						method: 'GET',
						url: '/campaigns',
                        qs: {
                            "per_page" : "={{$parameter.perPage}}",
                            "page" : "={{$parameter.page}}",
                        }
					},
				},
			},
            {
				name: 'Get by id',
				value: 'getCampaignById',
				action: 'Get campaign by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter.id}}',
					},
				},
			},
            {
				name: 'Get preview by id',
				value: 'getCampaignPreviewById',
				action: 'Get campaign preview by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/campaigns/{{$parameter.id}}/preview',
					},
				},
			},
            {
				name: 'Get stats by id',
				value: 'getCampaignStatsById',
				action: 'Get campaign stats by id',
				routing: {
					request: {
						method: 'GET',
						url: '/campaigns/running/stats',
                        qs: {
                            "campaign_id" : "={{$parameter.id}}",
                        }
					},
				},
			},
            {
                name: 'Create',
                value: 'createCampaign',
                action: 'Create a campaign',
                routing: {
                    request: {
                        method: 'POST',
                        url: '/campaigns',
                        body: "={{JSON.parse($parameter.jsonBody)}}",
                        encoding: 'json',
                        json: true
                    }
                }
            },
            {
                name: 'Update',
                value: 'updateCampaign',
                action: 'Update a campaign',
                routing: {
                    request: {
                        method: 'PUT',
                        url: '=/campaigns/{{$parameter.id}}',
                        body: "={{JSON.parse($parameter.jsonBody)}}",
                        encoding: 'json',
                        json: true
                    }
                }
            },
            {
                name: 'Delete',
                value: 'deleteCampaign',
                action: 'Delete a campaign',
                routing: {
                    request: {
                        method: 'DELETE',
                        url: '=/campaigns/{{$parameter.id}}',
                    }
                }
            },
            {
				name: 'Test sending the campaign',
				value: 'testCampaign',
				action: 'Test sending the campaign',
				routing: {
					request: {
						method: 'POST',
						url: '=/campaigns/{{$parameter.id}}/test',
                        body: "={{JSON.parse($parameter.jsonBody)}}",
                        encoding: 'json',
                        json: true
					},
				},
			},
        ],
        default : "get"
    }
];