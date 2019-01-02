// Deal with WP jQuery noConflict
$ = jQuery;

var BrowserDetect = {
  init: function () {
    this.browser = this.searchString(this.dataBrowser) || "Other";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown";
  },
  searchString: function (data) {
    for (var i = 0; i < data.length; i++) {
      var dataString = data[i].string;
      this.versionSearchString = data[i].subString;

      if (dataString.indexOf(data[i].subString) !== -1) {
        return data[i].identity;
      }
    }
  },
  searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index === -1) {
      return;
    }

    var rv = dataString.indexOf("rv:");
    if (this.versionSearchString === "Trident" && rv !== -1) {
      return parseFloat(dataString.substring(rv + 3));
    } else {
      return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }
  },

  dataBrowser: [
    {string: navigator.userAgent, subString: "Edge", identity: "MS Edge"},
    {string: navigator.userAgent, subString: "MSIE", identity: "Explorer"},
    {string: navigator.userAgent, subString: "Trident", identity: "Explorer"},
    {string: navigator.userAgent, subString: "Firefox", identity: "Firefox"},
    {string: navigator.userAgent, subString: "Opera", identity: "Opera"},
    {string: navigator.userAgent, subString: "OPR", identity: "Opera"},

    {string: navigator.userAgent, subString: "Chrome", identity: "Chrome"},
    {string: navigator.userAgent, subString: "Safari", identity: "Safari"}
  ]
};

BrowserDetect.init();
$("html").addClass((BrowserDetect.browser).toLowerCase()).addClass((BrowserDetect.browser).toLowerCase() + "-" + BrowserDetect.version);

/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ){
		$("body").addClass("touch");
	}
	else{
		$("body").addClass("no-touch");
	}

const cl = new cloudinary.Cloudinary({cloud_name: "justinlaxamana", secure: true});
const cloudinary_url = "https://res.cloudinary.com/justinlaxamana/";
const cloudinary_fetch_url = cloudinary_url + "/image/fetch/";

(function($){


$('.with-dropdown').on("click", function(e){
  $(this).toggleClass('active');
  $(this).next('.dropdown').toggleClass('active');
  e.preventDefault();
});

$('.dropdown a').on("click", function(){
  $('.dropdown').removeClass('active');
});


//Throttling Function
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}
//Fixed Scroll
function fixedElements() {
  if($('.foreground').length) {
    $('.main-header').addClass('hidden');
    var scrollTop = $(window).scrollTop();
    var screenTop = $('.foreground').offset().top - 300;
    var footerTop = $('.global-footer').offset().top - 300;

    if(scrollTop >= screenTop) {
      $('.main-header').addClass('active');
    }
    else {
      $('.main-header').removeClass('active');
    }
    if(scrollTop >= footerTop) {
      $('.main-header').removeClass('active');
    }
  }
  if($('.waypoint').length) {
    if($('.waypoint.aos-animate').length) {
      $('.main-header').addClass('hidden');
    } else {
      $('.main-header').removeClass('hidden');
    }
  }
}
window.addEventListener('scroll', throttle(fixedElements, 25));
var resizeTimer;
$(window).on("resize", function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    fixedElements();
  }, 250);
});
$(window).triggerHandler("resize");

$('.play').magnificPopup({
    type: 'iframe',
  	preloader: false,
    fixedContentPos: true,
    fixedBgPos: true,
    showCloseBtn: true,
    closeOnBgClick: true,
    enableEscapeKey: true,
    removalDelay: 700
});
$('.shop__image').each(function() {
  $(this).magnificPopup({
  	type: 'image',
    delegate: 'a',
    fixedContentPos: true,
    fixedBgPos: true,
    showCloseBtn: true,
    closeOnBgClick: true,
    removalDelay: 500,
    enableEscapeKey: true,
    gallery:{
      enabled:true
    }
  });
});
$('.gallery').magnificPopup({
  type: 'image',
  fixedContentPos: true,
  fixedBgPos: true,
  showCloseBtn: true,
  closeOnBgClick: true,
  removalDelay: 500,
  enableEscapeKey: true,
  gallery:{
    enabled:true
  }
});

var slickPrev = '<button class="pager prev"><svg viewBox="0 0 47.68 47.68"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M26.66,17.14a1.09,1.09,0,0,1,1.39,1.68l-6.08,5,6.08,5a1.09,1.09,0,1,1-1.39,1.68l-7.1-5.85a1.09,1.09,0,0,1,0-1.68Zm-2.5,28.35A21.66,21.66,0,1,0,2.5,23.84,21.52,21.52,0,0,0,24.16,45.49M24.16,0A23.84,23.84,0,1,1,.32,23.84,23.87,23.87,0,0,1,24.16,0" transform="translate(-0.32 0)"/></svg></button>';
var slickNext = '<button class="pager next"><svg viewBox="0 0 47.68 47.68"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M26.66,17.14a1.09,1.09,0,0,1,1.39,1.68l-6.08,5,6.08,5a1.09,1.09,0,1,1-1.39,1.68l-7.1-5.85a1.09,1.09,0,0,1,0-1.68Zm-2.5,28.35A21.66,21.66,0,1,0,2.5,23.84,21.52,21.52,0,0,0,24.16,45.49M24.16,0A23.84,23.84,0,1,1,.32,23.84,23.87,23.87,0,0,1,24.16,0" transform="translate(-0.32 0)"/></svg></button>';

