// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '6376b9a2-f62f-4e44-8264-953793ee35da',
            authority: 'https://tuhngorg.b2clogin.com/tuhngorg.onmicrosoft.com/B2C_1_tuhngo-signupsignin',
            knownAuthorities: ["tuhngorg.b2clogin.com"]
        }
    },
    apiConfig: {
        scopes: ['https://tuhngorg.onmicrosoft.com/dev-api/tasks.read', 'https://tuhngorg.onmicrosoft.com/dev-api/tasks.write'],
        uri: 'https://tuhngorg.onmicrosoft.com/dev-api'
    }
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.