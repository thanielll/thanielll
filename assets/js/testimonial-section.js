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
      background: var(--color-bg-soft);
      border-top: 1px solid rgba(var(--color-accent-rgb), 0.08);
      border-bottom: 1px solid rgba(var(--color-accent-rgb), 0.08);
    }

    .testimonial-section::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 12% 18%, rgba(var(--color-accent-rgb), 0.045) 0 1px, transparent 1.5px),
        linear-gradient(90deg, rgba(var(--color-accent-rgb), 0.025) 1px, transparent 1px),
        linear-gradient(rgba(var(--color-accent-rgb), 0.025) 1px, transparent 1px);
      background-size: 24px 24px, 96px 96px, 96px 96px;
      pointer-events: none;
    }

    .testimonial-grid {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
      gap: clamp(1.5rem, 4vw, 4rem);
      align-items: center;
    }

    .testimonial-intro h2 {
      max-width: 9.5ch;
      font-size: clamp(2.8rem, 6vw, 5.6rem);
      line-height: 0.92;
      letter-spacing: -0.07em;
    }

    .testimonial-intro p:last-child {
      max-width: 28rem;
      color: var(--color-muted);
      font-size: 0.98rem;
      line-height: 1.75;
    }

    .testimonial-card {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--color-border);
      padding: clamp(1.25rem, 3vw, 2rem);
      background: rgba(var(--color-surface-rgb), 0.9);
      box-shadow: 10px 10px 0 rgba(var(--color-accent-rgb), 0.08);
      isolation: isolate;
    }

    .testimonial-card::before {
      content: "";
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 52px;
      height: 52px;
      border-top: 1px solid rgba(var(--color-accent-rgb), 0.22);
      border-right: 1px solid rgba(var(--color-accent-rgb), 0.22);
      pointer-events: none;
    }

    .testimonial-topline {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem 1rem;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .testimonial-rating {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-accent-dark);
      font-size: 0.86rem;
      font-weight: 900;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .testimonial-rating span {
      color: var(--color-accent);
      letter-spacing: 0.08em;
    }

    .testimonial-project {
      color: var(--color-muted);
      font-size: 0.72rem;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .testimonial-quote {
      max-width: 48rem;
      margin: 0;
      color: var(--color-ink);
      font-size: clamp(1.05rem, 1.45vw, 1.35rem);
      font-weight: 600;
      line-height: 1.55;
      letter-spacing: -0.025em;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 0.82rem;
      margin-top: 1.25rem;
      padding-top: 1rem;
      border-top: 1px solid var(--color-border);
    }

    .testimonial-avatar {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border: 1px solid var(--color-ink);
      background: var(--color-ink);
      color: var(--color-on-dark);
      font-family: var(--font-display);
      font-size: 0.9rem;
      font-weight: 900;
      letter-spacing: -0.04em;
      box-shadow: 4px 4px 0 rgba(var(--color-accent-rgb), 0.12);
    }

    .testimonial-author strong,
    .testimonial-author span {
      display: block;
    }

    .testimonial-author strong {
      color: var(--color-ink);
      font-size: 0.94rem;
      font-weight: 900;
    }

    .testimonial-author span {
      margin-top: 0.12rem;
      color: var(--color-muted);
      font-size: 0.8rem;
      font-weight: 700;
    }

    .testimonial-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1.15rem 0 0;
      padding: 0;
      list-style: none;
    }

    .testimonial-tags li {
      border: 1px solid var(--color-border);
      padding: 0.45rem 0.6rem;
      background: rgba(var(--color-surface-rgb), 0.7);
      color: var(--color-accent-dark);
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.035em;
      text-transform: uppercase;
    }

    @media (max-width: 900px) {
      .testimonial-grid {
        grid-template-columns: 1fr;
      }

      .testimonial-intro h2 {
        max-width: 11ch;
      }
    }
  `;
  document.head.appendChild(style);

  const testimonialMarkup = `
    <section class="section testimonial-section" aria-labelledby="testimonial-title" data-testimonial-section>
      <div class="container testimonial-grid">
        <div class="testimonial-intro">
          <p class="eyebrow">Client Feedback</p>
          <h2 id="testimonial-title">What Clients Say</h2>
          <p>A featured Upwork review from a Figma-to-WordPress / Elementor project.</p>
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
              <span>Upwork Client</span>
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
