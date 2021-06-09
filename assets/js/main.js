$(function () {

    // reset search
    var resetSearch = function () {
        $('#search-input').val('')
        $('#search-clear').hide()
        $("#search-no-result").hide()
        $('#items .col-md-4').each(function () {
            $(this).show()
        })
    };

    var showSearchedElements = function (search) {
        var count = $('#items .col-md-4').length;
        $('#items .col-md-4').each(function (i) {
            if ($(this)[0].dataset.key.toLowerCase().indexOf(search.toLowerCase()) === -1) {
                $(this).hide()
            } else {
                $(this).show()
            }
            if (i+1 === count) {
                $([document.documentElement, document.body]).animate({
                    scrollTop: 0
                }, 0);
            }
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
            $('#search-clear').show()
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