const config = window.SITE_CONFIG || {};
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('whatsapp-button').addEventListener('click', () => {
  const number = String(config.whatsappNumber || '').replace(/\D/g, '');
  if (!number) {
    document.getElementById('whatsapp-note').textContent = 'Contatto WhatsApp non ancora configurato. Puoi usare il modulo quando sarà attivato.';
    return;
  }
  window.open(`https://wa.me/${number}?text=${encodeURIComponent('Buongiorno Dott. Chiappe, vorrei avere informazioni per una valutazione fisioterapica.')}`, '_blank', 'noopener,noreferrer');
});
document.getElementById('contact-form').addEventListener('submit', async (event) => {
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
