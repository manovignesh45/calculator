let calculation =  localStorage.getItem('calculation') || '0';
       displayCalculation ();

      function updateCalculation (value) {
        calculation += value;
        console.log(calculation);
        saveCalculation (calculation);
        displayCalculation ();
      }


      function saveCalculation (calculation) {
        localStorage.setItem('calculation', calculation);
        displayCalculation ();
      }

      function displayCalculation () {
        document.querySelector('.js-answer').innerHTML = calculation;
      }