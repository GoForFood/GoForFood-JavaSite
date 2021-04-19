$(document).ready(async () => {

    $("#locales").change(function () {
        var selectedOption = $('#locales').val();
        if (selectedOption != ''){
            window.location.replace(_URL.insertArg(window.location.href, "lang", selectedOption));
        }
    });
});