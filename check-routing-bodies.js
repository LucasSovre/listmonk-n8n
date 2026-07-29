/**
 * n8n's routing engine seeds `options.body = {}` per displayed property and merges them,
 * so a body expression that evaluates to a *string* (e.g. JSON.stringify(...)) is dropped
 * and the request goes out with an empty body. Every routing body must evaluate to an object.
 *
 * Run: node check-routing-bodies.js   (after npm run build)
 */
const assert = require('assert');
const { Listmonk } = require('./dist/nodes/Listmonk/Listmonk.node.js');

// Stub $parameter: JSON-ish defaults so JSON.parse() calls inside the expressions work.
const $parameter = new Proxy(
	{},
	{
		get: (_t, key) => {
			if (/lists|ids|IDs/i.test(String(key))) return '[]';
			if (/attributes|attribs|data|json|option/i.test(String(key))) return '{}';
			return 'x';
		},
	},
);

let checked = 0;
for (const property of new Listmonk().description.properties) {
	for (const option of property.options ?? []) {
		const body = option.routing?.request?.body;
		if (body === undefined) continue;
		assert.strictEqual(typeof body, 'string', `${option.value}: body must be an expression`);
		assert.ok(body.startsWith('={{') && body.endsWith('}}'), `${option.value}: not an expression`);

		const expression = body.slice(3, -2);
		// eslint-disable-next-line no-new-func
		const value = new Function('$parameter', `return (${expression});`)($parameter);
		assert.strictEqual(
			typeof value,
			'object',
			`${option.value}: body expression returns ${typeof value}, n8n will drop it — return an object literal, not JSON.stringify()`,
		);
		checked++;
	}
}

assert.ok(checked > 10, `expected to check every write operation, only saw ${checked}`);
console.log(`ok - ${checked} routing bodies evaluate to objects`);
