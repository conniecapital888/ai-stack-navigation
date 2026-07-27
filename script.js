const tools = [
  { id: "chatgpt", name: "ChatGPT", category: "对话写作", domain: "chatgpt.com", url: "https://chatgpt.com/", price: "免费起", featured: true, added: 36, description: "通用 AI 助手，适合写作、分析、学习、图像理解与日常脑暴。", tags: ["全能", "中文"] },
  { id: "claude", name: "Claude", category: "对话写作", domain: "claude.ai", url: "https://claude.ai/", price: "免费起", featured: true, added: 35, description: "擅长长文阅读、自然写作与复杂任务拆解，支持超长上下文。", tags: ["长文本", "推理"] },
  { id: "gemini", name: "Gemini", category: "对话写作", domain: "gemini.google.com", url: "https://gemini.google.com/", price: "免费起", added: 34, description: "Google 的多模态助手，可结合搜索、文档与图片完成多类任务。", tags: ["多模态", "搜索"] },
  { id: "perplexity", name: "Perplexity", category: "搜索研究", domain: "perplexity.ai", url: "https://www.perplexity.ai/", price: "免费起", featured: true, added: 33, description: "带来源引用的 AI 搜索引擎，适合快速调研与事实核查。", tags: ["搜索", "引用"] },
  { id: "genspark", name: "Genspark", category: "搜索研究", domain: "genspark.ai", url: "https://www.genspark.ai/", price: "免费起", added: 32, description: "将多个信息源整理为可阅读页面，适合行程、产品和主题研究。", tags: ["研究", "智能体"] },
  { id: "consensus", name: "Consensus", category: "搜索研究", domain: "consensus.app", url: "https://consensus.app/", price: "免费起", added: 31, description: "面向论文的 AI 搜索工具，帮助快速理解学术研究中的共识。", tags: ["论文", "学术"] },
  { id: "midjourney", name: "Midjourney", category: "图像设计", domain: "midjourney.com", url: "https://www.midjourney.com/", price: "付费", added: 30, description: "高质量 AI 图像生成工具，擅长风格化视觉和商业创意。", tags: ["图像", "创意"] },
  { id: "firefly", name: "Adobe Firefly", category: "图像设计", domain: "firefly.adobe.com", url: "https://firefly.adobe.com/", price: "免费起", added: 29, description: "Adobe 的生成式设计套件，支持文生图、生成填充和设计工作流。", tags: ["设计", "Adobe"] },
  { id: "canva", name: "Canva Magic Studio", category: "图像设计", domain: "canva.com", url: "https://www.canva.com/magic-studio/", price: "免费起", added: 28, description: "把 AI 写作、图像和演示生成整合进易用的在线设计平台。", tags: ["模板", "海报"] },
  { id: "leonardo", name: "Leonardo AI", category: "图像设计", domain: "leonardo.ai", url: "https://leonardo.ai/", price: "免费起", added: 27, description: "提供模型训练、画布编辑与一致性控制的 AI 视觉创作平台。", tags: ["图像", "模型"] },
  { id: "ideogram", name: "Ideogram", category: "图像设计", domain: "ideogram.ai", url: "https://ideogram.ai/", price: "免费起", added: 26, description: "擅长在生成图片中呈现清晰文字，适合海报和品牌视觉。", tags: ["文字", "海报"] },
  { id: "cursor", name: "Cursor", category: "编程开发", domain: "cursor.com", url: "https://www.cursor.com/", price: "免费起", added: 25, description: "围绕代码库理解打造的 AI 编辑器，支持补全、问答与代理式编程。", tags: ["编辑器", "代码"] },
  { id: "copilot", name: "GitHub Copilot", category: "编程开发", domain: "github.com", url: "https://github.com/features/copilot", price: "免费起", added: 24, description: "融入主流编辑器与 GitHub 工作流的 AI 编程助手。", tags: ["代码", "GitHub"] },
  { id: "windsurf", name: "Windsurf", category: "编程开发", domain: "windsurf.com", url: "https://windsurf.com/", price: "免费起", added: 23, description: "支持多文件协作和连续上下文的代理式 AI 编程环境。", tags: ["智能体", "IDE"] },
  { id: "replit", name: "Replit Agent", category: "编程开发", domain: "replit.com", url: "https://replit.com/ai", price: "免费起", added: 22, description: "通过自然语言从想法生成并部署应用，适合快速制作原型。", tags: ["原型", "部署"] },
  { id: "v0", name: "v0", category: "编程开发", domain: "v0.dev", url: "https://v0.dev/", price: "免费起", added: 21, description: "通过提示词生成网页界面与 React 代码，适合前端原型。", tags: ["前端", "UI"] },
  { id: "notion", name: "Notion AI", category: "办公效率", domain: "notion.so", url: "https://www.notion.so/product/ai", price: "付费", added: 20, description: "在笔记和知识库中完成总结、检索、写作与会议整理。", tags: ["笔记", "知识库"] },
  { id: "gamma", name: "Gamma", category: "办公效率", domain: "gamma.app", url: "https://gamma.app/", price: "免费起", added: 19, description: "快速生成结构完整、视觉统一的演示文稿、网页和文档。", tags: ["PPT", "演示"] },
  { id: "napkin", name: "Napkin AI", category: "办公效率", domain: "napkin.ai", url: "https://www.napkin.ai/", price: "免费起", added: 18, description: "把文字内容转为可编辑的信息图，适合报告和演示表达。", tags: ["图表", "表达"] },
  { id: "otter", name: "Otter.ai", category: "办公效率", domain: "otter.ai", url: "https://otter.ai/", price: "免费起", added: 17, description: "会议录音、实时转写与摘要工具，支持自动提取行动项。", tags: ["会议", "转写"] },
  { id: "tldv", name: "tl;dv", category: "办公效率", domain: "tldv.io", url: "https://tldv.io/", price: "免费起", added: 16, description: "面向视频会议的录制与 AI 摘要工具，方便团队检索和复盘。", tags: ["会议", "团队"] },
  { id: "runway", name: "Runway", category: "视频音频", domain: "runwayml.com", url: "https://runwayml.com/", price: "免费起", added: 15, description: "专业级 AI 视频生成与编辑平台，覆盖镜头生成和视觉特效。", tags: ["视频", "生成"] },
  { id: "heygen", name: "HeyGen", category: "视频音频", domain: "heygen.com", url: "https://www.heygen.com/", price: "免费起", added: 14, description: "通过数字人和语音克隆快速制作讲解、营销与多语言视频。", tags: ["数字人", "翻译"] },
  { id: "suno", name: "Suno", category: "视频音频", domain: "suno.com", url: "https://suno.com/", price: "免费起", added: 13, description: "输入简单描述即可生成包含人声的完整歌曲，风格覆盖广。", tags: ["音乐", "歌曲"] },
  { id: "elevenlabs", name: "ElevenLabs", category: "视频音频", domain: "elevenlabs.io", url: "https://elevenlabs.io/", price: "免费起", added: 12, description: "自然度较高的 AI 语音平台，支持配音、克隆和多语言朗读。", tags: ["配音", "语音"] },
  { id: "descript", name: "Descript", category: "视频音频", domain: "descript.com", url: "https://www.descript.com/", price: "免费起", added: 11, description: "像编辑文档一样剪辑音视频，并提供转写、降噪与 AI 配音。", tags: ["剪辑", "播客"] },
  { id: "deepl", name: "DeepL", category: "语言学习", domain: "deepl.com", url: "https://www.deepl.com/", price: "免费起", added: 10, description: "强调自然表达的 AI 翻译与写作工具，适合正式文本润色。", tags: ["翻译", "润色"] },
  { id: "grammarly", name: "Grammarly", category: "语言学习", domain: "grammarly.com", url: "https://www.grammarly.com/", price: "免费起", added: 9, description: "提供英文语法检查、语气建议和生成式改写的写作助手。", tags: ["英文", "校对"] },
  { id: "elsa", name: "ELSA Speak", category: "语言学习", domain: "elsaspeak.com", url: "https://elsaspeak.com/", price: "免费起", added: 8, description: "通过语音识别提供英文发音反馈和个性化口语练习。", tags: ["口语", "发音"] },
  { id: "quillbot", name: "QuillBot", category: "语言学习", domain: "quillbot.com", url: "https://quillbot.com/", price: "免费起", added: 7, description: "面向英文写作的改写、摘要、语法检查和引用生成工具。", tags: ["改写", "摘要"] },
  { id: "zapier", name: "Zapier AI", category: "自动化", domain: "zapier.com", url: "https://zapier.com/ai", price: "免费起", added: 6, description: "用自然语言连接常用应用并搭建自动化流程，适合业务团队。", tags: ["工作流", "连接器"] },
  { id: "make", name: "Make", category: "自动化", domain: "make.com", url: "https://www.make.com/", price: "免费起", added: 5, description: "可视化连接应用、API 与 AI 模型，搭建更复杂的自动化流程。", tags: ["无代码", "流程"] },
  { id: "n8n", name: "n8n", category: "自动化", domain: "n8n.io", url: "https://n8n.io/", price: "免费起", added: 4, description: "可自托管的工作流自动化平台，支持 AI 节点和灵活代码扩展。", tags: ["开源", "自托管"] },
  { id: "bardeen", name: "Bardeen", category: "自动化", domain: "bardeen.ai", url: "https://www.bardeen.ai/", price: "免费起", added: 3, description: "把浏览器中的重复操作变成自动化流程，适合销售和研究。", tags: ["浏览器", "销售"] },
  { id: "copyai", name: "Copy.ai", category: "营销增长", domain: "copy.ai", url: "https://www.copy.ai/", price: "免费起", added: 2, description: "围绕销售与营销流程生成内容，并支持团队化工作流。", tags: ["营销", "文案"] },
  { id: "jasper", name: "Jasper", category: "营销增长", domain: "jasper.ai", url: "https://www.jasper.ai/", price: "付费", added: 1, description: "面向品牌团队的 AI 营销平台，强调语调一致与内容协作。", tags: ["品牌", "内容"] }
];

