## Ways to install create-react-app package :

1. Using npm to install globally `-g`
   `npm` will download the package and will consume storage forever and then install

```bash
npm install -g create-react-app
```

Or 2) Using npx will be like borrowing the package and after installing not consuminng the storage to keep the original package file.

```bash
npx create-react-app my-app
```

Will create a react app of name `my-app`.

---

- Fyi, package.json and package-lock.json has the details of package to be installed in node_modules

- React components will be placed in `src` folder.

---

Check index.html,
WITH THE HELP OF JAVASCRIPT THIS div id="root" WILL BE POPULATED.
Major code of the components will be in src folder

`src` folder :-
index.js - Entry point
App.js - A component (Major thing to edit)

React code of index.js works in a way that whatever changes are made in components say App.js they will be rendered in index.js and sent to root element of index.html

---

In the **project directory**, you can run:

### `npm start` or `npm run start`

This will run the app means `npm start` starts by showing the content of `App.js`!!
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---

---

##Tips :

- If emmet for JSX is not enabled in vs code then,

  - Go to settings by `Ctrl` + `,`
  - Search for emmets
  - In includeLanguages section, add key:value pair as `javascript`: `javascriptreact`
  - Or in settings.json do `"javascript": "javascriptreact"` in `emmet.includeLanguages` section

  This means when .js file extension is there then it will work as javascriptreact.

---

### `App.js`

It imports App.css so can make custom elements in App.js and write their css in App.css
(\* Can directly access any imported file in vs code by pressing `Ctrl` and then clicking on it.)

Imported logo so it gives a warning as it's code is commented. So will comment logo import logo statement too.

---

### `npm install` or `npm i`

It installs all the dependencies required for the react app. The information regarding these dependencies is in the package.json file and with the help of it the installation happens.
