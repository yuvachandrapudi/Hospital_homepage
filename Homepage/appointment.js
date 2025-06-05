document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', function (event) {
      if (validateForm()) {
        alert("Appointment successfully booked!");
      } else {
        event.preventDefault();
      }
    });
  
    function validateForm() {
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const procedure = document.getElementById('procedure').value;
      const department = document.getElementById('department').value;
  
      if (!name) {
        alert('Please enter your name.');
        return false;
      }
  
      if (!age) {
        alert('Please enter your age.');
        return false;
      }
  
      if (!gender) {
        alert('Please select your gender.');
        return false;
      }
  
      if (!isValidPhoneNumber(phone)) {
        alert('Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.');
        return false;
      }
  
      if (!date) {
        alert('Please select a preferred appointment date.');
        return false;
      }
  
      if (!time) {
        alert('Please select a preferred appointment time.');
        return false;
      }
  
      if (!procedure) {
        alert('Please select the procedure for the appointment.');
        return false;
      }
  
      if (!department) {
        alert('Please select the department for the appointment.');
        return false;
      }
  
      return true;
    }
  
    function isValidPhoneNumber(phone) {
      return /^[6-9]\d{9}$/.test(phone);
    }
  });


