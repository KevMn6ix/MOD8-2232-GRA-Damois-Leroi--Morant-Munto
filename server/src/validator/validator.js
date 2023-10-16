/* User Validators */

function validateLastName(last_name) {
  if (last_name === undefined) {
    return new Error('Last name is missing.')
  }

  if (typeof last_name !== 'string') {
    return new Error('Last name must be a string.')
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

    if(!containOnlyAt(email)){
        return new Error('Email must contain an @.')
    }
  
    email = email.trim()
    if (email === '') {
      return new Error('Email must not be empty.')
    }
    return null
}

function validatePhoneNumber(year) {
    if (year === undefined) {
      return new Error('Year is missing.')
    }
  
    if (!Number.isInteger(year)) {
      return new Error('Year must be an integer.')
    }
  
    if (year < 1895) {
      return new Error('Year must not be less than 1895.')
    }
  
    return null
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