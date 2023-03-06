import { Tutorialjs } from './tutorial-js-1.0.0/index.js'

const steps = [
    { element: '#navbar', comment: 'Use this navbar to navigate between sections of this website', position: 'bottom' },
    { element: '#home-text', comment: 'Read carefully this section to discover the usefulness of the library', position: 'left' },
    { element: '#home-img', comment: 'Illustration to demonstrate the use of the library', position: 'right' },
    { element: '#start-tutorial', comment: 'Use (again) this button to start the tutorial', position: 'top' }
];

const options = {
    nextButtonLabel: 'Get me to the next hint ;)',
    previousButtonLabel: 'Wait what ?',
    backgroundColor: '#000000',
    backgroundOpacity: 0.8,
    textColor: '#FF0000',
    textOpacity: 0.8
};

const tutorial = new Tutorialjs(steps, options);

document.querySelector('#start-tutorial').addEventListener('click', () => {
    console.log("test");
    tutorial.start();
});