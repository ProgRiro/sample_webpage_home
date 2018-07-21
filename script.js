$(function () {
    let $indicator = $('.slideshow-indicator'),
        $slide = $('.slide'),
        indicatorHTML = '';
    $slide.each(function (i) {
        $(this).css({
            left: 100 * i + '%'
        });
        let id = $(this).attr('id');
        indicatorHTML += '<a href="#' + id + '">' + (i + 1) + '</a>';
    });
    $indicator.html(indicatorHTML);

    let index = $slide.index();
    let currentIndex = 0;
    let slideCount = $slide.length;

    function goToSlide(index) {
        $(".slideshow-slides").stop(false).animate({
            right: 100 * index + '%'
        });

        currentIndex = index;

        updateNav();
    }

    var $prev = $('.prev'),
        $next = $('.next');
    function updateNav() {
        if (currentIndex === 0) {
            $prev.addClass('disabled');
        } else {
            $prev.removeClass('disabled');
        }

        if (currentIndex === slideCount - 1) {
            $next.addClass('disabled');
        } else {
            $next.removeClass('disabled');
        }

        $indicator.find('a').removeClass('active');
        $('a').eq(currentIndex).addClass('active');
    }

    let interval = 5000,
        timer;
    function startTimer() {
        timer = setInterval(function () {
            let nextIndex = (currentIndex + 1) % slideCount;

            if (nextIndex === 0) {
                goToSlide(0);
            } else {
                goToSlide(nextIndex);
            }
        }, interval);
    }

    function stopTimer() {
        clearInterval(timer);
    }

    startTimer();

    let $container = $(".slideshow");

    $container.on('mouseover', function () {
        stopTimer();
    })

    $container.on('mouseout', function () {
        startTimer();
    })

    let $nav = $('.slideshow-nav');

    $nav.on('click', 'a', function (event) {
        event.preventDefault();

        if (!$(this).hasClass('prev')) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(currentIndex - 1);
        }
    });

    $indicator.on('click', 'a', function (event) {
        event.preventDefault();
        if (!$(this).hasClass('active')) {
            goToSlide($(this).index());
        }
    });



    /* article */
    let $article = $(".article");
    $article.on('mouseover', function () {
        $(this).css({
            backgroundColor: "#f4f4f4",
            // border: "2px solid #002020"
        });
    });
    $article.on('mouseleave', function () {
        $(this).css({
            backgroundColor: "inherit",
            // border: "none"
        })
    })

    let $item = $(".item");
    $item.on('mouseover', function () {
        $(this).css({
            backgroundColor: "#f4f4f4",
            // border: "2px solid #002020"
        });
    });
    $item.on('mouseleave', function () {
        $(this).css({
            backgroundColor: "inherit",
            // border: "none"
        })
    })

});
