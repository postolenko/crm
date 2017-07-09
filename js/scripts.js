$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var sidebar = $("#sidebar");
    var content = $(".content");
    var sidebarBottomCoor;

    // ----------------------------

    var indexOrderBox;
    var parentBlueBox;
    var blueBoxParent;

    // ----------------------------

    var indexTabs;
    var attrTabNavLink;

    // ----------------------------

    var uplBoxParent;
    var miniatureParent;

    // ---------------------------

    var headerSite = $(".header-site");
    var mainContentHeader = $(".main-content-header");
    var documentBottomCoor;
    var sidebarHeight;

    // ---------------------------

    getFooterPosition();

    getFixedElementsParams();

    $(window).resize(function() {

        getFixedElementsParams();

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // --------------------

        $(".center-coor").css({
            "height" : $(window).height() - $(".footer").outerHeight(true) + "px"
        });

    });

    $(document).scroll(function() {

        // getFixedElementsParamsScroll();

        if( $(document).scrollTop() > $(".header-site").height() ) {

            $(".main-content-header").addClass("fixed_scroll");

            $(".main-content-header").css({
                "top" : $(".header-site").height() + "px"
            });            

        } else {

            $(".main-content-header").removeClass("fixed_scroll");

            $(".main-content-header").css({
                "top" : 0 + "px"
            });           

        }

        if( $(document).scrollTop() > $(".header-site").height() ) {

            $(".sidebar").addClass("fixed");

            $(".sidebar").css({
                "top" : $(".header-site").height() + "px",
                "height" : $(window).height() - $(".header-site").height() + "px"
            });

        } else {

            $(".sidebar").removeClass("fixed");

            $(".sidebar").css({
                "top" : 0 + "px",
                "height" : "auto"
            });

        }

    });


    $(function() {

        // var indexOrderBox;
        // var parentBlueBox;
        // var blueBoxParent;

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


        $(".order-box-header").click(function() {

            indexOrderBox = $(this).closest(".order-box").index(".order-box");

            if($(this).hasClass("show_order_box")) {

                $(this).toggleClass("active");

            } else {

                $(".order-box:eq("+ indexOrderBox +") .show_order_box").toggleClass("active");

            }

            $(".order-box:eq("+ indexOrderBox +") .slide-block").slideToggle(500);

            if( $(".order-box:eq("+ indexOrderBox +")").next(".additional-slide-block").length ) {

                $(".order-box:eq("+ indexOrderBox +")").next(".additional-slide-block").slideToggle(500);

            }

        });

        // $(".order-box-header").click(function() {

        //     // $(this).toggleClass("active");

        //     indexOrderBox = $(this).closest(".order-box").index(".order-box");

        //     $(".order-box:eq("+ indexOrderBox +") .show_order_box").toggleClass("active");

        //     $(".order-box:eq("+ indexOrderBox +") .slide-block").slideToggle(500);

        //     if( $(".order-box:eq("+ indexOrderBox +")").next(".additional-slide-block").length ) {

        //         $(".order-box:eq("+ indexOrderBox +")").next(".additional-slide-block").slideToggle(500);

        //     }

        // });

        $(".show-task-content").each(function() {

            blueBoxParent = $(this).closest(".blue-box");

            if( $(this).hasClass("active") ) {

                blueBoxParent.children(".blue-box-slide-block").css({
                    "height" : "auto"
                });

            } else {

                blueBoxParent.children(".blue-box-slide-block").slideToggle(500);
            }

        });

        $(".show-task-content").click(function(e) {

            e.preventDefault();

            $(this).toggleClass("active");

            parentBlueBox = $(this).closest(".blue-box");

            parentBlueBox.children(".blue-box-slide-block").slideToggle(500);

            if( parentBlueBox.children(".blue-box-slide-block").height() > 0 ) {

                $(this).text("Подробнее");

            } else {
                
                $(this).text("Скрыть");

            }

        });

    });

    // ---------------------------------------


    $(function() {

        // var indexTabs;
        // var attrTabNavLink;

        $(".tabs").each(function() {

            indexTabs = $(this).index(".tabs");

            $(".tabs:eq("+ indexTabs +") .input-tab").each(function() {

                if( $(this).is(":checked") ) {

                    attrTabNavLink = $(this).attr("id");           

                }               

            });

            $(".tabs:eq("+ indexTabs +") .tab-nav-link[for = '"+ attrTabNavLink +"']").addClass("active");

        });

        $(".tab-nav-link").click(function() {

            indexTabs = $(this).closest(".tabs").index(".tabs");

            // console.log(indexTabsContent);

            // $(".tabs:eq("+ indexTabsContent +") .tab-nav-link").each(function() {

            //     attrTabNavLink = $(this).attr("for");

            //     if( $(".tabs:eq("+ indexTabsContent +") .input-tab[id = '"+ attrTabNavLink +"']").is(":checked") && $(this).hasClass("active") ) {

            //         return true;      

            //     } else {

            //         $(".tabs:eq("+ indexTabsContent +") .tab-nav-link").removeClass("active");
            //         $(this).addClass("active");

            //     }

            // });

            $(".tabs:eq("+ indexTabs +") .tab-nav-link").removeClass("active");

            $(this).addClass("active");        

        });

    });

    // ---------------------------------------

    $(function() {

        $("input[type='tel']").mask("(999) 999-99-99");

    });

    // --------------------------------------

    $(function() {

        // var uplBoxParent;
        // var miniatureParent;

        $(".upl-image").click(function() {

            uplBoxParent = $(this).closest(".upl-photo-block");

            uplBoxParent.children(".input-file").click();

        });

        $(".del_miniature").click(function() {

            miniatureParent = $(this).closest(".orders-photos-list li");

            miniatureParent.fadeOut(200);

        });

    });

    // ---------------------------------------

    $(function() {

        $(".center-coor").css({
            "height" : $(window).height() - $(".footer").outerHeight(true) + "px"
        });

    });

    // ---------------------------------------


    function getFooterPosition() {        

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        if( $(".content").length > 0 && $(".footer").length > 0) {

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

    }

    sidebarBottomCoor = sidebar.outerHeight() + $(".header-site").height();

    function getFixedElementsParams() {

        if($(".header-site").length > 0 && $(".main-content-header").length > 0) {

            // headerSite = $(".header-site");
            // mainContentHeader = $(".main-content-header");        

            documentBottomCoor = $(window).height() + $(document).scrollTop();
            sidebarHeight = $(window).height() - headerSite.height();

            if( $(document).scrollTop() > headerSite .height() ) {

                headerSite.addClass("fixed_scroll");

                mainContentHeader.addClass("fixed_scroll");

                setTimeout(function() {

                    mainContentHeader.css({
                        "top" : headerSite.height() + "px"
                    });

                }, 500);
                

            } else {

                headerSite.removeClass("fixed_scroll");

                mainContentHeader.removeClass("fixed_scroll");

                mainContentHeader.css({
                    "top" : 0 + "px"
                });

            }

            if( documentBottomCoor >= sidebarBottomCoor ) {

                sidebar.addClass("fixed");

                setTimeout(function() {  

                    sidebar.css({
                        "top" : headerSite.height() + "px",
                        "height" : sidebarHeight + "px"
                    });

                }, 400);

            } else {

                sidebar.removeClass("fixed");

                sidebar.css({
                    "top" : 0 + "px",
                    "height" : "auto"
                });

            }  

            content.css({
                "margin-top" : headerSite.height() + "px"
            });

        }

    }

    function getFixedElementsParamsScroll() {

        if( $(document).scrollTop() > $(".header-site").height() ) {

            $(".main-content-header").addClass("fixed_scroll");

            $(".main-content-header").css({
                "top" : $(".header-site").height() + "px"
            });

            $(".sidebar").addClass("fixed");

            sidebarHeight = $(window).height() - $(".sidebar").height();

            $(".sidebar").css({
                "top" : $(".header-site").height() + "px",
                "height" : sidebarHeight + "px"
            });

        } else {

            $(".main-content-header").removeClass("fixed_scroll");

            $(".main-content-header").css({
                "top" : 0 + "px"
            });

            $(".sidebar").removeClass("fixed");

            $(".sidebar").css({
                "top" : 0 + "px",
                "height" : "auto"
            });

        }

    }


});
