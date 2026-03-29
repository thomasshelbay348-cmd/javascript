// console.log("welcome to apna college")
// console.log("subhan ahmd shiekh")
// console.log("i luv js")
// Name="tony stark"
// console.log(Name);
// age=24;
// console.log(age);
// price=99.99;
// console.log(price);
// x=null;
// console.log(x);
// y=undefined;
// console.log(y);
// radius=40;
// console.log(radius);
// isfollow = true;
// console.log(isfollow);
// fullname ="subhan shiekh";
// fullName ="shahwaiz irshad";
// console.log(fullname);
// console.log(fullName);
// let fullName="subhan shiekh";
// let age = 24;
// let totalprice=1000;
// // console.log(fullName);
// // console.log(age);
// console.log(totalprice);
// {
//     let a=5;
//     console.log(a);
// }
// {
//     let a=10;
//     console.log(a);
// }
// let x=BigInt("123");

// a=10;
// b=a;
// console.log(a,b);
// a=12;
// console.log(a,b);

// let x=[]
// let y=x;
// console.log(x,y);
// x[1] ="subhan"
// console.log(x,y)

// var arr=["data 1"]
// var arr2=arr.concat("data 2")
// console.log(arr2)

// var arr1 = ["wahab","zarak"]
// var arr2 = ["subhan","shahwaiz"]
// var arr3 = arr1.concat(arr2)
// console.log(arr3)

// // 9 loop
// for(let i=0;i<10;i++){
//     console.log(i)
// }
// for(let i=1; i<1000;i++){
//     console.log(i, "pakistan")
// }
// var i=1;
// while(i<100){
//     console.log(i,"i love you")
//     i++
// }

// let i=5;
// do{
//     console.log(i,"hello world")
//     i++
// }while(i<4)

//     let arr =["subhan","shahwaiz","wahab","zarak"]

//     // for(i in arr){
//     //     console.log(i)
//     // }

    
//     for(i of arr){
//         console.log(i)
//     }

// javascript hosting interview question
// const a=10;
// console.log(a)

// let arr=["subhan","shahwaiz"]
// console.log(arr)
// let arr2=["wahab","zarak"]
// console.log(arr2)

// for(var i in arr){
//     console.log(arr[i],arr2[i])
// }

// 13 .........function ..........
// function sm(){
//     console.log("hello world")
// }
//.............arrow function............
// sm()
// var sp = ()=>{
//     console.log("hello arrow fraction")
// }
// sp()
//.........anonymous function.........
// let sl=function(){
//     console.log("hello world")
// }
// sl()
//..........function declaration............
// function sm(a){
    //   return 4;
// }
// console.log(sm(12))
// sm()

// let sb=(a)=>a;
//     console.log(sb(12))

//.............IIFE....(immediatly invoked function expression)........
// (function(){ console.log("hello IIFE")})()
// !function(){console.log("hello IIFE")}()


//.........dom(document object model)........
// function sm(){
//    var demo= document.getElementById("demo")
//     demo.style.color="red"
//     demo.style.backgroundColor="blue"
//}
// var num1 = Math.round(Math.random()*10)
// console.log(num1)
// var guesnumber =parseInt(prompt("enter the num"))
// var demo = document.getElementById("demo")
// if (num1 === guesnumber){
//     demo.style.backgroundImage="url('assests/img.png')"
// } else{
//     demo.style.backgroundColor="red"
// }
// function click(){
// var input = document.getElementById("input")
// var data = document.getElementById("memo")
// console.log(input.value)
// // document.write(input.value)


// // data.innerHTML="<h1>"+ input.subhan +"</h1>";
// data.innerHTML=`<h1> ${input.value }</h1>`

// input.value="";
// }

// 16 synchronous /asynchronus

// console.log("A")

// console.log("B")

// console.log("C")


// setTimeout(()=>{console.log("A")},10000)

    
// console.log("B")
// console.log("C")

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// setInterval( ()=>{ 
//     console.log("subhan")
// },1000)

// for(let i=0; i<=10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0);
// }

// 17 filter / map methods
// even=[]
// var list = [1,2,3,4,5,6,7,8,9,10]
// for (var i=0; i<= list.length; i++){
//     if (i % 2 === 0){
//         even.push(list[i])
//   }
//  }
// console.log(even)
//var list = [1,2,3,4,5,6,7,8,9,10]
// odd= list.filter(i => i % 2 === 0)
// console.log(even,odd)

// var list = [1,2,3,4,5,6,7,8,9,10]
// var squere = [ ]
// for (var i =0;i <= list.length;i++){
//     var p= list [i]* list[i];
//     squere.push(p)
// }
// // var square = list.map(i => i / i)
// console.log(squere)

//.............assigment

// function ss(){
// let a=document.getElementById("num").value;
// // if(num===null || num == ""){
//     // document.querySelector(#)
// // }
// var b= a*a*a;
//   document.getElementById("rr").innerHTML =b;
// }


