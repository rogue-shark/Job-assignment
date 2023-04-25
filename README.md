# TABLE SORT | Assignment

This project is a full-stack web application built with Node.js, Express, MongoDB, and React. The purpose of the application is to fetch data from a MongoDB database and display it in a table format on the front-end -- based on certain criteria data is sorted.

## Getting Started

To run this project locally, you'll need to have Node.js and MongoDB installed on your machine.

1. Clone the repository
2. In the root directory, run `npm install`
3. In the server directory, create a `.env` file with the following environment variables:
   - `MONGODB_URI`: the URL for your MongoDB database
   - `PORT`: the port you want the server to run on (default is 8080)
4. In the client directory, create a `.env` file with the following environment variable:
   - `REACT_APP_API_URL`: the URL for your Node.js server (default is http://localhost:3000/api/)
5. In the root directory, run `npm run dev` to start both the server and client.

## API Endpoints

- `GET /api/users`: returns an array of users with income lower than $5 USD and have a car of brand "BMW" or "Mercedes"
- `GET /api/male-users`: returns an array of male users with phone price greater than $10,000
- `GET /api/quotes`: returns an array of users whose last name starts with "M" and has a quote character length greater than 15 and email includes his/her last name
- `GET /api/cars`: returns an array of users which have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit
- `GET /api/cities`: returns an array of top 10 cities which have the highest number of users and their average income

## Technologies Used

- Node.js
- Express
- MongoDB
- React
- CSS

## Hosted using
- Back-end: render.com
- Front-end: netlify.com

## License

This project is licensed under the MIT License - see the LICENSE.md file for details. 
