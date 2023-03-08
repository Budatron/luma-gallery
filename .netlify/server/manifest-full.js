export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","loading.gif","luma-links-short.json","luma-links.json"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.389c8224.js","imports":["_app/immutable/entry/start.389c8224.js","_app/immutable/chunks/index.79989a59.js","_app/immutable/chunks/singletons.419b8ba9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7e709f1b.js","imports":["_app/immutable/entry/app.7e709f1b.js","_app/immutable/chunks/index.79989a59.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
