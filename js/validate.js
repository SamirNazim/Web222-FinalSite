function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latQuery
  // values. The latQuery value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let latQuery = document.querySelector('#latitude');
  let longQuery = document.querySelector('#longtitude');
  let latValue = latQuery.value.trim();
  let longValue = longQuery.value.trim();
  if(isNaN(latValue)  || latValue < -90 || latValue > 90){
    document.querySelector('#lblLatitude > span').innerHTML ="";
    document.querySelector('#lblLatitude > span').append("* must be a valid Latitude (-90 to 90)");
    event.preventDefault();
  }
 
  if(isNaN(longValue) || longValue < -180  || longValue > 180){
    document.querySelector('#lblLongtitude > span').innerHTML =""
    document.querySelector('#lblLongtitude > span').append("* must be a valid Longtitude(-180 to 180)");
    event.preventDefault();
  }
  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
