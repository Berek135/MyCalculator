
			 function display(){
				document.calculator.display.value=document.calculator.display.value+num;
			}

			function equal(){
			
				var expression = document.calculator.display.value;
				var answer = eval(expression)
				document.calculator.display.value = answer;

			} 

			function clean(){
				document.calculator.display.value;
			}

	