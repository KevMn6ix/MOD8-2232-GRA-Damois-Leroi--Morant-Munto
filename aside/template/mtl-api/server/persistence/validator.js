/* User Validators */

module.exports = {
  validateSignUp(last_name, first_name, email, phone_number, password, confirmPassword ){

  return validateLastName(last_name) ?? 
        validateFirstName(first_name) ??
        validateEmail(email)  ??
        validatePhoneNumber(phone_number) ??
        validatePassword(password, confirmPassword)
}
}


function validateLastName(last_name) {
  if (last_name === undefined) {
    return new Error('Last name is missing.')
  }

  if (typeof last_name !== 'string') {
    return new Error('Last name must be a string.')
  }

  if(last_name.length < 2){
    return new Error('Last name must contain at least 2 characters')
  }

  last_name = last_name.trim()
  if (last_name === '') {
    return new Error('Last name must not be empty.')
  }
  return null
}

function validateFirstName(first_name) {
    if (first_name === undefined) {
      return new Error('First name is missing.')
    }
  
    if (typeof first_name !== 'string') {
      return new Error('First name must be a string.')
    }
  
    if(first_name.length < 2){
      return new Error('First name must contain at least 2 characters')
    }

    first_name = first_name.trim()
    if (first_name === '') {
      return new Error('First name must not be empty.')
    }
    return null
}

function validateEmail(email) {
    if (email === undefined) {
      return new Error('Email is missing.')
    }
  
    if (typeof email !== 'string') {
      return new Error('Email must be a string.')
    }

    if(email.length < 4){
      return new Error('Email must contain at least 4 characters')
    }

    if(!containOnlyAt(email)){
        return new Error('Email must contain an @.')
    }
  
    email = email.trim()
    if (email === '') {
      return new Error('Email must not be empty.')
    }
    return null
}

function validatePhoneNumber(phone_number) {
    if (phone_number === undefined) {
      return new Error('Phone Number is missing.')
    }

    if(phone_number.length < 8){
      return new Error('Your phone number must contain at least 8 characters')
    }
    return null
}

function validatePassword(password, confirmPassword) {
  if(password.length < 8){
    return new Error('Your password must contain at least 8 characters')
  }

  if(password.localeCompare(confirmPassword) !== 0){
    return new Error('Your confirm password is different than the first !')
  }

}

// Check if the email contains an '@'
function containOnlyAt(st) {
  let count = 0;
  for (let i = 0; i < st.length; i++) {
    if (st[i] === '@') {
      count++;
    }
  }
  return count === 1;
}

/* Place Validators*/

