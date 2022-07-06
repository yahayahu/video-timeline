import { IControls } from '../../types/controls';
import { formatDuration } from '../utils';

export class Controls implements IControls {
  private video: HTMLVideoElement;
  private wrapper?: HTMLDivElement;
  defaultVolume = 75;

  constructor(video: HTMLVideoElement) {
    this.video = video;
    this.init();
  }

  private init(): void {
    this.video.controls = false;
    // Creating wrapper for position controls elements
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('video-timeline__controls');
    this.video.parentNode?.appendChild(this.wrapper);

    // Initialization toggle button
    this.initToggleBtn();

    // Initialization time
    this.initDuration();
  }

  private initToggleBtn() {
    // creating toggle video button
    const toggleBtn = document.createElement('button');
    toggleBtn.setAttribute('aria-start', 'no');
    toggleBtn.classList.add('video-timeline__toggle');
    this.video.parentNode?.appendChild(toggleBtn);

    // Add event listeners
    toggleBtn.addEventListener('click', () => {
      if (this.video.paused) {
        this.video.play().then(() => {
          toggleBtn?.classList.add('pause');
        });
      } else {
        this.video.pause();
        toggleBtn?.classList.remove('pause');
      }
    });

    // reset video on end
    this.video.addEventListener('ended', () => {
      this.video.currentTime = 0;
      toggleBtn?.classList.remove('pause');
    });
  }

  private initDuration() {
    // creating video duration
    const timeEl = document.createElement('time');
    timeEl.classList.add('video-timeline__time');
    timeEl.innerText = formatDuration(this.video.currentTime);
    this.video.addEventListener('timeupdate', () => {
      timeEl.innerText = formatDuration(this.video.currentTime);
    });
    this.wrapper?.appendChild(timeEl);
  }
}
