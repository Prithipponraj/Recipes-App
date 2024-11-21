const Recipe = require('../models/recipeModel')

exports.createRecipe = async (req, res) => {
    try {
      const newRecipe = new Recipe(req.body);
      await newRecipe.save();
      res.status(201).json(newRecipe);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  // Get all recipes
  
exports.getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  // Get a recipe by ID

exports.getRecipeById = async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json(recipe);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  // Update a recipe by ID

exports.updateRecipe = async (req, res) => {
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedRecipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json(updatedRecipe);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Delete a recipe by ID

exports.deleteRecipe = async (req, res) => {
    try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };