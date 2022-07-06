import Video from '../src/scripts/index';

describe('player', (): void => {
  let videoPlayer;

  afterEach((): void => {
    if (Video.instances.video) {
      Video.instances.video.destroy();
    }

    videoPlayer = null;
  });
});
