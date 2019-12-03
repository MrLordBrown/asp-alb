import workboxBuild from 'workbox-build';

workboxBuild.generateSW({
    swDest: 'sw.js',
    globDirectory: 'public/',
    globPatterns: '**/*.{png,mp3,ico,html,js,webmanifest}'
})
.then(() => {
    console.log(`Generated new service worker.`);
})
.catch((err) => {
    console.error(`Unable to generate a new service worker.`, err);
});
