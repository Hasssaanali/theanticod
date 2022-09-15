const app = require("./app");

// const dotenv = require("dotenv");



// Handling Uncaught Exception:

process.on("uncaughtException", (err)=>{
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to unhandled exception`);
    process.exit(1);
})


// Config:


//Connecting to database:

const server = app.listen(4000, ()=>{
    console.log(`Server is working on port http:localhost:${4000}`);
})



// Unhandled Promise Rejection:

process.on("unhandledRejection", (err)=>{
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    })

})