// Prime Task Services - Client-Side Interactive Engine (Vanilla JS)
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Toggle Dictionary
  const translations = {
    en: {
      "nav.services": "Services",
      "nav.military": "Fort Riley PCS",
      "nav.about": "About",
      "nav.pricing": "Pricing",
      "nav.gallery": "Projects",
      "nav.contact": "Contact",
      "nav.call": "Call (214) 770-5374",
      "nav.quote": "Get Free Quote",
      "hero.badge": "Registered LLC · Serving Manhattan, Fort Riley & Junction City",
      "hero.title": "Professional Handyman & Property Maintenance in Manhattan, KS",
      "hero.sub": "Dependable residential repairs, HVAC filter maintenance, certified turnover cleaning, and flooring installations. Proudly offering bilingual English and Spanish service for Fort Riley military families and local homeowners.",
      "hero.cta.quote": "Request Free Estimate",
      "hero.cta.call": "Call (214) 770-5374",
      "hero.badge1": "Bilingual Service (EN / ES)",
      "hero.badge2": "Fort Riley Housing Compliant",
      "hero.badge3": "Same-Day Emergency Dispatch",
      "hero.badge4": "Licensed & Insured LLC",
      "services.title": "Core Property Maintenance Services",
      "services.sub": "Dedicated residential upkeep, turnkey cleaning for military reassignment, and meticulous repairs delivered on schedule.",
      "military.badge": "Military Relocation Specialist",
      "military.title": "Fort Riley PCS Turnover Cleaning & Move-Out Guarantee",
      "military.sub": "We understand strict military housing inspection standards and tight clearance timelines. Our turnkey PCS packages guarantee your quarters pass final walk-through inspection.",
      "pricing.title": "Transparent Turnover Cleaning & PCS Packages",
      "pricing.sub": "Clear upfront pricing with no hidden charges. Custom repair estimates provided on-site.",
      "gallery.title": "Recent Job Site Transformations",
      "gallery.sub": "Before and after documented results from residential remodels, tenant move-outs, and drywall repairs in Riley and Geary Counties.",
      "areas.title": "Verified Regional Service Areas",
      "areas.sub": "Same-day dispatched technicians servicing across Kansas Flint Hills region.",
      "contact.title": "Schedule Service or Request an Estimate",
      "contact.sub": "Direct consultation with owner Horace. Call directly or submit your project details below for a prompt response.",
      "contact.submit": "Submit Service Request"
    },
    es: {
      "nav.services": "Servicios",
      "nav.military": "Servicio Militar Fort Riley",
      "nav.about": "Nosotros",
      "nav.pricing": "Precios",
      "nav.gallery": "Proyectos",
      "nav.contact": "Contacto",
      "nav.call": "Llamar (214) 770-5374",
      "nav.quote": "Cotización Gratis",
      "hero.badge": "LLC Registrada · Manhattan, Fort Riley y Junction City",
      "hero.title": "Servicios Profesionales de Mantenimiento y Reparaciones en Manhattan, KS",
      "hero.sub": "Reparaciones confiables para el hogar, mantenimiento de HVAC, limpieza profunda de mudanza e instalación de pisos. Servicio 100% bilingüe en inglés y español para familias militares de Fort Riley y propietarios locales.",
      "hero.cta.quote": "Solicitar Cotización Gratis",
      "hero.cta.call": "Llamar al (214) 770-5374",
      "hero.badge1": "Servicio Bilingüe (Inglés / Español)",
      "hero.badge2": "Normas de Vivienda Militar Cumplidas",
      "hero.badge3": "Servicio Disponible el Mismo Día",
      "hero.badge4": "LLC Registrada y Asegurada",
      "services.title": "Servicios Principales de Mantenimiento",
      "services.sub": "Mantenimiento residencial dedicado, limpieza integral para traslados militares y reparaciones detalladas a tiempo.",
      "military.badge": "Especialista en Reubicación Militar",
      "military.title": "Limpieza de Mudanza PCS en Fort Riley con Inspección Garantizada",
      "military.sub": "Conocemos los estándares de inspección de vivienda militar y los plazos estrictos. Nuestros paquetes de PCS garantizan que su vivienda apruebe la inspección final.",
      "pricing.title": "Paquetes Claros de Limpieza y Mudanza PCS",
      "pricing.sub": "Precios transparentes sin costos ocultos. Estimaciones de reparaciones personalizadas en el sitio.",
      "gallery.title": "Transformaciones Recientes en el Sitio de Trabajo",
      "gallery.sub": "Resultados documentados de antes y después en remodelaciones residenciales y reparaciones de paneles de yeso en Manhattan y Junction City.",
      "areas.title": "Áreas de Cobertura Regional",
      "areas.sub": "Técnicos con respuesta el mismo día en toda la región de Kansas Flint Hills.",
      "contact.title": "Agendar Servicio o Solicitar Estimación",
      "contact.sub": "Consulta directa con el propietario Horace. Llámenos directamente o envíe los detalles de su proyecto.",
      "contact.submit": "Enviar Solicitud de Servicio"
    }
  };

  let currentLang = 'en';

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('current-lang-label');

  function setLanguage(lang) {
    currentLang = lang;
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'ES' : 'EN';
    }
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    document.documentElement.lang = lang;
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'es' : 'en');
    });
  }

  // 2. Mobile Nav Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 3. FAQ Accordion Interaction
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
      });

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 4. Contact Form Submission Feedback
  const quoteForm = document.getElementById('quote-form');
  const formStatus = document.getElementById('form-status');

  if (quoteForm && formStatus) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Submitting...';
      }

      setTimeout(() => {
        quoteForm.reset();
        formStatus.style.display = 'block';
        formStatus.innerHTML = `
          <div style="padding: 1rem; background-color: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; color: #6ee7b7; font-size: 0.875rem; margin-bottom: 1rem;">
            <strong>${currentLang === 'es' ? '¡Solicitud Recibida con Éxito!' : 'Request Received Successfully!'}</strong><br>
            ${currentLang === 'es' ? 'Horace se comunicará con usted en breve para confirmar la visita y detalles.' : 'Horace will contact you shortly to review your scope and confirm appointment details.'}
          </div>
        `;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = currentLang === 'es' ? 'Enviar Solicitud de Servicio' : 'Submit Service Request';
        }
      }, 600);
    });
  }

  // 5. IntersectionObserver Scroll Reveal & Blur-In Engine (Cleanecs Motion)
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-from-left, .reveal-from-right');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => scrollObserver.observe(el));
  } else {
    // Fallback if browser does not support IntersectionObserver
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
});
