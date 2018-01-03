// here is the todos array
var todos = ['item 1', 'item 2', 'item 3']

// this prints the todos array to the console
function displayTodos() {
    console.log("My todos:", todos);
    }
 
// has a way of adding more todos to the array list 
function addTodos(todo) {
	todos.push(todo);
	displayTodos();
}

// has 2 parameters, the position in the array and the updated value in the array
// then displays the todos so you can see what changed
function changeTodo(position, newValue) {
        todos[position] = newValue;
		displayTodos();
    }

// is a function to delete todos from the array
function deleteTodo(position) {
    todos.splice(position, 1);
	displayTodos();
}



//watchandcode version 2 functions
// explanaion of functions like they are recipies

// functions are recipes, example for a sandwich
// makeTurkeySandwich
//     Take a slice of bread.
//     Add turkey.
//     Put a slice on bread on top.
    
//     function makeTurkeySandwich() {
//         Get one slice of bread;
//         Add turkey;
//         Put a slice on bread on top;
//     };
    
// makeTurkeySandwich();



// customizing functions
//  makeSandwichWith __________
//      Take a slice of bread.
//      Add ________.
//      Put a slice on bread on top.
     
//     function makeTurkeySandwich(filling) {
//         Get one slice of bread;
//         Add filling;
//         Put a slice on bread on top;
//     };
    
// makeSandwichWith('ham')
