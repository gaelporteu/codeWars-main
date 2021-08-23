function validatePIN (pin) {
    if(pin.length === 4 ||  pin.length === 6 ) {
      if( /^(\d{4}|^\d{6})$/.test(pin))  {
        return true;
      }else {return false;}
    }else {
        return false;
        }
  }

  console.log(validatePIN("123456"));
  