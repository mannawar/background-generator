// JavaScript is a single threaded language that can be non-blocking
//chrome has v8 javaScript engine. it has two parts viz. memory heap and call stack
//memory leak- unused memory
const a = 1;
const b = 10;
const c = 100;
//Global variables are bad because they remain in memory even if they aren't used

//call stack(synchronous task- line-10 will get exceuted first, then line-11 and then line-12)
console.log('1');
console.log('2');
console.log('3');

const one = () => {
	const two = () => {
		console.log(4);
	}
	two();
}

//call stack is first-in-last-out
//Issues with multithreaded language is they have deadlocks

//Recursion
function foo() {
	foo()
}
foo()

//In javaScript non-blocking- Asynchronous behavior- can be obtainesd as below
console.log('1');
setTimeout(() => {
	console.log('2');
}, 2000)
console.log('3');

//setTimeout set to 0 sec
console.log('1');
setTimeout(() => {
	console.log('2');
}, 0)
console.log('3');

//javaScript runtime environment consists of the following
//1. javaScript engine (memory heap and call stack)
//2. web API's (DOM(document), AJAX(XML HTTP request), Timeout(setTimeout))
//3. callback Queue (onClick, onLoad, onDone)
//4. Event Loop

//call stack

//web APIs

//callback Queue

//Event Loop

element.addEventListener('click', () => {
	console.log('click')
})