const categories = ["全部", "对话写作", "搜索研究", "图像设计", "编程开发", "办公效率", "视频音频", "语言学习", "自动化", "营销增长"];
const state = { category: "全部", query: "", sort: "featured", favoritesOnly: false, visible: 12 };
const storageKey = "ai-stack-favorites";
let favorites = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));

const grid = document.querySelector("[data-tool-grid]");
const featuredGrid = document.querySelector("[data-featured-grid]");
const tabs = document.querySelector("[data-category-tabs]");
const searchInput = document.querySelector("#tool-search");

function iconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain_url=https://${domain}&sz=128`;
}

function logoMarkup(tool) {
  return `<span class="tool-logo-wrap"><img class="tool-logo" src="${iconUrl(tool.domain)}" alt="" width="27" height="27" loading="lazy" data-logo><span class="tool-logo-fallback" hidden>${tool.name.charAt(0)}</span></span>`;
}

function toolCard(tool) {
  const saved = favorites.has(tool.id);
  const priceClass = tool.price === "付费" ? "price-paid" : "price-free";
  return `<article class="tool-card">
    <div class="tool-top">
      <div class="tool-id">${logoMarkup(tool)}<div class="tool-name"><h3>${tool.name}</h3><span>${tool.category}</span></div></div>
      <button class="favorite-button" type="button" aria-label="${saved ? "取消收藏" : "收藏"} ${tool.name}" title="${saved ? "取消收藏" : "收藏"}" aria-pressed="${saved}" data-favorite="${tool.id}"><i data-lucide="heart" aria-hidden="true"></i></button>
    </div>
    <p class="tool-description">${tool.description}</p>
    <div class="tool-footer">
      <div class="tool-tags"><span class="tag ${priceClass}">${tool.price}</span><span class="tag">${tool.tags[0]}</span></div>
      <a class="card-link" href="${tool.url}" target="_blank" rel="noopener noreferrer">访问 <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
    </div>
  </article>`;
}

