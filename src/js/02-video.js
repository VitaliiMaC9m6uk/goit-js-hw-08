import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


//  player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });

player.on('timeupdate', throttle(saveTimeInLocal, 1000));

function saveTimeInLocal(event) {

  localStorage.setItem('videoplayer-current-time',
        JSON.stringify(event.seconds));
    
}

const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(JSON.parse(savedTime)).then(function (seconds) {
    // seconds = the actual time that the player seeked to
    console.log(seconds);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    
});
