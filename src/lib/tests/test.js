import VideoAnalytics from '../index';

test('Runs without crashing', () => {
    new VideoAnalytics();
});


// It takes a query selector
test('Takes a query selector', () => {
    const videoAnalyticsInstance = new VideoAnalytics();
    expect(videoAnalyticsInstance).toHaveProperty('selector');
});
