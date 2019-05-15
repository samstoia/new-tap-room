# tap-room

A single-page web application built with React for monitoring and managing kegs at a tap room. Users can navigate to pages and see what beers are on tap and how many pints they have left, add new kegs to the tap list, and read more about the business.

## User Stories

Stories will be broken down into users and employees.

1. As a user, I want to be able to see what beers are on tap.

Sample behavior: User navigates to Beers section.

Output: All beers added to beer list are displayed. (Beer list will be empty until new beers are added)

2. As an employee, I want to be able to add beers to the tap list.

Sample behavior: Employee navigates to and fills out new beer form.

Output: Beer is added to the tap list with 124 pints (the size of a keg) available for sale.

3. As an employee, I want to sell pints and growlers of our beers that are on tap.

Sample behavior: Employee sells a pint of beer.

Output: Number of pints in keg goes down by one.

Sample behavior: Employee sells a growler of beer.

Output: Number of pints in keg goes down by three.

4. As an employee, I want to know when a beer sells out, and for the beer to be removed from the beer list when that happens.

Sample behavior: Last pint/growler sold for particular beer.

Output: Beer disappears from beer list, employee is alerted that the beer that was just sold has now sold out.

5. As an employee, I want to be able to remove beers from the tap list.

Sample behavior: Delete button clicked.

Output: Beer is deleted from list.

## Setup/Installation

- Clone from Github (https://github.com/samstoia/react-tap-room)

- Navigate to root project directory in the terminal. (cd react-tap-room)

- Run npm install in the terminal to install dependancies.

- Run webpack, then webpack-dev-server in terminal and navigate to localhost:8080 to view in browser.

## Features to be added

- Functionality for employees to edit beers on the tap list.

## Component Structure

Below is a diagram of the component structure for this program:

![Structure Image](./src/assets/images/tap-room-structure1.jpg?raw=true "Structure Image")

## Built With/Using

- React.js
- React Router
- JavaScript
- CSS Grid
- npm
- vscode
- webpack

## Author

| **Sam Stoia** | **GitHub: [samstoia](https://github.com/samstoia)** | **Email: [samstoia@gmail.com](mailto:samstoia@gmail.com)**

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

Copyright (c) 2019 Sam Stoia

## Acknowledgments

[Epicodus](https://www.epicodus.com/).
