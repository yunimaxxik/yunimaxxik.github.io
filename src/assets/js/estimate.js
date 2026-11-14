(() => {
  const form = document.querySelector('#estimate-form');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'Здравствуйте! Хочу уточнить стоимость.',
      'Изделие: ' + data.get('product'),
      'Материал: ' + data.get('material'),
      'Пожелания: ' + (data.get('details') || 'не указаны')
    ].join('\n');
    window.open('https://wa.me/79619294543?text=' + encodeURIComponent(message), '_blank', 'noopener');
  });
})();
