import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { e as entriesRaw } from "../../../chunks/ENTRIES.js";
function truncateTitle(title) {
  const maxLength = 36;
  if (title.length <= maxLength) {
    return title;
  }
  let i = maxLength;
  while (title[i] !== " ") {
    i--;
  }
  return `${title.slice(0, i)} …`;
}
function fundedYear(year, entry) {
  for (const period of entry.project.date) {
    if (period.from && period.to && year >= period.from.slice(0, 4) && year <= period.to.slice(0, 4)) {
      return true;
    }
  }
  return false;
}
function fixUrl(url) {
  const prefix = "https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/";
  const suffix = url.split("/PROJECTS/")[1];
  return prefix + suffix;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let entriesFiltered;
  const entries = entriesRaw;
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  const backEighteen = currentYear - 18;
  const forwardTwelve = currentYear + 12;
  const years = Array.from({ length: forwardTwelve - backEighteen + 1 }, (_, i) => String(backEighteen + i));
  entriesFiltered = entries.filter(([, entry]) => entry.project.date[0].from && entry.project.date[0].to);
  return `${$$result.head += `<!-- HEAD_svelte-16q4wy7_START -->${$$result.title = `<title>Closing the Gap in Non-Latin-Script Data – Timeline</title>`, ""}<!-- HEAD_svelte-16q4wy7_END -->`, ""} <div class="mx-auto max-w-[76rem] px-4"><table class="mx-auto w-full table-auto border-separate border-spacing-0 bg-ctgtan"><thead class="sticky top-0"><tr class="border-b border-slate-800"><th class="border-b border-r border-slate-800" data-svelte-h="svelte-1l1jm3t">Project title</th> ${each(years, (year, i) => {
    return `${i === years.length - 1 ? `<th class="border-b border-slate-800 px-1 py-1.5 text-sm">’${escape(year.slice(-2))}</th>` : `<th class="border-b border-r border-slate-800 px-1 py-1.5 text-sm">’${escape(year.slice(-2))}</th>`}`;
  })}</tr></thead> <tbody>${each(entriesFiltered, ([url, entry], i) => {
    return `<tr>${i === entriesFiltered.length - 1 ? `<td class="border-r border-slate-800 px-2 py-0.5">${escape(truncateTitle(entry.project.title))}</td> ${each(years, (year, j) => {
      return `${fundedYear(Number(year), entry) ? `<td class="bg-slate-800"></td>` : `${j === years.length - 1 ? `<td></td>` : `<td class="border-r border-slate-800/25"></td>`}`}`;
    })}` : `<td class="border-b border-r border-slate-800 px-2 py-0.5"><a${add_attribute("href", fixUrl(url), 0)} target="_blank" rel="noreferrer">${escape(truncateTitle(entry.project.title))}</a></td> ${each(years, (year, j) => {
      return `${fundedYear(Number(year), entry) ? `<td class="bg-slate-800"></td>` : `${j === years.length - 1 ? `<td class="border-b border-slate-800/25"></td>` : `<td class="border-b border-r border-slate-800/25"></td>`}`}`;
    })}`} </tr>`;
  })}</tbody></table></div>`;
});
export {
  Page as default
};
