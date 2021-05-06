$(function () {

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
            // console.log((".col-md-4:hidden").length)
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

    resetSearch();

})