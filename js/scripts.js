$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    // getFooterPosition();

    getSidebarParams();

    $(window).resize(function() {

        getSidebarParams();

        // $(".wrapper").css({"min-height" : $(window).height() + "px"});

        // $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

    });


    $(function() {

        var indexOrderBox;
        var parentBlueBox;

        $(".show_order_box").each(function() {

            indexOrderBox = $(this).closest(".order-box").index(".order-box");

            if( $(this).hasClass("active") ) {                

                $(".order-box:eq("+ indexOrderBox +") .slide-block").css({
                    "height" : "auto"
                });

            } else {

                $(".order-box:eq("+ indexOrderBox +") .slide-block").slideToggle(500);
            }

        });


        $(".show_order_box").click(function() {

            $(this).toggleClass("active");

            indexOrderBox = $(this).closest(".order-box").index(".order-box");

            $(".order-box:eq("+ indexOrderBox +") .slide-block").slideToggle(500);

        });

        $(".hide-show-scroll-box-btn").click(function(e) {

            e.preventDefault();

            parentBlueBox = $(this).closest(".blue-box");

            parentBlueBox.children(".sroll-box").slideToggle(500);

            if( parentBlueBox.children(".sroll-box").height() > 0 ) {

                $(this).text("Показать");

            } else {
                
                $(this).text("Скрыть");

            }

        });

    });

    $(function() {

        $(".prev").html("&#8249;");
        $(".next").html("&#8250;");

    })


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }


    function getSidebarParams() {

        var sidebar = $("#sidebar");
        var content = $(".content");

        var sidebarHeight = $(window).height() - $(".header-site").height();

        sidebar.css({
            "top" : $(".header-site").height() + "px",
            "height" : sidebarHeight + "px"
        });

        content.css({
            "margin-top" : $(".header-site").height() + "px"
        });

    }


});
