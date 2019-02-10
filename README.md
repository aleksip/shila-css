# shila-css

Sass-based CSS framework.

Used in:

- [Shila theme for Drupal 8](https://github.com/aleksip/shila-drupal-theme)
- [Pattern Lab Project](https://github.com/aleksip/pattern-lab-project)


## Installation

```bash
$ npm install shila-css
```


## Usage

The basic idea is to import shila-css Sass partials from `node_modules` into your own project. shila-css is split into partials so you can only import those parts of the framework you actually want to use.

The files containing the word `example` can be used as a template, and you can copy them to your project.

If your project has more than one master Sass file (compiled to a corresponding CSS file) all of them can safely import all shila-css `settings` and `tools` partials, which do not generate any CSS. These global imports can be put into a separate `_imports.scss` file, as has been done in the `example` files.


## Documentation

The source code contains documentation in [KSS](https://warpspire.com/kss/) syntax. Generated HTML documentation can be found in the `docs` folder and [online](https://aleksip.github.io/shila-css/).


## Acknowledgements

shila-css has been influenced by several projects, including [inuitcss](https://github.com/inuitcss/inuitcss), [Bourbon](https://www.bourbon.io/), [Bitters](https://bitters.bourbon.io/) and [Compass](http://compass-style.org/).
