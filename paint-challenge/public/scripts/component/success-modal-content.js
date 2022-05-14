const generateSucessModalContent = (response) => {
  
  let html = `<div id="modalContent" class="row" >`
  response.paints.forEach(element => {
      let images = ``
        for(let i = 0; i<element.quantity; i++) {
              images += `<img src="static/assets/lata-de-tinta.svg" />`
        }
        html += `
        <div class="card col-md-6 col-12">
        <div class="card-body">
          <h5 class="card-title">Tinta de ${element.type}</h5>
          <div class="d-flex div-image"> 
          ${images}
          </div>
          <span>${element.quantity} latas</span>
          </div>
        </div>
    `

    });
    html += `  </div> `
    $("#modalContent").replaceWith(html)
    response.message && $(".lead.modal-message").replaceWith(`<p class="lead modal-message">${response.message}</p>`)
}
