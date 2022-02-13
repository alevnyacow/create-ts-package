# create-ts-package

Simple scaffolder for TypeScript packages. You get a package which is ready to be used as local module or published to NPM.

## Usage

Use this package via *npx* and pass your package name as a parameter. Example:

```
npx @alevnyacow/create-ts-package my-awesome-package
```

## Scaffolded package overview

This scaffolder will generate you a package with configured

- typescript
- jest (with TS support)
- eslint
- prettier
- .npmignore
- .gitignore

Also created package comes with some preset NPM scripts

- *build* - creates transpiled JS scripts from TS sources
- *execute* - runs *build* script and then executes your transpiled "index.ts" file from "sources" folder
- *check* - checks your source code with linter and runs tests
- *format* - formats your source code in "sources" folder with prettier

