// Types
import type { Skill } from '~/types/types';

// Libraries
import uuid from 'react-uuid';

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
import ts from '../assets/ts.svg';
import remix from '../assets/remix.svg';
import prisma from '../assets/prisma.svg';
import mui from '../assets/mui.svg';
import graphql from '../assets/graphql.svg';
import hasura from '../assets/hasura.svg';
import apollo from '../assets/apollo.svg';
import cypress from '../assets/cypress.svg';
import laravel from '../assets/laravel.svg';
import angular from '../assets/angular.svg';
import rust from '../assets/rust.png';
import csharp from '../assets/c-sharp.svg';
import dotnet from '../assets/dot-net.svg';
import nextjs from '../assets/nextjs.png';
import gitlab from '../assets/gitlab.svg';

export const skills: Skill[] = [
    {
        id: uuid()
        , name: 'React'
        , iconSrc: react
    }
    , {
        id: uuid()
        , name: 'TypeScript'
        , iconSrc: ts
    }
    , {
        id: uuid()
        , name: 'Angular'
        , iconSrc: angular
    }
    , {
        id: uuid()
        , name: 'Next.js'
        , iconSrc: nextjs
    }
    , {
        id: uuid()
        , name: 'Remix'
        , iconSrc: remix
    }
    , {
        id: uuid()
        , name: 'MUI'
        , iconSrc: mui
    }
    , {
        id: uuid()
        , name: 'HTML'
        , iconSrc: html
    }
    , {
        id: uuid()
        , name: 'CSS'
        , iconSrc: css
    }
    , {
        id: uuid()
        , name: 'JavaScript'
        , iconSrc: js
    }
    , {
        id: uuid()
        , name: 'Node.js'
        , iconSrc: nodejs
    }
    , {
        id: uuid()
        , name: 'Rust'
        , iconSrc: rust
    }
    , {
        id: uuid()
        , name: 'C#'
        , iconSrc: csharp
    }
    , {
        id: uuid()
        , name: '.NET'
        , iconSrc: dotnet
    }
    , {
        id: uuid()
        , name: 'Svelte'
        , iconSrc: svelte
    }
    , {
        id: uuid()
        , name: 'Vue'
        , iconSrc: vue
    }
    , {
        id: uuid()
        , name: 'MongoDB'
        , iconSrc: mongodb
    }
    , {
        id: uuid()
        , name: 'PostgreSQL'
        , iconSrc: postgres
    }
    , {
        id: uuid()
        , name: 'Firebase'
        , iconSrc: firebase
    }
    , {
        id: uuid()
        , name: 'GraphQL'
        , iconSrc: graphql
    }
    , {
        id: uuid()
        , name: 'Apollo'
        , iconSrc: apollo
    }
    , {
        id: uuid()
        , name: 'Hasura'
        , iconSrc: hasura
    }
    , {
        id: uuid()
        , name: 'Prisma'
        , iconSrc: prisma
    }
    , {
        id: uuid()
        , name: 'Postman'
        , iconSrc: postman
    }
    , {
        id: uuid()
        , name: 'Axios'
        , iconSrc: axios
    }
    , {
        id: uuid()
        , name: 'PHP'
        , iconSrc: php
    }
    , {
        id: uuid()
        , name: 'Laravel'
        , iconSrc: laravel
    }
    , {
        id: uuid()
        , name: 'Python'
        , iconSrc: python
    }
    , {
        id: uuid()
        , name: 'Bootstrap'
        , iconSrc: bootstrap
    }
    , {
        id: uuid()
        , name: 'Tailwind CSS'
        , iconSrc: tailwind
    }
    , {
        id: uuid()
        , name: 'jQuery'
        , iconSrc: jquery
    }
    , {
        id: uuid()
        , name: 'Git'
        , iconSrc: git
    }
    , {
        id: uuid()
        , name: 'GitHub'
        , iconSrc: github
    }
    , {
        id: uuid()
        , name: 'GitLab'
        , iconSrc: gitlab
    }
    , {
        id: uuid()
        , name: 'Redux'
        , iconSrc: redux
    }
    , {
        id: uuid()
        , name: 'Cypress'
        , iconSrc: cypress
    }
    , {
        id: uuid()
        , name: 'Jest'
        , iconSrc: jest
    }
];