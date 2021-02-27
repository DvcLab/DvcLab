import fullpage from './fullpage';
import Splide from '@splidejs/splide';

// import './bootstrap.bundle.min.js';
import './bootstrap.bundle.min 2.js';
import './custom-script.js';
import './iconfont.js';

import '@splidejs/splide/dist/css/splide.min.css';
import '../css/fullpage.css';
// import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/index.css';
import '../css/custom.css';

// logo
import '../images/icon.png';
// psiai images
import '../images/psiai_frame.png';

import '../images/psiai_web1.png';
import '../images/psiai_hostList.png';
import '../images/psiai_imageList.png';
import '../images/psiai_containerList.png';
// test
import '../images/psiai_dashboard_browserframe.png';
import '../images/psiai_hostList_browserframe1.png';
import '../images/psiai_imageList_browserframe1.png';
import '../images/psiai_containerList_browserframe1.png';

// psipiper images
import '../images/psipiper_frame.png';
import '../images/psipiper_lib_browserframe.png';
import '../images/psipiper_nodeOverview_browserframe.png';
import '../images/psipiper_templates_browserframe.png';
import '../images/psipiper_subscribe_browserframe.png';

let myFullpage = new fullpage('#fullpage', {
    css3: false,
    navigation: true,
    navigationPosition: 'right',
  });

new Splide('#splide_psiai', {
	type: 'fade',
  interval: 2000,
  rewind: true,
  drag: true,
  // arrows: false,
	autoplay: true,
  pagination: false
}).mount();

new Splide('#splide_psipiper', {
	type: 'fade',
  interval: 2000,
  rewind: true,
  drag: true,
  // arrows: false,
	autoplay: true,
  pagination: false
}).mount();

function toGithub () {
  window.location.href = 'https://github.com/DvcLAB';
}