// Write your solution in this file!
const employee = {
    name: "Galen",
    streetAddress: "123 Candy Cane Lane",
}
function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey (employee, key) {
    const deletedEmployee = {...employee};
    delete deletedEmployee[key];
    return deletedEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}