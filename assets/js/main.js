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

    // reset search
    var resetSearch = function () {
        $('#search-input').val('')
        $("#search-no-result").hide()
        $('#items .col-md-4').each(function () {
            $(this).show()
        })
    };

    var showSearchedElements = function (search) {
        $('#items .col-md-4').each(function () {
            if ($(this)[0].dataset.key.toLowerCase().indexOf(search.toLowerCase()) === -1) {
                $(this).hide()
                return
            }
            $(this).show()
        })
        if($("#items .col-md-4:visible").length === 0) {
            $("#search-no-result").show()
            return
        }
        $("#search-no-result").hide()
    };

    // technology search
    $('#search-input').on('keyup', function (e) {
        var search = $(this).val();
        if (search != '') {
            showSearchedElements(search)
            return
        }
        resetSearch();
    });

    $('#search-clear').on('click', function() {
        resetSearch();
    })

    // faq accordion
    var loadAccordion = function() {
        $('.faq dt').each(function () {
            $(this).append('<div class="icon"><i class="bi bi-chevron-down"></i></div>')
            $(this).on('click', function() {
                var arrow = $(this).find('i')
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active')
                    $(this).next('dd').slideUp(function() {
                        $(arrow).removeClass('bi-chevron-up').addClass('bi-chevron-down')
                    })
                } else {
                    $('dt').removeClass('active')
                    $("dd").slideUp(function() {
                        $('dt').find('i').removeClass('bi-chevron-up').addClass('bi-chevron-down')
                    })
                    $(this).addClass('active')
                    $(this).next('dd').slideDown(function() {
                        $(arrow).removeClass('bi-chevron-down').addClass('bi-chevron-up')
                    })
                }
            });
        })
    }

    resetSearch();
    loadAccordion();

})