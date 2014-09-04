# basejump
basejump is a stable starting point for building web apps :rocket:

## Components
- **HTML5 Boilerplate** (boilerplate)
- **Semantic UI** (bootstrap) » _[**not yet**]_
- **Susy Grid** (layout)
- **GruntJS** (build)
  - **JSHint** (linting)
  - **Uglify** (minify)
  - **Sass/Compass** (preprocess)
  - **TargetHTML** (templating)
  - **Notify** (notifications)
- **Atom** (editor)

## How to use
### Install Tools
Npm, Node, Homebrew, Grunt, Ruby, Sass, Compass, Susy + Atom

### Setup Build
    $ sudo npm install -g grunt-cli // install grunt
    $ npm update --save-dev // install node modules
    $ sudo gem install sass // also: compass, susy
    $ vim package.json // update details
    $ grunt // start build

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
