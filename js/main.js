fetch('data/achieve.json')
  .then(response => response.json())
  .then(achieve => {
    const ul = document.getElementById('achieve');
    achieve.forEach(achieve => {
      const li = document.createElement('li');
      li.textContent = `${achieve.title} (${achieve.year}) - ${achieve.authors}, ${achieve.journal}`;
      ul.appendChild(li);
    });
  });