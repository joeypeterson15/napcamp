# react-project
# napcamp
# Feature list document
# React Components list
# Database Schema
# Frontend routes document
# API routes document
# Redux store tree document

Project name: 
napcamp

![napcamp screenshot2](https://user-images.githubusercontent.com/86427873/137657038-07dbb6ce-f515-47af-a4ff-db32e47bedc9.png)
![napcamp screenshot1](https://user-images.githubusercontent.com/86427873/137657040-3c7028d3-d54a-459d-b730-a9d0ce7befe1.png)
![napcamp screenshot](https://user-images.githubusercontent.com/86427873/137657042-6e0fd7f5-f450-4242-97d3-babb1c484a98.png)

Link to live site: 
https://napcamp.herokuapp.com/

Summary: 
Napcamp is clone of hipcamp. Napcamp offers busy people places to take naps. From public beds in Ikea to curbside free mattresses, you can find any type of napping arrangment that fits your needs. Users can read, create, delete and edit their bookings as well as create, edit and delete their reviews. Users can also search for locations where bookings are available. 

Technologies used: 
react, redux, node.js, sequelize, postgres 

Languages: 
javascript, jsx, css and html

Future goals/to-dos: 
The app's handling of updating and deleting bookings and reviews could be refined so that it fits hipcamps implimentation of these features more. 

Technical Implementation: 
I had to focus a lot on how I was extracting different pieces of data in many different components. I had three database tables and all were highly linked through
foreign keys so the logic got a bit tricky for me at times. 

I enjoyed doing the search bar functionality also. I set a state variable equal to the text being typed in the search bar. On submit, a thunk action takes the 
search text and makes a fetch request for all spots where the location matches the search. The store reducer takes away all spots that don't match the location so that spots with matching locations are only rendered. 

Some other challenges that I went through have to do with stlying and how to precisely align things on a page layout. I have a hard time getting everything exactly where I want it sometimes. 

The last challenge had to do with thinking about slices of state and how to render updated states after fetch requests return a 200 response. Once I got the jist of how the data was flowing from the frontend to the backend and back to the front it got easier. But it took some time to think about the process as a whole. 

![Screen Shot 2021-10-17 at 7 02 34 PM](https://user-images.githubusercontent.com/86427873/137658015-1b9e238f-72f6-4ed2-8a64-04e5ac8b21b8.png)
![Screen Shot 2021-10-17 at 7 04 00 PM](https://user-images.githubusercontent.com/86427873/137658127-dff67cf9-bd55-481e-8d3e-f5fe93fc5e6e.png)
![Screen Shot 2021-10-17 at 7 04 08 PM](https://user-images.githubusercontent.com/86427873/137658129-f47861f4-3d27-454a-956d-4af1ac28c71f.png)
