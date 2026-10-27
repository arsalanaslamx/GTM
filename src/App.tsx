import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Mail, Linkedin, Target, TrendingUp, Users } from 'lucide-react'

const experience = [
  {
    company: 'Logicstics',
    role: 'Inside Sales Specialist',
    period: '2026 — Present',
    detail: 'Guide inbound prospects through international household relocation decisions, uncovering needs and matching services to their move.',
    tags: ['Consultative selling', 'Discovery', 'Objection handling'],
  },
  {
    company: 'Phi Consulting / OTR Solutions',
    role: 'Account Executive',
    period: '2025 — 2026',
    detail: 'Sold factoring and fuel-card solutions to trucking businesses, combining prospecting, qualification, and commercial conversations.',
    tags: ['B2B sales', 'Pipeline management', 'Revenue growth'],
  },
  {
    company: 'BlinkSwag (Oxiliary)',
    role: 'Customer Success Officer → Assistant Manager Support',
    period: '2023 — 2025',
    detail: 'Improved the customer experience and helped strengthen retention and repeat ordering through proactive support and operational follow-through.',
    tags: ['Customer success', 'Retention', 'Account management'],
  },
  {
    company: 'WebHR',
    role: 'Customer Success Officer → Assistant Manager Support',
    period: '2018 — 2022',
    detail: 'Supported HR software customers, including enterprise and public-sector teams, with adoption, issue resolution, and relationship management.',
    tags: ['SaaS', 'Client relationships', 'Product adoption'],
  },
]

const strengths = [
  { icon: Target, title: 'Go-to-market clarity', text: 'Turn customer, market, and competitor insight into sharper positioning and practical next steps.' },
  { icon: TrendingUp, title: 'Sales execution', text: 'Build disciplined discovery, qualification, objection handling, and follow-up into the sales process.' },
  { icon: Users, title: 'Customer growth', text: 'Connect customer experience, adoption, and retention to long-term account value.' },
]

function App() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="wordmark" href="#top">Arsalan Aslam<span>.</span></a>
        <div className="nav-links">
          <a href="#approach">Approach</a>
          <a href="#experience">Experience</a>
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero wrap" id="top">
        <div className="eyebrow"><span className="pulse" /> GTM · SALES · CUSTOMER SUCCESS</div>
        <h1>Make growth<br />more <em>intentional.</em></h1>
        <div className="hero-bottom">
          <p className="hero-copy">I'm Arsalan Aslam. I work at the intersection of go-to-market strategy, sales execution, and customer experience—helping teams turn good conversations into lasting growth.</p>
          <a className="round-link" href="#approach" aria-label="Explore my approach"><ArrowDownRight size={22} /></a>
        </div>
        <div className="hero-meta">
          <span>BASED IN PAKISTAN · WORKING GLOBALLY</span>
          <span>SAAS · B2B · CUSTOMER-LED GROWTH</span>
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="wrap">
          <div className="section-label"><span>01</span> WHAT I BRING</div>
          <div className="section-heading">
            <h2>Strategy is only useful<br />when it <em>moves work forward.</em></h2>
            <p>I bring hands-on experience across the customer journey—from the first sales conversation to adoption, retention, and expansion.</p>
          </div>
          <div className="strength-grid">
            {strengths.map((item) => {
              const Icon = item.icon
              return <article className="strength-card" key={item.title}>
                <div className="icon-box"><Icon size={20} strokeWidth={1.7} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="card-arrow"><ArrowUpRight size={17} /></span>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="experience section" id="experience">
        <div className="wrap">
          <div className="section-label"><span>02</span> EXPERIENCE</div>
          <div className="experience-top">
            <h2>Built in the<br /><em>real world.</em></h2>
            <p>My perspective comes from doing the work: selling, supporting customers, solving operational problems, and learning what makes relationships last.</p>
          </div>
          <div className="timeline">
            {experience.map((job, index) => <article className="job" key={job.company}>
              <div className="job-index">0{index + 1}</div>
              <div className="job-main">
                <div className="job-title-row"><h3>{job.role}</h3><span>{job.period}</span></div>
                <div className="company">{job.company}</div>
                <p>{job.detail}</p>
                <div className="tags">{job.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <BriefcaseBusiness className="job-icon" size={19} strokeWidth={1.5} />
            </article>)}
          </div>
        </div>
      </section>

      <section className="principles section">
        <div className="wrap principles-inner">
          <div className="section-label"><span>03</span> HOW I WORK</div>
          <h2>Clear thinking.<br /><em>Useful action.</em></h2>
          <div className="principles-list">
            {['Start with the customer, not the pitch.', 'Ask better questions before prescribing solutions.', 'Keep the process measurable and repeatable.', 'Treat retention as part of growth—not an afterthought.'].map(line => <div className="principle" key={line}><CheckCircle2 size={18} /><span>{line}</span></div>)}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="wrap contact-inner">
          <div className="section-label"><span>04</span> GET IN TOUCH</div>
          <h2>Have a growth<br />challenge? <em>Let's talk.</em></h2>
          <p>I'm open to conversations about GTM, B2B sales, customer success, and opportunities to build better customer experiences.</p>
          <div className="contact-actions">
            <a className="primary-button" href="mailto:arslanaslam9574@gmail.com"><Mail size={17} /> Email me <ArrowUpRight size={16} /></a>
            <a className="secondary-button" href="https://www.linkedin.com/in/arsalan-aslam-06b960112/" target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <footer className="footer wrap"><a className="wordmark" href="#top">Arsalan Aslam<span>.</span></a><span>Thoughtful growth. Better conversations.</span><span>© {new Date().getFullYear()} Arsalan Aslam</span></footer>
    </main>
  )
}

export default App
