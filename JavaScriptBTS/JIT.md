Javascript is a high level language which is needed to interpreted before execution by JIT . 

JavaScript is JIT compiled at runtime by an engine(v8 by google ) inside the browser or host enviroment. 


1.compilation - 
source code -->compilation--> portable file (.exe/.out /.dll) (contain machine code) ---> execution -->program Running . 
-- in this compilation process a execuatable protable file is generated which can be executed at any time we want , may be in future , no need to compile source code again and again 


2. Interpretation 
it contains of a interpreter which interpret source code into machine code  line by line  and machine code is executed at the same time . it doesnt contain of portable file (in which we first convert source code in a one machine code file ).

much much slower than compiled language. (javascript is used to be interpreted language )
source core -----(code executed line by line)---->program running .


3. JUST-IN-TIME compilation
-- in just in time compilation source code is converted in machine code and executed imideatly , unlike interpretation line by line compilation and executation .

source code ---(compilation)--->machine code -----(execution imideatly)---> program running.



## JavaScript code Execution 
                  | 
JavaScript -----> |code Parsing--AST(abstract syntax tree)---> JUST-IN-TIME COMPILER -->PROGRAM RUNNING.

EXECUTION of javaScript code happens inside callStack

                  