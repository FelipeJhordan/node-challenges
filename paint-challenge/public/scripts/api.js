const endpoint= "/paint"

const sendData = (jsonData) => {
    $.ajax({
        type:"POST",
        url: endpoint,
        data: JSON.stringify(jsonData),
        contentType: 'application/json',
        dataType: 'json',
        async: false,
        success: function(data, status) {
            generateSucessModalContent(data)
            new bootstrap.Modal(document.getElementById('myModalSuccess'), {}).toggle()
        },
        error:  function(data, status) {
            generateErrorModalContent(data.responseJSON)
            new bootstrap.Modal(document.getElementById('myModalError'), {}).toggle()
        }
    })
}