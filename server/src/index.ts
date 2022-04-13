import express from "express";

const app = express();
const { PORT = 5000 } = process.env;

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.send( {hello: "index!"} );
} );

// start the express server
app.listen( PORT, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ PORT }` );
} );