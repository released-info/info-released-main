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

    var loadHighlightForDescription = function(inputId, elId) {
        var text = $(inputId).val()
        if (text) {
            var el = $(elId)
            if (el.text().includes(text)) {
                var items = el.text().split(text)
                el.html(items[0] + ' <span class="highlightFoundedText">' + text + '</span> ' + items[1])
            }
        }
    }

    initReadMoreAboutSection()
    loadOdometer()
    loadHighlightForDescription('#highlighted-text-desc1', '#highlightTextDescription1')
    loadHighlightForDescription('#highlighted-text-desc2', '#highlightTextDescription2')

})