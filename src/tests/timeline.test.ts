import VideoTimeline from '../scripts/timeline';

describe('Validation element on init timeline', () => {
  test('does not match without video tag', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(() => new VideoTimeline({ videoElement: document.createElement('div') })).toThrow(
      new Error('You need to give video element but you gave a div.'),
    );
  });

  test('do match if getting video tag', () => {
    expect(() => new VideoTimeline({ videoElement: document.createElement('video') })).not.toThrow();
  });
});