if($('.slider').length) {
  $('.slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 375,
    slidesToShow: 3,
    slidesToScroll: 1,
    edgeFriction: .08,
    prevArrow: slickPrev,
    nextArrow: slickNext,
    responsive: [
      {
          breakpoint: 1101,
          settings: {
              slidesToShow: 2
          }
      },
      {
          breakpoint: 701,
          settings: {
              slidesToShow: 1
          }
      }
  ]
  });
}



//Keep Ratio Images
if($('.video-bg').length) {
  $('.video-bg').keepRatio({ ratio: 16/9, calculate: 'height' });
  $('.intro__bg').keepRatio({ ratio: 16/9, calculate: 'height' });
}

AOS.init();

//Smooth Scrolling
$('a.anchor[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top - 100
    }, 1000);
    return false;
  }
}
});

})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbWVudS5qcyIsIjJfbGlnaHRib3guanMiLCIzX3NsaWRlci5qcyIsIjRfcGFyYWxsYXguanMiLCI1X2tlZXAtcmF0aW8uanMiLCI3X2FuaW1hdGlvbnMuanMiLCI4X3Ntb290aHNjcm9sbC5qcyIsInpfZW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2JBO0FBQ0EiLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWFsIHdpdGggV1AgalF1ZXJ5IG5vQ29uZmxpY3RcbiQgPSBqUXVlcnk7XG5cbnZhciBCcm93c2VyRGV0ZWN0ID0ge1xuICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5icm93c2VyID0gdGhpcy5zZWFyY2hTdHJpbmcodGhpcy5kYXRhQnJvd3NlcikgfHwgXCJPdGhlclwiO1xuICAgIHRoaXMudmVyc2lvbiA9IHRoaXMuc2VhcmNoVmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50KSB8fCB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLmFwcFZlcnNpb24pIHx8IFwiVW5rbm93blwiO1xuICB9LFxuICBzZWFyY2hTdHJpbmc6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGF0YVN0cmluZyA9IGRhdGFbaV0uc3RyaW5nO1xuICAgICAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS5zdWJTdHJpbmc7XG5cbiAgICAgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlYXJjaFZlcnNpb246IGZ1bmN0aW9uIChkYXRhU3RyaW5nKSB7XG4gICAgdmFyIGluZGV4ID0gZGF0YVN0cmluZy5pbmRleE9mKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBydiA9IGRhdGFTdHJpbmcuaW5kZXhPZihcInJ2OlwiKTtcbiAgICBpZiAodGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID09PSBcIlRyaWRlbnRcIiAmJiBydiAhPT0gLTEpIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KGRhdGFTdHJpbmcuc3Vic3RyaW5nKHJ2ICsgMykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhpbmRleCArIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZy5sZW5ndGggKyAxKSk7XG4gICAgfVxuICB9LFxuXG4gIGRhdGFCcm93c2VyOiBbXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkVkZ2VcIiwgaWRlbnRpdHk6IFwiTVMgRWRnZVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiTVNJRVwiLCBpZGVudGl0eTogXCJFeHBsb3JlclwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiVHJpZGVudFwiLCBpZGVudGl0eTogXCJFeHBsb3JlclwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiRmlyZWZveFwiLCBpZGVudGl0eTogXCJGaXJlZm94XCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJPcGVyYVwiLCBpZGVudGl0eTogXCJPcGVyYVwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiT1BSXCIsIGlkZW50aXR5OiBcIk9wZXJhXCJ9LFxuXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkNocm9tZVwiLCBpZGVudGl0eTogXCJDaHJvbWVcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlNhZmFyaVwiLCBpZGVudGl0eTogXCJTYWZhcmlcIn1cbiAgXVxufTtcblxuQnJvd3NlckRldGVjdC5pbml0KCk7XG4kKFwiaHRtbFwiKS5hZGRDbGFzcygoQnJvd3NlckRldGVjdC5icm93c2VyKS50b0xvd2VyQ2FzZSgpKS5hZGRDbGFzcygoQnJvd3NlckRldGVjdC5icm93c2VyKS50b0xvd2VyQ2FzZSgpICsgXCItXCIgKyBCcm93c2VyRGV0ZWN0LnZlcnNpb24pO1xuIiwiLyoqXG4gKiBqUXVlcnkuYnJvd3Nlci5tb2JpbGUgKGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2VyLmNvbS8pXG4gKlxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIHdpbGwgYmUgdHJ1ZSBpZiB0aGUgYnJvd3NlciBpcyBhIG1vYmlsZSBkZXZpY2VcbiAqXG4gKiovXG4oZnVuY3Rpb24oYSl7KGpRdWVyeS5icm93c2VyPWpRdWVyeS5icm93c2VyfHx7fSkubW9iaWxlPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpfSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcblxuaWYoIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgKXtcblx0XHQkKFwiYm9keVwiKS5hZGRDbGFzcyhcInRvdWNoXCIpO1xuXHR9XG5cdGVsc2V7XG5cdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCJuby10b3VjaFwiKTtcblx0fVxuIiwiY29uc3QgY2wgPSBuZXcgY2xvdWRpbmFyeS5DbG91ZGluYXJ5KHtjbG91ZF9uYW1lOiBcImp1c3RpbmxheGFtYW5hXCIsIHNlY3VyZTogdHJ1ZX0pO1xuY29uc3QgY2xvdWRpbmFyeV91cmwgPSBcImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2p1c3RpbmxheGFtYW5hL1wiO1xuY29uc3QgY2xvdWRpbmFyeV9mZXRjaF91cmwgPSBjbG91ZGluYXJ5X3VybCArIFwiL2ltYWdlL2ZldGNoL1wiO1xuIiwiKGZ1bmN0aW9uKCQpe1xuIiwiXG4kKCcud2l0aC1kcm9wZG93bicpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAkKHRoaXMpLm5leHQoJy5kcm9wZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJy5kcm9wZG93biBhJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAkKCcuZHJvcGRvd24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuXG4vL1Rocm90dGxpbmcgRnVuY3Rpb25cbmZ1bmN0aW9uIHRocm90dGxlKGZuLCB3YWl0KSB7XG4gIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICgodGltZSArIHdhaXQgLSBEYXRlLm5vdygpKSA8IDApIHtcbiAgICAgIGZuKCk7XG4gICAgICB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH1cbn1cbi8vRml4ZWQgU2Nyb2xsXG5mdW5jdGlvbiBmaXhlZEVsZW1lbnRzKCkge1xuICBpZigkKCcuZm9yZWdyb3VuZCcpLmxlbmd0aCkge1xuICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIHZhciBzY3JlZW5Ub3AgPSAkKCcuZm9yZWdyb3VuZCcpLm9mZnNldCgpLnRvcCAtIDMwMDtcbiAgICB2YXIgZm9vdGVyVG9wID0gJCgnLmdsb2JhbC1mb290ZXInKS5vZmZzZXQoKS50b3AgLSAzMDA7XG5cbiAgICBpZihzY3JvbGxUb3AgPj0gc2NyZWVuVG9wKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBpZihzY3JvbGxUb3AgPj0gZm9vdGVyVG9wKSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9XG4gIGlmKCQoJy53YXlwb2ludCcpLmxlbmd0aCkge1xuICAgIGlmKCQoJy53YXlwb2ludC5hb3MtYW5pbWF0ZScpLmxlbmd0aCkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcubWFpbi1oZWFkZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgfVxuICB9XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhyb3R0bGUoZml4ZWRFbGVtZW50cywgMjUpKTtcbnZhciByZXNpemVUaW1lcjtcbiQod2luZG93KS5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbihlKSB7XG4gIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG4gIHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBmaXhlZEVsZW1lbnRzKCk7XG4gIH0sIDI1MCk7XG59KTtcbiQod2luZG93KS50cmlnZ2VySGFuZGxlcihcInJlc2l6ZVwiKTtcbiIsIiQoJy5wbGF5JykubWFnbmlmaWNQb3B1cCh7XG4gICAgdHlwZTogJ2lmcmFtZScsXG4gIFx0cHJlbG9hZGVyOiBmYWxzZSxcbiAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgZml4ZWRCZ1BvczogdHJ1ZSxcbiAgICBzaG93Q2xvc2VCdG46IHRydWUsXG4gICAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gICAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlLFxuICAgIHJlbW92YWxEZWxheTogNzAwXG59KTtcbiQoJy5zaG9wX19pbWFnZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICQodGhpcykubWFnbmlmaWNQb3B1cCh7XG4gIFx0dHlwZTogJ2ltYWdlJyxcbiAgICBkZWxlZ2F0ZTogJ2EnLFxuICAgIGZpeGVkQ29udGVudFBvczogdHJ1ZSxcbiAgICBmaXhlZEJnUG9zOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ0bjogdHJ1ZSxcbiAgICBjbG9zZU9uQmdDbGljazogdHJ1ZSxcbiAgICByZW1vdmFsRGVsYXk6IDUwMCxcbiAgICBlbmFibGVFc2NhcGVLZXk6IHRydWUsXG4gICAgZ2FsbGVyeTp7XG4gICAgICBlbmFibGVkOnRydWVcbiAgICB9XG4gIH0pO1xufSk7XG4kKCcuZ2FsbGVyeScpLm1hZ25pZmljUG9wdXAoe1xuICB0eXBlOiAnaW1hZ2UnLFxuICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gIGZpeGVkQmdQb3M6IHRydWUsXG4gIHNob3dDbG9zZUJ0bjogdHJ1ZSxcbiAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gIHJlbW92YWxEZWxheTogNTAwLFxuICBlbmFibGVFc2NhcGVLZXk6IHRydWUsXG4gIGdhbGxlcnk6e1xuICAgIGVuYWJsZWQ6dHJ1ZVxuICB9XG59KTtcbiIsInZhciBzbGlja1ByZXYgPSAnPGJ1dHRvbiBjbGFzcz1cInBhZ2VyIHByZXZcIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDcuNjggNDcuNjhcIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz1cImFcIiBkPVwiTTI2LjY2LDE3LjE0YTEuMDksMS4wOSwwLDAsMSwxLjM5LDEuNjhsLTYuMDgsNSw2LjA4LDVhMS4wOSwxLjA5LDAsMSwxLTEuMzksMS42OGwtNy4xLTUuODVhMS4wOSwxLjA5LDAsMCwxLDAtMS42OFptLTIuNSwyOC4zNUEyMS42NiwyMS42NiwwLDEsMCwyLjUsMjMuODQsMjEuNTIsMjEuNTIsMCwwLDAsMjQuMTYsNDUuNDlNMjQuMTYsMEEyMy44NCwyMy44NCwwLDEsMSwuMzIsMjMuODQsMjMuODcsMjMuODcsMCwwLDEsMjQuMTYsMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMC4zMiAwKVwiLz48L3N2Zz48L2J1dHRvbj4nO1xudmFyIHNsaWNrTmV4dCA9ICc8YnV0dG9uIGNsYXNzPVwicGFnZXIgbmV4dFwiPjxzdmcgdmlld0JveD1cIjAgMCA0Ny42OCA0Ny42OFwiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPVwiYVwiIGQ9XCJNMjYuNjYsMTcuMTRhMS4wOSwxLjA5LDAsMCwxLDEuMzksMS42OGwtNi4wOCw1LDYuMDgsNWExLjA5LDEuMDksMCwxLDEtMS4zOSwxLjY4bC03LjEtNS44NWExLjA5LDEuMDksMCwwLDEsMC0xLjY4Wm0tMi41LDI4LjM1QTIxLjY2LDIxLjY2LDAsMSwwLDIuNSwyMy44NCwyMS41MiwyMS41MiwwLDAsMCwyNC4xNiw0NS40OU0yNC4xNiwwQTIzLjg0LDIzLjg0LDAsMSwxLC4zMiwyMy44NCwyMy44NywyMy44NywwLDAsMSwyNC4xNiwwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0wLjMyIDApXCIvPjwvc3ZnPjwvYnV0dG9uPic7XG5cbmlmKCQoJy5zbGlkZXInKS5sZW5ndGgpIHtcbiAgJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBhcnJvd3M6IHRydWUsXG4gICAgc3BlZWQ6IDM3NSxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgZWRnZUZyaWN0aW9uOiAuMDgsXG4gICAgcHJldkFycm93OiBzbGlja1ByZXYsXG4gICAgbmV4dEFycm93OiBzbGlja05leHQsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDExMDEsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA3MDEsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICAgICAgfVxuICAgICAgfVxuICBdXG4gIH0pO1xufVxuIiwiXG4iLCIvL0tlZXAgUmF0aW8gSW1hZ2VzXG5pZigkKCcudmlkZW8tYmcnKS5sZW5ndGgpIHtcbiAgJCgnLnZpZGVvLWJnJykua2VlcFJhdGlvKHsgcmF0aW86IDE2LzksIGNhbGN1bGF0ZTogJ2hlaWdodCcgfSk7XG4gICQoJy5pbnRyb19fYmcnKS5rZWVwUmF0aW8oeyByYXRpbzogMTYvOSwgY2FsY3VsYXRlOiAnaGVpZ2h0JyB9KTtcbn1cbiIsIkFPUy5pbml0KCk7XG4iLCIvL1Ntb290aCBTY3JvbGxpbmdcbiQoJ2EuYW5jaG9yW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEwMFxuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxufSk7XG4iLCJ9KShqUXVlcnkpO1xuIl19
