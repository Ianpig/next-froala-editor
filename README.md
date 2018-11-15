# next-froala-editor
it use next.js build with froala editor

## Install npm modules
```yarn```
or
```npm i```

## build next
```
yarn build

```
or
```
npm run build
```

## start server
```
yarn start
```

```
npm start
```

## froala config
Block server side render
```
...
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/third_party/embedly.min.js';


// That's where the magic happens 
const FroalaEditorInput = dynamic(import('react-froala-wysiwyg'), {
  ssr: false
});

class EditorComponent extends React.Component {
...

```

next.config.js

make it can use jquery
```
const webpack = require('webpack');

/* Without CSS Modules, with PostCSS */
module.exports = withCSS({
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery',
      })
    )
    return config
  }
})

```
