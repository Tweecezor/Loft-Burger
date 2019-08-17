
// // //VIDEO 
// // (function(){
// // //     let player;

// // // function onYouTubeIframeAPIReady() {
// // //   player = new YT.Player("yt-player", {
// // //     width: "660",
// // //     height: "405",
// // //     videoId: "zmg_jOwa9Fc",
// // //     playerVars: {
// // //       controls: 0,
// // //       disablekb: 0,
// // //       showinfo: 0,
// // //       rel: 0,
// // //       autoplay: 0,
// // //       modestbranding: 0
// // //     },
// // //     events: {
// // //       onReady: onPlayerReady,
// // //       onStateChange: onPlayerStateChange
// // //     }
// // //   });
// // // }

// // // function onPlayerReady(event) {
// // //   const duration = player.getDuration();
// // //   let interval;
// // //   updateTimerDisplay();

// // //   $(".player").removeClass("hidden");

// // //   clearInterval(interval);

// // //   interval = setInterval(() => {
// // //     const completed = player.getCurrentTime();
// // //     const percents = (completed / duration) * 100;

// // //     changeButtonPosition(percents);

// // //     updateTimerDisplay();
// // //   }, 1000);
// // // }

// // // function onPlayerStateChange(event) {
// // //   const playerButton = $(".player__start");
// // //   switch (event.data) {
// // //     case 1:
// // //       $(".player__wrapper").addClass("active");
// // //       playerButton.addClass("paused");
// // //       break;
// // //     case 2: 
// // //       playerButton.removeClass("paused");
// // //       break;
// // //   }
// // // }

// // // $(".player__start").on("click", e => {
// // //   const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

// // //   if (playerStatus !== 1) {
// // //     player.playVideo();
// // //   } else {
// // //     player.pauseVideo();
// // //   }
// // // });


// // // $(".player__playback").on("click", e => {
// // //   e.preventDefault();
// // //   const bar = $(e.currentTarget);
// // //   const newButtonPosition = e.pageX - bar.offset().left;
// // //   const clickedPercents = (newButtonPosition / bar.width()) * 100;
// // //   const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

// // //   changeButtonPosition(clickedPercents);
// // //   player.seekTo(newPlayerTime);
// // // });

// // // $(".player__splash").on("click", e => {
// // //   player.playVideo();
// // // });

// // // function changeButtonPosition(percents) {
// // //   $(".player__playback-button").css({
// // //     left: `${percents}%`
// // //   });
// // // }

// // // function updateTimerDisplay() {
// // //   $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
// // //   $(".player__duration-estimate").text(formatTime(player.getDuration()));
// // // }

// // // function formatTime(time) {
// // //   const roundTime = Math.round(time);

// // //   const minutes = Math.floor(roundTime / 60);
// // //   const seconds = roundTime - minutes * 60;
// // //   const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

// // //   return minutes + ":" + formatedSeconds;
// // // }
// // // Video player
 

// // const video = document.querySelector('#player'),
// //   playBtn = document.querySelector('.duration__img'),
// //   whitePlayBtn = document.querySelector('.video__player-img'),
// //   videoTimer = document.querySelector('#timer'),
// //   mic = document.querySelector('#mic'),
// //   soundControl = document.querySelector('#micLevel'),
// //   durationControl = document.querySelector('#durationLevel');

// // let soundLevel = null, 
// //   intervalId;

// // soundControl.min = 0;
// // soundControl.max = 10;
// // soundControl.value = soundControl.max;

// // durationControl.value = 0;


// // playBtn.addEventListener('click', () => {
// //   playStop();
// // });

// // whitePlayBtn.addEventListener('click', () => {
// //   playStop();
// // });

// // video.addEventListener('click', () => {
// //   playStop();
// // });

// // video.addEventListener('timeupdate', () => {
// //   videoTimer.innerText = secondsToTime(video.currentTime);
// // });

// // mic.addEventListener('click', soundOf);
// // // soundControl.addEventListener('click', changeSoundVolume);
// // soundControl.addEventListener('mousemove', changeSoundVolume); 

// // durationControl.addEventListener('mousedown', stopInterval);
// // durationControl.addEventListener('mouseup', setVideoDuration);

// // function playStop() {
// //   if (video.paused) {
// //     video.play();
// //     playBtn.setAttribute('src', 'images/player/Pause_gray.png');
// //     whitePlayBtn.classList.toggle('video__player-img--active');
// //     intervalId = setInterval(updateDuration, 1000 / 66);
// //   } else {
// //     video.pause();
// //     playBtn.setAttribute('src', 'images/player/Play_gray.png');
// //     whitePlayBtn.classList.toggle('video__player-img--active');
// //     clearInterval(intervalId);
// //   }
// // }

