$(document).ready(function() {
    if ( $(window).width() < 1100 ) {
        $(".advantages--first-slide").owlCarousel({
            nav: false,
            dots: false,
            items: 4,
            center: true,
            margin:30,
            responsive: {
                0: {
                    center: true,
                    items: 1,
                    stagePadding: 60,
                    dots: true,
                    nav: true,
                    navContainer: '#advantagesNavContainer',
                    dotsContainer: '#advantagesDotsContainer'
                },
                500: {
                    items: 2,
                    stagePadding: 20,
                },
                780: {
                    items: 3,
                    stagePadding: 20,
                }
            }
        });

        $(".activation--dawn").owlCarousel({
            nav: false,
            dots: false,
            margin:40,
            center: true,
            responsive: {
                0: {
                    center: true,
                    items: 1,
                    stagePadding: 90,
                    dots: true,
                    nav: true,
                    navContainer: '#activationNavContainer',
                    dotsContainer: '#activationDotsContainer'
                },
                780: {
                    items: 2,
                    stagePadding: 90,
                }
            }
        });

        $(".all-section").owlCarousel({
            nav: false,
            dots: false,
            margin:30,
            center: true,
            responsive: {
                0: {
                    center: true,
                    items: 1,
                    stagePadding: 60,
                    dots: true,
                    nav: true,
                    navContainer: '#sectionNavContainer',
                    dotsContainer: '#sectionDotsContainer',
                },
                500: {
                    items: 2,
                    stagePadding: 20,
                },
                780: {
                    items: 3,
                    stagePadding: 20,
                }
            }
        });
    
      } else {
        $('.advantages--first-slide').addClass('off');
        $('.activation--dawn').addClass('off');
        $('.all-section').addClass('off');
      };

      
  });



$(".review-bottom").owlCarousel({
    nav: true,
    dots: false,
    navContainer: '#reviewNavContainer',
    stagePadding: 0,
    margin:30,
    responsive: {
        0: {
            margin:30,
            center: true,
            items: 1,
            dots: true,
            dotsContainer: '#reviewDotsContainer'
        },
        740: {
            margin:30,
            items: 2
        },
        1100: {
            items: 3
        }
    }
});

$(".news").owlCarousel({
    nav: true,
    dots: false,
    navContainer: '#newsNavContainer',
    stagePadding: 0,
    responsive: {
        0: {
            center: true,
            items: 1,
            dots: true,
            dotsContainer: '#newsDotsContainer'
        },
        740: {
            items: 2,
        },
        1100: {
            items: 3
        }
    }
});