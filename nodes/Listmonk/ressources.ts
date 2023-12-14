import type { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties = {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
        {
            name: 'Utils',
            value: 'utils',
        },
        {
            name: 'Settings',
            value: 'settings',
        },
        {
            name: "Admin",
            value: "admin",
        },
        /*{
            name: "Logs",
            value: "logs",
        },*/
        {
            name: "List",
            value: "list",
        },
        {
            name: "Campaign",
            value: "campaign",
        },
        {
            name: "Media",
            value: "media",
        },
        {
            name: "Template",
            value: "template",
        },
        {
            name: "Transaction",
            value: "transaction",
        },
    ],
    default: 'utils',
}