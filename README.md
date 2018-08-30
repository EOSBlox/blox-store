# \<blox-store\>

Get, set and delete JSON data from local storage

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install blox-store

```
$ npm install blox-store
```

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

## Import

```
$ import 'blox-store';
```

## Basic Use

```html
<blox-store
    key="myApp"
    value="{'name': 'Will'}"
    operation="set">
</blox-store>
```

## Javascript Use

```html
<blox-store id="bloxStore"></blox-store>
<script>
    this.$.bloxStore.set('myApp', {'name': 'Will'})
    .then((hash) => {
        // Do Something
    })
    .catch((err) => {
        // Do Something
    })
</script>
```