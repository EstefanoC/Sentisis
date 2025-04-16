# Frontend Sentisis Challenge by EstefanoC

[Portfolio](https://estefanoc.github.io/EstefanoC "Portfolio Link")

[Demo live of this code](https://estefanoc.github.io/Sentisis "Demo")

## Steps for the challenge

First I read slow the .md to accomplish the challenge in the best way

Then I run ### `npx react-start-app`

And I decide use the MaterialUI with Redux, React and Typescript

Then I run `npm install @types/react`

and all dependencies of MUI and Redux.

First I create the table and after the function of all components, due to time constraints, I decided to keep it simple and keep the component separation simple, without many folders. I also kept the MUI theme configuration simple. I proceeded to save the data in an array and started with the logic as I understood it. Once I completed the tasks, I decided to create the tests with JEST. For the final step, I decided to upload everything to Github along with Github Pages.

### Important Routes

```text
/
├── public/
│ └── favicon.svg
├── src/
│ ├── components/
│ │ ├── Common
│ │ ├── Table
│ │ ├── UI
│ │ └── Modal
│ ├── store
│ ├── styles
│ ├── types
│ └── utils
├── package.json
├── App.js
└── index.js
```

## Install and configuration

- Steps for install

**In the root of project**

Just run to install all dependencies ( test with v20.11.1 Node )

```bash
  npm install
```

&nbsp;

- Steps for configure

With all dependencies installed, to development environment:

```bash
  npm run start
```

&nbsp;

- Steps for Test

To run test with jest:

```bash
  npm run test
```

## Production

- Steps for Github

**In the root of project**

```bash
  npm run build

  npm run deploy
```

## Tech Stack

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/docs/)
- [React](https://react.dev/)
- [MaterialUI](https://mui.com/material-ui/)
- [Redux](https://redux.js.org/)
