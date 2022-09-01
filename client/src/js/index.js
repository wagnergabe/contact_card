import  "./form";
import "./submit";
import { Tooltip, Toast, Popover } from 'bootstrap';
import { initdb } from './database';
import 'regenerator-runtime/runtime';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS files
import "../css/index.css";

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Cat from '../images/cat.jpeg';

window.addEventListener('load', function () {
    initdb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
    document.getElementById('catThumbnail').src = Cat;
  });