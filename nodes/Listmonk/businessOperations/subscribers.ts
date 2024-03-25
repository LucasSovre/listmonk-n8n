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
				name: 'Create a New Subscriber',
				value: 'createSubscriber',
				action: 'Create a new subscriber',
				routing: {
					request: {
						method: 'POST',
						url: '/subscribers',
						body: `={{JSON.stringify({"email":$parameter.subscriberEmail, "name":$parameter.name, "status" : $parameter.subscriberStatus, "lists": JSON.parse($parameter.subscriberLists), attribs: JSON.parse($parameter.subscriberAttributes), "preconfirm_subscriptions": Boolean($parameter.preconfirmSubscriptions) })}}`,
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
							query: '=email=\'{{$parameter.subscriberEmail}}\'',
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
				action: 'Add or remove multiple subscribers to and from given lists or mark them unsubscribed in list',
				routing: {
					request: {
						method: 'PUT',
						url: '/subscribers/lists',
						body: '{{JSON.stringify({"ids":JSON.parse($parameter.subscriberIds), "action":$parameter.subscriptionAction, "target_list_ids":JSON.parse($parameter.listIds), "status":$parameter.subscriptionStatus })}}',
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
						body: `={{JSON.stringify({"email":$parameter.subscriberEmail, "name":$parameter.name, "status" : $parameter.subscriberStatus, "lists": JSON.parse($parameter.subscriberLists), attribs: JSON.parse($parameter.subscriberAttributes), "preconfirm_subscriptions": Boolean($parameter.preconfirmSubscriptions) })}}`,
						encoding: 'json',
						json: true,
					},
				},
			},
		],
		default: 'get',
	},
];
