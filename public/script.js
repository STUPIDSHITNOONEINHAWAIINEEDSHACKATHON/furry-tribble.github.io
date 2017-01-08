var tag = document.createElement('script')
tag.src = 'https://www.youtube.com/player_api'
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

var playerInfoList = [
  {width:'150', videoId:'lXMskKTw3Bc'},
  {width:'150', videoId:'Q3E7L_RoyTU'},
  {width: '150', videoId: 'KNtXIm5By04'},
  {width: '150', videoId: 'TX-6qPppbjY'},
  {width: '150', videoId: 'q6EoRBvdVPQ'},
  {width:'150', videoId: 'o2IeYyYYe1U'},
  {width:'150', videoId: '1LOoRJ0s0rw'},
  {width: '150', videoId: 'NwN7PMQtlo8'},
  {width: '150', videoId: '3hKRVsDPD9s'},
  {width: '150', videoId: '1Q6DdTcqGy8'},
  {width: '150', videoId: 'ksWKmF43AqM'}
]
for (var i = 0; i < playerInfoList; i++) {
  playerInfoList[i].height = window.innerHeight / playerInfoList.length
}
function onYouTubeIframeAPIReady() {
  for(var i = 0; i < playerInfoList.length;i++) {
    var div = `<div class="iframe" id="${'tv' + i}"></div>`
    $('#tv').append(div)
    playerInfoList[i].id = 'tv' + i
    var curplayer = createPlayer(playerInfoList[i]);
  }
}

function createPlayer(playerInfo) {
  return new YT.Player(playerInfo.id, {
    height: playerInfo.height,
    width: playerInfo.width,
    videoId: playerInfo.videoId,
    playerVars: {
      autoplay: 0,        // Auto-play the video on load
      controls: 0,        // Show pause/play buttons in player
      showinfo: 1,        // Hide the video title
      modestbranding: 1,  // Hide the Youtube Logo
      loop: 0,            // Run the video in a loop
      fs: 1,              // Hide the full screen button
      cc_load_policy: 1, // Hide closed captions
      iv_load_policy: 3,  // Hide the Video Annotations
      autohide: 0         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.playVideo()
        // e.target.mute()
      }
    }
  })
}
