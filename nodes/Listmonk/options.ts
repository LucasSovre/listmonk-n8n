import type { INodeProperties } from 'n8n-workflow';
import { defaultSettings, defaultEmailTest } from './defaultValues';

export const listmonkOptions: INodeProperties[] = [
    {
        displayName: 'Language',
        description: 'The language to querry on',
        required: true,
        name: 'languageId',
        type: 'string',
        default: 'en',
        displayOptions: {
            show: {
                operation: [
                    'langue',
                ],
            },
        },
    },
    {
        displayName: 'Name',
        required: true,
        name: 'name',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'createTemplate',
                    "modifyTemplate",
                    "createSubscriber",
                    "modifySubscriber",
                ],
            },
        },
    },
    {
        displayName: 'Subject',
        description: 'Mail subject',
        name: 'subject',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'createTemplate',
                    "modifyTemplate",
                ],
            },
        },
    },
    {
        displayName: 'Type',
        name: 'typeTemplate',
        type: 'options',
        options: [
            {
                name: 'Campaign',
                value: 'campaign',
            },
            {
                name: 'Transactional',
                value: 'tx',
            },
        ],
        default: 'campaign', // The initially selected option
        description: 'Template type',
        displayOptions: { // the resources and operations to display this element with
            show: {
                operation: [
                    "createTemplate",
                    "modifyTemplate",
                ]
            }
        },
    },
    {
        displayName: 'Body', // The value the user sees in the UI
        name: 'body', // The name used to reference the element UI within the code
        type: 'string',
        typeOptions: {
            editor: 'htmlEditor',
        },
        default: "", // Loads n8n's placeholder HTML template
        noDataExpression: true, // Prevent using an expression for the field
        description: 'Body of the template',
        displayOptions: { // the resources and operations to display this element with
            show: {
                operation: [
                    "createTemplate",
                    "modifyTemplate",
                ]
            }
        },
    },
    {
        displayName: 'Settings (JSON)',
        name: 'settingsOption',
        type: 'json',
        default: JSON.stringify(defaultSettings),
        required: true,
        description: 'The settings to update',
        displayOptions: {
            show: {
                operation: [
                    "updateSettings"
                ]
            }
        },
    },
    {
        displayName: 'Settings (JSON)',
        name: 'smtpOption',
        type: 'json',
        default: JSON.stringify(defaultEmailTest),
        required: true,
        description: 'The SMTP settings to test',
        displayOptions: {
            show: {
                operation: [
                    "testSMTP"
                ]
            }
        },
    },
    {
        displayName: 'Page',
        description: 'The page to querry on',
        required: true,
        name: 'page',
        type: 'number',
        default: 1,
        displayOptions: {
            show: {
                operation: [
                    'get',
                ],
            },
        },
    },
    {
        displayName: 'Per Page',
        description: 'The number of element per page to querry on',
        required: true,
        name: 'perPage',
        type: 'number',
        default: 25,
        displayOptions: {
            show: {
                operation: [
                    'get',
                ],
            },
        },
    },
    {
        displayName: 'Json Body',
        description: 'The JSON body to send',
        name: 'jsonBody',
        type: 'json',
        default: '{}',
        displayOptions: {
            show: {
                operation: [
                    'createList',
                    'updateList',
                    'createCampaign',
                    "updateCampaign",
                    "testCampaign",
                ],
            },
        },
    },
    {
        displayName: 'ID',
        description: 'The ID of the object',
        required: true,
        name: 'id',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'getList',
                    'updateList',
                    'deleteList',
                    'getCampaignById',
                    'getCampaignPreviewById',
                    'getCampaignStatsById',
                    "updateCampaign",
                    "deleteCampaign",
                    "testCampaign",
                    "getMediaById",
                    "deleteMedia",
                    "getTemplateById",
                    "getTemplatePreviewById",
                    "deleteTemplate",
                    "modifyTemplate",
                    "setTemplateAsDefault",
                    "geSubscriberById",
                    "deleteSubscriber",
                ],
            },
        },
    },
    {
        displayName: 'Template ID',
        required: true,
        name: 'templateId',
        type: 'number',
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'sendTx',
                ],
            },
        },
    },
    {
        displayName: 'Subscriber ID',
        required: true,
        name: 'subscriberId',
        type: 'number',
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'sendTx',
                    "modifySubscriber",
                ],
            },
        },
    },
    {
        displayName: 'Sender Email',
        description: 'The email of the sender',
        name: 'senderEmail',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'sendTx',
                ],
            },
        },
    },
    {
        displayName: 'Messenger',
        description: 'The messenger to use',
        name: 'messengerTx',
        type: 'string',
        default: 'email',
        displayOptions: {
            show: {
                operation: [
                    'sendTx',
                ],
            },
        },
    },
    {
        displayName: 'Content Type',
        name: 'contentType',
        type: 'options',
        options: [
            {
                name: 'HTML',
                value: 'html',
            },
            {
                name: 'Markdown',
                value: 'markdown',
            },
            {
                name: 'Plain',
                value: 'plain',
            }
        ],
        default: 'html', // The initially selected option
        displayOptions: { // the resources and operations to display this element with
            show: {
                operation: [
                    "sendTx",
                ]
            }
        },
    },
    {
        displayName: "Data",
        description: 'Optional nested JSON map',
        name: 'dataTx',
        type: 'json',
        default: '{}',
        displayOptions: {
            show: {
                operation: [
                    "sendTx",
                ],
            },
        },
    },
    ////
    //// Subscriber
    ////
    {
        displayName: 'Email',
        description: 'Subscriber email',
        name: 'subscriberEmail',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                operation: [
                    'createSubscriber',
                    "modifySubscriber",
                ],
            },
        },
    },
    {
        displayName: 'Status',
        name: 'subscriberStatus',
        type: 'options',
        options: [
            {
                name: 'Enabled',
                value: 'enabled',
            },
            {
                name: 'Disabled',
                value: 'disabled',
            },
            {
                name: 'Blocklisted',
                value: 'blocklisted',
            }
        ],
        default: 'enabled', // The initially selected option
        description: 'Subscriber status',
        displayOptions: { // the resources and operations to display this element with
            show: {
                operation: [
                    "createSubscriber",
                    "modifySubscriber",
                ]
            }
        },
    },
    {
        displayName: "Lists",
        description: 'Lists to add the subscriber to',
        name: 'subscriberLists',
        type: 'json',
        default: '[]',
        displayOptions: {
            show: {
                operation: [
                    "createSubscriber",
                    "modifySubscriber",
                ],
            },
        },
    },
    {
        displayName: "Attributes",
        description: 'Subscriber attributes',
        name: 'subscriberAttributes',
        type: 'json',
        default: '{}',
        displayOptions: {
            show: {
                operation: [
                    "createSubscriber",
                    "modifySubscriber",
                ],
            },
        },
    },
    {
        displayName: 'Preconfirm Subscriptions',
        name: 'preconfirmSubscriptions',
        type: 'boolean',
        default: true, // Initial state of the toggle
        description: 'Whether If true, subscriptions are marked as confirmed and no-optin emails are sent for double opt-in lists',
        displayOptions: {
            show: {
                operation: [
                    "createSubscriber",
                    "modifySubscriber",
                ],
            },
        },
    },
    ];