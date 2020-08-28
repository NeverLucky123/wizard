# Setup Wizard

## Project setup
1. ```npm install```
2. Setup wizard uses a proxy server to circumvent Cors in development
    + Make a new directory
    + cd into it
    + ```npm install cors-anywhere ```
    + create index.js
    + paste the following into it 
    ```
               var host = process.env.HOST || 'localhost';
               var port = process.env.PORT || 4000;
               var cors_proxy = require('cors-anywhere');
               cors_proxy.createServer({
                   originWhitelist: [], // Allow all origins
                   requireHeader: ['origin', 'x-requested-with'],
                   removeHeaders: ['cookie', 'cookie2']
               }).listen(port, host, function () {
                   console.log('Running CORS Anywhere on ' + host + ':' + port);
               });
    ```
   + ```node index.js```
   + Cors Anywhere docs: https://www.npmjs.com/package/cors-anywhere
### Development

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
```
npm run build-report //report.html in build dir for build analysis
```
## Current Build Configuration
+ `Console.log()` dropped in production
+ Project to be served at ```/public/assets/wizard2/dist```

## Directory Structure
+ **main.js**
    + Font awesome icons registration
+ **App.vue**
    + Global state contained here
    + Consumes **/data**
+ **/data**
    + Key/values to read/write from backend
    + Methods to interface with backend
+ **/components**
    + Vue components used in wizard
    + **/Pages**
        + Components used by **Page.vue** 
        + **/Inputs** 
            + Reusable Inputs used in Page components

            
## Further Development
+ Changing Advanced/Simple Toggle
    + styled in **Page.vue** under `.pulltab`
+ Adding Tooltips
    + Each Input component has a prop named `tooltip`; Pass any string to display a tooltip
    + Alternatively, v-tooltip has been loaded and styled at **App.vue**
    + v-tooltip docs: https://www.npmjs.com/package/v-tooltip
    + v-tooltip requires popper.js
+ Change Build Configruation/Serve Location
    + Configure in ```vue.config.json```
    + Vue Cli Docs: https://cli.vuejs.org/config/

## Troubleshooting
+ Cors request blocked
    + Backend cannot handle cross-origin requests
    + Follow the setup instructions
    + Check that localhost:4000 is available and cors-anywhere is running
    + **Setup Wizard will only attempt to connect to the proxy if its domain name is not \*.rentrax.io** 
    + https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    
+ CSS/JS/Images not loaded by Laravel in Production
    + Check in **vue.config.js** that publicPath is set correctly for Production
    + https://cli.vuejs.org/config/
    
+ FontAwesome Icons not rendering
    + Register Icons in main.js first
    + https://github.com/FortAwesome/vue-fontawesome     

+ Cannot close wizard
    + The wizard is served through an iframe in the main application
    + When the close button is pressed, a message is passed to the parent of the iframe
    + Check that this is handled properly on the parent side in **/resources/views/admin/layouts/sidebar.blade.php**
    + https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage