/* Create an `environment.local.ts` file in the same folder as this file.
 * Copy the contents of this file into your local one.
 * For the Firebase App Configuration
 *   - Goto console.firebase.google.com
 *   - Create a new or use an existing project
 *   - Goto Project Overview and Add a "Web App" call this as you please for example; CodeMortals Development
 *   - This will provide the required settings you can copy into your local environment file.
**/

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCguHYH9TtQhKe7cm65HrIQ6Ns7BaRRDAA',
        authDomain: "test-universidad-a83a6.firebaseapp.com",
        databaseURL: 'databaseURL',
        projectId: "test-universidad-a83a6",
        storageBucket: "test-universidad-a83a6.appspot.com",
        messagingSenderId: "423817347246",
        appId: "1:423817347246:web:67612a898adb9a09236d3f",
        measurementId: "G-R0MB5PEJ28"
    },
};
