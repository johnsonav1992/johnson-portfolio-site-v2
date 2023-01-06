
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
        id: +crypto.randomUUID()
        , name: 'Axios'
        , iconSrc: axios
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Bootstrap'
        , iconSrc: bootstrap
    }
    , {
        id: +crypto.randomUUID()
        , name: 'CSS'
        , iconSrc: css
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Firebase'
        , iconSrc: firebase
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Git'
        , iconSrc: git
    }
    , {
        id: +crypto.randomUUID()
        , name: 'GitHub'
        , iconSrc: github
    }
    , {
        id: +crypto.randomUUID()
        , name: 'HTML'
        , iconSrc: html
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Jest'
        , iconSrc: jest
    }
    , {
        id: +crypto.randomUUID()
        , name: 'jQuery'
        , iconSrc: jquery
    }
    , {
        id: +crypto.randomUUID()
        , name: 'JavaScript'
        , iconSrc: js
    }
    , {
        id: +crypto.randomUUID()
        , name: 'MongoDB'
        , iconSrc: mongodb
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Node.js'
        , iconSrc: nodejs
    }
    , {
        id: +crypto.randomUUID()
        , name: 'PHP'
        , iconSrc: php
    }
    , {
        id: +crypto.randomUUID()
        , name: 'PostgreSQL'
        , iconSrc: postgres
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Postman'
        , iconSrc: postman
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Python'
        , iconSrc: python
    }
    , {
        id: +crypto.randomUUID()
        , name: 'React'
        , iconSrc: react
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Redux'
        , iconSrc: redux
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Svelte'
        , iconSrc: svelte
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Tailwind CSS'
        , iconSrc: tailwind
    }
    , {
        id: +crypto.randomUUID()
        , name: 'Vue'
        , iconSrc: vue
    }
    
];