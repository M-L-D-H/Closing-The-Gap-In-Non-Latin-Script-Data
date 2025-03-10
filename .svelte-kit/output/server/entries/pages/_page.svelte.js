import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as add_attribute } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { w as writable } from "../../chunks/index.js";
import { e as entriesRaw } from "../../chunks/ENTRIES.js";
const searchTerm = writable("");
const selectedTab = writable("search");
const selectedTerms = writable(/* @__PURE__ */ new Set());
const selectedEntries = writable([]);
const discipline = [
  "african_studies",
  "arabic_studies",
  "archaeology",
  "art_studies",
  "cultural_studies",
  "dialectology",
  "epigraphy",
  "egyptology",
  "geography",
  "history_studies",
  "iranian_studies",
  "islamic_studies",
  "jewish_studies",
  "lexicography",
  "linguistics",
  "literary_studies",
  "medicine_history",
  "music_studies",
  "ottoman_studies",
  "philosophy",
  "religion_studies",
  "science_history",
  "semitic_studies",
  "translation_studies",
  "turkology"
];
const topic = [
  "biographical_data",
  "classical_text",
  "computational_text_analysis",
  "digital_preservation",
  "digital_publishing",
  "e_learning",
  "hadith",
  "isnad",
  "language_documentation",
  "nahda",
  "pre_islamic_arabia",
  "religious_text",
  "research_data_management",
  "research_infrastructure",
  "text_reuse"
];
const output = [
  "audio",
  "catalog",
  "collaboration_platform",
  "corpus_output",
  "digital_edition",
  "encyclopedia",
  "htr",
  "image",
  "lexicon",
  "map",
  "ocr",
  "translation",
  "video",
  "visualization",
  "vre"
];
const resources = [
  "corpus_resource",
  "geodata",
  "inscription",
  "manuscript",
  "other"
];
const methods = [
  "annotation",
  "nlp",
  "network_analysis",
  "machine_learning",
  "stylometry",
  "tei"
];
const keywordsRaw = {
  discipline,
  topic,
  output,
  resources,
  methods
};
function fetchCategories(keywordsMap) {
  const usedKeys = Object.keys(keywordsMap);
  const allKeys = keywordsRaw;
  for (const [category, keywords] of Object.entries(allKeys)) {
    allKeys[category] = keywords.sort();
    for (const keyword of keywords) {
      if (!usedKeys.includes(keyword)) {
        allKeys[category] = allKeys[category].filter((i) => i !== keyword);
      }
    }
  }
  return allKeys;
}
function filterPlaces(places) {
  return places.filter((place) => place.place_name.text);
}
function getInvalidKeywords(keywordsMap, selectedTab2, selectedTerms2) {
  if (selectedTab2 !== "keywords" || selectedTerms2.size === 0) {
    return /* @__PURE__ */ new Set();
  }
  const selectedUrls = /* @__PURE__ */ new Set();
  let firstIteration = true;
  for (const keyword of selectedTerms2) {
    const nextUrls = keywordsMap[keyword];
    if (firstIteration) {
      nextUrls.forEach((url) => selectedUrls.add(url));
      firstIteration = false;
      continue;
    }
    for (const url of selectedUrls) {
      if (!nextUrls.includes(url)) {
        selectedUrls.delete(url);
      }
    }
  }
  const keywordsToDisable = /* @__PURE__ */ new Set();
  outer: for (const [keyword, urls] of Object.entries(keywordsMap)) {
    for (const url of urls) {
      if (selectedUrls.has(url)) continue outer;
    }
    keywordsToDisable.add(keyword);
  }
  return keywordsToDisable;
}
function getKeywords(entries) {
  const keywordsMap = {};
  for (const [url, data] of entries) {
    const keywords = data.project.keywords;
    for (const keyword of keywords) {
      if (keywordsMap[keyword]) {
        keywordsMap[keyword].push(url);
      } else {
        keywordsMap[keyword] = [url];
      }
    }
  }
  return keywordsMap;
}
function getLanguages(entries) {
  const languagesMap = {};
  for (const [url, data] of entries) {
    const languages = data.project.research_data.lang;
    for (const language of languages) {
      if (languagesMap[language]) {
        languagesMap[language].push(url);
      } else {
        languagesMap[language] = [url];
      }
    }
  }
  return languagesMap;
}
function updateHash(type, term) {
  selectedTerms.update((terms) => {
    if (terms.has(term)) {
      terms.delete(term);
    } else {
      terms.add(term);
    }
    return terms;
  });
  let termsArray = [];
  selectedTerms.subscribe((terms) => {
    termsArray = Array.from(terms);
  });
  if (termsArray.length === 0) {
    window.location.hash = "";
    return;
  }
  const termsString = termsArray.join(",");
  window.location.hash = `#${type}=${termsString}`;
}
const Arrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414z" clip-rule="evenodd"></path></svg>`;
});
const Brackets = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M6 6a2 2 0 0 1 2-2 1 1 0 0 0 0-2 4 4 0 0 0-4 4v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 4 4 1 1 0 0 0 0-2 2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2 1 1 0 0 0 0-2Z"></path></svg>`;
});
const Calendar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></svg>`;
});
const Lang = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 0 1 6.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z"></path><path d="M5 5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3a1 1 0 1 0-2 0v3H5V7h3a1 1 0 0 0 0-2H5z"></path></svg>`;
});
const Pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clip-rule="evenodd"></path></svg>`;
});
const prefix = "https://github.com/M-L-D-H/Closing-The-Gap-In-Non-Latin-Script-Data/blob/master/PROJECTS/";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let realPeriods;
  let suffix;
  let jsonLink;
  let { title } = $$props;
  let { description } = $$props;
  let { periods } = $$props;
  let { places } = $$props;
  let { languages } = $$props;
  let { websiteLinks } = $$props;
  let { url } = $$props;
  let { lastEdited } = $$props;
  let { keywords } = $$props;
  let { uuid } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.periods === void 0 && $$bindings.periods && periods !== void 0) $$bindings.periods(periods);
  if ($$props.places === void 0 && $$bindings.places && places !== void 0) $$bindings.places(places);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0) $$bindings.languages(languages);
  if ($$props.websiteLinks === void 0 && $$bindings.websiteLinks && websiteLinks !== void 0) $$bindings.websiteLinks(websiteLinks);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0) $$bindings.url(url);
  if ($$props.lastEdited === void 0 && $$bindings.lastEdited && lastEdited !== void 0) $$bindings.lastEdited(lastEdited);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0) $$bindings.keywords(keywords);
  if ($$props.uuid === void 0 && $$bindings.uuid && uuid !== void 0) $$bindings.uuid(uuid);
  realPeriods = periods.filter((period) => period.from);
  suffix = url.split("/PROJECTS/")[1];
  jsonLink = prefix + suffix;
  return `<div class="mb-auto w-[22.5rem] rounded-lg bg-ctgtan text-base lg:w-96"><div class="p-4 pb-0">${places.length > 0 ? `<div class="mb-3 flex gap-x-1.5"><div class="w-6 shrink-0">${validate_component(Pin, "Pin").$$render($$result, {}, {}, {})}</div> <div class="flex flex-wrap gap-x-1.5">${each(places, (place, i) => {
    return `<div><a${add_attribute("href", place.place_name.ref, 0)} target="_blank" rel="noreferrer" class="hover:underline">${escape(place.place_name.text)}</a>${i < places.length - 1 ? `,` : ``} </div>`;
  })}</div></div>` : ``} <h3 class="mb-3 text-xl font-medium"><a href="${"entry/#" + escape(uuid, true)}">${escape(title)}</a></h3> <div class="mb-3"><div class="mb-2">${each(realPeriods, (period) => {
    return `<div class="mb-2 flex items-center gap-x-1.5"><div class="w-7">${validate_component(Calendar, "Calendar").$$render($$result, {}, {}, {})}</div> <div class="font-mono">${escape(period.from.slice(0, 4))}</div> <div class="w-6">${validate_component(Arrow, "Arrow").$$render($$result, {}, {}, {})}</div> <div class="font-mono">${escape(period.to.slice(0, 4))}</div> </div>`;
  })}</div> ${languages.length > 0 ? `<div class="flex items-center gap-x-1.5"><div class="w-7">${validate_component(Lang, "Lang").$$render($$result, {}, {}, {})}</div> ${each(languages, (language, i) => {
    return `<div><code>${escape(language)}</code>${i < languages.length - 1 ? ` ,` : ``} </div>`;
  })}</div>` : ``}</div> <p class="mb-3.5">${escape(description)}</p> <div class="mb-4 flex flex-wrap gap-2 text-sm">${each(keywords, (keyword) => {
    return `<code class="rounded-md border border-slate-800 px-2 py-0.5">${escape(keyword)}</code>`;
  })}</div> <div class="flex gap-x-2">${each(websiteLinks, (link) => {
    return `<div class="w-8 rounded-full border border-slate-800 bg-ctgorange p-1"><a${add_attribute("href", link, 0)} target="_blank" rel="noreferrer" title="Link to website (may be multiple)" class="hover:text-amber-200">${validate_component(Link, "Link").$$render($$result, {}, {}, {})}</a> </div>`;
  })} <div class="w-8 rounded-full border border-slate-800 bg-ctgorange p-1"><a${add_attribute("href", jsonLink, 0)} target="_blank" rel="noreferrer" title="Link to JSON record" class="hover:text-amber-200">${validate_component(Brackets, "Brackets").$$render($$result, {}, {}, {})}</a></div></div></div> <div class="-mt-4 rounded-b-lg bg-slate-800 px-3 py-1.5"><p class="text-right text-sm text-gray-300">Last edit: <code>${escape(lastEdited)}</code></p></div></div>`;
});
const langNames = {
  akk: "Akkadian",
  amh: "Amharic",
  ara: "Arabic",
  arc: "Official Aramaic (700-300 BCE)",
  atz: "Arta",
  ave: "Avestan",
  bam: "Bambara",
  ben: "Bengali",
  bod: "Tibetan",
  bqi: "Bakhtiari",
  chg: "Chagatai",
  cop: "Coptic",
  dan: "Danish",
  dar: "Dargwa",
  deu: "German",
  efi: "Efik",
  egy: "Egyptian (Ancient)",
  elx: "Elamite",
  emy: "Epigraphic Mayan",
  eng: "English",
  erk: "South Efate",
  fas: "Persian",
  fra: "French",
  ful: "Fulah",
  gez: "Geez",
  gml: "Middle Low German",
  got: "Gothic",
  grc: "Ancient Greek (to 1453)",
  guj: "Gujarati",
  hac: "Gurani",
  hau: "Hausa",
  heb: "Hebrew",
  hin: "Hindi",
  hit: "Hittite",
  hun: "Hungarian",
  hye: "Armenian",
  imy: "Milyan",
  ind: "Indonesian",
  ita: "Italian",
  jav: "Javanese",
  jpn: "Japanese",
  jpr: "Judeo-Persian",
  jrb: "Judeo-Arabic",
  kac: "Kachin",
  kan: "Kannada",
  kas: "Kashmiri",
  kbl: "Kanembu",
  kgv: "Karas",
  khm: "Khmer",
  kur: "Kurdish",
  lat: "Latin",
  lav: "Latvian",
  lit: "Lithuanian",
  lzz: "Laz",
  mal: "Malayalam",
  mar: "Marathi",
  mku: "Konyanka Maninka",
  mlt: "Maltese",
  mon: "Mongolian",
  mzn: "Mazanderani",
  nep: "Nepali (macrolanguage)",
  nld: "Flemish",
  nrp: "North Picene",
  ofs: "Old Frisian",
  oge: "Old Georgian",
  orv: "Old Russian",
  osc: "Oscan",
  oss: "Ossetic",
  osx: "Old Saxon",
  pal: "Pahlavi",
  pli: "Pali",
  por: "Portuguese",
  que: "Quechua",
  raj: "Rajasthani",
  rus: "Russian",
  san: "Sanskrit",
  snd: "Sindhi",
  snk: "Soninke",
  sog: "Sogdian",
  spa: "Spanish",
  sqi: "Albanian",
  sux: "Sumerian",
  sva: "Svan",
  swe: "Swedish",
  syr: "Syriac",
  tab: "Tabassaran",
  tam: "Tamil",
  tdn: "Tondano",
  tel: "Telugu",
  tio: "Teop",
  tir: "Tigrinya",
  tks: "Takestani",
  tru: "Turoyo",
  tuh: "Taulil",
  tur: "Turkish",
  udi: "Udi",
  uga: "Ugaritic",
  und: "Undetermined",
  urd: "Urdu",
  vra: "Vera'a",
  wlm: "Middle Welsh",
  xbc: "Bactrian",
  xbm: "Middle Breton",
  xcr: "Carian",
  xeb: "Eblan",
  xlc: "Lycian",
  xld: "Lydian",
  xlp: "Lepontic",
  xmn: "Manichaean Middle Persian",
  xpg: "Phrygian",
  xpr: "Parthian",
  xsa: "Sabaean",
  xum: "Umbrian",
  xur: "Urartian",
  yid: "Yiddish",
  yor: "Yoruba",
  zho: "Chinese",
  zum: "Kumzari"
};
const Panel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let keywordsToDisable;
  let validSelection;
  let { keywordsCategorized } = $$props;
  let { languages } = $$props;
  const entries = entriesRaw;
  let searchTermValue;
  let selectedTabValue;
  let selectedTermsValue;
  searchTerm.subscribe((value) => {
    searchTermValue = value;
  });
  selectedTab.subscribe((value) => {
    selectedTabValue = value;
  });
  selectedTerms.subscribe((value) => {
    selectedTermsValue = value;
  });
  const keywordsMap = getKeywords(entries);
  function validate(keywords, langs, selections, tab) {
    if (tab === "search") {
      return false;
    }
    const keywordsFlat = Object.values(keywords).flat();
    const established = tab === "keywords" ? keywordsFlat : langs;
    if (established.length === 0) {
      return false;
    }
    for (const selection of selections) {
      if (!established.includes(selection)) {
        selectedTerms.update((value) => {
          value.delete(selection);
          return value;
        });
      }
    }
    if (selections.size === 0) {
      return false;
    } else {
      return true;
    }
  }
  if ($$props.keywordsCategorized === void 0 && $$bindings.keywordsCategorized && keywordsCategorized !== void 0) $$bindings.keywordsCategorized(keywordsCategorized);
  if ($$props.languages === void 0 && $$bindings.languages && languages !== void 0) $$bindings.languages(languages);
  keywordsToDisable = getInvalidKeywords(keywordsMap, selectedTabValue, selectedTermsValue);
  validSelection = validate(keywordsCategorized, languages, selectedTermsValue, selectedTabValue);
  return `<div class="mb-3.5 rounded-lg bg-ctgtan p-4"><div class="mb-4 border-b border-b-slate-800"><div class="flex gap-2 text-lg font-normal"><button class="${[
    "rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-ctgorange",
    (selectedTabValue === "search" ? "bg-ctgorange" : "") + " " + (selectedTabValue === "search" ? "border-slate-800" : "") + " " + (selectedTabValue !== "search" ? "border-ctgtan" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-1r2lmd">Search</button> <button class="${[
    "rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-ctgorange",
    (selectedTabValue === "keywords" ? "bg-ctgorange" : "") + " " + (selectedTabValue === "keywords" ? "border-slate-800" : "") + " " + (selectedTabValue !== "keywords" ? "border-ctgtan" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-17c9b2h">Keywords</button> <button class="${[
    "rounded-t-md border-x border-t px-2 py-0.5 hover:border-slate-800 hover:bg-ctgorange",
    (selectedTabValue === "languages" ? "bg-ctgorange" : "") + " " + (selectedTabValue === "languages" ? "border-slate-800" : "") + " " + (selectedTabValue !== "languages" ? "border-ctgtan" : "")
  ].join(" ").trim()}" data-svelte-h="svelte-lfr7n6">Languages</button></div></div> ${selectedTabValue !== "search" && validSelection ? `<p class="-mt-1 mb-3.5"><button class="font-normal text-red-900 underline" data-svelte-h="svelte-1fhylpm">Clear selection</button></p>` : ``} ${selectedTabValue === "languages" ? `<div class="flex flex-wrap gap-2.5 text-sm">${each(languages, (language) => {
    return `<button class="${[
      "rounded-md border px-2 py-0.5 font-mono hover:border-ctgblue hover:bg-ctgblue hover:text-gray-50",
      (selectedTermsValue.has(language) ? "bg-ctgblue" : "") + " " + (selectedTermsValue.has(language) ? "border-ctgblue" : "") + " " + (!selectedTermsValue.has(language) ? "border-slate-800" : "") + " " + (selectedTermsValue.has(language) ? "text-gray-50" : "")
    ].join(" ").trim()}"${add_attribute("title", langNames[language] || language, 0)}>${escape(language)} </button>`;
  })}</div> <p class="-mb-1.5 mt-2.5" data-svelte-h="svelte-bmkt0v"><em>Hover on a language code to see the full name</em></p>` : `${selectedTabValue === "keywords" ? `${each(Object.keys(keywordsCategorized), (category, i) => {
    return `<div class="lg:flex"><div class="mb-4 text-sm lg:mb-0 lg:w-1/5 xl:w-1/6"><code><em>${escape(category)}</em></code></div> <div class="flex flex-wrap gap-2.5 text-sm lg:w-4/5 xl:w-5/6">${each(keywordsCategorized[category], (keyword) => {
      return `<button class="${[
        "rounded-md border px-2 py-0.5 font-mono",
        (selectedTermsValue.has(keyword) ? "bg-ctgblue" : "") + " " + (selectedTermsValue.has(keyword) ? "border-ctgblue" : "") + " " + (!selectedTermsValue.has(keyword) ? "border-slate-800" : "") + " " + (keywordsToDisable.has(keyword) ? "cursor-not-allowed" : "") + " " + (!keywordsToDisable.has(keyword) ? "hover:bg-ctgblue" : "") + " " + (!keywordsToDisable.has(keyword) ? "hover:border-ctgblue" : "") + " " + (!keywordsToDisable.has(keyword) ? "hover:text-gray-50" : "") + " " + (keywordsToDisable.has(keyword) ? "opacity-50" : "") + " " + (selectedTermsValue.has(keyword) ? "text-gray-50" : "")
      ].join(" ").trim()}" ${!selectedTermsValue.has(keyword) && keywordsToDisable.has(keyword) ? "disabled" : ""}>${keyword === "corpus_output" || keyword === "corpus_resource" ? `corpus` : `${escape(keyword)}`} </button>`;
    })} </div></div> ${i < Object.keys(keywordsCategorized).length - 1 ? `<hr class="my-4 border-slate-800">` : ``}`;
  })}` : `<div class="flex gap-2 font-normal"><input type="text" autocorrect="off" autocapitalize="none" class="w-56 rounded border border-ctgblue bg-gray-100 px-2 py-1"${add_attribute("value", searchTermValue, 0)}> ${searchTermValue ? `<button class="rounded bg-red-900 px-2 text-gray-100" data-svelte-h="svelte-t8b16s">Clear</button>` : ``}</div>`}`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let languages;
  let filtered;
  const entries = entriesRaw;
  const keywordsMap = getKeywords(entries);
  const keywordCats = fetchCategories(keywordsMap);
  const languagesMap = getLanguages(entries);
  let searchTermValue;
  searchTerm.subscribe((value) => {
    searchTermValue = value;
  });
  let selectedEntriesValue;
  selectedEntries.subscribe((value) => {
    selectedEntriesValue = value;
  });
  let selectedTabValue;
  selectedTab.subscribe((value) => {
    selectedTabValue = value;
  });
  let selectedTermsValue;
  selectedTerms.subscribe((value) => {
    selectedTermsValue = value;
  });
  function filterEntries(entries2, searchTerm2, selectedTab2, selectedTerms2) {
    if (selectedTab2 === "search") {
      if (searchTerm2) {
        return selectedEntriesValue;
      }
      return entries2;
    }
    if (selectedTerms2.size === 0) {
      return entries2;
    }
    const map = selectedTab2 === "keywords" ? keywordsMap : languagesMap;
    let matches = [];
    let firstIteration = true;
    for (const term of selectedTerms2) {
      if (!map[term]) {
        updateHash(selectedTab2, term);
        return entries2;
      }
      const newMatches = map[term];
      if (firstIteration) {
        matches = newMatches;
        firstIteration = false;
        continue;
      }
      matches = matches.filter((value) => newMatches.includes(value));
    }
    return entries2.filter(([url]) => matches.includes(url));
  }
  languages = Object.keys(languagesMap).sort();
  filtered = filterEntries(entries, searchTermValue, selectedTabValue, selectedTermsValue);
  return ` ${$$result.head += `<!-- HEAD_svelte-1hny7as_START -->${$$result.title = `<title>Closing the Gap in Non-Latin-Script Data – Projects</title>`, ""}<meta name="twitter:title" content="Closing the Gap in Non-Latin-Script Data – Projects"><!-- HEAD_svelte-1hny7as_END -->`, ""} <div class="mx-auto max-w-[76rem] px-4">${validate_component(Panel, "Panel").$$render(
    $$result,
    {
      keywordsCategorized: keywordCats,
      languages
    },
    {},
    {}
  )} <p class="mb-3.5 text-center text-lg font-normal text-gray-50"><code>${escape(filtered.length)}</code> ${escape(filtered.length === 1 ? "item" : "items")}</p> <div class="flex flex-wrap justify-center gap-4 lg:justify-start">${each(filtered, ([url, data]) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        title: data.project.title,
        description: data.project.project_desc,
        periods: data.project.date,
        places: filterPlaces(data.project.places),
        languages: data.project.lang,
        websiteLinks: data.project.websites,
        url,
        lastEdited: data.record_metadata.last_edited_on || data.record_metadata.record_created_on,
        keywords: data.project.keywords,
        uuid: data.record_metadata.uuid
      },
      {},
      {}
    )}`;
  })}</div></div>`;
});
export {
  Page as default
};
