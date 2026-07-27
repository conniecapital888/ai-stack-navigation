document.querySelector("[data-menu-toggle]")?.addEventListener("click", (event) => {
  const menu = document.querySelector(".top-nav");
  const isOpen = menu.classList.toggle("open");
  event.currentTarget.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
  event.currentTarget.innerHTML = `<i data-lucide="${isOpen ? "x" : "menu"}" aria-hidden="true"></i>`;
  window.lucide?.createIcons({ attrs: { "stroke-width": 1.8 } });
});

function applyContactDetails() {
  const email = window.AI_STACK_CONFIG?.contactEmail;
  document.querySelectorAll("[data-contact-email]").forEach((link) => {
    const label = link.querySelector("span") || link;
    if (!email) {
      label.textContent = "商务邮箱待绑定";
      link.classList.add("not-configured");
      link.removeAttribute("href");
      return;
    }
    label.textContent = email;
    link.classList.remove("not-configured");
    link.href = `mailto:${email}`;
  });
  document.querySelectorAll("[data-subject]").forEach((link) => {
    if (!email) return;
    link.href = `mailto:${email}?subject=${encodeURIComponent(link.dataset.subject)}`;
  });
}

applyContactDetails();
window.addEventListener("load", () => window.lucide?.createIcons({ attrs: { "stroke-width": 1.8 } }));
