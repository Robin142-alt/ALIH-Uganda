/**
 * AbilityLink Impact Hub (ALIH) - Institutional Website Logic
 * "Linking Ability to Opportunity" | Kikuube District, Western Uganda
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileSidebar();
  initMethodologyContinuum();
  initPartnershipIntake();
  initCopyButtons();
});

/* --------------------------------------------------------------------------
   01. STICKY HEADER
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   02. MOBILE SIDEBAR NAVIGATION
   -------------------------------------------------------------------------- */
function initMobileSidebar() {
  const openTriggers = document.querySelectorAll('.open-sidebar-trigger');
  const sidebar = document.getElementById('mobile-sidebar');
  const closeTriggers = document.querySelectorAll('.close-sidebar-trigger');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav-item, .drawer-footer a');

  if (!sidebar) return;

  function openSidebar() {
    sidebar.classList.add('open');
    document.body.style.overflow = 'hidden';
    openTriggers.forEach(btn => btn.setAttribute('aria-expanded', 'true'));
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    document.body.style.overflow = '';
    openTriggers.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  }

  openTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openSidebar();
    });
  });

  closeTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeSidebar();
    });
  });

  sidebar.addEventListener('click', (e) => {
    if (e.target === sidebar) closeSidebar();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });
}

/* --------------------------------------------------------------------------
   03. 8-STEP METHODOLOGY INTERACTIVE CONTINUUM
   "Evidence before expansion"
   -------------------------------------------------------------------------- */
const METHODOLOGY_DATA = [
  {
    step: '01',
    label: 'LISTEN',
    title: 'Community & Household Consultations',
    description: 'We sit down directly with community members, elders, teachers, parents, and youth in their own environments. We never approach a community with pre-fabricated solutions or assumed needs.',
    actionsHeader: 'Core Operational Activities',
    actions: [
      'Household-level listening sessions across villages',
      'Focus groups with parents, youth, and local leaders',
      'Documenting lived challenges and community-defined priorities',
      'Ensuring inclusive participation without bias or rush'
    ]
  },
  {
    step: '02',
    label: 'MAP',
    title: 'Comprehensive Ecosystem & Asset Mapping',
    description: 'Before considering any intervention, we catalog everything that already exists: host-community schools, refugee settlement schools, local CBOs, healthcare points, market centers, and religious/civic institutions.',
    actionsHeader: 'Mapping Targets',
    actions: [
      'Inventory of government and community primary/secondary schools',
      'Survey of local NGOs, international agencies, and CBO services',
      'Identification of active government welfare & education programmes',
      'Mapping indigenous community initiatives and natural assets'
    ]
  },
  {
    step: '03',
    label: 'IDENTIFY',
    title: 'Practical Gaps & Community Priorities',
    description: 'We cross-reference community aspirations with existing institutional capacity to pinpoint the true, unaddressed gaps where ALIH can bring distinctive, high-leverage value.',
    actionsHeader: 'Diagnostic Rigor',
    actions: [
      'Disaggregating host community vs refugee settlement dynamics',
      'Pinpointing bottlenecks in school retention & girl child protection',
      'Identifying youth transition barriers into viable livelihoods',
      'Filtering perceived needs from sustainable systemic gaps'
    ]
  },
  {
    step: '04',
    label: 'DESIGN',
    title: 'Realistic Interventions & Co-Creation',
    description: 'We co-design interventions alongside local stakeholders, leaders, and technical specialists. Every initiative must have clear operational models, local accountability, and an exit/permanence strategy from day one.',
    actionsHeader: 'Design Standards',
    actions: [
      'Developing realistic intervention blueprints with communities',
      'Establishing non-duplication protocols with other actors',
      'Embedding child safeguarding and inclusion metrics into design',
      'Structuring sustainable financing and governance frameworks'
    ]
  },
  {
    step: '05',
    label: 'PILOT',
    title: 'Controlled Testing Before Scaling',
    description: 'We test selected approaches on a small, tightly measured cohort before committing broader institutional resources. We test hypotheses against real-world friction.',
    actionsHeader: 'Pilot Benchmarks',
    actions: [
      'Executing controlled pilot cohorts in Kyangwali Subcounty',
      'Testing community acceptance, friction points, and real costs',
      'Iterating operational mechanics in real time with beneficiaries',
      'Refining intervention tools before institutional expansion'
    ]
  },
  {
    step: '06',
    label: 'MEASURE',
    title: 'Objective Data Tracking & Feedback',
    description: 'We track quantitative indicators and qualitative feedback with unyielding rigor. We do not manufacture vanity metrics; we evaluate true retention, ability growth, and institutional resilience.',
    actionsHeader: 'Measurement Disciplines',
    actions: [
      'Direct qualitative feedback from participating families & teachers',
      'Longitudinal tracking of educational access and safety indicators',
      'Independent verification of community ownership and participation',
      'Continuous monitoring of resource efficiency and transparency'
    ]
  },
  {
    step: '07',
    label: 'LEARN',
    title: 'Candid Analysis of Successes & Failures',
    description: 'Institutional excellence requires radical honesty about what failed as much as what succeeded. We systematically document lessons learned to build cumulative organizational intelligence.',
    actionsHeader: 'Learning Culture',
    actions: [
      'Documenting both breakthroughs and unintended consequences',
      'Conducting transparent retrospective reviews with community partners',
      'Publishing evidence briefs to inform regional practitioners',
      'Institutionalizing institutional memory beyond individual founders'
    ]
  },
  {
    step: '08',
    label: 'ADAPT',
    title: 'Evidence-Based Iteration & Institutionalization',
    description: 'We modify our frameworks based on hard evidence. If an approach is ineffective, we pivot or discontinue it. When proven, we institutionalize it for long-term community stewardship.',
    actionsHeader: 'Adaptation Protocol',
    actions: [
      'Revising programmatic models based on empirical findings',
      'Transitioning proven solutions into sustainable community structures',
      'Scaling only what has demonstrated durable, repeatable benefit',
      'Re-engaging the listening cycle for continuous accountability'
    ]
  }
];

