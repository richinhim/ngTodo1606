// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // HOST: 'http://localhost:8080',
  HOST: 'http://www.javabrain.kr:8080',
  firebase: {
    apiKey: "AIzaSyDt5uDPuoz3NqL7opTzazLR3hAi9lctA04",
    authDomain: "aronproject-b146a.firebaseapp.com",
    databaseURL: "https://aronproject-b146a.firebaseio.com",
    projectId: "aronproject-b146a",
    storageBucket: "",
    messagingSenderId: "492753882645"
  }
};
