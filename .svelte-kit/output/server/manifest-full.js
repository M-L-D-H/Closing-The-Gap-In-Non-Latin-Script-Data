export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Closing-The-Gap-In-Non-Latin-Script-Data/_app",
	assets: new Set([".nojekyll","fonts/fira-sans-light-italic-latin-ext.woff2","fonts/fira-sans-light-italic-latin.woff2","fonts/fira-sans-light-latin-ext.woff2","fonts/fira-sans-light-latin.woff2","fonts/fira-sans-medium-latin-ext.woff2","fonts/fira-sans-medium-latin.woff2","fonts/fira-sans-regular-italic-latin-ext.woff2","fonts/fira-sans-regular-italic-latin.woff2","fonts/fira-sans-regular-latin-ext.woff2","fonts/fira-sans-regular-latin.woff2","icon.svg","icon_OLD.svg","og.jpg"]),
	mimeTypes: {".woff2":"font/woff2",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BmqmfReu.js",app:"_app/immutable/entry/app.DMsvx2fx.js",imports:["_app/immutable/entry/start.BmqmfReu.js","_app/immutable/chunks/BP3W_wxY.js","_app/immutable/chunks/DnlpFiKk.js","_app/immutable/chunks/y_BRHp1l.js","_app/immutable/entry/app.DMsvx2fx.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/DnlpFiKk.js","_app/immutable/chunks/Dz3QtjmX.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contribute",
				pattern: /^\/contribute\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/entry",
				pattern: /^\/entry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/timeline",
				pattern: /^\/timeline\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/visualizations",
				pattern: /^\/visualizations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
