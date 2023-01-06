# Topfenstrudel

This is a proof-of-concept Firefox and Chrome extension that turns Mastodon posts with links to strudel patches on [strudel.tidalcycles.org](https://strudel.tidalcycles.org/) or the string `// #strudel` into [strudel repls](https://github.com/tidalcycles/strudel).

As the web extension API is a web standard, it should probably also work in Chrome.

## To install

Go to [latest release](https://github.com/mortuosplango/topfenstrudel/releases/latest) and download xpi file for Firefox or crx file for Chrome. Firefox should prompt you to install it. If not, try to double click it or drag and drop it onto Firefox. Probably the same in Chrome.

## To run the code

### Firefox 

Use [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) or manually load the extension via [about:debugging](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/#testing-and-debugging-tools).

### Chrome

Follow [these instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked).
