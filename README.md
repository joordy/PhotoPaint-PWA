# Progressive Web App

## 🔦 **Description**

In this course I'll learn how to create a Progressive Web Application from scratch. I use client-sideHTML, CSS and Vanilla JavaScript, together with a NodeJS server with the Express framework and express-handlebars templating language. With the usage of these languages, we create a complete application with offline-usages. The data is retrieved from a self-selected API and displayed inside the interface.

---

![Wireframes](https://user-images.githubusercontent.com/48051912/112618251-3a1fdc00-8e26-11eb-88b3-67b009517ca5.png)

## 🌐 **Live link**

Visit: [PhotoPaint.app](https://photopaint.herokuapp.com/)

---

## 🚀 **Features**

### **Build scripts**

<!-- #### **Build** -->

The advantage of using NPM scripts is that a large part of your work can be automated. There are several ways to make use of this. Grunt, Gulp, PostCSS and many other NPM packages can contribute to this. With the NPM scripts you can convert the SCSS to regular CSS, so that the server can read it and send it to the client, bundle Javascript files together so that you can work in modules, and of course all files can be minified.

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Build</summary>

Inside my project I make use of three different build-scripts. The build scripts bundles my code, minify them and store them inside a `dist` folder. The `dist` folder will be used for the client. All my client-side code will be used in here, like my CSS, JavaScript, Service Worker, Manifest & all the assets. With the `prebuild` command I remove the current existing `dist` folder. The `build` command performs the three tasks, and stores all the needed files inside the `dist` folder.

```json
"prebuild": "rimraf ./dist",
"build": "npm-run-all build:static:css build:static:js build:assets",
"build:static:css": "node scripts/build_css.js",
"build:static:js": "webpack --config webpack.config.js",
"build:assets": "node scripts/build_assets.js",
```

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Watch</summary>

To be able to watch all the files in development mode, without using the `build` command every time during the development process, the `watch` command will be able to help you. By using this script, the `chokidar` package will watch all the files on your localhost, and update these files as soon as a change is made. The single `watch` command provides all the code that will be changed inside the JavaScript, CSS or assets folder.

```json
"watch": "run-p watch:*",
"watch:js": "chokidar 'public/js/*.js' --command 'npm run build:static:js'",
"watch:css": "chokidar 'public/css/*.css' && 'public/css/pages/*.css' --command 'npm run build:static:css'",
"watch:assets": "chokidar 'public/**/*.*' --command 'npm run build:assets'"
```

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Dev</summary>

To open the application in development mode, you will need to access the `dev` command. This uses the nodemon package, so when there will be a file changed for the server, this will automatically refresh the server. This makes all changes on the server immediately visible. When the application is deployed, for example to Heroku, the host will provide the `start` script, to start the server when visiting this project.

```json
"start": "node app.js",
"dev": "nodemon app.js",
```

</details>

### **Manifest & Service Worker**

For this project, the goal was to convert our WAFS application into a Progressive Web App. For this it is important that the application can be used offline if necessary. A Service-Worker & Manifest are important here.

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Manifest</summary>

A `manifest.json` is a file that passes information to the browser about your Progressive Web Application, and how it should behave when installed on a desktop or mobile. A `manifest` file must include a name, icon and start path.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Service Worker</summary>

A Service Worker ensures that you as a developer can manage / manipulate **network** traffic, **cache** files, add push **notifications**, and so on.

</details>

### **Performance matters**

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Optimizing with picture source-sets</summary>

To optimize all the images in my web application, I used the picture element of HTML, and added the lazy loading attribute. The advantage of this is that a suitable image is loaded at the correct resolution. For example, it is of little use to load a full-HD image for mobile, if the viewport is only 400px wide.

On the homepage, it had little effect, with a minimum gain of 50ms. However, it has had a lot of effect on the detail page, taking more than 1 full second off the ** load **, saving 5MB in terms of resources retrieved

```html
<picture>
  <source media="(min-width: 760px)" srcset="{{this.src.regular}}" />
  <source media="(min-width: 460px)" srcset="{{this.src.small}}" />
  <img src="{{this.src}}" alt="{{this.alt}}" id="" loading="lazy" />
</picture>
```

**Optimize homepage images with picture sourceset**

![Optimize homepage images with picture sourceset](https://user-images.githubusercontent.com/48051912/112612494-45233e00-8e1f-11eb-9267-450498c718dc.png)

**Optimize detailpage image with picture sourceset**

![Optimize Detail page image  with picture sourceset](https://user-images.githubusercontent.com/48051912/112611345-fd4fe700-8e1d-11eb-853b-bece4897535d.png)

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Optimizing page with gzip</summary>

With the usage of the NPM package [compression](https://www.npmjs.com/package/compression) will it compress all the rendered files from the server. For example my CSS and JS bundles will be compressed and send to the client. It gained small improvements on the home-page, but again a blazing fast render on the detail page.

```js
const compression = require('compression')

app.use(compression())
```

![Optimizing page with gzip](https://user-images.githubusercontent.com/48051912/112613718-b0214480-8e20-11eb-9992-1318c0da3659.png)

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Lighthouse audit optimizing result</summary>

In the end I started to get my score in lighthouse as high as possible. By running different tests and adjusting the feedback given, the score has improved little by little to the below.

![Lighthouse audit](https://user-images.githubusercontent.com/48051912/112616907-9255de80-8e24-11eb-9397-370509f67448.png)

</details>

<!-- #### **Optimizing page with gzip**

With the usage of the NPM package [compression](https://www.npmjs.com/package/compression) will it compress all the rendered files from the server. For example my CSS and JS bundles will be compressed and send to the client.

It gained small improvements on the home-page, but again a blazing fast render on the detail page.

```js
const compression = require('compression')

app.use(compression())
```

![Optimizing page with gzip](https://user-images.githubusercontent.com/48051912/112613718-b0214480-8e20-11eb-9992-1318c0da3659.png)

#### **Lighthouse audit optimizing result**

In the end I started to get my score in lighthouse as high as possible. By running different tests and adjusting the feedback given, the score has improved little by little to the below.

![Lighthouse audit](https://user-images.githubusercontent.com/48051912/112616907-9255de80-8e24-11eb-9397-370509f67448.png) -->

---

## 📦 **NPM Packages**

### **DevDependencies**

- [Chokidar-CLI](https://www.npmjs.com/package/chokidar-cli)
- [ES-Linter](https://www.npmjs.com/package/eslint)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Gulp](https://www.npmjs.com/package/gulp)
- [Gulp Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [Gulp Clean CSS](https://www.npmjs.com/package/gulp-clean-css)
- [Gulp concat](https://www.npmjs.com/package/gulp-concat)
- [Gulp uglify](https://www.npmjs.com/package/gulp-uglify)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [NPM run all](https://www.npmjs.com/package/npm-run-all)
- [RimRaf](https://www.npmjs.com/package/rimraf)
- [Webpack](https://www.npmjs.com/package/webpack)
- [Webpack-CLI](https://www.npmjs.com/package/webpack-cli)

### **Dependencies**

- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Compression](https://www.npmjs.com/package/compression)
- [DotEnv](npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Node-Fetch](https://www.npmjs.com/package/node-fetch)

---

## 💻 **Installation**

### Clone the repository

```bash
  git clone https://github.com/joordy/progressive-web-apps-2021.git
```

### Navigate to the repository and nstall the packages

```bash
  npm install
```

### Start local dev environment

```bash
 npm run dev && npm run watch
```

### Build export for deployment

```bash
 npm run build
```

---

## 📈 **Datasets**

For this project I made use of the Unsplash API for Developers. The API gives access to the world largest open collection of high quality photos, totally free. With using different querys, like searching, popular, etc etc, the user can receive a lot of information about the image. All the available information contains:

### Used endpoints

To make use of my application I've used two differend

- `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=33&order_by=popular`
- `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${SEARCH_QUERY}&per_page=33&order_by=popular `
- `https://api.unsplash.com/photos/1gLdTsX3_70?client_id=${API_KEY}`

### API Response

After requesting the API you will receive an object with a lot of information about the photos. Below is described what all information means.

```js
  image = {
    alt_description:  ,           // Second description
    blur_hash: ,                  // Hashed ID
    categories: ,                 // Image categories
    color: ,                      // Color ?
    created_at: ,                 // Created timestamp
    current_user_collections: [], // The current user collection
    description: ,                // Image description
    downloads: ,                  // Total downloads
    exif: ,                       // Camera Settings
    height: ,                     // Image height in PX
    id: ,                         // Image ID
    liked_by_user: ,              // Liked by user
    likes: ,                      // Total likes
    links: ,                      // Links to download information
    location: ,                   // Location of image
    meta: ,                       // Meta information
    promoted_at: ,                // Promoted timestamp
    related_collections: ,        // Related collections with this image
    sponsorship: ,                // Sponsored image
    tags: ,                       // Image tags
    updated_at: ,                 // Updated timestamp
    urls: {},                     // All image URLS, thumbs, small, regular, full, raw
    user: ,                       // Information about user
    views: ,                      // Total image views
    width: ,                      // Image width in PX
  }
```

---

## 🔍 **Sources**

- npm: express-handlebars. (2021, February 16). Npm. Retrieved March 8, 2021, from https://www.npmjs.com/package/express-handlebars
- Service Workers: an Introduction | Web Fundamentals. (n.d.). Google Developers. Retrieved March 15, 2021, from https://developers.google.com/web/fundamentals/primers/service-workers/
- Bauer, D. (2020, August 19). Why npm Scripts? CSS-Tricks. Retrieved March 22, 2021, from https://css-tricks.com/why-npm-scripts/

  To make APA:

- https://koderplace.com/code-samples/255/how-to-change-the-location-of-views-in-express-handlebars
- https://docs.divio.com/en/latest/how-to/node-express-force-https/
-

Retrieved February 15, 2021, from https

## 🔐 **License**

This is a repository which is licensed as [MIT](https://github.com/joordy/progressive-web-apps-2021/blob/master/LICENSE). Developed by Jordy Fronik ©️ 2021.

---

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
