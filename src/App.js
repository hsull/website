import React, { useState } from 'react';
import './App.css';
import profilePhoto from './resources/ProfilePhoto.jpg';
import experiencePhoto from './resources/ExperiencePhoto.jpg';
import researchPhoto from './resources/ResearchPhoto.jpg';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'dsge-notes', label: 'DSGE Notes' },
];

const homeLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/hamishsullivan' },
  { label: 'GitHub', href: 'https://github.com/hsull' },
  { label: 'Email', href: 'mailto:hgsull@outlook.com' },
];

const qualifications = [
  {
    title: 'Qualification Title',
    date: 'Add date here',
    details:
      'Use this space for the degree, institution, honours, and any results or distinctions you want to highlight.',
  },
  {
    title: 'Additional Training or Certification',
    date: 'Add date here',
    details:
      'This placeholder can hold short courses, scholarships, awards, or specialist training relevant to your profile.',
  },
];

const workExperience = [
  {
    title: 'Role Title',
    date: 'Add date here',
    details:
      'Describe the organisation, your responsibilities, and the work that best supports the narrative of your experience.',
  },
  {
    title: 'Previous Role',
    date: 'Add date here',
    details:
      'Use one or two compact paragraphs or concise bullet-style sentences to explain the substance of the role.',
  },
];

const researchOutputs = [
  {
    title: 'Research Output Title',
    date: 'Add year here',
    details:
      'Use this block for a paper, dissertation, working paper, presentation, or article summary, with links if needed.',
  },
  {
    title: 'Project or Publication',
    date: 'Add year here',
    details:
      'This placeholder can hold a short abstract, outlet information, co-authors, or a note on current status.',
  },
];

const tabMedia = {
  home: {
    image: profilePhoto,
    imageClassName: 'portrait-frame portrait-frame--home',
    overline: 'Profile',
    caption: 'A concise overview of work, writing, and current interests.',
  },
  experience: {
    image: experiencePhoto,
    imageClassName: 'portrait-frame portrait-frame--experience',
    overline: 'Experience',
    caption: 'Qualifications and professional work can be updated section by section.',
  },
  research: {
    image: researchPhoto,
    imageClassName: 'portrait-frame portrait-frame--research',
    overline: 'Research',
    caption: 'Research outputs can be presented as a clean archive of papers and projects.',
  },
  'dsge-notes': {
    image: profilePhoto,
    imageClassName: 'portrait-frame portrait-frame--notes',
    overline: 'Notes',
    caption: 'Reserved for future writing on DSGE models and related macroeconomic topics.',
  },
};

function ContentCard({ title, date, details }) {
  return (
    <article className="content-card">
      <header className="content-card__header">
        <h3>{title}</h3>
        <p>{date}</p>
      </header>
      <div className="content-card__body">
        <p>{details}</p>
      </div>
    </article>
  );
}

function SectionBlock({ eyebrow, title, description, children }) {
  return (
    <section className="section-block">
      <div className="section-block__intro">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-copy">{description}</p>
      </div>
      {children}
    </section>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const activeMedia = tabMedia[activeTab];

  const renderTabContent = () => {
    if (activeTab === 'experience') {
      return (
        <SectionBlock
          eyebrow="Experience"
          title="Qualifications and work history"
          description="Each entry uses a simple card structure so you can expand, shorten, or reorder items without changing the layout."
        >
          <div className="section-stack">
            <div className="section-group">
              <h3 className="section-group__title">Qualifications</h3>
              <div className="card-grid">
                {qualifications.map((item) => (
                  <ContentCard key={`${item.title}-${item.date}`} {...item} />
                ))}
              </div>
            </div>
            <div className="section-group">
              <h3 className="section-group__title">Work Experience</h3>
              <div className="card-grid">
                {workExperience.map((item) => (
                  <ContentCard key={`${item.title}-${item.date}`} {...item} />
                ))}
              </div>
            </div>
          </div>
        </SectionBlock>
      );
    }

    if (activeTab === 'research') {
      return (
        <SectionBlock
          eyebrow="Research"
          title="Research outputs"
          description="This section is scaffolded for papers, presentations, working notes, or longer-form projects."
        >
          <div className="card-grid">
            {researchOutputs.map((item) => (
              <ContentCard key={`${item.title}-${item.date}`} {...item} />
            ))}
          </div>
        </SectionBlock>
      );
    }

    if (activeTab === 'dsge-notes') {
      return (
        <SectionBlock
          eyebrow="DSGE Notes"
          title="Coming soon."
          description="This page is set aside for future notes and explainer pieces."
        >
          <div className="callout-box">
            <p>Coming soon.</p>
          </div>
        </SectionBlock>
      );
    }

    return (
      <SectionBlock
        eyebrow="Overview"
        title="An online profile with a quieter, editorial feel"
        description="The site is rebuilt around a warm Financial Times-inspired palette, simple navigation, and space to grow your experience and research pages over time."
      >
        <div className="home-grid">
          <div className="home-card">
            <h3>Focus</h3>
            <p>
              This homepage is designed to stay concise. It introduces your work
              without crowding the page and directs visitors to the sections
              with more detail.
            </p>
          </div>
          <div className="home-card">
            <h3>Links</h3>
            <ul className="link-list">
              {homeLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionBlock>
    );
  };

  return (
    <div className="app-shell">
      <div className="page-frame">
        <header className="masthead">
          <div className="masthead__copy">
            <p className="eyebrow">Hamish Sullivan</p>
            <h1>Hamish Sullivan</h1>
            <p className="masthead__subtitle">Economist</p>
          </div>
          <div className="masthead__accent" aria-hidden="true" />
        </header>

        <div className="tab-bar" role="tablist" aria-label="Primary">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`${tab.id}-tab`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              className={`tab-button ${
                activeTab === tab.id ? 'tab-button--active' : ''
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <main className="content-layout">
          <aside className="portrait-panel">
            <div className={activeMedia.imageClassName}>
              <img
                src={activeMedia.image}
                alt="Portrait of Hamish Sullivan"
                className="portrait-image"
              />
            </div>
            <div className="portrait-caption">
              <p className="eyebrow">{activeMedia.overline}</p>
              <p>{activeMedia.caption}</p>
            </div>
          </aside>

          <section
            id={`${activeTab}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeTab}-tab`}
            className="content-panel"
          >
            {renderTabContent()}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
