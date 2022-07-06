export interface IOptions {
  containerClass?: string;
  videoClass?: string;
  withControls?: boolean;
}

interface IVideoTimeline {
  video: HTMLVideoElement;
  wrapper: HTMLDivElement;
}
