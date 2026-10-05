## javascript is a synchronous and single threaded language ..

we run javascript engine in either browser or nodejs like enviroment . 


## Javascript execution context 

first learn about javaScript runtime  - 

A javascript runtime is an environmentt which provides all the necessary components in order to use and run a javaScript program 

## A Javascript Runtime in case of browser consists of 4 main components : 
1. JavaScript engine 
2. WebAPI 
3. Mircrostack Queue and callback Queue.
4. Event loop

WHAT IS JAVASCRIPT ENGINE?
A JavaScript engine is simply a computer program , which executes JavaScript code 
- google's and nodejs JavaScript engine - v8
a javascript engine contain stack and heap 
-- in stack memory the JavaScript code is executed one after the other in the form of call stact . 
-- Heap is an unstructured memory pool which grows dynmaically as needed during program execution . 

WHAT IS WEB API ?
webAPI are provided by the browser , not part of javascript language . 
They provide extra functionality to javascript . 
-- A WebAPI contains everything related to DOM , Timers, other APIs and even cosole.log(). fetch , get and also fetch api for http request . 

WHAT IS MICROTASK AND CALLBACK QUEUE?
The callback queue and Microtask queue stores all the callback functions from events , that are ready to be executed .
Microstack queue stores callback functions which has higher priority than the callback function waiting inside callback queue.

WHAT IS EVENT LOOP?
as JavaScript is a single threaded language , once all the javaScript code  is executed by the single thread , the job of event loop is to push call function to main thread for their execution . 
-- the monitor the main thread and push callback functions from callback and mircotask queue to the main thread . 



## A JavaScript runtime Enviroment in case of Nodejs.\
instead of WebAPI we have NodeJs modules which contain FS ,  HTTP , PATH , console.log().

a nodejs runtime enviroment also need JavaScript engine (node js uses googles v8 for that .)

extra functionality - it contain thread pools which run javascript code asynchronously . (javascript is a synchronous labguage )
 
