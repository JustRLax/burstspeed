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

$(document).bind("mobileinit", function(){
  $.mobile.ajaxEnabled = false;
});

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjBfYnJvd3Nlci1kZXRlY3Rpb24uanMiLCIwX2Jyb3dzZXJzLXRvdWNoLmpzIiwiMF9jbG91ZGluYXJ5LmpzIiwiMF9zdGFydC5qcyIsIjFfbWVudS5qcyIsIjJfbGlnaHRib3guanMiLCIzX3NsaWRlci5qcyIsIjRfcGFyYWxsYXguanMiLCI1X2tlZXAtcmF0aW8uanMiLCI3X2FuaW1hdGlvbnMuanMiLCI4X3Ntb290aHNjcm9sbC5qcyIsInpfZW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVhbCB3aXRoIFdQIGpRdWVyeSBub0NvbmZsaWN0XG4kID0galF1ZXJ5O1xuXG52YXIgQnJvd3NlckRldGVjdCA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuc2VhcmNoU3RyaW5nKHRoaXMuZGF0YUJyb3dzZXIpIHx8IFwiT3RoZXJcIjtcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLnNlYXJjaFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgdGhpcy5zZWFyY2hWZXJzaW9uKG5hdmlnYXRvci5hcHBWZXJzaW9uKSB8fCBcIlVua25vd25cIjtcbiAgfSxcbiAgc2VhcmNoU3RyaW5nOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRhdGFTdHJpbmcgPSBkYXRhW2ldLnN0cmluZztcbiAgICAgIHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9IGRhdGFbaV0uc3ViU3RyaW5nO1xuXG4gICAgICBpZiAoZGF0YVN0cmluZy5pbmRleE9mKGRhdGFbaV0uc3ViU3RyaW5nKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZWFyY2hWZXJzaW9uOiBmdW5jdGlvbiAoZGF0YVN0cmluZykge1xuICAgIHZhciBpbmRleCA9IGRhdGFTdHJpbmcuaW5kZXhPZih0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcnYgPSBkYXRhU3RyaW5nLmluZGV4T2YoXCJydjpcIik7XG4gICAgaWYgKHRoaXMudmVyc2lvblNlYXJjaFN0cmluZyA9PT0gXCJUcmlkZW50XCIgJiYgcnYgIT09IC0xKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdChkYXRhU3RyaW5nLnN1YnN0cmluZyhydiArIDMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoZGF0YVN0cmluZy5zdWJzdHJpbmcoaW5kZXggKyB0aGlzLnZlcnNpb25TZWFyY2hTdHJpbmcubGVuZ3RoICsgMSkpO1xuICAgIH1cbiAgfSxcblxuICBkYXRhQnJvd3NlcjogW1xuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJFZGdlXCIsIGlkZW50aXR5OiBcIk1TIEVkZ2VcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk1TSUVcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIlRyaWRlbnRcIiwgaWRlbnRpdHk6IFwiRXhwbG9yZXJcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIkZpcmVmb3hcIiwgaWRlbnRpdHk6IFwiRmlyZWZveFwifSxcbiAgICB7c3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LCBzdWJTdHJpbmc6IFwiT3BlcmFcIiwgaWRlbnRpdHk6IFwiT3BlcmFcIn0sXG4gICAge3N0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCwgc3ViU3RyaW5nOiBcIk9QUlwiLCBpZGVudGl0eTogXCJPcGVyYVwifSxcblxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJDaHJvbWVcIiwgaWRlbnRpdHk6IFwiQ2hyb21lXCJ9LFxuICAgIHtzdHJpbmc6IG5hdmlnYXRvci51c2VyQWdlbnQsIHN1YlN0cmluZzogXCJTYWZhcmlcIiwgaWRlbnRpdHk6IFwiU2FmYXJpXCJ9XG4gIF1cbn07XG5cbkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xuJChcImh0bWxcIikuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSkuYWRkQ2xhc3MoKEJyb3dzZXJEZXRlY3QuYnJvd3NlcikudG9Mb3dlckNhc2UoKSArIFwiLVwiICsgQnJvd3NlckRldGVjdC52ZXJzaW9uKTtcbiIsIi8qKlxuICogalF1ZXJ5LmJyb3dzZXIubW9iaWxlIChodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3Nlci5jb20vKVxuICpcbiAqIGpRdWVyeS5icm93c2VyLm1vYmlsZSB3aWxsIGJlIHRydWUgaWYgdGhlIGJyb3dzZXIgaXMgYSBtb2JpbGUgZGV2aWNlXG4gKlxuICoqL1xuKGZ1bmN0aW9uKGEpeyhqUXVlcnkuYnJvd3Nlcj1qUXVlcnkuYnJvd3Nlcnx8e30pLm1vYmlsZT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XG5cbmlmKCAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICl7XG5cdFx0JChcImJvZHlcIikuYWRkQ2xhc3MoXCJ0b3VjaFwiKTtcblx0fVxuXHRlbHNle1xuXHRcdCQoXCJib2R5XCIpLmFkZENsYXNzKFwibm8tdG91Y2hcIik7XG5cdH1cbiIsImNvbnN0IGNsID0gbmV3IGNsb3VkaW5hcnkuQ2xvdWRpbmFyeSh7Y2xvdWRfbmFtZTogXCJqdXN0aW5sYXhhbWFuYVwiLCBzZWN1cmU6IHRydWV9KTtcbmNvbnN0IGNsb3VkaW5hcnlfdXJsID0gXCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9qdXN0aW5sYXhhbWFuYS9cIjtcbmNvbnN0IGNsb3VkaW5hcnlfZmV0Y2hfdXJsID0gY2xvdWRpbmFyeV91cmwgKyBcIi9pbWFnZS9mZXRjaC9cIjtcbiIsIihmdW5jdGlvbigkKXtcbiIsIlxuJCgnLndpdGgtZHJvcGRvd24nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgJCh0aGlzKS5uZXh0KCcuZHJvcGRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcuZHJvcGRvd24gYScpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgJCgnLmRyb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cblxuLy9UaHJvdHRsaW5nIEZ1bmN0aW9uXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgd2FpdCkge1xuICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoKHRpbWUgKyB3YWl0IC0gRGF0ZS5ub3coKSkgPCAwKSB7XG4gICAgICBmbigpO1xuICAgICAgdGltZSA9IERhdGUubm93KCk7XG4gICAgfVxuICB9XG59XG4vL0ZpeGVkIFNjcm9sbFxuZnVuY3Rpb24gZml4ZWRFbGVtZW50cygpIHtcbiAgaWYoJCgnLmZvcmVncm91bmQnKS5sZW5ndGgpIHtcbiAgICAkKCcubWFpbi1oZWFkZXInKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB2YXIgc2NyZWVuVG9wID0gJCgnLmZvcmVncm91bmQnKS5vZmZzZXQoKS50b3AgLSAzMDA7XG4gICAgdmFyIGZvb3RlclRvcCA9ICQoJy5nbG9iYWwtZm9vdGVyJykub2Zmc2V0KCkudG9wIC0gMzAwO1xuXG4gICAgaWYoc2Nyb2xsVG9wID49IHNjcmVlblRvcCkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgaWYoc2Nyb2xsVG9wID49IGZvb3RlclRvcCkge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuICBpZigkKCcud2F5cG9pbnQnKS5sZW5ndGgpIHtcbiAgICBpZigkKCcud2F5cG9pbnQuYW9zLWFuaW1hdGUnKS5sZW5ndGgpIHtcbiAgICAgICQoJy5tYWluLWhlYWRlcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnLm1haW4taGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlKGZpeGVkRWxlbWVudHMsIDI1KSk7XG52YXIgcmVzaXplVGltZXI7XG4kKHdpbmRvdykub24oXCJyZXNpemVcIiwgZnVuY3Rpb24oZSkge1xuICBjbGVhclRpbWVvdXQocmVzaXplVGltZXIpO1xuICByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgZml4ZWRFbGVtZW50cygpO1xuICB9LCAyNTApO1xufSk7XG4kKHdpbmRvdykudHJpZ2dlckhhbmRsZXIoXCJyZXNpemVcIik7XG4iLCIkKCcucGxheScpLm1hZ25pZmljUG9wdXAoe1xuICAgIHR5cGU6ICdpZnJhbWUnLFxuICBcdHByZWxvYWRlcjogZmFsc2UsXG4gICAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICAgIGZpeGVkQmdQb3M6IHRydWUsXG4gICAgc2hvd0Nsb3NlQnRuOiB0cnVlLFxuICAgIGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuICAgIGVuYWJsZUVzY2FwZUtleTogdHJ1ZSxcbiAgICByZW1vdmFsRGVsYXk6IDcwMFxufSk7XG4kKCcuc2hvcF9faW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLm1hZ25pZmljUG9wdXAoe1xuICBcdHR5cGU6ICdpbWFnZScsXG4gICAgZGVsZWdhdGU6ICdhJyxcbiAgICBmaXhlZENvbnRlbnRQb3M6IHRydWUsXG4gICAgZml4ZWRCZ1BvczogdHJ1ZSxcbiAgICBzaG93Q2xvc2VCdG46IHRydWUsXG4gICAgY2xvc2VPbkJnQ2xpY2s6IHRydWUsXG4gICAgcmVtb3ZhbERlbGF5OiA1MDAsXG4gICAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlLFxuICAgIGdhbGxlcnk6e1xuICAgICAgZW5hYmxlZDp0cnVlXG4gICAgfVxuICB9KTtcbn0pO1xuJCgnLmdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcbiAgdHlwZTogJ2ltYWdlJyxcbiAgZml4ZWRDb250ZW50UG9zOiB0cnVlLFxuICBmaXhlZEJnUG9zOiB0cnVlLFxuICBzaG93Q2xvc2VCdG46IHRydWUsXG4gIGNsb3NlT25CZ0NsaWNrOiB0cnVlLFxuICByZW1vdmFsRGVsYXk6IDUwMCxcbiAgZW5hYmxlRXNjYXBlS2V5OiB0cnVlLFxuICBnYWxsZXJ5OntcbiAgICBlbmFibGVkOnRydWVcbiAgfVxufSk7XG4iLCJ2YXIgc2xpY2tQcmV2ID0gJzxidXR0b24gY2xhc3M9XCJwYWdlciBwcmV2XCI+PHN2ZyB2aWV3Qm94PVwiMCAwIDQ3LjY4IDQ3LjY4XCI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9XCJhXCIgZD1cIk0yNi42NiwxNy4xNGExLjA5LDEuMDksMCwwLDEsMS4zOSwxLjY4bC02LjA4LDUsNi4wOCw1YTEuMDksMS4wOSwwLDEsMS0xLjM5LDEuNjhsLTcuMS01Ljg1YTEuMDksMS4wOSwwLDAsMSwwLTEuNjhabS0yLjUsMjguMzVBMjEuNjYsMjEuNjYsMCwxLDAsMi41LDIzLjg0LDIxLjUyLDIxLjUyLDAsMCwwLDI0LjE2LDQ1LjQ5TTI0LjE2LDBBMjMuODQsMjMuODQsMCwxLDEsLjMyLDIzLjg0LDIzLjg3LDIzLjg3LDAsMCwxLDI0LjE2LDBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTAuMzIgMClcIi8+PC9zdmc+PC9idXR0b24+JztcbnZhciBzbGlja05leHQgPSAnPGJ1dHRvbiBjbGFzcz1cInBhZ2VyIG5leHRcIj48c3ZnIHZpZXdCb3g9XCIwIDAgNDcuNjggNDcuNjhcIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz1cImFcIiBkPVwiTTI2LjY2LDE3LjE0YTEuMDksMS4wOSwwLDAsMSwxLjM5LDEuNjhsLTYuMDgsNSw2LjA4LDVhMS4wOSwxLjA5LDAsMSwxLTEuMzksMS42OGwtNy4xLTUuODVhMS4wOSwxLjA5LDAsMCwxLDAtMS42OFptLTIuNSwyOC4zNUEyMS42NiwyMS42NiwwLDEsMCwyLjUsMjMuODQsMjEuNTIsMjEuNTIsMCwwLDAsMjQuMTYsNDUuNDlNMjQuMTYsMEEyMy44NCwyMy44NCwwLDEsMSwuMzIsMjMuODQsMjMuODcsMjMuODcsMCwwLDEsMjQuMTYsMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMC4zMiAwKVwiLz48L3N2Zz48L2J1dHRvbj4nO1xuXG5pZigkKCcuc2xpZGVyJykubGVuZ3RoKSB7XG4gICQoJy5zbGlkZXInKS5zbGljayh7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYXJyb3dzOiB0cnVlLFxuICAgIHNwZWVkOiAzNzUsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGVkZ2VGcmljdGlvbjogLjA4LFxuICAgIHByZXZBcnJvdzogc2xpY2tQcmV2LFxuICAgIG5leHRBcnJvdzogc2xpY2tOZXh0LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMTAxLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzAxLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgXVxuICB9KTtcbn1cbiIsIiQoZG9jdW1lbnQpLmJpbmQoXCJtb2JpbGVpbml0XCIsIGZ1bmN0aW9uKCl7XG4gICQubW9iaWxlLmFqYXhFbmFibGVkID0gZmFsc2U7XG59KTtcbiIsIi8vS2VlcCBSYXRpbyBJbWFnZXNcbmlmKCQoJy52aWRlby1iZycpLmxlbmd0aCkge1xuICAkKCcudmlkZW8tYmcnKS5rZWVwUmF0aW8oeyByYXRpbzogMTYvOSwgY2FsY3VsYXRlOiAnaGVpZ2h0JyB9KTtcbiAgJCgnLmludHJvX19iZycpLmtlZXBSYXRpbyh7IHJhdGlvOiAxNi85LCBjYWxjdWxhdGU6ICdoZWlnaHQnIH0pO1xufVxuIiwiQU9TLmluaXQoKTtcbiIsIi8vU21vb3RoIFNjcm9sbGluZ1xuJCgnYS5hbmNob3JbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG5pZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gMTAwXG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG59KTtcbiIsIn0pKGpRdWVyeSk7XG4iXX0=
