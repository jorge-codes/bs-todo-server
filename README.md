# TO-DO Server

## How to run

### Local

1. Go to the root directory
2. Run `npm install` to install the npm packages required via `package.json`
3. Run `sails lift` and then select option `1` or `2`, according to your case
4. Enter `Ctrl + C` to finish the process

This method uses a local file as a DB, so it's a non-intrusive process.

### Remote

1. Make sure to have Node and NPM installed on your server
2. Make sure to have a MySql data base ready with the attributes models' attributes
3. You can use the following file in the root directory to expedite the process: `todo_db_structure.sql`
4. Create an environment variable named `JAWSDB_URL` and assign the mysql connection string
5. Let the server run the regular `npm start` process, and make sure `NODE_ENV` environment variable value is `production`

## Models

**User**

- id
- name
- createdAt (Sails default)
- updatedAt (Sails default)

**Task**

- id
- description
- state
- userId (using Sails naming convention)
- createdAt (Sails default)
- updatedAt (Sails default)

a [Sails v1](https://sailsjs.com) application

### Version info

This app was originally generated on Fri Feb 05 2021 23:08:14 GMT-0300 (Chile Summer Time) using Sails v1.2.3.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->

<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->
