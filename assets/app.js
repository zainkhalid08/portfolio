"use strict";

// Render Projects and Lightbox
(function renderProjectsAlternating() {
  const projects = [
    {
      title: 'Health Solutions Company',
      description: 'Architected, developed, and launched a secure Laravel application for a US healthcare organization, designed to enhance the efficiency of clinical documentation and reporting. The application included features such as a detailed edit history log, robust role-based access control, and comprehensive reporting.',
      tech: ['Laravel','php','bootstrap','charts.js'],
      images: [
        'assets/images/p1/main.webp',
        'assets/images/p1/1.webp',
        'assets/images/p1/2.webp',
        'assets/images/p1/3.webp',
        'assets/images/p1/4.webp',
        'assets/images/p1/5.webp',
      ],
    },
    {
      title: 'Reminders For Good',
      description: 'Built a Laravel-based blogging platform that integrated YouTube timestamp playback, allowing readers to jump directly to specific video moments from within posts. The system included built-in SEO optimization features to enhance blog discoverability and ranking, along with a full-featured content management dashboard for publishing, editing, unpublishing, and deleting posts.',
      tech: ['Laravel','php','scss','Vue'],
      images: [
        'assets/images/p2/main.webp',
        'assets/images/p2/1.webp',
        'assets/images/p2/2.webp',
        'assets/images/p2/3.webp',
        'assets/images/p2/4.webp',
        'assets/images/p2/5.webp',
      ],
    },
    {
      title: 'Dotila',
      description: 'Optimized the performance of a SaaS invoicing platform by 92% through database indexing and query optimization. The application initially faced significant delays when handling queries on a large-scale database, causing slow load times for invoices and reports. By redesigning indexes and fine-tuning queries, the platform’s responsiveness improved drastically, enabling faster data retrieval and a smoother user experience.',
      tech: ['Laravel','php','mysql'],
      images: [
        'assets/images/p3/1.webp',
        'assets/images/p3/2.webp',
        'assets/images/p3/3.webp',
      ],
    },
    {
      title: 'Accounting & Consultation Firm',
      description: 'Business landing website with modern UI and improved navigation.',
      tech: ['Laravel','php','html','css'],
      images: [
        'assets/images/p4/main.webp',
        'assets/images/p4/1.webp',
        'assets/images/p4/2.webp',
        'assets/images/p4/3.webp',
        'assets/images/p4/4.webp',
      ],
    },
    {
      title: 'Ayah Tagging App',
      description: 'Developed a Quran tagging application that allowed users to create and assign custom tags to individual ayahs, enabling personalized study and categorization. The app featured a searchable interface where users could quickly locate ayahs based on specific tags, making navigation and retrieval seamless.',
      tech: ['Laravel','php','mysql'],
      images: [
        'assets/images/p5/main.webp',
        'assets/images/p5/1.webp',
        'assets/images/p5/2.webp',
        'assets/images/p5/3.webp',
        'assets/images/p5/4.webp',
      ],
    },
  ];

  const container = document.getElementById('projects-alt');
  if (!container) return;
  const fallbackSrc = 'assets/images/Firefox_Screenshot_2025-09-18T08-16-30.835Z.png';
  function withFallback(image) { image.onerror = () => { image.onerror = null; image.src = fallbackSrc; }; return image; }

  projects.forEach((p, idx) => {
    const row = document.createElement('div');
    row.className = 'grid md:grid-cols-2 gap-6 items-center';

    const media = document.createElement('div');
    media.className = 'order-1 md:order-' + (idx % 2 === 0 ? '1' : '2');
    const img = document.createElement('img');
    img.alt = p.title + ' screenshot'; img.src = p.images[0]; withFallback(img);
    img.className = 'w-full aspect-[16/10] bg-white cursor-zoom-in ' + ((idx === 0 || idx === 3) ? 'object-contain' : 'object-cover');
    img.dataset.p = String(idx);
    img.dataset.i = '0';
    img.classList.add('project-img');
    const imgWrap = document.createElement('div');
    imgWrap.className = 'relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white shadow-md [filter:drop-shadow(0_10px_20px_rgba(0,0,0,0.10))]';
    const hoverRing = document.createElement('div');
    hoverRing.className = 'pointer-events-none absolute inset-0 transition group-hover:bg-black/10 group-hover:ring-2 group-hover:ring-white/60';
    imgWrap.appendChild(img);
    imgWrap.appendChild(hoverRing);
    media.appendChild(imgWrap);

    const text = document.createElement('div');
    text.className = 'order-2 md:order-' + (idx % 2 === 0 ? '2' : '1');
    const h3 = document.createElement('h3'); h3.className = 'text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-balance dark:text-slate-100'; h3.textContent = p.title;
    const desc = document.createElement('p'); desc.className = 'mt-2 text-slate-700 dark:text-slate-100 leading-relaxed'; desc.textContent = p.description;
    const tech = document.createElement('div'); tech.className = 'mt-3 flex flex-wrap gap-2 text-xs';
    p.tech.forEach(t => {
      const b = document.createElement('span');
      b.className = 'inline-flex items-center gap-1.5 rounded-full bg-brand-100 text-brand-800 px-2.5 py-1 text-xs dark:bg-brand-400/10 dark:text-brand-200';
      const dot = document.createElement('span'); dot.className = 'h-1.5 w-1.5 rounded-full bg-brand-600 dark:bg-brand-400';
      const label = document.createElement('span'); label.textContent = t;
      b.appendChild(dot); b.appendChild(label);
      tech.appendChild(b);
    });
    const thumbs = document.createElement('div'); thumbs.className = 'mt-4 flex gap-3';
    p.images.forEach((src, j) => {
      const tw = document.createElement('div');
      tw.className = 'relative group rounded-md overflow-hidden bg-white shadow-sm [filter:drop-shadow(0_10px_20px_rgba(0,0,0,0.08))]';
      const i = document.createElement('img');
      i.className = 'h-16 w-24 object-cover cursor-zoom-in project-img';
      i.alt = p.title + ' thumb'; i.src = src; withFallback(i); i.dataset.p = String(idx); i.dataset.i = String(j);
      const thOverlay = document.createElement('div'); thOverlay.className = 'pointer-events-none absolute inset-0 transition group-hover:bg-black/10 group-hover:ring-2 group-hover:ring-white/60 rounded-md';
      tw.appendChild(i); tw.appendChild(thOverlay);
      thumbs.appendChild(tw);
    });
    text.appendChild(h3); text.appendChild(desc); text.appendChild(tech); text.appendChild(thumbs);

    row.appendChild(media); row.appendChild(text);
    container.appendChild(row);
  });

  // Lightbox modal
  const hostSection = document.getElementById('projects');
  if (!hostSection) return;
  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'fixed inset-0 z-[100] hidden';
  lb.innerHTML = `
    <div id="lb-overlay" class="absolute inset-0 bg-black/80"></div>
    <div class="relative h-full flex items-center justify-center p-4">
      <button id="lb-close" aria-label="Close" class="absolute top-4 right-4 text-white/80 hover:text-white p-2">✕</button>
      <button id="lb-prev" aria-label="Previous" class="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3">‹</button>
      <img id="lb-img" class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" alt="Preview" />
      <button id="lb-next" aria-label="Next" class="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3">›</button>
      <div id="lb-cap" class="absolute bottom-4 text-white/90 text-sm bg-black/40 px-3 py-1 rounded"></div>
    </div>`;
  hostSection.appendChild(lb);

  const containerEl = document.getElementById('projects-alt');
  let curP = 0, curI = 0;
  const lbImg = lb.querySelector('#lb-img');
  const lbCap = lb.querySelector('#lb-cap');
  const closeBtn = lb.querySelector('#lb-close');
  const prevBtn = lb.querySelector('#lb-prev');
  const nextBtn = lb.querySelector('#lb-next');
  const overlayEl = lb.querySelector('#lb-overlay');

  function showLightbox(pIndex, iIndex) {
    curP = pIndex; curI = iIndex;
    const imgs = projects[curP].images;
    if (!imgs || !imgs.length) return;
    lbImg.src = imgs[curI];
    lbCap.textContent = projects[curP].title + ' (' + (curI + 1) + '/' + imgs.length + ')';
    lb.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
  function hideLightbox() {
    lb.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
  function next() { const imgs = projects[curP].images; curI = (curI + 1) % imgs.length; showLightbox(curP, curI); }
  function prev() { const imgs = projects[curP].images; curI = (curI - 1 + imgs.length) % imgs.length; showLightbox(curP, curI); }

  containerEl.addEventListener('click', (e) => {
    const t = e.target.closest('.project-img');
    if (!t) return;
    const p = Number(t.dataset.p), i = Number(t.dataset.i);
    showLightbox(p, i);
  });
  closeBtn.addEventListener('click', hideLightbox);
  lb.addEventListener('click', (e) => {
    const isImage = e.target.closest('#lb-img');
    const isNav = e.target.closest('#lb-prev, #lb-next');
    const isClose = e.target.closest('#lb-close');
    if (!isImage && !isNav && !isClose) hideLightbox();
  });
  overlayEl.addEventListener('click', hideLightbox);
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); next(); });
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prev(); });
  window.addEventListener('keydown', (e) => {
    if (lb.classList.contains('hidden')) return;
    if (e.key === 'Escape') hideLightbox();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });
})();

// Footer year
(function() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Theme toggle button wiring (head bootstraps class to avoid FOUC)
(function() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const root = document.documentElement;
  function syncPressed() {
    btn.setAttribute('aria-pressed', String(root.classList.contains('dark')));
  }
  btn.addEventListener('click', function() {
    const isDark = root.classList.toggle('dark');
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch(_) {}
    syncPressed();
  });
  syncPressed();
})();

// Loader hide logic
(function() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  let isHidden = false;
  function hide() {
    if (isHidden) return;
    isHidden = true;
    loader.classList.add('opacity-0');
    setTimeout(() => loader.remove(), 300);
  }
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    hide();
  } else {
    document.addEventListener('DOMContentLoaded', hide, { once: true });
  }
  window.addEventListener('load', hide, { once: true });
  setTimeout(hide, 6000);
})();
