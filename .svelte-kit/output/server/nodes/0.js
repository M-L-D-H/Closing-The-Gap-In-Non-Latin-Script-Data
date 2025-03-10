import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.y8twPULy.js","_app/immutable/chunks/DnlpFiKk.js","_app/immutable/chunks/Dz3QtjmX.js","_app/immutable/chunks/BP3W_wxY.js","_app/immutable/chunks/y_BRHp1l.js","_app/immutable/chunks/DBwKMptS.js"];
export const stylesheets = ["_app/immutable/assets/0.Dw2PQ_W0.css"];
export const fonts = [];