function featuredCard(tool) {
  return `<a class="featured-card" href="${tool.url}" target="_blank" rel="noopener noreferrer">
    <div class="tool-top"><div class="tool-id">${logoMarkup(tool)}<div class="tool-name"><h3>${tool.name}</h3><span>${tool.category}</span></div></div><span class="tag ${tool.price === "付费" ? "price-paid" : "price-free"}">${tool.price}</span></div>
    <h3>${tool.name}</h3><p>${tool.description}</p><span class="card-link">打开工具 <i data-lucide="arrow-up-right" aria-hidden="true"></i></span>
  </a>`;
}

function filteredTools() {
  const query = state.query.trim().toLocaleLowerCase("zh-CN");
  const result = tools.filter((tool) => {
    const categoryMatch = state.category === "全部" || tool.category === state.category;
    const searchMatch = !query || [tool.name, tool.category, tool.description, ...tool.tags].join(" ").toLocaleLowerCase("zh-CN").includes(query);
    const favoriteMatch = !state.favoritesOnly || favorites.has(tool.id);
    return categoryMatch && searchMatch && favoriteMatch;
  });
  return result.sort((a, b) => {
    if (state.sort === "name") return a.name.localeCompare(b.name);
    if (state.sort === "newest") return b.added - a.added;
    return Number(b.featured || false) - Number(a.featured || false) || b.added - a.added;
  });
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.8 } });
  document.querySelectorAll("[data-logo]").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      image.nextElementSibling.hidden = false;
    }, { once: true });
  });
}

