(() => {
  const config = window.AI_STACK_CONFIG || {};
  const baiduId = String(config.baiduAnalyticsId || "").trim();

  if (/^[a-f0-9]{32}$/i.test(baiduId)) {
    window._hmt = window._hmt || [];
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://hm.baidu.com/hm.js?${encodeURIComponent(baiduId)}`;
    document.head.appendChild(script);
  }

  window.aiStackTrack = (category, action, label = "") => {
    window._hmt?.push(["_trackEvent", category, action, label]);
    window.dataLayer?.push({
      event: "ai_stack_event",
      event_category: category,
      event_action: action,
      event_label: label
    });
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-outbound-tool], [data-track-event]");
    if (!link) return;

    if (link.dataset.outboundTool) {
      const action = link.dataset.affiliate === "true" ? "affiliate" : "organic";
      window.aiStackTrack("tool_outbound", action, link.dataset.outboundTool);
      return;
    }

    const [category = "site", action = "click", label = ""] = link.dataset.trackEvent.split(":");
    window.aiStackTrack(category, action, label);
  });
})();
