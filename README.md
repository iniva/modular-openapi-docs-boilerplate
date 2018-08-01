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

# Remove git related info (you might need sudo)
rm -R .git
```

## Generate the documentation
+ Add the `refs-compiler` and `debug` dev dependencies.
  ```
  # Using Yarn
  yarn add refs-compiler debug -D

  # Using NPM
  npm i refs-compiler debug --save-dev
  ```
  > **debug** is not really necessary. If you want, just edit `builder.js` and replace the _logger_ function with your own implementation. A `console.log` will be enough.
+ Add a `build:docs` script
  ```javascript
  "scripts": {
    "build:docs": "DEBUG=docs* node docs/builder.js"
  }
  ```
+ Run the `build:docs` script. This will generate a file named `openapi.yaml` inside the `docs` folder

## Verifying the output
Go to [Swagger Editor](http://editor.swagger.io/) and paste the contents of `openapi.yaml` and check everything is as you expected. Make adjustments if necessary.

# Documentation
You have some alternatives to view the documentation. All of them assumes you already have a local copy of this repository.

### Webstorm
Go to `path/to/docs` and open the context menu (secondary click) over `index.html`. Select the option **Open in browser** and select your preferred one.

### Local server
In your terminal go to `path/to/docs` and run the following command:
+ **NodeJS (using npx)**: Assuming you have NodeJS + NPM (>= 5.2) installed.
    ```bash
    npx http-server -p 9090
    ```
+ **PHP**: Assuming you have PHP (>= 5.6) installed.
    ```bash
    php -S 0.0.0.0:9090
    ```
+ **Python**: Assuming you have Python (>= 2.7) installed.
    ```bash
    python -m SimpleHTTPServer 9090
    ```
+ Now open your [browser](http://localhost:9090)
