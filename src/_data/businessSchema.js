module.exports = function () {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Орен Мрамор",
    "url": "https://oren-mramor.ru/",
    "telephone": "+79619294543",
    "email": "oleg-orenburg@mail.ru",
    "address": {"@type":"PostalAddress", "streetAddress":"ул. Шевченко, 53", "addressLocality":"Оренбург", "addressRegion":"Оренбургская область", "addressCountry":"RU"},
    "image": "https://oren-mramor.ru/assets/img/work-03.webp"
  });
};
