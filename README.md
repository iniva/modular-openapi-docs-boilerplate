# Modular Openapi Docs Boilerplate
Modular approach for Open API documentation in NodeJS

## Installation

### Cloning
+ Clone this repo in another location and copy the `docs` folder

### Downloading
+ Same as cloning, but... downloading

### Fancy Cloning
Feeling lucky, punk? OK, go to your project root and do the following:
```bash
# Clone this repo into a 'docs' folder
git clone --depth 1 https://github.com/iniva/modular-openapi-docs-boilerplate docs

# Switch to 'docs' folder
cd docs

# Remove everything except the documentation structure
git filter-branch --prune-empty --subdirectory-filter docs HEAD
```

## Generate the documentation
+ Add the `refs` and `debug` dev dependencies.
  > **debug** is not really necessary. If you want, just edit `builder.js` and replace the _logger_ function with your own implementation. A `console.log` will be enough.
+ Add the `build:docs` script that's inside `package.json`
+ Run the `build:docs` script. This will generate a file named `openapi.yaml` inside the `docs` folder

## Verifying the output
Go to [Swagger Editor](http://editor.swagger.io/) and paste the contents of `openapi.yaml` and check everything is as you expected. Make adjustments if necessary.
