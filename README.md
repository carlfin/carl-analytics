![alt text](https://badgen.net/npm/v/@carl/analytics "Latest version")
![alt text](https://badgen.net/travis/carlfin/carl-analytics "Build status")
![alt text](https://badgen.net/coveralls/c/github/carlfin/carl-analytics "Code coverage")
![alt text](https://badgen.net/npm/license/rooter "MIT License")

# @carl/analytics

A library containing analytics tools for Carl.

## Installation

`npm install @carl/analytics`

## API

### createId()

`import { createId } from '@carl/analytics;'`

A function that returns a 128 bit id. Any existing id found will be persisted. If a Google Analytics (_ga) value is found then the id will be generated using that value as a base.

### KEY - `carlId`

`import { KEY } from '@carl/analytics;'`

This is the value that is used to store the generated id. 