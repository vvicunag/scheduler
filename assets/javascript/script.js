

//function retrieves any info in local storage - also works when site is refreshed
function retrieveEvent() {
    var event9 = JSON.parse(localStorage.getItem("event9"));
    $("#input-code-9").val(event9);
    var event10 = JSON.parse(localStorage.getItem("event10"));
    $("#input-code-10").val(event10);
    var event11 = JSON.parse(localStorage.getItem("event11"));
    $("#input-code-11").val(event11);
    var event12 = JSON.parse(localStorage.getItem("event12"));
    $("#input-code-12").val(event12);
    var event13 = JSON.parse(localStorage.getItem("event13"));
    $("#input-code-13").val(event13);
    var event14 = JSON.parse(localStorage.getItem("event14"));
    $("#input-code-14").val(event14);
    var event15 = JSON.parse(localStorage.getItem("event15"));
    $("#input-code-15").val(event15);
    var event16 = JSON.parse(localStorage.getItem("event16"));
    $("#input-code-16").val(event16);
    var event17 = JSON.parse(localStorage.getItem("event17"));
    $("#input-code-17").val(event17);

}
retrieveEvent();

//function displays the time in header and updates color coding
setInterval(function() {
    $("#current-date").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    colorCodeInput();
}, 1000);

// function will color code the slots
function colorCodeInput() {
    var currentHour = moment().format('HH');
    // if statements will make future slots green
    if(9 > currentHour) {
        $("#color-code-9").css("background-color", "#77dd77");
        $("#input-code-9").css("background-color", "#77dd77");
    }
    if($(".hour-display")[1].innerHTML > currentHour) {
        $("#color-code-10").css("background-color", "#77dd77");
        $("#input-code-10").css("background-color", "#77dd77");
    }
    if($(".hour-display")[2].innerHTML > currentHour) {
        $("#color-code-11").css("background-color", "#77dd77");
        $("#input-code-11").css("background-color", "#77dd77");
    }
    if($(".hour-display")[3].innerHTML > currentHour) {
        $("#color-code-12").css("background-color", "#77dd77");
        $("#input-code-12").css("background-color", "#77dd77");
    }
    if($(".hour-display")[4].innerHTML > currentHour) {
        $("#color-code-13").css("background-color", "#77dd77");
        $("#input-code-13").css("background-color", "#77dd77");
    }
    if($(".hour-display")[5].innerHTML > currentHour) {
        $("#color-code-14").css("background-color", "#77dd77");
        $("#input-code-14").css("background-color", "#77dd77");
    }
    if($(".hour-display")[6].innerHTML > currentHour) {
        $("#color-code-15").css("background-color", "#77dd77");
        $("#input-code-15").css("background-color", "#77dd77");
    }
    if($(".hour-display")[7].innerHTML > currentHour) {
        $("#color-code-16").css("background-color", "#77dd77");
        $("#input-code-16").css("background-color", "#77dd77");
    }
    if($(".hour-display")[8].innerHTML > currentHour) {
        $("#color-code-17").css("background-color", "#77dd77");
        $("#input-code-17").css("background-color", "#77dd77");
    }
    // if statements will display red color if present hour corresponds
    if(9 == currentHour) {
        $("#color-code-9").css("background-color", "#ff6961");
        $("#input-code-9").css("background-color", "#ff6961");
    }
    if($(".hour-display")[1].innerHTML == currentHour) {
        $("#color-code-10").css("background-color", "#ff6961");
        $("#input-code-10").css("background-color", "#ff6961");
    }
    if($(".hour-display")[2].innerHTML == currentHour) {
        $("#color-code-11").css("background-color", "#ff6961");
        $("#input-code-11").css("background-color", "#ff6961");
    }
    if($(".hour-display")[3].innerHTML == currentHour) {
        $("#color-code-12").css("background-color", "#ff6961");
        $("#input-code-12").css("background-color", "#ff6961");
    }
    if($(".hour-display")[4].innerHTML == currentHour) {
        $("#color-code-13").css("background-color", "#ff6961");
        $("#input-code-13").css("background-color", "#ff6961");
    }
    if($(".hour-display")[5].innerHTML == currentHour) {
        $("#color-code-14").css("background-color", "#ff6961");
        $("#input-code-14").css("background-color", "#ff6961");
    }
    if($(".hour-display")[6].innerHTML == currentHour) {
        $("#color-code-15").css("background-color", "#ff6961");
        $("#input-code-15").css("background-color", "#ff6961");
    }
    if($(".hour-display")[7].innerHTML == currentHour) {
        $("#color-code-16").css("background-color", "#ff6961");
        $("#input-code-16").css("background-color", "#ff6961");
    }
    if($(".hour-display")[8].innerHTML == currentHour) {
        $("#color-code-17").css("background-color", "#ff6961");
        $("#input-code-17").css("background-color", "#ff6961");
    }
}

//click on a save button and text on corresponding input will be saved in local storage
    $(".save-button").on("click", function(event) {
        var savedEvent = $(event.target).parent().prev().children().first().val();
        var spanText = $(event.target).parent().prev().prev().children().first().text()
        localStorage.setItem('event'+spanText, JSON.stringify(savedEvent))
    })