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

//Trigger Lightbox
$('.more').on("click", function(e){
  $(this).closest('.content').siblings('.shop__image').find('.shop__link').trigger('click');
  e.preventDefault();
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
