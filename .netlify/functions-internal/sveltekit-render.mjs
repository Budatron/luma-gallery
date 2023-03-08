import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","loading.gif","luma-links-short.json","luma-links.json"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2a2ac6f1.js","imports":["_app/immutable/entry/start.2a2ac6f1.js","_app/immutable/chunks/index.79989a59.js","_app/immutable/chunks/singletons.4b4bc56f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9560c69a.js","imports":["_app/immutable/entry/app.9560c69a.js","_app/immutable/chunks/index.79989a59.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
