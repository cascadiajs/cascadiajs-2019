# CascadiaJS 2019

## Welcome to the source code behind CascadiaJS 2019!

This site is powered by Begin, an app platform and framework for building serverless applications on AWS.

## Running this site locally

- Initialize the repo: `npm i`
- Start a local dev server: `npm start`
- To lint your code: `npm run lint`
- To run your tests: `npm t`


## Project structure

- `src/http/get-index/`
  - Handles requests to the root view (e.g. `/`) and pages view (e.g. `/why-cascadiajs`)
- `src/http/get-speakers-000speaker/`
  - Handles requests to the speaker view (e.g. `/speakers/aaron-turner`)
- `src/views/`
  - Contains logic and components for all views
- `src/shared/`
  - Contains app utils and dummy speaker data
- `public/`
  - Contains basic static assets for the app (images, styles, etc.)
  - Files within this folder are also deployed to the Begin CDN
- `build/`
  - Contains build script that pulls event information from a private endpoint, enabling scheduled speaker reveals
  - The event data endpoint runs in a separate Begin app and repo that contains a single API endpoint (and static assets hosted on the Begin CDN)


## Begin reference

- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!

