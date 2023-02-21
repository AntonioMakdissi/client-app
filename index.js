
fetch("https://apitest-90no.onrender.com/data")
    .then(response => response.json())
    .then(json => {
        json.forEach(student => {
            var content = `
            <div class="icon"><i class="bi bi-card-checklist"></i></div>
            <h4 class="title"><a href="">${student.className}</a></h4>
            <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
          `;

            var div = document.createElement('div')
            div.innerHTML = content;
            div.className = 'col-lg-4 col-md-6 icon-box'
            document.getElementById('ServicesRow').appendChild(div);
        });
    });