$(function () {

    // enter on subscribe input
    $('#mce-EMAIL').on('keyup', function (e) {
        var email = $(this).val();
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email.toLowerCase())) {
            $('#mc-embedded-subscribe').attr('disabled', false);
            var keycode = (e.keyCode ? e.keyCode : e.which);
            if (keycode == '13') {
                $('#mc-embedded-subscribe').click()
            }
            return
        }
        $('#mc-embedded-subscribe').attr('disabled', true);
    });

})