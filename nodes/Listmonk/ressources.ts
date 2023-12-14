import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties = {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
        {
            name: "Admin",
            value: "admin",
        },
        {
            name: "Campaign",
            value: "campaign",
        },
        {
            name: "List",
            value: "list",
        },
        /*{
            name: "Logs",
            value: "logs",
        },*/
        {
            name: "Media",
            value: "media",
        },
        {
            name: 'Setting',
            value: 'settings',
        },
        {
            name: "Subscriber",
            value: "subscriber",
        },
        {
            name: "Template",
            value: "template",
        },
        {
            name: "Transaction",
            value: "transaction",
        },
        {
            name: 'Util',
            value: 'utils',
        },
    ],
    default: 'utils',
}