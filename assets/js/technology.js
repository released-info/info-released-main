$(function () {

    var initReadMoreAboutSection = function() {
        $(".about-section .container-lg").append("<div class='text-center'><i id='hide-about' class='bi bi-arrow-up'></i><span class='btn btn-primary btn-lg' id='more-about'>Read more</span></div>")
        
        $("#more-about").on('click', function() {
            $(this).hide()
            $("#hide-about").css("display", "flex")
            $("#hidden-about").slideDown(function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".about-section").offset().top
                }, 0);
            })
        })
        $("#hide-about").on('click', function() {
            $(this).hide()
            $("#more-about").show()
            $("#hidden-about").slideUp()
        })
    }

    // odometer
    var loadOdometer = function () {
        var days = $("#released-days").val();
        if (days && parseInt(days) > 0) {
            var daysArrayLength = days.split('').length
            var odometerInitValue = []
            for (var i = 0; i < daysArrayLength; i++) {
                odometerInitValue.push(0)
            }
            $("#counter").addClass('items_' + odometerInitValue.length)
            if (days > 0) {
                var el = document.querySelector('#odometer');
                var counter = new Odometer({
                    el: el,
                    value: odometerInitValue.join(''),
                    format: '(dddd)'
                });
                counter.update(days)
            }
        }
    }
    
    initReadMoreAboutSection()
    loadOdometer()

})