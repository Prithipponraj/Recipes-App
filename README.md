# Recipe Management API

## Overview

This project provides a **Recipe Management API** built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**. It allows you to perform **CRUD operations** (Create, Read, Update, Delete) on recipes. The API follows the **MVC (Model-View-Controller)** pattern and integrates MongoDB for storing recipe data. API documentation is provided using **Postman**.

### Tech Stack:
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Postman** (for API documentation)

---

## Functionalities

The API supports the following operations:

1. **createRecipe**: Create a new recipe.
2. **getAllRecipes**: Retrieve all recipes.
3. **getRecipeById**: Retrieve a recipe by its ID.
4. **updateRecipe**: Update a recipe by its ID.
5. **deleteRecipe**: Delete a recipe by its ID.

---

## Project Structure

This project follows the **MVC pattern**:


### POSTMAN API DOCUMENTATION

### Recepie API

This **Recipe API** allows you to manage recipes in a database. It provides CRUD (Create, Read, Update, Delete) functionality to add, fetch, update, and delete recipes. The API is built with Node.js, Express, and Mongoose and interacts with a MongoDB database. Below is a description of each available endpoint and its usage.
﻿

### POST
New request
http://localhost:5000/api/recipes
This endpoint allows users to create a new recipe. The request body must include the details of the recipe, such as the name, ingredients,instructions and cooking time.cookingTime

﻿

### Body
raw (json)
json
{
  "name": "Parrotta",
  "ingredients": ["maida", "water", "eggs", "oil", "salt"],
  "instructions": "Make a dough. Roll a parotta. Roast it with medium flame.",
  "cookingTime": 4
}

### GET
New request
http://localhost:5000/api/recipes
This endpoint retrieves a list of all recipes stored in the database.

[{"_id":"67362d4ec2b5e5dbbb1f1e4b","name":"opail","ingredients":["spaghetti","pancetta","eggs","cheese","salt"],"instructions":"Boil the spaghetti. Fry pancetta. Mix with eggs and cheese.","cookingTime":2,"__v":0},{"_id":"67362d4ec2b5e5dbbb1f1e4c","name":"spaghetti carbonara","ingredients":["spaghetti","bacon","eggs","parmesan cheese","black pepper"],"instructions":"Boil spaghetti. Fry bacon. Mix with eggs and parmesan.","cookingTime":15,"__v":0},{"_id":"67362d4ec2b5e5dbbb1f1e4d","name":"margarita pizza","ingredients":["pizza dough","tomato sauce","mozzarella","basil"],"instructions":"Spread sauce on dough. Add cheese and basil. Bake.","cookingTime":20,"__v":0},{"_id":"67362d4ec2b5e5dbbb1f1e4e","name":"lasagna","ingredients":["lasagna noodles","ground beef","tomato sauce","cheese","onion"],"instructions":"Cook noodles. Fry beef and onion. Layer ingredients and bake.","cookingTime":40,"__v":0},

﻿

### GET BY ID
New request
http://localhost:5000/api/recipes/673f0f3433f04f03b3d32b77
This endpoint allows you to retrieve a specific recipe by its unique ID

{"_id":"673f0f3433f04f03b3d32b77","name":"Parrotta","ingredients":["maida","water","eggs","oil","salt","butter"],"instructions":"Make a dough. Roll a parotta. Roast it with medium flame.","cookingTime":5,"__v":0}

﻿

### PUT
New request
http://localhost:5000/api/recipes/673f0f3433f04f03b3d32b77
This endpoint allows you to update an existing recipe by its ID. You must provide the updated data in the request body.

﻿

### Body
raw (json)
json
{
  "name": "Parrotta",
  "ingredients": ["maida", "water", "eggs", "oil", "salt", "butter"],
  "instructions": "Make a dough. Roll a parotta. Roast it with medium flame.",
  "cookingTime": 5
}

### DELETE
New request
http://localhost:5000/api/recipes/67362d4ec2b5e5dbbb1f1e51
This endpoint allows you to delete a recipe by its ID. After deleting the recipe, it will no longer exist in the database.

﻿


