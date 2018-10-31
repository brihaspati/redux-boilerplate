
## To run the app

yarn start or npm start


## To run JSON DEV server
yarn dev-server or npm run dev-server


## To deploy
npm run build

<!-- Add below line to package.json instead of existing one -->
"start": "json-server --static ./build db.json",



