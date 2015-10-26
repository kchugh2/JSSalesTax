var $ = function (id) {
    return document.getElementById(id);
}

    function taxValidator() {
        var x, text;

        // Get the value of the input field with id="numb"
        x = document.getElementById("taxRate").value;

        // If x is Not a Number or less than one or greater than 10
        if (isNaN(x) || x < 1 || x > 100) {
            text = "Tax Rate not valid";
        } else {
            text = "Tax Rate OK";
        }
        document.getElementById("taxRateValidated").innerHTML = text;
    }
   
    function subTotalValidator() {
        var x, text;

        // Get the value of the input field with id="numb"
        x = document.getElementById("subtotal").value;

        // If x is Not a Number or less than one or greater than 10
        if (isNaN(x) || x < 1 ) {
            text = "Sub Total not valid";
        } else {
            text = "Subtotal OK";
        }
        document.getElementById("subTotalValidated").innerHTML = text;
    }
   
function dothis() {
	
	var subt;
	var taxrate;
	var tax;
	var total; 

	taxValidator();
	subTotalValidator();
	
	
	subt = document.getElementById("subtotal").value;
	taxrate = document.getElementById("taxRate").value;
	tax= (taxrate/100 * subt);
	total = +subt + +tax;
	
	document.getElementById("salesTax").value = tax;
	document.getElementById("total").value = total;
}


