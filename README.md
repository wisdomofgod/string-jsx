react-template-loader
===

### Installation
Install the webpack loader from [npm](https://www.npmjs.com/package/react-template-loader).
- `npm install --save-dev react-template-loader`

```webpack.config.js
loaders: ['react-template-loader']
```

### What does it use
The `react-template-loader` can transform string to jsx & can read template file and transform file to jsx

### Use method
You can use three method in your code
1, template: `<div></div>`
2, templateUrl: `./src/app/page.html`
3, `<div></div>`

### templateUrl
This path is relative to where you run `webpack`