function renderTabs() {
  tabs.innerHTML = categories.map((category) => `<button class="category-tab" type="button" role="tab" aria-selected="${state.category === category}" data-category="${category}">${category}</button>`).join("");
}

function renderTools() {
  const matches = filteredTools();
  const visibleTools = matches.slice(0, state.visible);
  grid.innerHTML = visibleTools.map(toolCard).join("");
  document.querySelector("[data-result-count]").textContent = `找到 ${matches.length} 个工具`;
  document.querySelector("[data-empty-state]").hidden = matches.length !== 0;
  document.querySelector("[data-load-more]").hidden = matches.length <= state.visible;
  document.querySelector("[data-favorite-count]").textContent = favorites.size;
  document.querySelector("[data-clear-search]").hidden = !state.query;
  refreshIcons();
}

function renderAll() {
  renderTabs();
  renderTools();
}

function resetFilters() {
  state.category = "全部";
  state.query = "";
  state.favoritesOnly = false;
  state.visible = 12;
  searchInput.value = "";
  document.querySelector("[data-favorites-toggle]").setAttribute("aria-pressed", "false");
  renderAll();
}

function setupAds() {
  const config = window.AI_STACK_CONFIG || {};
  if (!config.adSenseClient) return;
  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(config.adSenseClient)}`;
  document.head.appendChild(script);
  document.querySelectorAll("[data-ad-position]").forEach((container) => {
    const slot = config.adSlots?.[container.dataset.adPosition];
    if (!slot) return;
    container.querySelector(".ad-placeholder")?.remove();
    container.innerHTML += `<ins class="adsbygoogle" style="display:block" data-ad-client="${config.adSenseClient}" data-ad-slot="${slot}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
}

featuredGrid.innerHTML = tools.filter((tool) => tool.featured).slice(0, 3).map(featuredCard).join("");
document.querySelector("[data-tool-total]").textContent = tools.length;

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.visible = 12;
  renderAll();
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  state.visible = 12;
  renderTools();
});

document.querySelector("[data-search-form]").addEventListener("submit", (event) => event.preventDefault());
document.querySelector("[data-clear-search]").addEventListener("click", () => { state.query = ""; searchInput.value = ""; renderTools(); searchInput.focus(); });
document.querySelectorAll("[data-quick-search]").forEach((button) => button.addEventListener("click", () => { state.query = button.dataset.quickSearch; searchInput.value = state.query; renderTools(); document.querySelector("#directory").scrollIntoView(); }));
document.querySelector("[data-sort]").addEventListener("change", (event) => { state.sort = event.target.value; renderTools(); });
document.querySelector("[data-load-more]").addEventListener("click", () => { state.visible += 12; renderTools(); });
document.querySelector("[data-reset-filters]").addEventListener("click", resetFilters);

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-favorite]");
  if (!button) return;
  const id = button.dataset.favorite;
  favorites.has(id) ? favorites.delete(id) : favorites.add(id);
  localStorage.setItem(storageKey, JSON.stringify([...favorites]));
  renderTools();
});

document.querySelector("[data-favorites-toggle]").addEventListener("click", (event) => {
  state.favoritesOnly = !state.favoritesOnly;
  state.visible = 12;
  event.currentTarget.setAttribute("aria-pressed", String(state.favoritesOnly));
  renderTools();
});

document.querySelector("[data-menu-toggle]").addEventListener("click", (event) => {
  const menu = document.querySelector(".top-nav");
  const isOpen = menu.classList.toggle("open");
  event.currentTarget.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
  event.currentTarget.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  refreshIcons();
});

const queryFromUrl = new URLSearchParams(location.search).get("q");
if (queryFromUrl) { state.query = queryFromUrl; searchInput.value = queryFromUrl; }
renderAll();
setupAds();
window.addEventListener("load", refreshIcons);
