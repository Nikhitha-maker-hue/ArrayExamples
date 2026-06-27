/*
//first method to declare an array
 let arr=[10,20,30,40,50];
console.log(arr[0]); //10
console.log(arr[1]); //20

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
    */
/*
//Second method to declare an array
let arr=[10,20,30,40,50];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
    */
   
/*
//Third method to declare an array
let arr=[10,nikhitha,true,10.0];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}  
    */
/*
let arr=[10,20,30,40,50,60,70,80,90,100];
arr.length=5;
arr.length=8;
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
    */
/*
let arr=[10,20,30,40,50,60,70,80,90,100];
let sm=0;
for(let i=0;i<arr.length;i++){
    sm=sm+arr[i];
}
console.log("Sum:"+sm);
*/
/*
let arr=[3,6,9,10,30,46];
let large=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>large)
        large=arr[i];
}
console.log("Large:"+large);
*/
//FOR EACH METHODS:
/*
let arr=[3,6,9,10,30,46];
for(let data of arr){   //o/p gives the array elements
    console.log(data)
}
*/
/*
let arr=[3,6,9,10,30,46];
for(let data in arr){       //o/p gives the  index number
    console.log(data)
}
    */
/*
let arr=[3,6,9,10,30,46];
function displayElement(element){
    console.log(element)
}
//for(let i=0;i<arr.length;i++){
//console.log(element);
//}
arr.forEach(displayElement)
*/
/*
let arr=[3,6,9,10,30,46];
function displayElement(element,index){
    console.log("Index: "+index+"element:"+element);
}
arr.forEach(displayElement)
*/
/*
let arr=[3,6,9,10,30,46];
function displayElement(element,index,x){
    console.log("Index: "+index+"element:"+element+"Array:"+x);
}
arr.forEach(displayElement)
*/
               //push:add Elements,unshift:reverse the elements,pop:delete the last element
/*
let arr=[];
arr.push(10);
arr.push(20);  //o/p:10,20,30,40,50
arr.push(30);
arr.push(40);
arr.push(50);
for(let data of arr){
    console.log(data);
}
    */
/*
let arr=[];
arr.unshift(10);
arr.unshift(20);
arr.unshift(30);
arr.unshift(40);   o/p:50,40,30,20,10
arr.unshift(50);

for(let data of arr){
    console.log(data);
}
    */
/*
let arr=[];
arr.push(10);
arr.push(20);  
arr.push(30);
arr.push(40);
arr.push(50);
arr.pop();
arr.pop();
for(let data of arr){
    console.log(data);
}
    */
/*
let arr=[];
arr.unshift(10);
arr.unshift(20);
arr.unshift(30);   //o/p:30,20,10
arr.unshift(40);   
arr.unshift(50);
arr.shift();
arr.shift();

for(let data of arr){
    console.log(data);
}
    */
   