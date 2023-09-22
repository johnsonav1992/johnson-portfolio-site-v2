// Libraries
import uuid from 'react-uuid';

// Types
import type { WorkItem } from '~/types/types';

// Assets
import babyBrightImg from '../assets/babybright.png';
import cocktailCentralImg from '../assets/cocktail-central-screenshot.png';
import metronome from '../assets/metronome.png';
import bmi from '../assets/bmi.png';
import gif from '../assets/gif-finder.png';
import sveltefeedback from '../assets/svelte-feedback.png';
import todo from '../assets/todo.png';
import rps from '../assets/rps.png';
import tictactoe from '../assets/react-tictactoe.png';
import wordcounter from '../assets/wordcounter.png';
import calc from '../assets/calc.png';
import tc from '../assets/tungsten-carbide.png';


export const largeProjects: WorkItem[] = [
    {
        id: uuid()
        , name: 'BabyBright'
        , route: 'babybright'
        , imgSrc: babyBrightImg
        , prodLink: 'https://babybright.up.railway.app/'
        , videoLink: 'https://www.youtube.com/watch?v=U2v_vwOJ8nI'
        , technologies: [ 
            'React'
            , 'ReactRouter'
            , 'JavaScript'
            , 'HTML'
            , 'CSS'
            , 'Node.js'
            , 'Express'
            , 'postgreSQL'
            , 'Sequelize'
            , 'JWT'
            , 'bcrypt'
        ]
        , description: `A React application for users to track essential daily baby activities such as feedings, diaper changes and sleep.`
    }
    , {
        id: uuid()
        , name: 'Cocktail Central App'
        , route: 'cocktailcentral'
        , imgSrc: cocktailCentralImg
        , prodLink: 'https://cocktail-central.up.railway.app/'
        , videoLink: 'https://www.youtube.com/watch?v=uLWQw6ePprc'
        , technologies: [ 
            'JavaScript'
            , 'HTML'
            , 'CSS'
            , 'jQuery'
            , 'Node.js'
            , 'Express'
            , 'postgreSQL'
        ]
        , description: `A cocktail recipe app for users to find, save, and organize cocktail recipes for an easy drink-mixing
        experience using the Cocktail DB API.`
    }
];

Number( '1' );

export const smallProjects: WorkItem[] = [
    {
        id: uuid()
        , name: 'Tungsten Carbide VS Code Theme'
        , route: 'tungsten-carbide'
        , imgSrc: tc
        , prodLink: 'https://marketplace.visualstudio.com/items?itemName=johnsonav.tungsten-carbide'
        , technologies: [ 
            'JSON'
            , 'VS Code Theming'
        ]
        , description: `My first theme for VS Code - A sleek dark theme with a pop of neon`
    }
    , {
        id: uuid()
        , name: 'TI-108 Calculator'
        , route: 'calc'
        , imgSrc: calc
        , prodLink: 'https://ti108.netlify.app/'
        , technologies: [ 
            'React'
            , 'HTML'
            , 'CSS'
        ]
        , description: `A custom-built replica of the old-school TI-108 school calculator built with React and CSS`
    }
    , {
        id: uuid()
        , name: 'React Metronome'
        , route: 'reactmetronome'
        , imgSrc: metronome
        , prodLink: 'https://johnson-react-metronome.netlify.app/'
        , technologies: [ 
            'React'
            , 'HTML'
            , 'CSS'
        ]
        , description: `Working metronome built with React`
    }
    , {
        id: uuid()
        , name: 'BMI Calculator'
        , route: 'bmicalculator'
        , imgSrc: bmi
        , prodLink: 'https://hj-bmi-calculator.netlify.app/'
        , technologies: [ 
            'React'
            , 'HTML'
            , 'CSS'
        ]
        , description: `Simple React app. to calculate someone's BMI. Indicates whether a person is overweight or not with conditional rendering.`
    }
    , {
        id: uuid()
        , name: 'Gif Finder App'
        , route: 'giffinder'
        , imgSrc: gif
        , prodLink: 'https://johnson-gif-finder.netlify.app/'
        , technologies: [ 
            'React'
            , 'HTML'
            , 'CSS'
        ]
        , description: `An app that allows a user to search for gifs, powered by the Giphy API.`
    }
    , {
        id: uuid()
        , name: 'React Tic Tac Toe'
        , route: 'tictactoe'
        , imgSrc: tictactoe
        , prodLink: 'https://johnson-react-tictactoe.netlify.app/'
        , technologies: [ 
            'React'
            , 'HTML'
            , 'CSS'
        ]
        , description: `Tic Tac Toe with a React flair!`
    }
    , {
        id: uuid()
        , name: 'Word Counter App'
        , route: 'wordcounter'
        , imgSrc: wordcounter
        , prodLink: 'https://jm-word-counter-app.netlify.app'
        , technologies: [ 
            'React'
            , 'HTML'
            , 'CSS'
        ]
        , description: `A simple react app where a user can copy and paste a block of text and count receive the word count.`
    }
    , {
        id: uuid()
        , name: 'Svelte Feedback App'
        , route: 'sveltefeedback'
        , imgSrc: sveltefeedback
        , prodLink: 'https://johnson-svelte-feedback.netlify.app/'
        , technologies: [ 
            'Svelte'
            , 'HTML'
            , 'CSS'
        ]
        , description: `A simple feedback posting app developed with Svelte.`
    }
    , {
        id: uuid()
        , name: 'To-Do List App'
        , route: 'todo'
        , imgSrc: todo
        , prodLink: 'https://johnson-todoapp.netlify.app/'
        , technologies: [ 
            'JavaScript'
            , 'HTML'
            , 'CSS'
        ]
        , description: `A useful to-do list application that allows users to add and delete to-do items. Each item is saved in local storage in the browser to allow the user to return later and pull up their saved list. `
    }
    , {
        id: uuid()
        , name: 'Rock, Paper, Scissors'
        , route: 'rps'
        , imgSrc: rps
        , prodLink: 'https://johnson-rockpaperscissors.netlify.app/'
        , technologies: [ 
            'JavaScript'
            , 'HTML'
            , 'CSS'
        ]
        , description: `A classic rock, paper, scissors game where a user can play the computer in three-round matches. The game resets after someone has one so it can be played again. `
    }
];