import { Tutorialjs } from './tutorial-js-1.0.0/index.js'

const steps = [
    { 
        element: '#navbar',
        comment: 'Use this navbar to navigate between sections of this website',
        option: {
            position: 'bottom',
            fontsize: '30px'
        }
    },
    { 
        element: '#home-img',
        comment: 'Here\' an example of what you will be able to do with this library',
        option: {
            position: 'right',
            fontsize: '30px',
            gap: 50
        }
    },
    { 
        element: '#first-install-card', 
        comment: 'Installation : download the library from the dist folder and add it to your project', 
        option: {
            position: 'top' ,
            fontsize: '25px'
        }
    },
    { 
        element: '#second-install-card', 
        comment: 'Installation : import the index.js from your javascript files', 
        option: {
            position: 'top',
            fontsize: '25px'
        }
    },
    { 
        element: '#third-install-card', 
        comment: 'Installation : implement your tutorial', 
        option: {
            position: 'top',
            fontsize: '25px'
        }
    }
];

const options = {
    nextButtonLabel: 'Got it!',
    previousButtonLabel: 'What was it?',
    backgroundColor: '#000000',
    backgroundOpacity: 0.9,
    textColor: '#ff6380',
    textOpacity: 0.8
};

const tutorial = new Tutorialjs(steps, options);

document.querySelector('#start-tutorial').addEventListener('click', () => {
    tutorial.start();
});