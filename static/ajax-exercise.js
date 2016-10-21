"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $.get("/fortune", function (result) {
        $("#fortune-text").html(result);
    })

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var formInputs = {
        "zipcode": $("#zipcode-field").val()
    };
    // var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    console.log("zipcode is" + $("#zipcode-field").val());

    $.get('/weather.json', formInputs, function(result) {
        $('#weather-info').html(result.forecast);
        // console.log("url is " + url);
    });
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    var formInputs = {"melon_type": $("#melon-type-field").val(),
                        "qty": $("#qty-field").val()};

    $.post("/order-melons.json", formInputs, function (response) {
        $("#order-status").html(response.msg);
        if (response.code === "ERROR") {
            $("#order-status").addClass("order-error");
        }
    });
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


