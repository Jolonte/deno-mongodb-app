# Deno APP

![image](https://github.com/viniciusnevescosta/deno-app/assets/66970818/57a0f048-66cf-44d5-8308-a55c72716a80)

Welcome to the repository of my inventory control system project! Here, I developed a Restful API to manage inventories, using Mongoose, Express and DenoJs technologies.

## Summary of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [How to Test](#how-to-test)
- [Learning Acquired](#learning-acquired)

## Overview

This project is part of my learning journey, where I explored creating an efficient API for inventory control. I used Mongoose as ODM (Object Data Modeling) to interact with the database, Express as a web framework and DenoJs to provide a modern and secure experience.

- See [API documentation (pt-br)](https://github.com/viniciusnevescosta/deno-app/wiki/API-Documentation).

## Technologies Used

- **Mongoose:** An ODM that provides simple, object-based data modeling for MongoDB.
- **Express:** A web framework for Node.js that simplifies the creation of RESTful APIs.
- **DenoJs:** A secure execution environment for JavaScript and TypeScript.

## Functionalities

1. **Product Registration:**
    - Add new products to inventory by specifying details such as name, quantity and description.

2. **Product Consultation:**
    - Retrieve detailed information about existing products through API queries.

3. **Stock Update:**
    - Update the available quantity of each product as entries or exits occur.

4. **Product Removal:**
    - Delete products that are no longer in stock, keeping inventory organized.

## How to Test

###Online

- [Deploy](https://inventory-management-app.deno.dev/)

### Locally

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/viniciusnevescosta/deno-app.git
    ```

2. **Install Dependencies:**
    ```bash
    cd deno-app
    deno install
    ```

3. **Configure the Environment:**
    - Create a `.env` file in the root of the project and provide the necessary environment variables, such as the connection to the MongoDB database.<br><br>
    ```env
    DB_USER=your_mongodb_user
    DB_PASSWORD=your_mongodb_password
    ```
   
4. **Run the Application:**
    ```bash
    npm start
    ```

5. **Explore the API:**
    - Navigate to `http://localhost:3000` and use the defined routes to interact with the API.

## Learning Acquired

During the development of this project, I acquired essential knowledge, including:

- 🔄 Effective integration between Mongoose, Express and DenoJs to create a Restful API.
- 🛢 Data manipulation in MongoDB, using Mongoose for object modeling.
- 🚀 Using DenoJs as a secure and modern alternative to JavaScript runtimes.

---

**Note:** This project has been archived as it represents a successfully completed study. There are no plans for further development as its objectives have been successfully achieved.
