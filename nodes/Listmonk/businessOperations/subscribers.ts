import type { INodeProperties } from 'n8n-workflow';

export const subscriberOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
			},
		},
		options: [
			{
				name: 'Blocklist Subscriber by ID',
				value: 'blocklistSubscriber',
				action: 'Blocklist subscriber by id',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscribers/{{$parameter.id}}/blocklist',
					},
				},
			},
			{
				name: 'Create a New Subscriber',
				value: 'createSubscriber',
				action: 'Create a new subscriber',
				routing: {
					request: {
						method: 'POST',
						url: '/subscribers',
						body: `={{ ({"email":$parameter.subscriberEmail.trim(), "name":$parameter.name, "status" : $parameter.subscriberStatus, "lists": JSON.parse($parameter.subscriberLists).map(Number), attribs: JSON.parse($parameter.subscriberAttributes), "preconfirm_subscriptions": Boolean($parameter.preconfirmSubscriptions) }) }}`,
						encoding: 'json',
						json: true,
					},
				},
			},
			{
				name: 'Delete Subscriber by ID',
				value: 'deleteSubscriber',
				action: 'Delete subscriber by id',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/subscribers/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get all subscribers',
				routing: {
					request: {
						method: 'GET',
						url: '/subscribers',
					},
				},
			},
			{
				name: 'Get by Email',
				value: 'getByEmail',
				action: 'Get by email',
				routing: {
					request: {
						method: 'GET',
						url: '/subscribers',
						qs: {
							// SQL expression is injected raw by listmonk, so qualify the column and
							// escape single quotes in the email
							query:
								'=subscribers.email = \'{{ $parameter.searchEmail.trim().toLowerCase().replaceAll("\'", "\'\'") }}\'',
						},
					},
				},
			},
			{
				name: 'Get by List ID',
				value: 'getByListId',
				action: 'Get by list id',
				routing: {
					request: {
						method: 'GET',
						url: '/subscribers',
						qs: {
							list_id: '={{$parameter.listId}}',
						},
					},
				},
			},
			{
				name: 'Get Subscriber Bounces by ID',
				value: 'getSubscriberBounces',
				action: 'Get subscriber bounces by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/subscribers/{{$parameter.id}}/bounces',
					},
				},
			},
			{
				name: 'Get Subscriber by ID',
				value: 'geSubscriberById',
				action: 'Get subscriber by id',
				routing: {
					request: {
						method: 'GET',
						url: '=/subscribers/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Manage Subscriber List',
				value: 'manageSubscribersLists',
				action: 'Manage subscriber list',
				routing: {
					request: {
						method: 'PUT',
						url: '/subscribers/lists',
						body: '={{ ({"ids":JSON.parse($parameter.subscriberIDs).map(Number), "action":$parameter.subscriptionAction, "target_list_ids":JSON.parse($parameter.listIDs).map(Number), "status":$parameter.subscriptionStatus }) }}',
						encoding: 'json',
						json: true,
					},
				},
			},
			{
				name: 'Modify a Subscriber',
				value: 'modifySubscriber',
				action: 'Modify a subscriber',
				routing: {
					request: {
						method: 'PUT',
						url: '=/subscribers/{{$parameter.subscriberId}}',
						body: `={{ ({"email":$parameter.subscriberEmail.trim(), "name":$parameter.name, "status" : $parameter.subscriberStatus, "lists": JSON.parse($parameter.subscriberLists).map(Number), attribs: JSON.parse($parameter.subscriberAttributes), "preconfirm_subscriptions": Boolean($parameter.preconfirmSubscriptions) }) }}`,
						encoding: 'json',
						json: true,
					},
				},
			},
			{
				name: 'Send Opt-in Confirmation by ID',
				value: 'sendSubscriberOptin',
				action: 'Send opt in confirmation by id',
				routing: {
					request: {
						method: 'POST',
						url: '=/subscribers/{{$parameter.id}}/optin',
					},
				},
			},
		],
		default: 'get',
	},
];
