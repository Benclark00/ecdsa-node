## ECDSA Node

This project was manipulated and supplied from Alchemy University, In this project I was able to get an understanding of how digital signatures work on a deeper level, additionally I was able to compute a digital signature from the background, when supplied with a primary key and use it to acess the addresses of the users. Although this project taught me a great deal, I understand this practice isn't very secure and would benefit from the use of some measures for both protecting the users private key and also not allowing one user to host the application. I may try to incorporate some of these features in a future implementation when I have gathered a better understanding of how to use signatures, and access the private keys without taking them in from the front end.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.


