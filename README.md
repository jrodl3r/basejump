# basejump [v1.0.1]
basejump is a stable starting point for building web apps :rocket:

## Components
- **HTML5 Boilerplate** (boilerplate)
- **Susy** (layout)
- **GruntJS** (build)
  - **JSHint** (lint)
  - **Uglify** (minify)
  - **Sass + Compass** (preprocess)
  - **TargetHTML** (template)
  - **Notify** (update)
- **Atom** (edit)

## How to use
### Install Tools
Npm, Node, Homebrew, Grunt, Ruby, Sass, Compass, Susy + Atom

### Setup Build
    $ sudo npm install -g grunt-cli
    $ npm update --save-dev
    $ sudo gem install sass // also: compass, susy
    $ vim package.json
    $ atom .
    $ grunt

### Development
    $ grunt dev

### CSS
    $ grunt css

### JS
    $ grunt js

### Watch
    $ grunt watch

### Release
    $ grunt dist

<br>
**Cheers** :beers:
