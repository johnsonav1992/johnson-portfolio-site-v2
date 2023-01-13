// Libraries
import uuid from 'react-uuid';

// Types
import type { WorkItem } from '~/types/types';

// Assets
import cocktailCentralImg from '../assets/cocktail-central-screenshot.png';

export const workItems: WorkItem[] = [
    {
        id: uuid()
        , name: 'Cocktail Central App'
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