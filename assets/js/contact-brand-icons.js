(function addContactBrandIcons() {
  if (document.querySelector('[data-contact-brand-icons-style]')) return;

  const style = document.createElement('style');
  style.setAttribute('data-contact-brand-icons-style', 'true');
  style.textContent = `
    .channel-card .channel-brand-icon {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      flex: 0 0 48px;
      border: 1px solid rgba(255, 248, 240, 0.16);
      background: #141212;
      box-shadow: 6px 6px 0 rgba(196, 106, 45, 0.12);
      transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
    }

    .channel-card .channel-brand-icon img {
      display: block;
      width: 26px;
      height: 26px;
      object-fit: contain;
      filter: none;
    }

    .channel-card .channel-brand-icon.is-wide img {
      width: 33px;
      height: auto;
      max-height: 22px;
    }

    .channel-card:hover .channel-brand-icon,
    .channel-card:focus-visible .channel-brand-icon {
      transform: translate(-2px, -2px);
      border-color: rgba(196, 106, 45, 0.45);
      box-shadow: 9px 9px 0 rgba(196, 106, 45, 0.16);
    }

    .channel-card:hover .channel-brand-icon img,
    .channel-card:focus-visible .channel-brand-icon img {
      transform: scale(1.04);
    }
  `;
  document.head.appendChild(style);

  const icons = [
    {
      test: (href) => href.startsWith('mailto:'),
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gmail_icon_(2020).svg',
      alt: 'Gmail logo',
      wide: false
    },
    {
      test: (href) => href.includes('wa.me') || href.includes('whatsapp'),
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/WhatsApp.svg',
      alt: 'WhatsApp logo',
      wide: false
    },
    {
      test: (href) => href.includes('upwork.com'),
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Upwork_Logo.svg',
      alt: 'Upwork logo',
      wide: true
    },
    {
      test: (href) => href.includes('linkedin.com'),
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/LinkedIn_icon.svg',
      alt: 'LinkedIn logo',
      wide: false
    }
  ];

  const updateIcons = () => {
    document.querySelectorAll('.channel-card').forEach((card) => {
      const href = card.getAttribute('href') || '';
      const icon = icons.find((item) => item.test(href));
      if (!icon || card.querySelector('.channel-brand-icon')) return;

      const existingIcon = card.querySelector('.channel-icon, .channel-mark');
      if (!existingIcon) return;

      existingIcon.outerHTML = `
        <span class="channel-brand-icon${icon.wide ? ' is-wide' : ''}" aria-hidden="true">
          <img src="${icon.src}" alt="${icon.alt}" loading="lazy" decoding="async">
        </span>
      `;
    });
  };

  updateIcons();

  const observer = new MutationObserver(updateIcons);
  observer.observe(document.body, { childList: true, subtree: true });
})();
