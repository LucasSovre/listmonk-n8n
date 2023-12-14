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
        description: 'The name',
        required: true,
        name: 'name',
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
        displayName: 'Subject',
        description: 'Mail subject',
        required: false,
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
        default: {}, // The initially selected option
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
        description: 'body of the template',
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
        displayName: 'Per page',
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
        displayName: "Json body",
        description: 'The json body to send',
        required: false,
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
        displayName: "Id",
        description: 'The id of the object',
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
                    "setTemplateAsDefault"
                ],
            },
        },
    },
    {
        displayName: 'Template id',
        description: 'The template id',
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
        displayName: 'Subscriber id',
        description: 'The subscriber id',
        required: true,
        name: 'subscriberId',
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
        displayName: 'Sender email',
        description: 'The email of the sender',
        required: false,
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
        required: false,
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
        displayName: 'Content type',
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
        default: {
            name: 'HTML',
            value: 'html',
        }, // The initially selected option
        description: 'Content type',
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
        required: false,
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
    ];