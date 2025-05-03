fetch('/json/db.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('cardContainer');

    data.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4 mb-4';

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${item.image}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
          </div>
          <div class="video-container">
        <video width="100%" controls>
          <source src="${item.video}" type="video/mp4">
          Sizning brauzeringiz video oynatishni qo'llab-quvvatlamaydi.
        </video>
        </div>
      `;

      container.appendChild(col);
    });
  })
  .catch(err => console.error('Xatolik:', err));
