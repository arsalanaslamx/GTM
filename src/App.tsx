import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Mail, Linkedin, Target, TrendingUp, Users, MessageSquare, Search, GitBranch, X } from 'lucide-react'

const experience = [
  { company: 'Logicstics', role: 'Inside Sales Specialist', period: '2026 — Present', detail: 'Guide inbound prospects through international household relocation decisions, uncovering needs and matching services to their move.', tags: ['Consultative selling', 'Discovery', 'Objection handling'] },
  { company: 'Phi Consulting / OTR Solutions', role: 'Account Executive', period: '2025 — 2026', detail: 'Sold factoring and fuel-card solutions to trucking businesses, combining prospecting, qualification, and commercial conversations.', tags: ['B2B sales', 'Pipeline management', 'Revenue growth'] },
  { company: 'BlinkSwag (Oxiliary)', role: 'Customer Success Officer → Assistant Manager Support', period: '2023 — 2025', detail: 'Improved the customer experience and helped strengthen retention and repeat ordering through proactive support and operational follow-through.', tags: ['Customer success', 'Retention', 'Account management'] },
  { company: 'WebHR', role: 'Customer Success Officer → Assistant Manager Support', period: '2018 — 2022', detail: 'Supported HR software customers, including enterprise and public-sector teams, with adoption, issue resolution, and relationship management.', tags: ['SaaS', 'Client relationships', 'Product adoption'] },
]

const caseStudies = [
  {
    id: 'objections', number: '01', icon: MessageSquare, title: 'Turn objections into conversations',
    teaser: 'Respond to price concerns without rushing to discount.',
    challenge: 'A prospect reviews a quote and says, “This is more expensive than I expected.”',
    approach: ['Acknowledge the concern without becoming defensive.', 'Ask what budget or range they had in mind.', 'Understand whether the gap is budget, perceived value, timing, or a competing offer.', 'Agree on a relevant next step instead of pushing for an immediate yes.'],
    example: '“That makes sense. So I can understand the gap, what range were you expecting? And apart from price, is there anything in the proposal you’d want to revisit?”',
    outcome: 'The goal is to uncover the real objection, protect trust, and earn a clear next step—not to promise a close.'
  },
  {
    id: 'discovery', number: '02', icon: Search, title: 'Run purposeful discovery',
    teaser: 'Find the problem behind the initial request.',
    challenge: 'An inbound prospect asks for pricing before explaining their needs or priorities.',
    approach: ['Clarify the current situation and what prompted the inquiry.', 'Explore impact, urgency, and what a successful outcome looks like.', 'Understand decision criteria, stakeholders, and timing.', 'Summarize what you heard before recommending a solution.'],
    example: '“Before I recommend an option, can I ask what prompted you to look into this now—and what would make a solution work well for you?”',
    outcome: 'A better-qualified opportunity and a recommendation tied to the customer’s actual priorities.'
  },
  {
    id: 'pipeline', number: '03', icon: GitBranch, title: 'Move pipeline forward',
    teaser: 'Make follow-up useful, relevant, and specific.',
    challenge: 'A qualified prospect goes quiet after a promising conversation and receiving a proposal.',
    approach: ['Review the last agreed action and any unresolved concern.', 'Send a concise follow-up tied to the prospect’s stated priority.', 'Offer a useful choice or answer a specific open question.', 'Set a clear next step and keep CRM notes accurate.'],
    example: '“When we spoke, you mentioned [priority] was the key consideration. Has anything changed on your side, or would it help to compare the two options against that requirement?”',
    outcome: 'Clearer deal status, more relevant follow-up, and less time spent on guesswork.'
  },
  {
    id: 'growth', number: '04', icon: Users, title: 'Strengthen customer accounts',
    teaser: 'Connect customer outcomes with retention and expansion.',
    challenge: 'An existing customer’s engagement is declining, or their needs are changing.',
    approach: ['Check adoption, satisfaction, and unresolved friction.', 'Ask what has changed in the customer’s workflow or goals.', 'Address the root issue before pitching an upgrade.', 'Identify expansion only when it supports a real customer need.'],
    example: '“What’s working well today, and where is the process still harder than it should be? I’d like to understand that before suggesting any changes.”',
    outcome: 'A customer-first plan to improve adoption, protect the relationship, and uncover relevant growth opportunities.'
  }
]

const principles = ['Start with the customer, not the pitch.', 'Ask better questions before prescribing solutions.', 'Keep the process measurable and repeatable.', 'Treat retention as part of growth—not an afterthought.']

function App() {
  const [activeCase, setActiveCase] = useState<string | null>(null)
  const selectedCase = caseStudies.find(item => item.id === activeCase)

  return (
    <main>
      <nav className="nav wrap">
        <a className="wordmark" href="#top">Arsalan Aslam<span>.</span></a>
        <div className="nav-links">
          <a href="#approach">What I can do</a>
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
          <div className="section-label"><span>01</span> WHAT I CAN DO</div>
          <div className="section-heading">
            <h2>Good strategy.<br />Better <em>conversations.</em></h2>
            <p>Explore how I approach real-world sales and customer challenges—from the first discovery question to long-term account growth.</p>
          </div>
          <div className="strength-grid case-grid">
            {caseStudies.map((item) => {
              const Icon = item.icon
              return <button className="strength-card case-card" key={item.id} onClick={() => setActiveCase(item.id)} aria-haspopup="dialog">
                <div className="case-card-top"><div className="icon-box"><Icon size={20} strokeWidth={1.7} /></div><span className="case-number">{item.number}</span></div>
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
                <span className="case-open">Explore case study <ArrowUpRight size={16} /></span>
              </button>
            })}
          </div>
          <p className="case-note">These are illustrative scenarios showing my approach; they are not presented as client case studies or guaranteed outcomes.</p>
        </div>
      </section>

      {selectedCase && (
        <div className="case-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveCase(null) }}>
          <section className="case-dialog" role="dialog" aria-modal="true" aria-labelledby="case-dialog-title">
            <button className="case-close" onClick={() => setActiveCase(null)} aria-label="Close case study"><X size={20} /></button>
            <div className="section-label"><span>CASE STUDY {selectedCase.number}</span> <span className="case-hypothetical">ILLUSTRATIVE SCENARIO</span></div>
            <h2 id="case-dialog-title">{selectedCase.title}</h2>
            <div className="case-detail-block"><span className="case-detail-label">THE CHALLENGE</span><p>{selectedCase.challenge}</p></div>
            <div className="case-detail-block"><span className="case-detail-label">MY APPROACH</span><ol>{selectedCase.approach.map(step => <li key={step}>{step}</li>)}</ol></div>
            <div className="case-example"><span className="case-detail-label">HOW I MIGHT SAY IT</span><blockquote>{selectedCase.example}</blockquote></div>
            <div className="case-detail-block case-outcome"><span className="case-detail-label">THE OBJECTIVE</span><p>{selectedCase.outcome}</p></div>
            <button className="case-next" onClick={() => { const index = caseStudies.findIndex(item => item.id === selectedCase.id); setActiveCase(caseStudies[(index + 1) % caseStudies.length].id) }}>Next case study <ArrowUpRight size={16} /></button>
          </section>
        </div>
      )}

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
            {principles.map(line => <div className="principle" key={line}><CheckCircle2 size={18} /><span>{line}</span></div>)}
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
