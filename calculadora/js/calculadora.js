$(document).ready(function() {
  $('#suma').click(function() {
      var num1 = parseFloat($('#num1').val());
      var num2 = parseFloat($('#num2').val());
      var result = 0;

      result = num1 + num2;
      $('#result').val(result);
  });

  $('#resta').click(function() {
      var num1 = parseFloat($('#num1').val());
      var num2 = parseFloat($('#num2').val());
      var result = 0;

      result = num1 - num2;
      $('#result').val(result);
  });

  $('#multiplicacion').click(function() {
      var num1 = parseFloat($('#num1').val());
      var num2 = parseFloat($('#num2').val());
      var result = 0;


      result = num1 * num2;
      $('#result').val(result);
  });

  $('#division').click(function() {
      var num1 = parseFloat($('#num1').val());
      var num2 = parseFloat($('#num2').val());
      var result = 0;


      if (num2 === 0) {
          alert("No se puede dividir por cero.");
          return;
      }

      result = num1 / num2;
      $('#result').val(result);
  });

  $('#basura').click(function() {
      $('#num1').val('');
      $('#num2').val('');
      $('#result').val('');
  });
});
