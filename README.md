# This is a project with educational purposes. It's build with React and Softuni practice server.

You can find more about how does this server works in the docs: https://github.com/softuni-practice-server/softuni-practice-server

## How to start the app

After download and unzip the file you will get two main folders - client and server. The setup is easy:

### `node server.js`

Type in the terminal of you VSC 'node server.js' in server directory to fire up the server.
You can sent requests on http://localhost:3030, and track your data in the admin panel on http://localhost:3030/admin.

### `npm start`

Type in the terminal of you VSC 'npm start' in client directory to fire up the client.
You can access the app on http://localhost:3000.

# The App

In this app you will find a bunch of star wars characters. It have implement CRUD operations, so you can see all of them in the catalog,
see details for each of them, like or dislike them, edit or delete also is available, only if you are the creator of this character.

## The architecture of the app

The architecture is follows the react.js patterns. The main App component task is to render and route. All other files are stored in src folder. You can find all of the componenets inn components folder. Every commponent have its own folder with script and css.module file. In context folder you would find two files, one for managing the characters, and one for users. You will find custom hooks in the hooks folder. All of the requests to the server are  stored in the service folder.


## Third party libraries

The only addition library that is used in this app is React Router.
