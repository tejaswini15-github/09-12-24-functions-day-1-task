function print() {                   // defination
    console.log("Data Printed")
}
print()      // function calling




function goToKitchen() {
    console.log("Entered Kitchen Room")
    console.log("Some Work Done")
    console.log("Exited from kitchen Room")
}
goToKitchen(); 
console.log("Entered Bed room")



function cooking(){
    console.log("Enter kitchen and stored cooking")
    takeDelivery()
}
function takeDelivery() {
    console.log("Entered from kitchen")
    console.log("Taken Delivery")
    consolr.log("Back to kitchen")
}
cooking()





function cooking(){
    console.log("Enter kitchen and started cooking")
    takeDelivery();
    console.log("Completed Cooking")
} 
function takeDelivery() {
    console.log("Exited from kitchen")
    console.log("Taken Delivery")
    console.log("Back to kitchen")
}
cooking()


function funOne() {
    console.log("Entered")
    console.log("Exited")
}
funOne()
funOne()
funOne()







function funOne() {
    console.log("Function One called")
}
function funTwo() {
    console.log("Function Two called")
}
funOne()
funTwo()







function funOne() {
    console.log("Function One called")
    funTwo()
}
function funTwo() {
    console.log("Function Two called")
}
funOne()
funTwo()





function funOne() {
    console.log("Function One called")
    funTwo()
}
function funTwo() {
    console.log("Function Two called")
}
funOne()
funTwo()
console.log("Home")



function funOne() {
    console.log("Function One called")
    funTwo()
    console.log("Function one completed")
}
function funTwo() {
    console.log("Function Two called")
}
funOne()
funTwo()



three() 
function three() {
    console.log("Third Function")
}



function one() {
    console.log("One")
    two()
}
function two() {
    console.log("Three")
}
function four() {
    console.log("Two")
    one()
}
four()





function one() {
    console.log("One")
    two()
    console.log("Three")
}
function two() {
    console.log("Three")
}
function four() {
    console.log("Two")
    one()
    console.log("One")
}
four()
one()






function apple() {
    var a=20
    console.log(a++ + ++a + --a)
    banana()
    console.log(a)
}
function banana() {
    var b=12
    console.log(++b + b++)
    cherry()
    console.log("Bananaaaaaaaa")
}
function cherry() {
    console.log("Cherry............")
}
apple()









// 1.	Define a function called greet that logs “Hello!” to the console. Call the function after defining it.
function greet() {
    console.log("Hello!")
}
greet()


//2.	Write a function named showMessage that logs “This is a message!” to the console. Call the function once after defining it.
function showMessage() {
    console.log("This is a message!")
}
showMessage()




// 3.	Create a function called logInfo that prints “Logging Information…” to the console. Call the function after defining it.
function logInfo() {
    console.log("Logging Information....")
}
logInfo()



/*4.	Define two functions:
–	startGame that logs “Game Started!”
–	endGame that logs “Game Over!”
Inside the startGame function, call the endGame function.*/
function startGame() {
    console.log("Game Started")
    endGame()
}
function endGame() {
    console.log("Game Over!")
}
startGame()




/*5.	Create two functions:
–	beginTask that logs “Task Started”.
–	finishTask that logs “Task Finished”.
Inside the beginTask function, call the finishTask function.*/

function beginTask() {
    console.log("Task Started")
    finishTask()
}
function finishTask() {
    console.log("Task Finished")
}
beginTask()
