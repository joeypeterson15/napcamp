# react-project
# napcamp
# Feature list document
# React Components list
# Database Schema
# Frontend routes document
# API routes document
# Redux store tree document

Project name: napcamp

Link to live site: https://napcamp.herokuapp.com/

Summary: Napcamp is clone of hipcamp. Napcamp offers busy people places to take naps. From public beds in Ikea to curbside 
free mattresses, you can find any type of napping arrangment that fits your needs. Users can read, create, delete and edit their bookings as well as create, edit and delete their reviews. Users can also search for locations where bookings are available. 

List of techs/languages/plugins/APIs used

Languages: javascript, jsx, css and html

techs: react, redux, node.js, sequelize, postgres 

To-dos: The app's handling of updating and deleting bookings and reviews could be refined so that it fits hipcamps implimentation of these features more. 

technical implementation: 
I had to focus a lot on how I was extracting different pieces of data in many different components. I had three database tables and all were highly linked through
foreign keys so the logic got a bit tricky for me at times. 

I enjoyed doing the search bar functionality also. I set a state variable equal to the text being typed in the search bar. On submit, a thunk action takes the 
search text and makes a fetch request for all spots where the location matches the search. The store reducer takes away all spots that don't match the location so that spots with matching locations are only rendered. 

Some other challenges that I went through have to do with stlying and how to precisely align things on a page layout. I have a hard time getting everything exactly where I want it sometimes. 

The last challenge had to do with thinking about slices of state and how to render updated states after fetch requests return a 200 response. Once I got the jist of how the data was flowing from the frontend to the backend and back to the front it got easier. But it took some time to think about the process as a whole. 

![napcamp screenshot2](https://user-images.githubusercontent.com/86427873/137657038-07dbb6ce-f515-47af-a4ff-db32e47bedc9.png)
![napcamp screenshot1](https://user-images.githubusercontent.com/86427873/137657040-3c7028d3-d54a-459d-b730-a9d0ce7befe1.png)
![napcamp screenshot](https://user-images.githubusercontent.com/86427873/137657042-6e0fd7f5-f450-4242-97d3-babb1c484a98.png)
