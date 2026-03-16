github-issues-tracker
│
├── index.html        (Login Page)
├── dashboard.html    (Main Issues Page)

Q/A:
1. What is the difference between var, let, and const?
Ans: The main difference is var is function-scoped, let and const is block-scoped . var is accessible outside from the block. Also var can be redeclared but let and const can't be redeclared.

2. What is the Spread Operator ... ?
Ans: Take all items and spread them all out from an array or object.

3. Difference between map(), filter(), and forEach()?
Ans:
map()   : Transform elements and returns new array.
filter(): select specific elements based on condition and returns new array.
foreach(): run code for each element.

4. What is an Arrow Function?
Ans: A shorter-way to write function in JS. For Example: normal function: function add(a,b){
    return a+b;
}
short version: const add=(a,b)=>a+b;

5. What are Template Literals?
Ans: By using backticks ` ` instead of quotes easily we can create string and insert variables inside strings. And this technique is called template literals.
example: let name = "Oeshi";
let city = "Dhaka";

let text = "My name is " + name + " and I live in " + city;

Template literal way:
let name = "Oeshi";
let city = "Dhaka";

let text = `My name is ${name} and I live in ${city}`;
