# react-pdf-js-infinite-slugs
---
[![npm version](https://badge.fury.io/js/react-pdf-js-infinite-slugs.svg)](https://badge.fury.io/js/react-pdf-js-infinite-slugs)

`react-pdf-js-infinite-slugs` provides a component for rendering PDF documents using [PDF.js](http://mozilla.github.io/pdf.js/). Written for React 15 and ES2015 using the Airbnb style guide. Include onclick callbacks to specific locations. 

---

Usage
-----

Install with `npm install react-pdf-js-infinite-slugs`

Use in your app

```js
import React, { Component } from 'react';
import PDF from 'react-pdf-js-infinite-slugs';

export default class Viewer extends Component {

  render() {
    return (
      <div>
        <PDF 
          file="somefile.pdf" 
          scale={1.5} 
          onClick={(e,coordinates) => {
            console.log(coordinates);
          }}
        />
      </div>
    )
  }
}
```


## Credit

This project is a fork of [react-pdf-js-infinite](https://github.com/McRipper/react-pdf-js-infinite) which is a fork of [react-pdf-js](https://github.com/mikecousins/react-pdf-js) which is a fork of [react-pdfjs](https://github.com/erikras/react-pdfjs) which itself was a port of [react-pdf](https://github.com/nnarhinen/react-pdf), so thank you to
the original authors.
