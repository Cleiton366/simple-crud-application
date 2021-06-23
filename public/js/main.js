let map;

$(document).ready(function () {
    initMap();
});

$(document).on("click", ".client", function () {
    var id = $(this).attr("id");
    fillForm(id);
});

$(document).on("click", "#updateBtn", function () {
    update();
});

$(document).on("click", ".refreshBtn", function () {
    location.reload();
});

$(document).on("click", "#submitBtn", function () {
    addClient();
});

$(document).on("click", ".deleteBtn", function () {
    var cnpj = $(this).attr("id");
    deleteClient(cnpj);
});

function addClient() {

    var cnpj = $("#cnpjInput").val();
    var razaoSocial = $("#razaoInput").val();
    var nomeContato = $("#contatoInput").val();
    var tel = $("#telInput").val();
    var logradouro = $("#logradouroInput").val();
    var numero = $("#numeroInput").val();
    var complemento = $("#complementoInput").val();
    var bairro = $("#bairroInput").val();
    var cidade = $("#cidadeInput").val();
    var estado = $("#estadoInput").val();
    var cep = $("#cepInput").val();
    
    let cliente = {
        cnpj, razaoSocial, nomeContato, tel,
        logradouro, numero, complemento, bairro,
        cidade, estado, cep
    };
    
    fetch("/addClient", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            cnpj: cliente.cnpj,
            razaoSocial: cliente.razaoSocial,
            nomeContato: cliente.nomeContato,
            tel: cliente.tel,
            logradouro: cliente.logradouro,
            numero: cliente.numero,
            complemento: cliente.complemento,
            bairro: cliente.bairro,
            cidade: cliente.cidade,
            estado: cliente.estado,
            cep: cliente.cep
        })
    });

    alert("Cliente cadastrado!");
}

function deleteClient(cnpj) {
    fetch("/delete", {
        method: "delete",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            cnpj: cnpj
        })
    });

    alert("Cliente Excluido!");
    location.reload();
}

function fillForm(id) {
    var cnpj = $("#cnpj" + id).text();
    var razaoSocial = $("#razaoSocial" + id).text();
    var nomeContato = $("#nomeContato" + id).text();
    var tel = $("#tel" + id).text();
    var logradouro = $("#logradouro" + id).text();
    var numero = $("#numero" + id).text();
    var complemento = $("#complemento" + id).text();
    var bairro = $("#bairro" + id).text();
    var cidade = $("#cidade" + id).text();
    var estado = $("#estado" + id).text();
    var cep = $("#cep" + id).text();
    var lat = $("#lat" + id).text();
    var lng = $("#lng" + id).text();

    cliente = {
        cnpj, razaoSocial, nomeContato, tel,
        logradouro, numero, complemento, bairro,
        cidade, estado, cep
    };

    document.getElementById("cnpjInput").setAttribute("value", cliente.cnpj);
    document.getElementById("razaoInput").setAttribute("value", cliente.razaoSocial);
    document.getElementById("contatoInput").setAttribute("value", cliente.nomeContato);
    document.getElementById("telInput").setAttribute("value", cliente.tel);
    document.getElementById("logradouroInput").setAttribute("value", cliente.logradouro);
    document.getElementById("numeroInput").setAttribute("value", cliente.numero);
    document.getElementById("complementoInput").setAttribute("value", cliente.complemento);
    document.getElementById("bairroInput").setAttribute("value", cliente.bairro);
    document.getElementById("cidadeInput").setAttribute("value", cliente.cidade);
    document.getElementById("estadoInput").setAttribute("value", cliente.estado);
    document.getElementById("cepInput").setAttribute("value", cliente.cep);
    
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    initMap(lat, lng);
}

function update() {

    var cnpj = $("#cnpjInput").val();
    var razaoSocial = $("#razaoInput").val();
    var nomeContato = $("#contatoInput").val();
    var tel = $("#telInput").val();
    var logradouro = $("#logradouroInput").val();
    var numero = $("#numeroInput").val();
    var complemento = $("#complementoInput").val();
    var bairro = $("#bairroInput").val();
    var cidade = $("#cidadeInput").val();
    var estado = $("#estadoInput").val();
    var cep = $("#cepInput").val();

    cliente = {
        cnpj, razaoSocial, nomeContato, tel,
        logradouro, numero, complemento, bairro,
        cidade, estado, cep
    };


    fetch("/update", {
        method: "put",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            cnpj: cliente.cnpj,
            razaoSocial: cliente.razaoSocial,
            nomeContato: cliente.nomeContato,
            tel: cliente.tel,
            logradouro: cliente.logradouro,
            numero: cliente.numero,
            complemento: cliente.complemento,
            bairro: cliente.bairro,
            cidade: cliente.cidade,
            estado: cliente.estado,
            cep: cliente.cep
        })
    });

    alert("Informações editadas!");
}

function initMap(lat, lng) {

    const LatLng = {lat, lng};

    map = new google.maps.Map(document.getElementById("map"), {
        center: LatLng,
        zoom: 15,
    });

    new google.maps.Marker({
        position: LatLng,
        map,
        title: "Localização do Cliente",
    });
}
