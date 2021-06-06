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

    var getMetaTag = function (metaName) {
        var metas = document.getElementsByTagName('meta');
        for (let i = 0; i < metas.length; i++) {
          if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
          }
        }
        return '';
      }

    // twiiter
    var loadTwitter = function () {
        var text = getMetaTag("twitter:description")
        var url = getMetaTag("url")
        var postBy = getMetaTag("twitter:site")
        var href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url)
        if (postBy) {
            href +=  '&via=' + postBy
        }
        $('.share-twitter').each(function () {
            $(this).attr('href', href)
        })
    }
    
    // facebook
    var loadFacebook = function () {
        var url = getMetaTag("url")
        var href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url)
        $('.share-facebook').on("click", function() {
            window.open(href, 'targetWindow',
            `toolbar=no,
             location=no,
             status=no,
             menubar=no,
             scrollbars=yes,
             resizable=yes,
             width=600,
             height=600`)
        })
    }

    // linkedin
    var loadLinkedIn = function () {
        var url = getMetaTag("url")
        var href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url)
        $('.share-linkedin').on("click", function() {
            window.open(href, 'targetWindow',
            `toolbar=no,
             location=no,
             status=no,
             menubar=no,
             scrollbars=yes,
             resizable=yes,
             width=600,
             height=600`)
        })
    }

    loadTwitter()
    loadFacebook()
    loadLinkedIn()

})