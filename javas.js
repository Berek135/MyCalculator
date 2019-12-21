
			 function display(){
				document.calc.display.value=document.calc.display.value+num;
			}
			function clean(){
				document.calc.display.value=' ';
			}

			function backspace() {                                              
				size = calc.display.value.length; 
				calc.display.value = calc.display.value.substring(0, size-1); 
			}
			function Pfunction(){
			    calc.display.value = document.calc.display.value.pow(x, y);

				}
			