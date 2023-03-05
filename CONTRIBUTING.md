# Welcome to Video Timeline contributing guide.

Thank you for investing your time in contributing to our project!<br />
Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.


### Getting started

1. Fork the repository.
2. Install or update to _Node.js_ at the version specified in `.nvmrc`. I would like recommended to use [Node Version Manager](https://github.com/nvm-sh/nvm).
3. Create a working branch and start with your changes!

### Make changes

1. You have to make `npm link` in this repository.
2. Install a view environment where you might to development the project. It must be something use web-server and allow to import the project in realtime. I used [Create react app](https://github.com/facebook/create-react-app) for example.
3. There is need to install the project in your development environment with command `npm link video-timeline`. Then you need to import files:
   ```
   import VideoTimeline from 'video-timeline';
   import 'video-timeline/dist/video-timeline.css';
   ```
4. Next step is to use command `npm run dev` for locally development. It's start [webpack](https://webpack.js.org/) watch and recompile when something changed.

In order to have your pull request merged successfully, keep in mind the following key points:

- You can to change only `src` folder. There is no need to build.
- Every change you make has to pass in [unit tests](#testing). If it's a new feature new unit tests need to be added.
- [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are important to follow their guidelines. No disabling their rules is allowed unless there is a legit reason to do it.

### Testing
For testing use command `npm run test` it's activated [jest](https://jestjs.io/).

### Commit your update
We used [commitizen](https://github.com/commitizen/cz-cli) for commit changes.<br/> Commit the changes once you are happy with them with command `npm run commit`. Check the examples and the conceptual docs to get the gist of it.