function initMethodologyContinuum() {
  const navContainer = document.querySelector('.steps-timeline-nav');
  const detailBadge = document.querySelector('.step-detail-badge');
  const detailTitle = document.querySelector('.step-detail-title');
  const detailDesc = document.querySelector('.step-detail-desc');
  const detailHeader = document.querySelector('.detail-action-header');
  const detailList = document.querySelector('.detail-action-list');

  if (!navContainer || !detailTitle) return;

  const buttons = navContainer.querySelectorAll('.step-nav-btn');

  function renderStep(index) {
    const data = METHODOLOGY_DATA[index];
    if (!data) return;

    buttons.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
      btn.setAttribute('aria-selected', idx === index ? 'true' : 'false');
    });

    if (detailBadge) detailBadge.textContent = `PHASE ${data.step} — METHODOLOGY STAGE`;
    if (detailTitle) detailTitle.textContent = `${data.step}. ${data.label}: ${data.title}`;
    if (detailDesc) detailDesc.textContent = data.description;
    if (detailHeader) detailHeader.textContent = data.actionsHeader;

    if (detailList) {
      detailList.innerHTML = data.actions.map(action => `
        <li>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${action}</span>
        </li>
      `).join('');
    }
  }

  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      renderStep(idx);
    });
  });

  // Initial render
  renderStep(0);
}

/* --------------------------------------------------------------------------
   04. PARTNERSHIP INTAKE FORM & SUBMISSION SIMULATION
   -------------------------------------------------------------------------- */
function initPartnershipIntake() {
  const form = document.getElementById('partnership-inquiry-form');
  const trackLabels = document.querySelectorAll('.track-radio-label');
  const messageArea = document.getElementById('inquiry-message');

  if (!form) return;

  // Sync radio selected style and prompt placeholder
  trackLabels.forEach(label => {
    const radio = label.querySelector('input[type="radio"]');
    radio.addEventListener('change', () => {
      trackLabels.forEach(l => l.classList.remove('selected'));
      if (radio.checked) {
        label.classList.add('selected');
        const trackName = radio.value;
        if (messageArea && !messageArea.value) {
          messageArea.placeholder = `Please share details regarding your background or interest in "${trackName}" with AbilityLink Impact Hub...`;
        }
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('inquiry-name');
    const emailInput = document.getElementById('inquiry-email');
    const orgInput = document.getElementById('inquiry-org');
    const selectedTrack = form.querySelector('input[name="partnership-track"]:checked');
    const messageInput = document.getElementById('inquiry-message');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('Please provide your name, email, and message to proceed.', 'error');
      return;
    }

    // Submit state animation
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
      Recording Inquiry...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      
      const trackVal = selectedTrack ? selectedTrack.value : 'General Partnership';
      showToast(`Inquiry received: Thank you ${nameInput.value.trim()}. Our team will reach out regarding ${trackVal}.`);

      // Replace form with confirmation box
      const card = document.querySelector('.intake-form-card');
      if (card) {
        card.innerHTML = `
          <div style="text-align: center; padding: 2rem 1rem;">
            <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--color-emerald-100); color: var(--color-emerald-700); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--color-navy-950); margin-bottom: 0.5rem;">Partnership Dialogue Initiated</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; max-width: 440px; margin: 0 auto 1.5rem auto;">
              Thank you, <strong>${nameInput.value.trim()}</strong>. Your expression of interest for <em>"${trackVal}"</em> has been logged in our partnership pipeline. We look forward to connecting with ${orgInput.value.trim() ? orgInput.value.trim() : 'you'}.
            </p>
            <div style="background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem; max-width: 420px; margin: 0 auto 1.5rem auto; font-size: 0.85rem; color: var(--color-navy-900); text-align: left;">
              <p><strong>Track:</strong> ${trackVal}</p>
              <p><strong>Contact Email:</strong> ${emailInput.value.trim()}</p>
              <p style="margin-top: 0.35rem; font-size: 0.75rem; color: var(--text-muted);">Status: Queued for review by ALIH leadership team.</p>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" onclick="location.reload()">Send Another Note</button>
          </div>
        `;
      }
    }, 1000);
  });
}

/* --------------------------------------------------------------------------
   05. QUICK COPY BUTTONS & TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {
        const temp = document.createElement('textarea');
        temp.value = textToCopy;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(`Copied: ${textToCopy}`);
      });
    });
  });
}

function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type === 'error') {
    toast.style.borderLeftColor = '#E53E3E';
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      ${type === 'error' 
        ? '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>' 
        : '<polyline points="20 6 9 17 4 12"></polyline>'}
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3800);
}
