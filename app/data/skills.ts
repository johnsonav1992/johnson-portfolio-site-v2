// Libraries
import crypto from 'crypto';

// Types
import type { Skill } from '~/types/types';

// Assets
import axios from '../assets/axios.svg';
import bootstrap from '../assets/bootstrap.svg';
import css from '../assets/css.svg';
import firebase from '../assets/firebase.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import html from '../assets/html.svg';
import jest from '../assets/jest.svg';
import jquery from '../assets/jquery.svg';
import js from '../assets/js.svg';
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/nodejs.svg';
import php from '../assets/php.svg';
import postgres from '../assets/postgres.svg';
import postman from '../assets/postman.svg';
import python from '../assets/python.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import svelte from '../assets/svelte.svg';
import tailwind from '../assets/tailwind.svg';
import vue from '../assets/vue.svg';

export const skills: Skill[] = [
    {
        id: String( crypto.randomUUID() )
        , name: 'Axios'
        , iconSrc: axios
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Bootstrap'
        , iconSrc: bootstrap
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'CSS'
        , iconSrc: css
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Firebase'
        , iconSrc: firebase
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Git'
        , iconSrc: git
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'GitHub'
        , iconSrc: github
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'HTML'
        , iconSrc: html
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Jest'
        , iconSrc: jest
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'jQuery'
        , iconSrc: jquery
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'JavaScript'
        , iconSrc: js
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'MongoDB'
        , iconSrc: mongodb
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Node.js'
        , iconSrc: nodejs
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'PHP'
        , iconSrc: php
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'PostgreSQL'
        , iconSrc: postgres
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Postman'
        , iconSrc: postman
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Python'
        , iconSrc: python
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'React'
        , iconSrc: react
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Redux'
        , iconSrc: redux
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Svelte'
        , iconSrc: svelte
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Tailwind CSS'
        , iconSrc: tailwind
    }
    , {
        id: String( crypto.randomUUID() )
        , name: 'Vue'
        , iconSrc: vue
    }
    
];