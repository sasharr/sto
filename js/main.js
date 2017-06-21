$(".popup").click( function() {
    event.preventDefault();
   $('.popup-form').css("display", "block")
});

// When the user clicks on <span> (x), close the modal
//     span.onclick = function() {
//         modal.style.display = "none";
//     }

// When the user clicks anywhere outside of the modal, close it
$('.popup-form').click( function(event) {
    if (event.target == $('.popup-form')) {
        $('.popup-form').style.display = "none";
    }
});

//
function validateError(obj) {
    obj.addClass("error")
}

$("#orderName").keyup(function () {
    var name = $("#orderName").val();
    if (name.length > 2 && name.length < 10) {
        $(this).removeClass("error");
    }
});


$("#pop-btn").click(function () {
    var name = $("#orderName").val();
    if (name.length < 2 || name.length > 10){
        validateError($("#orderName"));
        return
    }
    var request = {
       name: name,
        message: $("#orderMessage").val()
    };

  $.ajax({
      method: "POST",
      url: '/restapi/order',
      async: true,
      data: request
  });
});

$(document).ready(function () {

    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    });
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

    $('.sliderparent').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



});


