import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function({seconds}) {
    localStorage.setItem("videoplayer-current-time", `${seconds}`);}
, 1000));

const seconds = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(seconds).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});