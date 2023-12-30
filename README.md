# WORKOUT TRACKER

This project has been created based on the ***MERN*** stack. (MongoDB, Express, React, Nodejs)

It is structured in a backend and frontend folder with separate npm project configs.

Steps to setup the app:

 - Create a database in Mongodb Atlas cloud provider
 - Set the config on your .env file: namely the port of the express server and the mongoDB URI.
 - Run npm install on the backend folder.
 - Run npm install on the frontend folder.

The frontend has been bootstraped with create-react-app and when running `npm start` will run the dev server at localhost:3000

To run the backend part, execute `npm run start` on the backend folder. It will connect to the mongodb configured instance (hosted on Mongodb's cloud Atlas) and listen to requests in the server setup via express on the port specified on the .env file. Alternatively, if nodemon is installed, `npm run dev` will do the same and restart the server when changes detected.

** Keep in mind that if the port chosen for the backend server is not 4000, the proxy property set on the package.json file should be modified accordingly.

The MongoDB document schema is defined as follows:
```
    {
        title: {
            type: String,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        load: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
```

And here is a sample of the json to be used in the REST api requests to create a new workout:
```json
{
    "title": "Bench press",
    "load": 25,
    "reps": 40
}
```

