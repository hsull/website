const qualifications = [
  {
    institution: "The University of Sydney",
    title: "BSc / BAdv (Physics and Economics, Economics Honours)",
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
      "Working on and with the RBA's DSGE model, DINGO, while also completing other research.",
  },
  {
    employer: "Reserve Bank of Australia",
    title: "Analyst | Prices, Wages and Labour, Economic Analysis",
    date: "Feb 2024 - Sep 2025",
    details:
      "Prices desk analyst. Responsible for interpreting inflation data, producing the Bank's central inflation forecast, and completing research into related analytical issues.",
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
    title: "The Output Gap and NAIRU in Real-Time: More Reliable than Once Thought?",
    date: "Forthcoming",
    details:
      "With Nick West. Presented at the 2025 Public Sector Economics Conference and the 2026 Norges Bank - RBA - RBNZ Workshop.",
    links: [
      {
        label: "Conference listing",
        href: "https://www.canberra.edu.au/about-uc/faculties/busgovlaw/news-and-events/public-sector-economics-conference",
      },
    ],
  },

  {
    title: "Digest: The Relationship Between Markups, Margins and Inflation",
    date: "RBA Insights, Jul 2026",
    details:
      "With Jonathan Hambur.",
    links: [
      {
        label: "Accessible at rba.gov.au",
        href: "https://www.rba.gov.au/publications/insights/australian-economy/2026/digest-the-relationship-between-markups-margins-and-inflation.html",
      },
    ],
  },
  {
    title: "Deployment Opportunities for Space Photovoltaics and the Prospects for Perovskite Solar Cells",
    date: "Nov 2021",
    details:
      "Co-first author with Professor Anita Ho-Baillie. Published in Advanced Materials Technologies.",
    links: [
      { label: "View DOI", href: "https://doi.org/10.1002/admt.202101059" },
    ],
  },
];

const policyPublications = [
  {
    title: "Margins, Mark-ups and Consumer Prices: Theory, Measurement and Implications",
    date: "RBA Bulletin, May 2026",
    details:
      "With Kate Davis, Jonathan Hambur, Kevin Lane, Dan Megow and Sally Rafter.",
    links: [
      {
        label: "Accessible at rba.gov.au",
        href: "https://www.rba.gov.au/publications/bulletin/2026/may/margins-mark-ups-and-consumer-prices-theory-measurement-and-implications.html",
      },
    ],
  },
  {
    title: "An Update on the RBA's Approach to Assessing Full Employment",
    date: "RBA Technical Note, Feb 2026",
    details:
      "With Mike Major and Kevin Lane.",
    links: [
      {
        label: "Accessible at rba.gov.au",
        href: "https://www.rba.gov.au/publications/technical-notes/2026/update-on-the-rbas-approach-to-assessing-full-employment.html",
      },
    ],
  },

  {
    title: "The Transition to a Complete Monthly CPI",
    date: "RBA Technical Note, Nov 2025",
    details:
      "Policy document setting out the RBA's framework for managing the transition to the ABS's new complete monthly CPI.",
    links: [
      {
        label: "Accessible at rba.gov.au",
        href: "https://www.rba.gov.au/publications/technical-notes/2025/the-transition-to-a-complete-monthly-cpi.html",
      },
    ],
  },
];

// ezdyn links are shared by the Software card and the ezdyn tab.
const ezdynLinks = {
  github: "https://github.com/RBA-ER-Replication/ezdyn",
  whitepaper: "https://github.com/RBA-ER-Replication/ezdyn/blob/468e9c4e28d28f715db5eced6cc03991be567cb7/ezdyn.pdf",
  demo: "https://01a1b082-f2eb-61b6-a308-c4c2c0261a0c.share.connect.posit.cloud/",
};

