$(function() {
  var removeLoader = function(){
    $('#preloader').hide();
  }
  var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
  
  if(!isMobile) {
    var videos = [
      {videoURL:'https://youtu.be/kexnxl50QYs',containment:'body',autoPlay:true, startAt:5, opacity:1, addRaster:true},
      {videoURL:'https://youtu.be/mtCHFXjAOZU',containment:'body',autoPlay:true, startAt:0, opacity:1, addRaster:true},
      {videoURL:'https://youtu.be/3V3Qox4nhEY',containment:'body',autoPlay:true, startAt:0, opacity:1, addRaster:true},
      {videoURL:'https://youtu.be/cHJn_igNBEo',containment:'body',autoPlay:true, startAt:0, opacity:1, addRaster:true},
      {videoURL:'https://youtu.be/gwBdYNKoPD8',containment:'body',autoPlay:true, startAt:0, opacity:1, addRaster:true},
      {videoURL:'https://youtu.be/3HA1AfgDZ5o',containment:'body',autoPlay:true, startAt:0, opacity:1, addRaster:true},
      {videoURL:'https://youtu.be/E0c_VCpBJF0',containment:'body',autoPlay:true, startAt:0, opacity:1, addRaster:true},
      {videoURL:'https://youtu.be/LOoReTgMWJQ',containment:'body',autoPlay:true, startAt:0, opacity:1, addRaster:true},
    ];
    $(".player").YTPlaylist(videos, true);
    // var player = $(".player").YTPlayer();
    
    $('#bgndVideo').on('YTPReady', function(){
      removeLoader();
    });
  } else {
    removeLoader();
    $('#bgndVideo').remove();
  }
});