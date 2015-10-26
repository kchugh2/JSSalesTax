var $ = function (id) {
    return document.getElementById(id);
}

 	function tempConverter()
 	{
 		
 		//Input Checker
 		var fval = document.getElementById("farenheit").value;
 		var cval = document.getElementById("celsius").value;
 		
 		/*if ((cval == null && fval == null)||(cval == !null && fval ==!null)||(cval == "" && fval == ""))
 	 		{
 			alert("Refresh page and enter only one value in either box");
 	 		}*/
 		 if (fval == null||fval=="")
 		{
 			c2f();
 		  
 		}
 		   else if (cval== null ||cval=="")
 			f2c();
 			
 	}
 	function f2c()
 	{
 		var x, text, ctemp;

        // Get the value of the input field with id="numb"
        x = document.getElementById("farenheit").value;
        // If x is Not a Number or less than one or greater than 10
        if (isNaN(x) || x < -459) {
            text = "Farenheit Temp Below absolute 0";
        } else {
            text = "Valid F input";
        }
        document.getElementById("farenheitvalidated").innerHTML = text;
        ctemp = (x-32) * (5/9);
        
        document.getElementById("celsius").value = ctemp;
        tempimg();
 	}
 	function c2f()
 	{
 		var x, text, ftemp;

        // Get the value of the input field with id="numb"
        x = document.getElementById("celsius").value;
        // If x is Not a Number or less than one or greater than 10
        if (isNaN(x) || x < -273) {
            text = " Temp Below absolute 0";
        } else {
            text = "Valid C input";
        }
        document.getElementById("celsiusvalidated").innerHTML = text;
        ftemp = (9/5 * +x) +32;
        
        document.getElementById("farenheit").value = ftemp;
        tempimg();
 	}
 	function tempimg()
 	{
 		var x = document.getElementById("celsius").value;
 		if (+x<0)
 			document.getElementById("tempImg").src = "http://i.ytimg.com/vi/STymVjlysmg/maxresdefault.jpg";
 		else if (+x>=0 && +x<20)
 			document.getElementById("tempImg").src = "http://media.sacbee.com/static/weblogs/photos/images/2011/dec11/india_cold_weather_sm/india_cold_weather_01.jpg";	
 		else if (+x>=20 && +x<30)
 			document.getElementById("tempImg").src = "http://i.telegraph.co.uk/multimedia/archive/01807/david-leafe_1807524b.jpg";	
 		else 
 			document.getElementById("tempImg").src = "http://www.classtools.net/brainybox/saved/91/P5jTXQ/LAVA_Ron-surface_flowJune_4-10_1274.jpg";	
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


