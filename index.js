// Write your solution in this file!
const employee = {
    name: 'John',
    role: 'Developer',
    age: 30,
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }
  module.exports = { employee, updateEmployeeWithKeyAndValue };

  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  module.exports = { employee, destructivelyUpdateEmployeeWithKeyAndValue };
  function deleteFromEmployeeByKey(employee, key) {
    const clonedEmployee = { ...employee };

    delete clonedEmployee[key];
    return clonedEmployee;
  }
  module.exports = { employee, deleteFromEmployeeByKey };
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  module.exports = { employee, destructivelyDeleteFromEmployeeByKey };