// // function secondsToTime(time) {
// //   let h = Math.floor(time / (60 * 60)),
// //     fulltime,
// //     dm = time % (60 * 60),
// //     m = Math.floor(dm / 60),
// //     ds = dm % 60,
// //     s = Math.ceil(ds);
// //   if (s === 60) {
// //     s = 0;
// //     m += 1;
// //   }
// //   if (s < 10) {
// //     s = `0${s}`;
// //   }
// //   if (m === 60) {
// //     m = 0;
// //     h += 1;
// //   }
// //   if (m < 10) {
// //     m = `0${m}`;
// //   }
// //   if (h === 0) {
// //     fulltime = `${m}:${s}`;
// //   } else {
// //     fulltime = `${h}:${m}:${s}`;
// //   }
// //   return fulltime;
// // }

// // function soundOf () {
// //   if (video.volume === 0) {
// //     video.volume = soundLevel;
// //     soundControl.value = soundLevel * 10;
// //     mic.setAttribute('src', './images/Volume_gray.png');
// //   } else {
// //     soundLevel = video.volume;
// //     video.volume = 0;
// //     soundControl.value = 0;
// //     mic.setAttribute('src', 'images/Volume_gray_mute.png');
// //   }
// // }

// // function changeSoundVolume() {
// //   video.volume = soundControl.value / 10;
// //   console.log(video.volume);
// // }

// // function updateDuration() {
// //   durationControl.value = video.currentTime;
// //   console.log(video.currentTime);
// // }

// // function setVideoDuration() {
// //   if (video.paused) {
// //     video.play();
// //     intervalId = setInterval(updateDuration, 1000 / 66);
// //   } else {
// //     video.pause();
// //     clearInterval(intervalId);
// //   }
// //   video.currentTime = durationControl.value;
  
// // }

// // function stopInterval() {
// //   video.pause();
// //   clearInterval(intervalId);
// // }
          
// // })();
// (function(){
//     let player;

// function onYouTubeIframeAPIReady() {
//   player = new YT.Player("yt-player", {
//     width: "660",
//     height: "405",
//     videoId: "zmg_jOwa9Fc",
//     playerVars: {
//       controls: 0,
//       disablekb: 0,
//       showinfo: 0,
//       rel: 0,
//       autoplay: 0,
//       modestbranding: 0
//     },
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange
//     }
//   });
// }

// function onPlayerReady(event) {
//   const duration = player.getDuration();
//   let interval;
//   updateTimerDisplay();

//   $(".player").removeClass("hidden");

//   clearInterval(interval);

//   interval = setInterval(() => {
//     const completed = player.getCurrentTime();
//     const percents = (completed / duration) * 100;

//     changeButtonPosition(percents);

//     updateTimerDisplay();
//   }, 1000);
// }

// function onPlayerStateChange(event) {
//   const playerButton = $(".player__start");
//   switch (event.data) {
//     case 1:
//       $(".player__wrapper").addClass("active");
//       playerButton.addClass("paused");
//       break;
//     case 2: 
//       playerButton.removeClass("paused");
//       break;
//   }
// }

// $(".player__start").on("click", e => {
//   const playerStatus = player.getPlayerState(); // 0 - ended, 1 - played, 2 - paused ...

//   if (playerStatus !== 1) {
//     player.playVideo();
//   } else {
//     player.pauseVideo();
//   }
// });


// $(".player__playback").on("click", e => {
//   e.preventDefault();
//   const bar = $(e.currentTarget);
//   const newButtonPosition = e.pageX - bar.offset().left;
//   const clickedPercents = (newButtonPosition / bar.width()) * 100;
//   const newPlayerTime = (player.getDuration() / 100) * clickedPercents;

//   changeButtonPosition(clickedPercents);
//   player.seekTo(newPlayerTime);
// });

// $(".player__splash").on("click", e => {
//   player.playVideo();
// });

// function changeButtonPosition(percents) {
//   $(".player__playback-button").css({
//     left: `${percents}%`
//   });
// }

// function updateTimerDisplay() {
//   $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
//   $(".player__duration-estimate").text(formatTime(player.getDuration()));
// }

// function formatTime(time) {
//   const roundTime = Math.round(time);

//   const minutes = Math.floor(roundTime / 60);
//   const seconds = roundTime - minutes * 60;
//   const formatedSeconds = seconds < 10 ? `0${seconds}` : seconds;

//   return minutes + ":" + formatedSeconds;
// }
// })();