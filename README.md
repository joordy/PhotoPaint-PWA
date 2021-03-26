# Progressive Web App

## 🔦 **Description**

In this course I'll learn how to create a Progressive Web Application from scratch. I use client-sideHTML, CSS and Vanilla JavaScript, together with a NodeJS server with the Express framework and express-handlebars templating language. With the usage of these languages, we create a complete application with offline-usages. The data is retrieved from a self-selected API and displayed inside the interface.

---

## 🌐 **Live link**

Visit: [PhotoPaint.app](https://photopaint.herokuapp.com/)

---

## 🚀 **Features**

### **Build scripts**

#### **Build**

```json
    "prebuild": "rimraf ./dist",
    "build": "npm-run-all build:static:css build:static:js build:assets",
    "build:static:css": "node scripts/build_css.js",
    "build:static:js": "webpack --config webpack.config.js",
    "build:assets": "node scripts/build_assets.js",
```

#### **Watch**

```json
    "watch": "run-p watch:*",
    "watch:js": "chokidar 'public/js/*.js' --command 'npm run build:static:js'",
    "watch:css": "chokidar 'public/css/*.css' && 'public/css/pages/*.css' --command 'npm run build:static:css'",
    "watch:assets": "chokidar 'public/**/*.*' --command 'npm run build:assets'"
```

#### **Dev**

```json
    "dev": "nodemon app.js",
```

### **Manifest & Service Worker**

### **Performance matters**

#### **Optimize homepage images with picture sourceset**

![Optimize homepage images with picture sourceset](https://user-images.githubusercontent.com/48051912/112612494-45233e00-8e1f-11eb-9267-450498c718dc.png)

#### **Optimize detailpage image with picture sourceset**

![Optimize Detail page image  with picture sourceset](https://user-images.githubusercontent.com/48051912/112611345-fd4fe700-8e1d-11eb-853b-bece4897535d.png)

#### **Optimizing page with gzip**

![Optimizing page with gzip](https://user-images.githubusercontent.com/48051912/112613718-b0214480-8e20-11eb-9992-1318c0da3659.png)

#### **Lighthouse audit optimizing result**

![Lighthouse audit](https://user-images.githubusercontent.com/48051912/112614365-77ce3600-8e21-11eb-8ca8-4a4234b8341d.png)

#### **Lighthouse final result**

lorem

---

## 📦 **NPM Packages**

### **DevDependencies**

<details>
  <summary> Chokidar cli</summary>
  Hello
</details>
<details>
  <summary> ES-Lint</summary>
  Hello
</details>
<details>
  <summary> Gulp</summary>
  Hello
</details>
<details>
  <summary> Gulp autoprefixer</summary>
  Hello
</details>
<details>
  <summary> Gulp Clean CSS</summary>
  Hello
</details>
<details>
  <summary> Gulp Concat</summary>
  Hello
</details>
<details>
  <summary> Gulp Uglify</summary>
  Hello
</details>
<details>
  <summary> Nodemon</summary>
  Hello
</details>
<details>
  <summary> Npm Run All</summary>
  Hello
</details>
<details>
  <summary> Prettier</summary>
  Hello
</details>
<details>
  <summary> RimRaf</summary>
  Hello
</details>
<details>
  <summary> Webpack</summary>
  Hello
</details>
<details>
  <summary> Webpack-cli</summary>
  Hello
</details>

### **Dependencies**

<details>
  <summary> Body Parser</summary>
  Hello
</details>
<details>
  <summary> Compression</summary>
  Hello
</details>
<details>
  <summary> DotEnv </summary>
  Hello
</details>
<details>
  <summary> Express</summary>
  Hello
</details>
<details>
  <summary> Express Handlebars</summary>
  Hello
</details>
<details>
  <summary> Node Fetch </summary>
  Hello
</details>

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
 // npm run dev && npm run watch
```

### Build export

```bash
 // npm run build
```

---

## 🔍 **Sources**

- npm: express-handlebars. (2021, February 16). Npm. https://www.npmjs.com/package/express-handlebars

To make APA:

- https://koderplace.com/code-samples/255/how-to-change-the-location-of-views-in-express-handlebars

---

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
