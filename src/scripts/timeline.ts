'use strict';

import '../styles/index.scss';

interface InitialParams {
  videoElement: HTMLVideoElement;
}

export default class VideoTimeline {
  public video: HTMLVideoElement;

  constructor({ videoElement }: InitialParams) {
    this.makeAuthentication(videoElement);

    this.video = videoElement;
  }

  private makeAuthentication(element: HTMLVideoElement) {
    if (element?.tagName !== 'VIDEO') {
      throw new Error(`You need to give video element but you gave a ${element.tagName.toLowerCase()}.`);
    }
  }
}
