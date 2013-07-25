window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>WatchIt</h1></div>' +
        '<div class="scroller">' +
            '<ul class="list">' +
                '<li><div style="padding:20px;border-right:1px solid #7D7D7D;border-bottom:5px solid #B1CA39;"><a href="#page1"><strong>GALLERY</strong></a></div></li>' +
                '<li><div style="padding:20px;border-right:1px solid #7D7D7D;border-bottom:5px solid #CCCCCC"><a href="#page2"><strong>MAP</strong></div></a></li>' +
                '<li><div style="padding:20px;border-right:0px solid;border-bottom:5px solid #CCCCCC"><a href="#page3"><strong>TAKE PICTURE</strong></div></a></li>' +
            '</ul>' +
            '<div class="robot">' +
            	'Gallery Page Contents' +
            '</div>' +
        '</div>' +
    '</div>';

var mapPage =
    '<div>' +
        '<div class="header"><h1>WatchIt</h1></div>' +
        '<div class="scroller">' +
		    '<ul class="list">' +
		        '<li><div style="padding:20px;border-right:1px solid #7D7D7D;border-bottom:5px solid #CCCCCC;"><a href="#page1"><strong>GALLERY</strong></a></div></li>' +
		        '<li><div style="padding:20px;border-right:1px solid #7D7D7D;border-bottom:5px solid #B1CA39"><a href="#page2"><strong>MAP</strong></div></a></li>' +
		        '<li><div style="padding:20px;border-right:0px solid;border-bottom:5px solid #CCCCCC"><a href="#page3"><strong>TAKE PICTURE</strong></div></a></li>' +
		    '</ul>' +
            '<div class="robot">' +
                'MAP Page Contents' +
            '</div>' +
        '</div>' +
    '</div>';

var takePicturePage =
    '<div>' +
        '<div class="header"><h1>WatchIt</h1></div>' +
        '<div class="scroller">' +
		    '<ul class="list">' +
		        '<li><div style="padding:20px;border-right:1px solid #7D7D7D;border-bottom:5px solid #CCCCCC;"><a href="#page1"><strong>GALLERY</strong></a></div></li>' +
		        '<li><div style="padding:20px;border-right:1px solid #7D7D7D;border-bottom:5px solid #CCCCCC"><a href="#page2"><strong>MAP</strong></div></a></li>' +
		        '<li><div style="padding:20px;border-right:0px solid;border-bottom:5px solid #B1CA39"><a href="#page3"><strong>TAKE PICTURE</strong></div></a></li>' +
		    '</ul>' +
            '<div class="robot">' +
                'Take Picture Page Contents' +
            '</div>' +
        '</div>' +
    '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
    	page = homePage;
        //page = merge(detailsPage, {img: "buildbot.jpg", name: "Build Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        //page = merge(detailsPage, {img: "medibot.jpg", name: "Medi Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
    	page = mapPage;
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
    	page = takePicturePage;
        //page = merge(detailsPage, {img: "ripplebot.jpg", name: "Ripple Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    }
    else {
        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();