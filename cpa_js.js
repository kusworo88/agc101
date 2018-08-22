$.mobile.ajaxEnabled = false;


    function pauseClick() {
        $("#play-icon").show();
        $("#pause-icon").hide();
        $("#intro").pauseVideo();

    }

    function playClick() {
        $(".movie-loading, .movie-loader").show();
        $("#fregister").hide();
        $(".loading111").show();
        $("#intro").show();
        $("#play-icon").hide();
        $("#playnow1").hide();
        $("#pause-icon").show();
        $(".movie-loader").fadeIn(2000);

        var symbol = $("#intro")[0].src.indexOf("?") > -1 ? "&" : "?";
        $("#intro")[0].src += symbol + "autoplay=1";
        setTimeout(function() {
            $(".black").show();
            $(".loading111").hide();
        }, 3500)



        $("#playnow .fa-youtube-play").css("visibility", "visible");
        setTimeout(function() {
            $(".movie-loader").hide();
            $(".register111").show()
        }, 3500)
    }

    function playerLoad() {
        if ($("#player").length) {
            $(".movie-loading").show();
            setTimeout(function() {
                $(".movie-loader").show()
            }, 1000);
            $("span#playnow").css("visibility", "visible");
            $(".movie-loading").hide()
        }
    }

    function playHover() {
        $(".entry-title").toggleClass("active")
    }

    function playLoad() {
        $(".movie-loading").hide();
        $(".fa-arrows-alt").click(function() {
            screenfull.request(document.getElementById("player"));
            $(this).toggleClass("fa-arrows-alt fa-compress")
        });
        $("a#playnow,.play,i.fa.fa-compress").click(function() {
            screenfull.exit()
        });
        $(".inline").colorbox({
            inline: true,
            width: "40%"
        })
    }

    function playClear() {
        $("#player").load(function() {})
    }

    function secondsTimeSpanToHMS(c) {
        var b = Math.floor(c / 3600);
        c -= b * 3600;
        var a = Math.floor(c / 60);
        c -= a * 60;
        return b + ":" + (a < 10 ? "0" + a : a) + ":" + (c < 10 ? "0" + c : c)
    };

    $(document).ready(function() {
        $("a.login-window").click(function() {
            $(".login-popup").fadeIn(300);
            $(".blackhole").fadeIn(300);
            return false
        });
        $("a.close").click(function() {
            $(".login-popup, .blackhole").fadeOut(300);
            return false
        });
        $("#formsubmit").click(function() {
            $(".onerror").fadeOut("fast");
            $(".onload").fadeIn().delay(3e3);
            $(".onload").fadeOut("fast");
            setTimeout(function() {
                $(".onerror").fadeIn("fast");
                $("#formuser, #formpass").val("");
                $("#formuser").focus()
            }, 3500)
        })
    })
