const express = require('express');
const router = express.Router();
const employee = require('../controllers/employee.controllers')


router.get('/', employee.getEmployees) //todos
router.post('/', employee.createEmployees)
router.get('/:id', employee.getEmployee) //solo 1
router.put('/:id', employee.editEmployee)
router.delete('/:id', employee.deleteEmployee)


module.exports = router;