const software = [
  {
    title: "ezdyn and ezdyn dashboard",
    date: "R package",
    details:
      "Load in linear dynamic models (from Dynare or an Excel file of IRFs) and get straight to the interesting part: impulse responses, scenarios, 'alternative policy path' exercises and historical shock decompositions, lined up side by side across every model at once. ezdyn takes care of the fiddly bits, handling variable naming, units, scaling and consistent plotting for you, and powers a user-friendly interactive dashboard for exploring a configured set of models.",
    links: [
      { label: "View on GitHub", href: ezdynLinks.github },
      { label: "Read the whitepaper", href: ezdynLinks.whitepaper },
      { label: "Learn more", tab: "ezdyn" },
    ],
  },
  {
    title: "timetravelr",
    date: "R package, December 2024",
    details:
      "Tools for 'sending models back in time': working with data vintages and sourcing legacy vintage data from the ABS.",
    
    links: [
      { label: "View on GitHub", href: "https://github.com/RBA-ER-Replication/timetravelr" },
      { label: "Read the whitepaper", href: "https://github.com/RBA-ER-Replication/timetravelr/blob/main/vignettes/timetravelr.pdf" },
    ],
  },
  {
    title: "RBAclio",
    details:
      "An internal RBA system for distributed-compute natural language processing, letting users build computationally intensive text-based indicators from a corpus of 30 years of Australian news articles and RBA publications.",
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
    label: "RBA researcher profile",
    href: "https://www.rba.gov.au/research/our-researchers/hamish-sullivan.html",
    icon: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g transform="translate(1.5 2.68) scale(0.3972)">
          <path d="m9.818,0h33.871l.116.232c-31.372,14.35-9.586,42.47,8.947,10.806l.116.116-9.179,35.788h-.233c-2.033-27.132-31.256-26.435-33.348-.348h-.29L0,13.885l.348-.058C23.355,40.726,37.705,15.745,9.76.174l.058-.174Z" />
        </g>
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
  { id: "ezdyn", label: "ezdyn" },
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
        ${
          item.date
            ? `<p class="content-card__date">${escapeHtml(item.date)}</p>`
            : ""
        }
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
          item.links?.length
            ? `
              <p class="content-card__link-wrap">
                ${item.links
                  .map((link) => linkMarkup(link, "content-card__link"))
                  .join("")}
              </p>
            `
            : ""
        }
      </div>
    </article>
  `;
}

// A link with `tab` switches to that tab on this site; one with `href`
// opens an external page in a new browser tab.
function linkMarkup(link, className) {
  if (link.tab) {
    return `
      <a
        class="${className}"
        href="#${escapeHtml(link.tab)}"
        data-tab-link="${escapeHtml(link.tab)}"
      >${escapeHtml(link.label)}</a>
    `;
  }

  return `
    <a
      class="${className}"
      href="${escapeHtml(link.href)}"
      target="_blank"
      rel="noreferrer"
    >${escapeHtml(link.label)}</a>
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

const ezdynPageLinks = [
  { label: "Whitepaper", href: ezdynLinks.whitepaper },
  { label: "Live Demo", href: ezdynLinks.demo },
  { label: "GitHub", href: ezdynLinks.github },
];

const tabs = {
  home: {
    layoutClass: "layout--home",
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
                Macroeconomic theory, inflation dynamics, price and wage setting, monetary policy, economic measurement, forecasting, AI.
              </p>
            </div>
            <div class="research-interest-block">
              <h3 class="group-title">Techniques</h3>
              <p class="section-copy">
                DSGE modelling, time series analysis, dynamics, machine learning, natural language processing, networks, agent-based modelling.
              </p>
            </div>
          </div>
        </div>
        <div class="content-stack">
          <section class="content-group">
            <h2 class="section-title">Research</h2>
            ${cardGridMarkup(researchOutputs)}
          </section>
          <section class="content-group">
            <h2 class="section-title">Policy publications</h2>
            ${cardGridMarkup(policyPublications)}
          </section>
          <section class="content-group">
            <h2 class="section-title">Software</h2>
            ${cardGridMarkup(software)}
          </section>
        </div>
      </section>
    `,
  },
  ezdyn: {
    // No portrait or name banner on this tab: the full page goes to ezdyn.
    layoutClass: "layout--wide",
    hideMasthead: true,
    panel: `
      <section class="section-block product-page">
        <header class="product-page__intro">
          <h2 class="section-title">ezdyn</h2>
          <p class="product-page__tagline">
            Sufficient-statistics analysis and dashboarding of dynamic economic models in R
          </p>
          <p class="section-copy">
            ezdyn is an R package that aims to make completing policy analysis with
            (suites of) dynamic economic models frictionless. ezdyn can complete
            analytical tasks (e.g. impulse response analysis, historical shock
            decompositions, policy counterfactuals, and optimal policy exercises)
            across suites of models in a single line of code, or via a code-free
            interactive dashboard in your web browser.
          </p>
          <p class="section-copy">
            ezdyn implements recently developed techniques from the
            'sufficient-statistics' literature on policy counterfactuals and
            optimal policy.
          </p>
          <div class="product-page__links">
            ${ezdynPageLinks
              .map((link) => linkMarkup(link, "button-link"))
              .join("")}
          </div>
        </header>
        <figure class="product-page__figure">
          <a
            href="${assetPath("ezdyn-dashboard.png")}"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="product-page__image"
              src="${assetPath("ezdyn-dashboard.png")}"
              alt="The ezdyn dashboard's Optimal Policy tab: model, strategy and loss-function settings on the left, and optimal paths for the cash rate, GDP growth, trimmed mean inflation and the unemployment rate under two models on the right."
              width="1764"
              height="925"
            />
          </a>
          <figcaption class="product-page__caption">
            The Optimal Policy tab of the ezdyn dashboard. Baseline paths are
            dummy data, so the results shown are illustrative only.
          </figcaption>
        </figure>
      </section>
    `,
  },
};

const panel = document.querySelector("#content-panel");
const masthead = document.querySelector(".masthead");
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

  panel.classList.remove("is-swapping");
  void panel.offsetWidth;
  panel.classList.add("is-swapping");
  panel.innerHTML = tab.panel;

  masthead.classList.toggle("is-hidden", Boolean(tab.hideMasthead));
  layout.className = ["layout", tab.layoutClass].filter(Boolean).join(" ");
  if (tab.imageSrc) {
    portraitFrame.className = tab.imageClass;
    portraitImage.src = tab.imageSrc;
  }
  panel.setAttribute("aria-labelledby", `nav-tab-${tabKey}`);
  // Keep the URL in step with the tab so every tab (e.g. /#ezdyn) can be linked to.
  history.replaceState(null, "", tabKey === "home" ? location.pathname : `#${tabKey}`);
  renderNav();
}

panel.addEventListener("click", (event) => {
  const link = event.target.closest("[data-tab-link]");

  if (!link) {
    return;
  }

  event.preventDefault();
  renderTab(link.dataset.tabLink);
  window.scrollTo({ top: 0 });
});

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

const initialTabKey = location.hash.slice(1);

navTrack.style.setProperty("--tab-count", tabOrder.length);
createNavButtons();
renderTab(getTabIndex(initialTabKey) === -1 ? "home" : initialTabKey);
