const employeeCtrl = {};
const Employee = require('../models/employee');

employeeCtrl.getEmployees = async(res, req) => {
    /*res.json({
        status: 'Employees goes here'
    })*/

    //const employees = await Employee.find()
    //res.json(employees);
    res.send('hola')
}

employeeCtrl.createEmployees = async(res, req) => {
    console.log(req.body)
    const employee = new Employee(req, res)
    await employee.save();
    res.json({
        'status': 'Employee saved'
    });
}
employeeCtrl.getEmployee = async(res, req) => {
    console.log(req.params);
    // Employee.findById();
    res.json('recived');
}

employeeCtrl.editEmployee = (res, req) => {

}
employeeCtrl.deleteEmployee = (res, req) => {

}



module.exports = employeeCtrl;