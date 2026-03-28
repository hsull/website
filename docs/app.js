const qualifications = [
  {
    institution: "The University of Sydney",
    title: "BSc / BAdv (Physics and Economics)",
    date: "2019 - 2023",
    details: "",
    bullets: [
      "University Medal, Honours Class I",
      "Physics 'Special Studies Program' advanced coursework stream",
      "Economics 'Pre-Honours' advanced coursework stream",
      "Elective coursework in computer science",
    ],
  }
];

const workExperience = [
  {
    employer: "Reserve Bank of Australia",
    title: "Research Economist | Frameworks and Macroeconomics, Economic Research",
    date: "From Oct 2025",
    details:
      "Working on the RBA's DSGE model, DINGO, while also completing other research.",
  },
  {
    employer: "Reserve Bank of Australia",
    title: "Analyst | Prices, Wages and Labour, Economic Analysis",
    date: "Feb 2024 - Sep 2025",
    details:
      "Prices desk analyst. Responsible for monitoring and forecasting price inflation and doing research into related issues.",
  },
  {
    employer: "Reserve Bank of Australia",
    title: "Analyst | Data Science Hub, Economic Research",
    date: "Sep 2023 - Jan 2024",
    details:
      "Developed an internal platform for large-scale natural language processing analysis.",
  },
  {
    employer: "Reserve Bank of Australia",
    title: "Intern | Regional and Industry Analysis, Economic Analysis",
    date: "Dec 2021 - Jan 2022",
    details:
      "Completed a forecast evaluation project.",
  },
  {
    employer: "The University of Sydney",
    title: "Photovoltaics Research Intern | Sydney Nanoscience Hub",
    date: "Aug 2020 - Jan 2021",
    details:
      "Co-first-authored a paper published in Advanced Materials Technologies.",
  },
  {
    employer: "The University of Sydney",
    title: "Machine Learning Research Intern | Institute of Medical Physics",
    date: "Aug 2020 - Jan 2021",
    details:
      "Researched Convolutional Neural Network (CNN) methods for prostate cancer diagnosis and prognosis.",
  },
  {
    employer: "Macquarie Bank",
    title: "Commodities and Global Markets Intern | Central Risk",
    date: "Dec 2019 - Mar 2020",
    details:
      "Developed backend code for trading support and data systems.",
  },
];

const researchOutputs = [
  {
    title: "Phillips curves in real time: more useful for monetary policy than we thought?",
    date: "Forthcoming",
    details:
      "With Nick West. Presented at the 2025 Public Sector Economics Conference.",
    linkLabel: "Conference listing",
    linkHref:
      "https://www.canberra.edu.au/about-uc/faculties/busgovlaw/news-and-events/public-sector-economics-conference",
  },
  {
    title: "An update on the RBA's approach to assessing full employment",
    date: "Feb 2026",
    details:
      "With Mike Major and Kevin Lane.",
    linkLabel: "Accessible at rba.gov.au",
    linkHref:
      "https://www.rba.gov.au/publications/technical-notes/2026/update-on-the-rbas-approach-to-assessing-full-employment.html",
  },
  {
    title: "Deployment opportunities for space photovolatics and the prospects for perovskite solar cells",
    date: "Nov 2021",
    details:
      "Co-first author with Professor Anita Ho-Baillie. Published in Advanced Materials Technologies.",
    linkLabel: "View DOI",
    linkHref: "https://doi.org/10.1002/admt.202101059",
  },
];

const homeLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/hamishsullivan",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56c0-1.08-.82-1.94-1.92-1.94S3.3 3.86 3.3 4.94c0 1.07.84 1.94 1.94 1.94s1.92-.87 1.92-1.94ZM20.7 12.87c0-3.47-1.85-5.09-4.32-5.09-1.99 0-2.88 1.1-3.38 1.86V8.5H9.62c.05.76 0 11.5 0 11.5H13v-6.42c0-.34.03-.68.12-.92.27-.68.88-1.38 1.91-1.38 1.35 0 1.89 1.03 1.89 2.54V20h3.38v-7.13Z" />
      </svg>
    `,
  },
  {
    label: "GitHub",
    href: "https://github.com/hsull",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.11-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.83c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.21 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.96.68 1.94 0 1.4-.01 2.53-.01 2.88 0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
      </svg>
    `,
  },
  {
    label: "Email",
    href: "mailto:hgsull@outlook.com",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5h18A1.5 1.5 0 0 1 22.5 7v10A1.5 1.5 0 0 1 21 18.5H3A1.5 1.5 0 0 1 1.5 17V7A1.5 1.5 0 0 1 3 5.5Zm0 1.5v.24l9 6.06 9-6.06V7H3Zm18 10V8.94l-8.58 5.77a.75.75 0 0 1-.84 0L3 8.94V17h18Z" />
      </svg>
    `,
  },
];

const tabOrder = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "dsge-notes", label: "DSGE Notes" },
];

const assetVersion = "20260329-1";

function assetPath(fileName) {
  return `assets/${fileName}?v=${assetVersion}`;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cardMarkup(item) {
  return `
    <article class="content-card">
      <header class="content-card__header">
        ${
          item.institution
            ? `<p class="content-card__institution">${escapeHtml(item.institution)}</p>`
            : ""
        }
        <h3 class="content-card__title">${escapeHtml(item.title)}</h3>
        <p class="content-card__date">${escapeHtml(item.date)}</p>
      </header>
      <div class="content-card__body">
        ${
          item.details
            ? `<p>${escapeHtml(item.details)}</p>`
            : ""
        }
        ${
          item.bullets?.length
            ? `
              <ul class="content-card__list">
                ${item.bullets
                  .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
                  .join("")}
              </ul>
            `
            : ""
        }
        ${
          item.linkHref
            ? `
              <p class="content-card__link-wrap">
                <a
                  class="content-card__link"
                  href="${escapeHtml(item.linkHref)}"
                  target="_blank"
                  rel="noreferrer"
                >
                  ${escapeHtml(item.linkLabel || "Open link")}
                </a>
              </p>
            `
            : ""
        }
      </div>
    </article>
  `;
}

function cardGridMarkup(items) {
  return `<div class="card-grid">${items.map(cardMarkup).join("")}</div>`;
}

function workCardMarkup(item) {
  return `
    ${cardMarkup(item)}
  `;
}

function workCardGridMarkup(items) {
  const employerGroups = [];

  items.forEach((item) => {
    const existingGroup = employerGroups.find(
      (group) => group.employer === item.employer
    );

    if (existingGroup) {
      existingGroup.roles.push(item);
      return;
    }

    employerGroups.push({
      employer: item.employer,
      roles: [item],
    });
  });

  return `
    <div class="employment-groups">
      ${employerGroups
        .map(
          (group) => `
            <div class="employment-group">
              <h4 class="employment-group__employer">${escapeHtml(group.employer)}</h4>
              <div class="employment-group__cards card-grid">
                ${group.roles.map(workCardMarkup).join("")}
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function socialLinkMarkup(link) {
  return `
    <a class="home-stage__link" href="${escapeHtml(link.href)}" aria-label="${escapeHtml(link.label)}">
      <span class="home-stage__icon" aria-hidden="true">${link.icon}</span>
    </a>
  `;
}

const tabs = {
  home: {
    imageSrc: assetPath("home-photo.jpg"),
    imageClass: "portrait-frame portrait-frame--home",
    panel: `
      <section class="home-stage" aria-label="Home">
        <figure class="home-stage__photo">
          <img
            class="home-stage__image"
            src="${assetPath("home-photo.jpg")}"
            alt=""
          />
        </figure>
        <div class="home-stage__links" aria-label="Profile links">
          ${homeLinks.map(socialLinkMarkup).join("")}
        </div>
      </section>
    `,
  },
  experience: {
    imageSrc: assetPath("experience-photo.jpg"),
    imageClass: "portrait-frame portrait-frame--experience",
    panel: `
      <section class="section-block">
        <div>
          <h2 class="section-title">Qualifications</h2>
        </div>
        <div class="content-stack">
          <section class="content-group">
            ${cardGridMarkup(qualifications)}
          </section>
          <section class="content-group">
          <h2 class="section-title">Experience</h2>
            ${workCardGridMarkup(workExperience)}
          </section>
        </div>
      </section>
    `,
  },
  research: {
    imageSrc: assetPath("research-photo.jpg"),
    imageClass: "portrait-frame portrait-frame--research",
    panel: `
      <section class="section-block">
        <div>
          <h2 class="section-title">Research interests</h2>
          <div class="research-interests">
            <div class="research-interest-block">
              <h3 class="group-title">Topics</h3>
              <p class="section-copy">
                Macroeconomic theory, inflation and markup dynamics, price and wage setting, monetary policy, economic measurement, and forecasting.
              </p>
            </div>
            <div class="research-interest-block">
              <h3 class="group-title">Techniques</h3>
              <p class="section-copy">
                DSGE modelling, time series analysis, dynamical systems, machine learning, network science, natural language processing, agent-based modelling.
              </p>
            </div>
          </div>
          <h2 class="section-title">Published research</h2>
        </div>
        ${cardGridMarkup(researchOutputs)}
      </section>
    `,
  },
  "dsge-notes": {
    imageSrc: assetPath("home-photo.jpg"),
    imageClass: "portrait-frame portrait-frame--notes",
    panel: `
      <section class="section-block">
        <div>
          <h2 class="section-title">A gentle introduction to DSGE</h2>
          <p class="section-copy">
            I think learning DSGE can be hard if you don't already have a maths/physics background. So I wrote some notes aimed at making learning it as intuitive and time-efficient as possible. Coming soon.
          </p>
        </div>
      </section>
    `,
  },
};

const panel = document.querySelector("#content-panel");
const layout = document.querySelector(".layout");
const portraitFrame = document.querySelector("#portrait-frame");
const portraitImage = document.querySelector("#portrait-image");
const navTrack = document.querySelector("#nav-track");

let activeTabKey = "home";

function getTabIndex(tabKey) {
  return tabOrder.findIndex((tab) => tab.id === tabKey);
}

function createNavButtons() {
  const fragment = document.createDocumentFragment();

  tabOrder.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.id = `nav-tab-${tab.id}`;
    button.className = "speedometer-tab";
    button.dataset.tab = tab.id;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", "content-panel");
    button.textContent = tab.label;
    button.addEventListener("click", () => renderTab(tab.id));
    fragment.appendChild(button);
  });

  navTrack.appendChild(fragment);
}

function renderNav() {
  const buttons = navTrack.querySelectorAll(".speedometer-tab");
  const activeIndex = getTabIndex(activeTabKey);

  buttons.forEach((button) => {
    const isActive = button.dataset.tab === activeTabKey;

    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  navTrack.style.setProperty("--active-index", activeIndex);
}

function renderTab(tabKey) {
  const tab = tabs[tabKey];
  activeTabKey = tabKey;
  const isHome = tabKey === "home";

  panel.classList.remove("is-swapping");
  void panel.offsetWidth;
  panel.classList.add("is-swapping");
  panel.innerHTML = tab.panel;

  layout.classList.toggle("layout--home", isHome);
  portraitFrame.className = tab.imageClass;
  portraitImage.src = tab.imageSrc;
  panel.setAttribute("aria-labelledby", `nav-tab-${tabKey}`);
  renderNav();
}

navTrack.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
    return;
  }

  const step = event.key === "ArrowRight" ? 1 : -1;
  const count = tabOrder.length;
  const activeIndex = getTabIndex(activeTabKey);
  const nextIndex = (activeIndex + step + count) % count;
  const nextTabKey = tabOrder[nextIndex].id;

  renderTab(nextTabKey);
  document.querySelector(`#nav-tab-${nextTabKey}`)?.focus();
  event.preventDefault();
});

createNavButtons();
renderTab("home");
