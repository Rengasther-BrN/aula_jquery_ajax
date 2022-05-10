function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            
            // primera forma de fazer
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);

            // segunda forma de fazer
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("localidade").innerHTML = response.localidade;
        }
    })
}