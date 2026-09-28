const config = window.SITE_CONFIG || {};
document.getElementById('year').textContent = new Date().getFullYear();
const whatsappNumber = String(config.whatsappNumber || '').replace(/\D/g, '');
const whatsappMessage = String(config.whatsappMessage || '');
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = whatsappUrl;
});

// Mobile keyboards shrink the visual viewport. Hide the fixed CTA while one is
// open so it never sits over form controls or the submit button.
if (window.visualViewport) {
  const setKeyboardState = () => {
    const keyboardIsOpen = window.visualViewport.height < window.innerHeight * 0.75;
    document.body.classList.toggle('keyboard-open', keyboardIsOpen);
  };
  window.visualViewport.addEventListener('resize', setKeyboardState);
  setKeyboardState();
}

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('focusin', () => document.body.classList.add('keyboard-open'));
contactForm.addEventListener('focusout', () => document.body.classList.remove('keyboard-open'));

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.getElementById('form-status');
  const endpoint = String(config.formspreeEndpoint || '');
  if (!/^https:\/\/formspree\.io\/f\/[\w-]+$/.test(endpoint)) {
    status.textContent = 'Il modulo è una bozza: l’indirizzo Formspree deve ancora essere configurato.';
    return;
  }
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  status.textContent = 'Invio in corso…';
  try {
    const response = await fetch(endpoint, {method: 'POST', body: new FormData(form), headers: {Accept: 'application/json'}});
    if (!response.ok) throw new Error('Form submission failed');
    form.reset();
    status.textContent = 'Messaggio inviato. Ti risponderemo appena possibile.';
  } catch {
    status.textContent = 'Invio non riuscito. Riprova tra poco.';
  } finally {
    button.disabled = false;
  }
});
