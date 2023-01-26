## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# React Take Home Assignment

Target of this assignment to created a functional UI as represented in the diagrams
Diagrams are available in /design/
Required assets are available in /app/assets/img/

# Instruction

- Its TypeScript Project, you should continue with TypeScript.
- Use bootstrap for styling your components etc.
- Make sure that all filter options workable.



## Code structure

src<br />
---app<br />
------components<br />
------form (any form input element should go here with its own styling)<br />
------shared (any shared or common components should go here with there own styling)<br />
------(you are allowed to create new folders as you see fit)<br />
---pages<br />
--------auth (this folder contains functional login page you need to add its styling)<br />
--------dashboard (this folder contains a plain dashboard page which you have to make functional as per shared images)<br />
---redux<br />
--------_mocks_<br />
--------auth (this folder contains mocked responses for authentication)<br />
--------customer (this folder contains mocked responsed for customer CRUD)<br />
--------mockData (this folder contains mocked data)<br />
--------mockTypes (this folder contains interfaces for mocks)<br />
--------api (this folder contains interfaces for API reuqest and response)<br />
--------auth (this folder contains slice,action,and api for authentication)<br />
--------customer (this folder contains only api for customer you have to write slice and action, take example from auth slic and action)<br />

## API's

### Axios mock is used to return mocked responsed

- https://www.npmjs.com/package/axios-mock-adapter

### Axios is used as an API client

- https://www.npmjs.com/package/axios

## Form and validation

### React hoock form should be used for form handling take example from login screen

- https://react-hook-form.com/

### Yup should be used for form validation incombination with react hook form

- https://www.npmjs.com/package/yup

### Any api errors should be shown to user using react hot toast take exaimple from auth actions

- https://github.com/timolins/react-hot-toast

## What is already in the code base

- Mocks for auth and customer crud
- Axios api calling for auth
- functional login screen
- deafult dasboard screen (where you need to implement customer crud as per images)

## What you need to implement ?

- create UI of login and customer screen as shown in the images
- add form validation for customer add/udpate form
- integrate apis which are already in redux/customer/customerAPI
- implement slicer and actions for customer module
- user should be able to see default list of customers
- user should be able to add a customer
- user should be able to delete a customer
- user should be able to edit a customer
- user should be able to update a customer

## PS

- use email : admin@demo.com and password : demo to login into the application
- Code should be done in typescript
- React version 18
- Node version 18.12.1
