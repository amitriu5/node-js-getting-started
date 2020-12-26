import '../../style.css'
import '../theme.css';
export const createHeader = () => {
  const header = document.createElement('header');
  header.className = 'header';

  const contentBox = document.createElement('div');
  contentBox.className = ['head-bar','animated'].join(' ');

  const content = document.createElement('div');
  content.className = 'head-bar-inner';

  const row = `<div class="row">
    <div class="col-sm-3 col-xs-6">
        <a class="logo" href="index.html"><span>RS</span>card</a>
        <!-- <a class="head-logo" href=""><img src="./../../img/rs-logo.png" alt="RScard"/></a> -->
    </div>

    <div class="col-sm-9 col-xs-6">
        <div class="nav-wrap">
            <nav id="nav" class="nav">
                <ul class="clearfix">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#references">References</a></li>
                    <li>
                        <a href="category.html">Blog</a>
                        <ul>
                            <li><a href="single-image.html">Image Post</a></li>
                            <li><a href="single-slider.html">Slider Post</a></li>
                            <li><a href="single-video.html">Video Post</a></li>
                            <li><a href="single-audio.html">Audio Post</a></li>
                            <li><a href="single-vimeo.html">Vimeo Post</a></li>
                            <li><a href="single-youtube.html">Youtube Post</a></li>
                            <li><a href="single-dailymotion.html">Dailymotion Post</a></li>
                            <li><a href="single.html">Without Media Post</a></li>
                            <li><a href="typography.html">Typography Page</a></li>
                            <li><a href="404.html">404 Page</a></li>
                        </ul>
                    </li>
                    <li><a href="#calendar">Calendar <span></span></a></li>
                    <li><a href="#contact">Contact <span></span></a></li>
                </ul>
            </nav>

            <button class="btn-mobile btn-mobile-nav">Menu</button>
            <button class="btn-sidebar btn-sidebar-open"><i class="rsicon rsicon-menu"></i></button>
        </div>
        <!-- .nav-wrap -->
    </div>
  </div>`;

  content.insertAdjacentHTML('afterbegin',row);

  contentBox.appendChild(content);

  header.appendChild(contentBox);

  return header;
};
