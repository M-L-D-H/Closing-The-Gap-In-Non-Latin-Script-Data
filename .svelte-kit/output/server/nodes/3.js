

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CQXWbC3u.js","_app/immutable/chunks/DnlpFiKk.js","_app/immutable/chunks/Dz3QtjmX.js"];
export const stylesheets = [];
export const fonts = [];
