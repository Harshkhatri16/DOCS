function validation(values) {
    let errors = {};
  
    if (!values.U_id) {
      errors.U_id = "User ID should not be empty";
    }
  
    if (!values.password) {
      errors.password = "Password should not be empty";
    } else if (values.password.length < 8) {
      errors.password = "Password should be at least 8 characters long";
    }
  
    return errors;
  }
  
  export default validation;
  