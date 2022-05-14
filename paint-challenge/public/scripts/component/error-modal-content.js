const formWallSideValidatorMap = {
    frontWall: "frontal",
    backWall: "trazeiro",
    rightWall: "direito",
    leftWall: "esquerdo"
}

const formWallYieldValidatorMap = {
    windows: "janela",
    doors: "porta",
    height: "altura",
    width: "largura"
}

const generateErrorModalContent = (response) => {
    const data = (response.data.details) ? 
        response.data.details.map(e => `O campo ${formWallYieldValidatorMap[e.path[1]]} da parede ${formWallSideValidatorMap[e.path[0]]} precisa ser >= 0`)
        :response.data.map(r=> r.message)
    let html = `<div id="modalContentError" class="row" > 
    <h5>${response.message == "Invalid Params" ? "Formulário com paramêtros inválidos" : "Error na regra de negócios."}</h5>
    `
     
    data.forEach(element => {
          html += `
          <div class="card col-12">
            <div class="card-body">
                ${element}
            </div>
          </div>
      `
  
      });
      html += `  </div> `
      $("#modalContentError").replaceWith(html)
  }
  