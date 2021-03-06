// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  firebase: {
    projectId: 'test-7d2bb',
    appId: '1:674362546933:web:9eef92bb7c78b7404d43bc',
    storageBucket: 'test-7d2bb.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAx3OXPAsTSG85b-UzMvt0qsD6mf69nnDY',
    authDomain: 'test-7d2bb.firebaseapp.com',
    messagingSenderId: '674362546933',
    measurementId: 'G-4Q6TKVERQN',
  },
  production: false,
  version: env['npm_package_version'] + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
