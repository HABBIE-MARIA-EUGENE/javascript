// Function decl.
function  greet(name) {
    return `Hello, ${name}! This is a simple fun dec.!`;
}
console.log(greet(name));


//Arrow function (modern method)
const greet2 = (name) => `Hello, ${name}! This is a arrow fn!`;

console.log(greet2(name));

// Async fn (used for api calls)
 const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    } 
 };
fetchData().then(result => console.log(result));

//console.log(fetchData());
