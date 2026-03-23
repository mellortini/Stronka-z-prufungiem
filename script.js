function setLang(lang) {
  const langs = ['de', 'pl', 'ua', 'ru', 'ar'];

  langs.forEach(l => {
    document.querySelectorAll('.' + l).forEach(el => {
      if (l === 'de' || lang === l || lang === 'all') {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  });

  document.querySelectorAll('table tr').forEach(row => {
    const cells = row.children;

    for (let i = 0; i < cells.length; i += 1) {
      cells[i].style.display = 'none';
    }

    if (cells[0]) {
      cells[0].style.display = 'table-cell';
    }

    if (lang === 'de') {
      return;
    }

    const map = {
      pl: 1,
      ua: 2,
      ru: 3,
      ar: 4,
    };

    const index = map[lang];

    if (cells[index]) {
      cells[index].style.display = 'table-cell';
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setLang('pl');
});
