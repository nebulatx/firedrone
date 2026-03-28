(() => {
  const headerMount = document.querySelector("[data-site-header]");
  const currentPage = document.body.dataset.page || "";

  if (headerMount) {
    const acknowledgementsCurrent = currentPage === "acknowledgements" ? ' aria-current="page"' : "";
    const galleryCurrent = currentPage === "gallery" ? ' aria-current="page"' : "";

    headerMount.innerHTML = `
      <div class="site-header-shell">
        <header class="site-header">
          <div class="header-inner">
            <div class="header-bar">
              <a class="brand" href="index.html" aria-label="Hekate's Torch home">
                <h1 class="brand-name">Hekate's Torch</h1>
              </a>

              <button
                class="menu-toggle"
                type="button"
                aria-expanded="false"
                aria-controls="site-nav"
                aria-label="Open navigation"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>

              <nav class="site-nav" id="site-nav" data-open="false" aria-label="Primary">
                <div class="site-nav-inner">
                  <ul class="nav-list">
                    <li><a class="nav-link" href="acknowledgements.html"${acknowledgementsCurrent}>Acknowledgements</a></li>
                    <li><a class="nav-link" href="gallery.html"${galleryCurrent}>Gallery</a></li>
                    <li>
                      <a
                        class="nav-link nav-link-cta"
                        href="https://www.pioneerfarms.org/event-tickets/p/fire-dancers-drone-show"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Buy Tickets
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    `;
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector("#site-nav");

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      siteNav.setAttribute("data-open", String(!isOpen));
    });
  }
})();
