import { Controls } from './widgets';
import { IControls } from '../interfaces/controls';
import { IOptions } from '../interfaces/common';

class VideoTimeline {
  readonly video: HTMLVideoElement;
  readonly wrapper: HTMLDivElement;
  private controls: IControls | null;

  constructor(video: HTMLVideoElement, options: IOptions) {
    this.video = video;
    this.wrapper = document.createElement('div');
    this.controls = null;
    this.init(options);
  }

  protected init({ withControls, containerClass = '', videoClass = '' }: IOptions): void {
    if (!this.video) throw new Error("Video does'n found.");

    // Creating wrapper for position elements
    this.wrapper.classList.add('video-timeline', containerClass);
    this.video.parentNode!.insertBefore(this.wrapper, this.video);
    this.wrapper.appendChild(this.video);
    this.video.classList.add('video-timeline__video', videoClass);

    if (withControls) {
      this.controls = new Controls(this.video);
    }
    console.log(this.controls);
  }
}

export default VideoTimeline;
