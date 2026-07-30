# n8n-nodes-listmonk

This is a n8n community node. It lets you use Listmonk in your n8n workflows.

Listmonk is a self-hosted, high performance mailing list and newsletter manager. It comes as a standalone binary and the only dependency is a Postgres database.

If you need more functionalities not implemented yet, do not hesitate to reach me out on lucas.sovre@proton.me

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node allow to easily automate your listmonk functionalities :
- Lists
- Subscribers
- Campaigns
- Media
- Templates
- Transactional

## Credentials

The credentials are basic auth, see the [official api doc](https://listmonk.app/docs/apis/apis/)

On listmonk v3 and later, do not use your admin login. Create an API user under **Admin -> Users -> API users**, and use its name as *User* and its token as *Password*. Give that API user the `subscribers:sql_query` permission if you want to use the *Get by Email* operation, which filters with a SQL expression.

## Compatibility

Tested against n8n 1.x with `n8n-workflow` 2.x, and listmonk v6. Node 20.15 or later is required to build.

## Usage

...

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [listmonk api doc](https://listmonk.app/docs/apis/apis/)

## Version history

- 1.1 : Build against current n8n (`n8n-workflow` 2.x, TypeScript 5.8), credentials moved to `authenticate` with a credential test, and operations resynced with the listmonk v6 API — fixed "get subscriber by email" (qualified and escaped SQL expression), `GET /logs` (was POST, resource re-enabled), dropped the non-existent `disabled` subscriber status; added campaign "set status" and subscriber blocklist / bounces / opt-in
- 1.0 : Include most of the API functionalities


