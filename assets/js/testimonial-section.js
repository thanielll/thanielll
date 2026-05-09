(function addUpworkTestimonialSection() {
  const homeMain = document.querySelector('body:not([data-case-template]) main');
  const aboutSection = document.querySelector('#about');
  const bestForSection = document.querySelector('.best-for-section');

  if (!homeMain || !aboutSection || document.querySelector('[data-testimonial-section]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-testimonial-section-style', 'true');
  style.textContent = `
    .testimonial-section {
      position: relative;
      overflow: hidden;
      background:
        linear-gradient(90deg, transparent 0 49.92%, rgba(var(--color-accent-rgb), 0.045) 49.92% 50.08%, transparent 50.08% 100%),
        radial-gradient(circle at 12% 20%, rgba(var(--color-accent-rgb), 0.055) 0 1px, transparent 1.5px),
        var(--color-bg);
      background-size: auto, 24px 24px, auto;
      border-top: 1px solid rgba(var(--color-accent-rgb), 0.08);
      border-bottom: 1px solid rgba(var(--color-accent-rgb), 0.08);
    }

    .testimonial-grid {
      display: grid;
      grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
      gap: clamp(2rem, 5vw, 5rem);
      align-items: start;
    }

    .testimonial-intro p:last-child {
      max-width: 35rem;
      color: var(--color-muted);
      font-size: 1rem;
      line-height: 1.75;
    }

    .testimonial-card {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--color-border);
      padding: clamp(1.35rem, 3vw, 2rem);
      background: linear-gradient(180deg, rgba(var(--color-surface-rgb), 0.96), rgba(255, 248, 239, 0.9));
      box-shadow: 14px 14px 0 rgba(var(--color-accent-rgb), 0.1);
      isolation: isolate;
    }

    .testimonial-card::before {
      content: '“';
      position: absolute;
      top: -0.7rem;
      right: 1.1rem;
      z-index: -1;
      color: rgba(var(--color-accent-rgb), 0.13);
      font-family: var(--font-display);
      font-size: clamp(7rem, 14vw, 13rem);
      font-weight: 900;
      line-height: 1;
    }

    .testimonial-card::after {
      content: "";
      position: absolute;
      inset: 1rem;
      z-index: -1;
      border: 1px solid rgba(var(--color-accent-rgb), 0.12);
      pointer-events: none;
    }

    .testimonial-topline {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem 1rem;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.25rem;
    }

    .testimonial-rating {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-accent-dark);
      font-size: 0.9rem;
      font-weight: 900;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .testimonial-rating span {
      color: var(--color-accent);
      letter-spacing: 0.08em;
    }

    .testimonial-project {
      color: var(--color-muted);
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .testimonial-quote {
      margin: 0;
      color: var(--color-ink);
      font-size: clamp(1.25rem, 2.1vw, 1.85rem);
      font-weight: 700;
      line-height: 1.36;
      letter-spacing: -0.035em;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      margin-top: 1.45rem;
      padding-top: 1.1rem;
      border-top: 1px solid var(--color-border);
    }

    .testimonial-avatar {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      border: 1px solid var(--color-ink);
      background: var(--color-ink);
      color: var(--color-on-dark);
      font-family: var(--font-display);
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: -0.04em;
      box-shadow: 5px 5px 0 rgba(var(--color-accent-rgb), 0.14);
    }

    .testimonial-author strong,
    .testimonial-author span {
      display: block;
    }

    .testimonial-author strong {
      color: var(--color-ink);
      font-size: 0.96rem;
      font-weight: 900;
    }

    .testimonial-author span {
      margin-top: 0.15rem;
      color: var(--color-muted);
      font-size: 0.82rem;
      font-weight: 700;
    }

    .testimonial-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.55rem;
      margin: 1.35rem 0 0;
      padding: 0;
      list-style: none;
    }

    .testimonial-tags li {
      border: 1px solid var(--color-border);
      padding: 0.5rem 0.65rem;
      background: rgba(var(--color-surface-rgb), 0.72);
      color: var(--color-accent-dark);
      font-size: 0.72rem;
      font-weight: 900;
      letter-spacing: 0.035em;
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      .testimonial-grid {
        grid-template-columns: 1fr;
      }
    }
  `;
  document.head.appendChild(style);

  const testimonialMarkup = `
    <section class="section testimonial-section" aria-labelledby="testimonial-title" data-testimonial-section>
      <div class="container testimonial-grid">
        <div class="testimonial-intro">
          <p class="eyebrow">Client Feedback</p>
          <h2 id="testimonial-title">Trusted by Clients for Clear Communication and Detail-Focused WordPress Work</h2>
          <p>A featured Upwork review from a Figma-to-WordPress / Elementor project, highlighting the kind of collaboration and quality I aim to bring into every build.</p>
        </div>

        <article class="testimonial-card" data-pointer-reactive>
          <div class="testimonial-topline">
            <div class="testimonial-rating" aria-label="5 out of 5 rating"><span>★★★★★</span> 5.0</div>
            <div class="testimonial-project">Figma to Elementor Template</div>
          </div>

          <blockquote class="testimonial-quote">
            Great experience working with Nathaniel. Communication is excellent. Very thorough in understanding the brief and has great attention to detail. A very good understanding of Figma, Elementor and best practices for SEO. Hire with confidence.
          </blockquote>

          <div class="testimonial-author">
            <span class="testimonial-avatar" aria-hidden="true">EI</span>
            <div>
              <strong>Erol I.</strong>
              <span>Upwork Client / Website Redesign Project</span>
            </div>
          </div>

          <ul class="testimonial-tags" aria-label="Client highlighted qualities">
            <li>Clear Communicator</li>
            <li>Detail Oriented</li>
            <li>Committed to Quality</li>
            <li>SEO Best Practices</li>
          </ul>
        </article>
      </div>
    </section>
  `;

  if (bestForSection) {
    bestForSection.insertAdjacentHTML('beforebegin', testimonialMarkup);
  } else {
    aboutSection.insertAdjacentHTML('afterend', testimonialMarkup);
  }
})();
