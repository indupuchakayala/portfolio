const express = require('express');
const router = express.Router();
const projects = require('../data/projects');
const experience = require('../data/experience');
const skills = require('../data/skills');

router.get('/projects', (req, res) => {
  res.json(projects);
});

router.get('/experience', (req, res) => {
  res.json(experience);
});

router.get('/skills', (req, res) => {
  res.json(skills);
});

module.exports = router;
