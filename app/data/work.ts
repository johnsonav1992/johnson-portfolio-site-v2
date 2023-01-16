// Libraries
import uuid from 'react-uuid';

// Types
import type { WorkItem } from '~/types/types';

// Assets
import babyBrightImg from '../assets/babybright.png';
import cocktailCentralImg from '../assets/cocktail-central-screenshot.png';
import mjfc from '../assets/mjfc.png';
import metronome from '../assets/metronome.png';
import bmi from '../assets/bmi.png';


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
    , {
        id: uuid()
        , name: 'M. J. Financial Coaching'
        , route: 'mjfc'
        , imgSrc: mjfc
        , prodLink: 'https://www.madisonjohnsonfc.com/'
        , technologies: [ 
            'HTML'
            , 'CSS'
        ]
        , description: `Website for Madison Johnson's Financial Coaching business.`
    }
];

export const smallProjects: WorkItem[] = [
    {
        id: uuid()
        , name: 'React Metronome'
        , route: 'reactmetronome'
        , imgSrc: metronome
        , prodLink: ''
        , technologies: [ 
            'HTML'
            , 'CSS'
        ]
        , description: `Working metronome built with React`
    }
    , {
        id: uuid()
        , name: 'BMI Calculator'
        , route: 'bmicalculator'
        , imgSrc: bmi
        , prodLink: ''
        , technologies: [ 
            'React'
            , 'HTML'
            , 'CSS'
        ]
        , description: `Simple React app. to calculate someone's BMI. Indicates whether a person is overweight or not with conditional rendering.`
    }
];