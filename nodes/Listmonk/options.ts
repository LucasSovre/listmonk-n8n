import type { INodeProperties } from 'n8n-workflow';
import { defaultSettings, defaultEmailTest } from './defaultValues';
import { json } from 'express';

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
                ],
            },
        },
    }
    ];