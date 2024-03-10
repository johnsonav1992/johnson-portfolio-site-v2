// Libraries
import uuid from 'react-uuid';

// Types
import type { WorkItem } from '~/types/types';

// Assets
import babyBrightImg from '../assets/babybright.png';
import cocktailCentralImg from '../assets/cocktail-central-screenshot.png';
import metronome from '../assets/metronome.png';
import gif from '../assets/gif-finder.png';
import rps from '../assets/rps.png';
import tictactoe from '../assets/react-tictactoe.png';
import calc from '../assets/calc.png';
import tc from '../assets/tungsten-carbide.png';
import memory from '../assets/memory.png';
import battleship from '../assets/battleship.png';


export const largeProjects: WorkItem[] = [
    {
        id: uuid()
        , name: 'BabyBright'
        , route: 'babybright'
        , imgSrc: babyBrightImg
        , videoLink: 'https://www.youtube.com/watch?v=U2v_vwOJ8nI'
        , repoLink: 'https://github.com/johnsonav1992/baby-app'
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

export const smallProjects: WorkItem[] = [
    {
        id: uuid()
        , name: 'Battleship'
        , route: 'battleship'
        , imgSrc: battleship
        , repoLink: 'https://github.com/johnsonav1992/ts-battleship'
        , technologies: [ 
            'React'
            , 'TypeScript'
            , 'MUI Joy'
            , 'Jotai'
        ]
        , description: `A fully-fledged battleship game with a computer AI that can potentially beat human players!`
    }
    , {
        id: uuid()
        , name: 'Memory Fun'
        , route: 'memory-fun'
        , imgSrc: memory
        , prodLink: 'https://memoryfun.netlify.app'
        , technologies: [ 
            'React'
            , 'TypeScript'
            , 'MUI Joy'
            , 'Jotai'
        ]
        , description: `A fun memory game for one or two players. Can choose between different card sets!`
    }
    , {
        id: uuid()
        , name: 'Tungsten Carbide VSC Theme'
        , route: 'tungsten-carbide'
        , imgSrc: tc
        , prodLink: 'https://marketplace.visualstudio.com/items?itemName=johnsonav.tungsten-carbide'
        , repoLink: 'https://github.com/johnsonav1992/tungsten-carbide-vscode-theme'
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