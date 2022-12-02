// basic function syntax

function nameOfFunc(parameter){
    // func definition / body
}

// Example 1 : Basic

function greeting(){
    console.log("hello what's up");
}

console.log(greeting());

// Example 2 : Adding parameters

function greetName(name){
    const message = (`Hello ${name} !`);
    console.log(message);

}

console.log(greetName("Yumna"));

function greetNames(name1, name2){
    const message = (`Hello ${name1} and ${name2} !`)
    console.log(message);
}

console.log(greetNames("Omar", "Yumna"));
// note -> I skipped some sections for the sake of brevity and speed

// Example 3 : Functions as parameters for functions

function displayDone(){
    console.log('3 seconds have elapsed');
}
setTimeout(displayDone, 3000)
console.log(displayDone());

// Example 4 : Anonymous functions

setTimeout(function() {
    console.log('3 seconds has elapsed # 2');
  }, 3000);

//   Example 4: Arrow functions

setTimeout(() => {
    console.log('3 seconds has elapsed');
  }, 3000);

