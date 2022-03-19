This is the reppo for the scheduler app built in nodejs using Express framework.

To start the Project Please follow the instructions bellow:

write these two commands in the terminal
1.) npm install
2.) npm run server

API:
1.) Schedule a task(POST api) : http://localhost:3000/schedule

we can use the postman to hit this api and we can give the data in params
Format : {
text : textone,
dateTime : 2022-03-18 22:43:00.000
}

After giving this POST request in the terminal we can see that in the terminal at that particular time with a time delay of some second based on text length script runs automatically and this will return a log in console which is the text reversed.

NPM packages used:
1.)Express
2.)Mongoose
3.)node-schedule
