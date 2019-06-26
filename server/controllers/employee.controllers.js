const employeeCtrl = {};
const Employee = require('../models/employee');

employeeCtrl.getEmployees = async(res, req) => {
    /*res.json({
        status: 'Employees goes here'
    })*/

    const employees = await Employee.find();
    res.json(employees);

}

employeeCtrl.createEmployees = async(res, req) => {
    console.log(req.body)
    const employee = new Employee(req.body)
    await employee.save();
    res.json({
        'status': 'Employee saved'
    });
}
employeeCtrl.getEmployee = async(res, req) => {
    //console.log(req.params.id);
    Employee.findById(req.params.id);
    res.json('received');
}

employeeCtrl.editEmployee = async(res, req) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true })
    res.json({
        status: 'Employee Update'
    });
}
employeeCtrl.deleteEmployee = async(res, req) => {
    Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employee Deleted'
    });
}



module.exports = employeeCtrl;