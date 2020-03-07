import Validator from 'validator';

export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

const validateInput = data => {
  const errors = {};
  const response = 'This field is required';

  Object.keys(data).forEach(field => {
    if (
      field === 'password' &&
      !Validator.matches(data[field].toString(), /^.{6,}/)
    ) {
      errors[field] = 'Password must be 6 characters long';
    }

    if (field === 'password' && Validator.isEmpty(data[field].toString())) {
      errors[field] = response;
    }

    if (
      field === 'email' &&
      !Validator.isEmail(data[field].toString().trim())
    ) {
      errors[field] = 'Invalid Email';
    }

    if (
      field !== 'password' &&
      Validator.isEmpty(data[field].toString().trim())
    ) {
      errors[field] = response;
    }
  });

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateInput;
