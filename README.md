# How to run the project

Chrome extensions are composed of different pieces working together. The project is setup to have different project folder for each.

- background
- content
- popup

All commands are set up in /popup, where we watch each project during development or run build in each project to produce /dist folder. /dist is the final folder that we can publish or load unpacked as chrome extension.

## Development

Run

```
npm run watch
```

### Commands

Watch

```
watch // Watch parallel all project folders

watch:background // watches for any changes in background/src

watch:popup // watches for any changes in /src (remember we are inside popup)

// If we are gonna add a project for content, add it as watch:content
```

Build - development

```
build-background // builds the src for background project

// If we are gonna add a project for content, add it as build-content

build:development // builds the popup project. Overrided the webpack config too to produce config only for development that's why env is not specified for the background/content commands

postbuild:development // for every change in popup cra, it deletes the whole /dist folder, so for postbuild:development, run build-background (or build-content when available)
```

Build - production

```
build:production // will build the project use production configurations

postbuild:production // Run build-background (or build-content when available) too
```

Others

```
start - just run the app in localhost:3000
```

## Deployment

Run

```
npm run build:production
```
