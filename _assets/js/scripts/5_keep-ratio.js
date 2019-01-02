//Keep Ratio Images
if($('.video-bg').length) {
  $('.video-bg').keepRatio({ ratio: 16/9, calculate: 'height' });
  $('.intro__bg').keepRatio({ ratio: 16/9, calculate: 'height' });
}
