export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

const isStrEmpty = str => {
  const reg = /^$/;
  return reg.test(str.trim());
};

const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInput = data => {
  const errors = {};
  const response = 'This field is required';

  Object.keys(data).forEach(field => {
    const passwordRegex = /^.{6,}/;
    if (field === 'password' && !passwordRegex.test(data[field].toString())) {
      errors[field] = 'Password must be 6 characters long';
    }

    if (field === 'password' && isStrEmpty(data[field].toString())) {
      errors[field] = response;
    }

    if (field === 'username' && isStrEmpty(data[field].toString())) {
      errors[field] = response;
    }

    if (field === 'email' && !validateEmail(data[field].toString().trim())) {
      errors[field] = 'Invalid Email';
    }

    if (field !== 'password' && isStrEmpty(data[field].toString().trim())) {
      errors[field] = response;
    }
  });

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

export default validateInput;
