function init() {
    var activeimg = 'leftactive.png'
    function loadImages() {
        var preload = $( '<img/>' )[ 0 ];
        preload.src = 'images/lovehotels.png';
        $( preload ).load( function() {
            preload.src = 'images/sky.png';
            $( preload ).load( function() {
                $( '#header_main' ).css( {
                    'background-image': "url( 'images/sky.png' )"
                } );
                $( '#header_main #loading' ).fadeOut();
            } );
        } );
        var loadItems = $( '.async' );
        for ( var i = 0; i < loadItems.length; ++i ) {
            $( loadItems[ i ] ).attr( 'src', 'images/' + $( loadItems[ i ] ).attr( 'url' ) + '.png' );
            $( loadItems[ i ] ).load( function() {
                $( this ).css( 'visibility', 'visible' );
            } );
        }
    }
    loadImages();
    function loadSocial() {
        (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://apis.google.com/js/plusone.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=438691722851535";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    }
    $( '#main_nav li' ).click( function() {
        if ( this.id == 'loveflight' ) {
            $( '#header_main' ).fadeTo( 'fast', 0.3, function() {
                $( this ).css( {
                    'background-image': "url( 'images/sky.png' )",
                    'background-position': '0 -65px'
                } );
            } ).fadeTo( 'fast', 1 );
        }
        else {
            $( '#header_main' ).fadeTo( 'fast', 0.3, function() {
                $( this ).css( {
                    'background-image': "url( 'images/lovehotels.png' )",
                    'background-position': 'center'
                } );
            } ).fadeTo( 'fast', 1 );
        }
        $( 'body,html' ).animate( {
            scrollTop: 0
        }, 400 );
        $( '#main_nav li' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
        $( '#content > div' ).not( '#mainnav_container' ).hide();
        $( '.' + this.id ).show();
        
    } );


    var swapAnim = false;
    var suggestionsAnim = false;
    var recentAnim = false;
    var visualindAnim = false;
    var recommendAnim = false;
    var fareAnim = false;
    var suggAnim = false;
    var dealsAnim = false;
    var quickAnim = false;
    var highlightsAnim = false;
    var photosAnim = false;
    var nearbyAnim = false;
    var similarAnim = false;
    var bestAnim = false;
    var verifiedAnim = false;
    var advisorAnim = false;
    var pricewatchAnim = false;
    var rescheduleAnim = false;
    var passesAnim = false;
    var travelAnim = false;

    function travelAgentAnimate() {
        var i = 0;
        if ( travelAnim ) {
            return false;
        }
        function zoomAgent() {
            $( $( '#thumbs li' )[ i ] ).animate( {
                width: '150px',
                opacity: '1',
                position: 'relative',
                'margin-right': '0px',
                top: 0
            }, 600, function() {
                $( this ).animate( {
                    width: '80px',
                    opacity: '0.5',
                    'margin-right': '30px'
                }, 600, function() {
                    if ( $( this ).index() == 5 ) {
                        $( $( '#thumbs li' )[ 0 ] ).addClass( 'selected' );
                        $( '#orangebar' ).css( 'visibility', 'visible' );
                        $( '#slider_capt' ).css( 'visibility', 'visible' );
                        $( '#thumbs li' ).mouseover( function() {
                            var index = $( this ).index() + 1;
                            $( '#thumbs li' ).removeClass( 'selected' );
                            $( this ).addClass( 'selected' );
                            var left = $( '#greybar .slide' + index ).offset().left - $( '#greybar' ).offset().left - 142;
                            $( '#orangewrapper' ).animate( {
                                'left': left
                            }, 100 );
                            $( '#orangebar' ).animate( {
                                'left': -( left + 1*127 )
                            }, 100 );
                            $( '#slider_capt li' ).hide();
                            $( $( '#slider_capt li' )[ index - 1 ] ).css( 'display', 'block' );
                        } );
                        $( '#greybar li' ).mouseover( function() {
                            var index = $( this ).index() + 1;
                            var left = $( '#greybar .slide' + index ).offset().left - $( '#greybar' ).offset().left - 142;
                            $( '#orangewrapper' ).animate( {
                                'left': left
                            }, 100 );
                            $( '#orangebar' ).animate( {
                                'left': -( left + 1*127 )
                            }, 100 );
                            $( '#thumbs li' ).removeClass( 'selected' );
                            $( $( '#thumbs li' )[ index - 1 ] ).addClass( 'selected' );
                            $( '#slider_capt li' ).hide();
                            $( $( '#slider_capt li' )[ index - 1 ] ).css( 'display', 'block' );
                        } );
                    }
                    
                } );
            } );
            if ( i < 5 ) {
                ++i;
                setTimeout( zoomAgent, 600 );
            }
        }
        zoomAgent();
    }
    function swapAnimate() {
        function rotate( degrees ) {
            $( '#swap_arrows' ).css({
              '-webkit-transform' : 'rotate('+degrees+'deg)',
                 '-moz-transform' : 'rotate('+degrees+'deg)',  
                  '-ms-transform' : 'rotate('+degrees+'deg)',  
                   '-o-transform' : 'rotate('+degrees+'deg)',  
                      'transform' : 'rotate('+degrees+'deg)'  
            } );
        }
        var degree = 0;
        $( '#swapimg' ).animate( {
            top: '-40px'
        }, 700, function() {
            $( '#swapimg' ).animate( {
                top: 0
            }, 500, function() {
                var interval = setInterval( function() { degree += 2.7; rotate( degree ); }, 1 );
                $( '#swap_image1' ).animate( {
                    left: '370px',
                }, 800, function() {
                    clearInterval( interval );
                    degrees = 0;
                    $( '#swap_arrows' ).css({
                      '-webkit-transform' : 'rotate('+degrees+'deg)',
                         '-moz-transform' : 'rotate('+degrees+'deg)',  
                          '-ms-transform' : 'rotate('+degrees+'deg)',  
                           '-o-transform' : 'rotate('+degrees+'deg)',  
                              'transform' : 'rotate('+degrees+'deg)'  
                    } );
                } );
                $( '#swap_image2' ).animate( {
                    left: '189px'
                }, 600 );
            } );
        } );
    }
    function swapReset() {
            $( '#swapimg' ).css( 'top', '340px' );
            $( '#swap_image1' ).css( 'left', '189px' );
            $( '#swap_image2' ).css( 'left', '370px' );
    }
    function suggestionsAnimate() {
        $( '#suggestionsimg' ).animate( {
            top: '-40px'
        }, 600, function() {
            $( '#suggestionsimg' ).animate( {
                top: 0
            }, 600, function() {
                $( '#sugg_type' ).animate( { 
                    width: "30px"
                }, 400, function() {
                    $( '#sugg_opt' ).fadeIn( 400 );
                } );
            } );
        } );
    }
    function suggestionsReset() {
        $( '#suggestionsimg' ).css( 'top', '340px' );
        $( '#sugg_type' ).css( 'width', '0px' );
        $( '#sugg_opt' ).css( 'display', 'none' );
    }
    function recentAnimate() {
        $( '#searchimg' ).animate( {
            top: '-40px'
        }, 600, function() {
            $( '#searchimg' ).animate( {
                top: 0
            }, 600, function() {
                $( '#searchbase' ).animate( { 
                    opacity: '0.2'
                }, 300, function() {
                    $( '#recent' ).animate( {
                        right: '4px',
                        width: '200px'
                    }, 200 );
                } );
            } );
        } );
    }
    function recentReset() {
        $( '#searchimg' ).css( 'top', '340px' );
        $( '#searchbase' ).css( 'opacity', '1' );
        $( '#recent' ).css( 'right', '17px' );
        $( '#recent' ).css( 'width', '185px' );
    }
    function visualindReset() {
        $( '#rightmagnifier' ).css( {
            'left': '6px',
            'background-size': '300%',
            'background-position': '56px -13px'
        } );
    }
    function slideUp( elem ) {
        $( elem ).animate( {
            'top': 0
        }, 600 );
    }
    function moreAnimate( elem ) {
        $( elem ).animate( {
            top: '-40px'
        }, 600, function() {
            $( elem ).animate( {
                top: 0
            }, 600 );
        } );
    }
    function resetMore( elem ) {
        $( elem ).css( 'top', '320px' );
        $( elem ).css( 'opacity', '1' );
    }
    function resetPasses() {
        resetMore( '#passesimg' );
        $( '#phone_overlay' ).css( 'left', '800px' );
    }
    function rescheduleReset() {
        resetMore( '#rescheduleimg' );
        $( '#changeflights' ).css( {
            'width': '166px',
            'top': '141px',
            'left': '374px'
        } );
        $( '#changeflights' ).hide();
    }
    function passesAnimate() {
        $( '#passesimg' ).animate( {
            'top': '-40px'
        }, 600, function() {
            $( '#passesimg' ).animate( {
                'top': '0'
            }, 600, function() {
                $( '#phone_overlay' ).animate( {
                    'left': '550px'
                }, 500, function() {
                    $( '#phone_overlay' ).animate( {
                        'left': '590px'
                    }, 600 );
                } );
            } );
        } );
        resetMore( '#pricewatchimg' );
        rescheduleReset();
    }
    function rescheduleAnimate() {
        resetMore( '#pricewatchimg' );
        resetPasses();
        $( '#rescheduleimg' ).animate( {
            top: '-40px'
        }, 600, function() {
            $( '#rescheduleimg' ).animate( {
                top: '0'
            }, 600, function() {
                $( '#changeflights' ).show();
                $( '#changeflights' ).animate( { 
                    'width': '200px',
                    'top': '138px',
                    'left': '342px'
                }, 600 );
                $( '#rescheduleimg' ).animate( {
                    'opacity': '0.4'
                }, 600 );
            } );
        } );
    }
    function resetSlide( elem, mode ) {
        if ( mode == 1 ) {
            $( elem ).css( {
                'top': '328px'
            } );
        }
        else if ( mode == 2 ) {
            $( elem ).css( {
                'right': '378px',
                'opacity': 0
            } );
            $( elem ).siblings( '.overflowgradient' ).css( {
                'opacity': 0
            } );
        }
    }
    function slideLeft( elem, right ) {
        $( elem ).fadeIn( 800 );
        $( elem ).animate( {
            'right': right,
            'opacity': '1'
        }, 600 );
        $( elem ).siblings( '.overflowgradient' ).animate( {
            'opacity': '0.6'
        }, 600 );
    }
    function magnifier( elem, top, left, bgx, bgy, bgsize, newbgsize ) {
        $( elem ).animate( {
            'top': top,
            'left': left,
            'background-size': bgsize,
            backgroundPositionX: bgx,
            backgroundPositionY: bgy
        }, 600, function() { 
            $( elem ).animate( {
                'background-size': newbgsize
            }, 600 );
        } );
    }
    function resetMagnifier( elem, top, left, bgx, bgy, bgsize ) {
        $( elem ).css( {
            'top': top,
            'left': left,
            'background-size': bgsize,
            'background-position': bgx + ' ' + bgy
        } );
    }
    function recommendReset() {
        $( '#recommagnifier' ).css( {
            'left': '310px',
            'top': '90px',
            'background-position': '-406px -129px'
        } );
    }
    function fareReset() {
        $( '#faremagnifier' ).css( {
            'left': '234px',
            'background-position': '0 -38px'
        } );
    }
    $( '#swapview' ).bind( 'enterviewport', function() { 
        if ( $( '#swapimg' ).parent().hasClass( 'active' ) && !swapAnim ) {
            swapAnimate();
            swapAnim = true;
        }
        if ( $( '#suggestionsimg' ).parent().hasClass( 'active' ) && !suggestionsAnim ) {
            suggestionsAnimate();
            suggestionsAnim = true;
        }
        if ( $( '#searchimg' ).parent().hasClass( 'active' ) && !recentAnim ) {
            recentAnimate();
            recentAnim = true;
        }
    } ).bullseye();
    $( '#smartsearch' ).bind( 'enterviewport', function() { 
        if ( $( this ).css( 'display' ) == 'none' || travelAnim ) {
            return false;
        }
        travelAgentAnimate();
        travelAnim = true;
    } ).bullseye();
    $( '#rightflightview' ).bind( 'enterviewport', function() { 
        if ( $( '#rightflightimg' ).parent().hasClass( 'active' ) && !visualindAnim ) {
            magnifier( '#rightmagnifier', '184px', '185px', '-123px', '-13px', '300%', '350%' );
            visualindAnim = true;
        }
        if( $( '#recommendedimg' ).parent().hasClass( 'active' ) && !recommendAnim ) {
            magnifier( '#recommagnifier', '0px', '272px', '-404px', '-39px', '550%', '550%' );
            recommendAnim = true;
        }
        if ( $( '#fareimg' ).parent().hasClass( 'active' ) && !fareAnim ) {
            magnifier( '#faremagnifier', '136px', '280px', '-46px', '-38px', '160%', '160%' );
            fareAnim = true;
        }
    } ).bullseye();
    $( '#smarterview' ).bind( 'enterviewport', function() { 
        if ( $( this ).parent().parent().css( 'display' ) == 'none' ) {
            return false;
        }
        if ( $( '#sugg_content' ).hasClass( 'active' ) && !suggAnim ) {
            magnifier( '#suggmagnifier', '184px', '326px', '-59px', '-52px', '512%', '512%' );
            suggAnim = true;
        }
        if( $( '#deals_content' ).hasClass( 'active' ) && !dealsAnim ) {
            magnifier( '#dealsmagnifier', '109px', '406px', '-126px', '42px', '482%', '482%' );
            dealsAnim = true;
        }
        if ( $( '#quick_content' ).hasClass( 'active' ) && !quickAnim ) {
            magnifier( '#quickmagnifier', '230px', '443px', '-367px', '-34px', '520%', '520%' );
            quickAnim = true;
        }
    } ).bullseye();
    $( '#bookingview' ).bind( 'enterviewport', function() { 
        if ( $( '#pricewatch' ).hasClass( 'active' ) && !pricewatchAnim ) {
            moreAnimate( '#pricewatchimg' );
            pricewatchAnim = true;
        }
        if ( $( '#reschedule' ).hasClass( 'active' ) && !rescheduleAnim ) {
            rescheduleAnimate();
            rescheduleAnim = true;
        }
        if ( $( '#passes_content' ).hasClass( 'active' ) && !passesAnim ) {
            passesAnimate();
            passesAnim = true;
        }
    } ).bullseye();
    /*
    $( 'footer' ).bind( 'enterviewport', function() { 
        if ( $( '#highlights' ).hasClass( 'active' ) && !highlightsAnim ) {
            slideUp( '#highlights > img' );
            highlightsAnim = true;
            resetSlide( '#photos > img', 1 );
            resetSlide( '#nearby > img', 1 );
            resetSlide( '#similar > img', 1 );
        }
    } ).bullseye();*/
    $( '#socialview' ).bind( 'enterviewport', function() { 
        if ( $( '#betterhotelinfo' ).css( 'display' ) == 'none' ) {
            return false;
        }
        if ( $( '#bestsellers' ).hasClass( 'active' ) && !bestAnim ) {
            slideLeft( '#bestsellers .bestseller_over', '444px' );
            resetSlide( '#advisor .advisor_over', 2 );
            resetSlide( '#verified .verified_over', 2 )
            bestAnim = true;
        }
        if ( $( '#advisor' ).hasClass( 'active' ) && !advisorAnim ) {
            slideLeft( '#advisor .advisor_over', '444px' );
            resetSlide( '#bestsellers .bestseller_over', 2 )
            resetSlide( '#verified .verified_over', 2 )
            advisorAnim = true;
        }
        if ( $( '#verified' ).hasClass( 'active' ) && !verifiedAnim ) {
            slideLeft( '#verified .verified_over', '427px' );
            resetSlide( '#bestsellers .bestseller_over', 2 )
            resetSlide( '#advisor .advisor_over', 2 );
            verifiedAnim = true;
        }
    } ).bullseye();

    $( '.nav li' ).click( function() {
        var index = $( this ).index();
        var bg = $( this ).children( 'span' ).css( 'background-image' );
        bg = bg.split( '.png' );

        $( this ).children( 'span' ).css( 'background-image', bg[ 0 ] + '-active.png' + bg[ 1 ] );

        var active = $( this ).parent().children( 'li.active' ).children( 'span' );
        var activebg = active.css( 'background-image' );
        activebg = activebg.split( '-active.png' );
        active.css( 'background-image', activebg[ 0 ] + '.png' + activebg[ 1 ] );

        $( this ).parent().children( 'li.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );



        $( this ).parent().siblings( 'div' ).hide();
        $( $( this ).parent().siblings( 'div' )[ index ] ).show();
        $( this ).parent().siblings( 'div.active' ).removeClass( 'active' );
        $( $( this ).parent().siblings( 'div' )[ index ] ).addClass( 'active' );

        var activeid = $( this ).parent().siblings( 'div' )[ index ].id;
        if ( activeid == 'suggestions_content' ) {
            suggestionsAnimate();
            recentReset();
            swapReset();
        }
        else if ( activeid == 'search_content' ) {
            recentAnimate();
            swapReset();
            suggestionsReset();
        }
        else if ( activeid == 'swap_content' ) {
            swapAnimate();
            recentReset();
            suggestionsReset();
        }
        else if ( activeid == 'recommend_content' ) {
            magnifier( '#recommagnifier', '0px', '272px', '-404px', '-39px', '550%', '550%' );
            fareReset();
            visualindReset();
        }
        else if ( activeid == 'fare_content' ) {
            magnifier( '#faremagnifier', '136px', '280px', '-46px', '-38px', '160%', '160%' );
            recommendReset();
            visualindReset();
        }
        else if ( activeid == 'visual_content' ) {
            magnifier( '#rightmagnifier', '184px', '185px', '-123px', '-13px', '300%', '350%' );
            recommendReset();
            fareReset();
        }
        else if ( activeid == 'sugg_content' ) {
            magnifier( '#suggmagnifier', '184px', '326px', '-59px', '-52px', '512%', '512%' );
            resetMagnifier( '#quickmagnifier', '212px', '263px', '-187px', '-16px', '520%' );
            resetMagnifier( '#dealsmagnifier', '313px', '467px', '-187px', '-162px', '482%' );
        }
        else if ( activeid == 'deals_content' ) {
            magnifier( '#dealsmagnifier', '109px', '406px', '-126px', '42px', '482%', '482%' );
            resetMagnifier( '#suggmagnifier', '267px', '424px', '-157px', '-144px', '512%' );
            resetMagnifier( '#quickmagnifier', '212px', '263px', '-187px', '-16px', '520%' );
        }
        else if ( activeid == 'quick_content' ) {
            magnifier( '#quickmagnifier', '230px', '443px', '-367px', '-34px', '520%', '520%' );
            resetMagnifier( '#suggmagnifier', '267px', '424px', '-157px', '-144px', '512%' );
            resetMagnifier( '#dealsmagnifier', '313px', '467px', '-187px', '-162px', '482%' );
        }
        /*
        else if ( activeid == 'highlights' ) {
            slideUp( '#highlights > img' );
            highlightsAnim = true;
            resetSlide( '#photos > img', 1 );
            resetSlide( '#nearby > img', 1 );
            resetSlide( '#similar > img', 1 );
        }
        else if ( activeid == 'photos' ) {
            slideUp( '#photos > img' );
            highlightsAnim = true;
            resetSlide( '#highlights > img', 1 );
            resetSlide( '#nearby > img', 1 );
            resetSlide( '#similar > img', 1 );
        }
        else if ( activeid == 'nearby' ) {
            slideUp( '#nearby > img' );
            highlightsAnim = true;
            resetSlide( '#photos > img', 1 );
            resetSlide( '#highlights > img', 1 );
            resetSlide( '#similar > img', 1 );
        }
        else if ( activeid == 'similar' ) {
            slideUp( '#similar > img' );
            highlightsAnim = true;
            resetSlide( '#photos > img', 1 );
            resetSlide( '#nearby > img', 1 );
            resetSlide( '#highlights > img', 1 );
        }
        */
        else if ( activeid == 'bestsellers' ) {
            slideLeft( '#bestsellers .bestseller_over', '444px' );
            resetSlide( '#advisor .advisor_over', 2 );
            resetSlide( '#verified .verified_over', 2 )
        }
        else if ( activeid == 'advisor' ) {
            slideLeft( '#advisor .advisor_over', '444px' );
            resetSlide( '#bestsellers .bestseller_over', 2 )
            resetSlide( '#verified .verified_over', 2 )
        }
        else if ( activeid == 'verified' ) {
            slideLeft( '#verified .verified_over', '427px' );
            resetSlide( '#bestsellers .bestseller_over', 2 )
            resetSlide( '#advisor .advisor_over', 2 );
        }
        else if ( activeid == 'pricewatch' ) {
                moreAnimate( '#pricewatchimg' );
                resetPasses();
                rescheduleReset();
                pricewatchAnim = true;
        }
        else if ( activeid == 'reschedule' ) {
                rescheduleAnimate();
                resetMore( '#pricewatchimg' );
                resetPasses();
                rescheduleAnim = true;
        }
        else if ( activeid == 'passes_content' ) {
                passesAnimate();
                resetMore( '#pricewatchimg' );
                rescheduleReset();
                passesAnim = true;
        }

    } );

    $( window ).scroll( function() {
        var offset = $( '#content' ).offset().top - $( window ).scrollTop();
        if ( offset < 137 ) {
            $( '#mainnav_container' ).css( {
                'position': 'fixed',
                'top': '72px',
                'width': '100%'
            } );
        }
        else {
            $( '#mainnav_container' ).css( {
                'position': 'absolute',
                'top': '531px',
                'width': '100%'
            } );
        }
    } );
    
    $( '#swapimg img' ).click( function() {
        swapReset();
        swapAnimate();
        recentReset();
        suggestionsReset();
    } );
    $( '#suggestionsimg img' ).click( function() {
        suggestionsReset();
        suggestionsAnimate();
        recentReset();
        swapReset();
    } );
    $( '#searchimg img' ).click( function() {
        recentReset();
        recentAnimate();
        suggestionsReset();
        swapReset();
    } );
    $( '#rightflightimg img' ).click( function() {
        visualindReset();
        magnifier( '#rightmagnifier', '184px', '185px', '-123px', '-13px', '300%', '350%' );
        fareReset();
        recommendReset();
    } );
    $( '#fareimg img' ).click( function() {
        fareReset();
        magnifier( '#faremagnifier', '136px', '280px', '-46px', '-38px', '160%', '160%' );
        recommendReset();
        visualindReset();
    } );
    $( '#recommendedimg img' ).click( function() {
        recommendReset();
        magnifier( '#recommagnifier', '0px', '272px', '-404px', '-39px', '550%', '550%' );
        fareReset();
        visualindReset();
    } );
    $( '#pricewatch img' ).click( function() {
        resetMore( '#pricewatchimg' );
        moreAnimate( '#pricewatchimg' );
        resetPasses();
        rescheduleReset();
    } );
    $( '#reschedule img' ).click( function() {
        rescheduleReset();
        rescheduleAnimate();
        resetMore( '#pricewatchimg' );
        resetPasses();
    } );
    $( '#passes_content img' ).click( function() {
        resetPasses();
        passesAnimate();
        resetMore( '#pricewatchimg' );
        rescheduleReset();
    } );
    $( '#sugg_content img' ).click( function() {
        resetMagnifier( '#dealsmagnifier', '313px', '467px', '-187px', '-162px', '482%' );
        resetMagnifier( '#quickmagnifier', '212px', '263px', '-187px', '-16px', '520%' );
        resetMagnifier( '#suggmagnifier', '267px', '424px', '-157px', '-144px', '512%' );
        magnifier( '#suggmagnifier', '184px', '326px', '-59px', '-52px', '512%', '512%' );
    } );
    $( '#deals_content img' ).click( function() {
        resetMagnifier( '#suggmagnifier', '267px', '424px', '-157px', '-144px', '512%' );
        resetMagnifier( '#quickmagnifier', '212px', '263px', '-187px', '-16px', '520%' );
        resetMagnifier( '#dealsmagnifier', '313px', '467px', '-187px', '-162px', '482%' );
        magnifier( '#dealsmagnifier', '109px', '406px', '-126px', '42px', '482%', '482%' );
    } );
    $( '#quick_content img' ).click( function() {
        resetMagnifier( '#quickmagnifier', '212px', '263px', '-187px', '-16px', '520%' );
        magnifier( '#quickmagnifier', '230px', '443px', '-367px', '-34px', '520%', '520%' );
        resetMagnifier( '#suggmagnifier', '267px', '424px', '-157px', '-144px', '512%' );
        resetMagnifier( '#dealsmagnifier', '313px', '467px', '-187px', '-162px', '482%' );
    } );
    $( '#bestsellers img' ).click( function() {
        resetSlide( '#bestsellers .bestseller_over', 2 )
        slideLeft( '#bestsellers .bestseller_over', '444px' );
        resetSlide( '#advisor .advisor_over', 2 );
        resetSlide( '#verified .verified_over', 2 )
    } );
    $( '#bestsellers .overflowgradient' ).click( function() {
        resetSlide( '#bestsellers .bestseller_over', 2 )
        slideLeft( '#bestsellers .bestseller_over', '444px' );
        resetSlide( '#advisor .advisor_over', 2 );
        resetSlide( '#verified .verified_over', 2 )
    } );
    $( '#advisor img' ).click( function() {
        resetSlide( '#advisor .advisor_over', 2 );
        slideLeft( '#advisor .advisor_over', '444px' );
        resetSlide( '#bestsellers .bestseller_over', 2 )
        resetSlide( '#verified .verified_over', 2 )
    } );
    $( '#advisor .overflowgradient' ).click( function() {
        resetSlide( '#advisor .advisor_over', 2 );
        slideLeft( '#advisor .advisor_over', '444px' );
        resetSlide( '#bestsellers .bestseller_over', 2 )
        resetSlide( '#verified .verified_over', 2 )
    } );
    $( '#verified img' ).click( function() {
        resetSlide( '#verified .verified_over', 2 )
        slideLeft( '#verified .verified_over', '427px' );
        resetSlide( '#bestsellers .bestseller_over', 2 )
        resetSlide( '#advisor .advisor_over', 2 );
    } );
    $( '#verified .overflowgradient' ).click( function() {
        resetSlide( '#verified .verified_over', 2 )
        slideLeft( '#verified .verified_over', '427px' );
        resetSlide( '#bestsellers .bestseller_over', 2 )
        resetSlide( '#advisor .advisor_over', 2 );
    } );

    loadSocial();
}
$( document ).ready( function() {
    init();
} );
