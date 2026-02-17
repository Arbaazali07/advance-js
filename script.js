// let obj={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// let obj2={
//     name:"Devendra",
//     address:"Gurgaon",
//     age:23
// }
// obj.age=50
// console.log(obj)

// const para=document.querySelector(".para")
// para.innerText="this is updated one"
// console.info(document)

// console.log("Helllo Studentss!")

// let obj={
//     type:"Wooden",
//     color:"Brown",
//     length:"7ft"
// }

// let obj2={
//     type:"iron",
//     color:"Brown",
//     length:"7ft"
// }

// obj.type="Plastic"
// console.log(obj)

// console.log(document)

// const para=document.querySelector(".para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// console.log(document)


// const para=document.getElementById("para")
// para.innerText="This is a new paragraph"
// para.style.color="green"
// console.log(para)

// const para2=document.getElementsByClassName("para")  //return HTMLCollection
// para2[0].innerText="This is a new paragraph"
// para2[1].style.color="green"
// console.log(para2)

// const para=document.querySelectorAll(".para")  //return NodeList
// para[0].textContent="This is a new paragraph"
// para[1].style.color="green"
// console.log(para)

// let arr=[23,54,46,232,564,23]

// // const newArr=arr.map((ele)=>ele)  //it returns a new array
// arr.forEach((ele)=>console.log(ele))  //it does not returns a new array


// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a Heading</h1>"
// console.log(container)

// function message(event)
// {
//     console.log(event.key)
//     // alert("You have clicked the button")
// }

// const btn=document.querySelector("button")
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.addEventListener('click',message)
// btn.addEventListener('keydown',message)
// btn.addEventListener('keyup',message)
// btn.removeEventListener('click',message)

// const form=document.querySelector("form")
// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     console.log("Form Submitted")
// })

// const container=document.querySelector('.container')
// const outer=document.querySelector('.outer')
// const button=document.querySelector('button')


// container.addEventListener('click',()=>{console.log("Div")},true)
// outer.addEventListener('click',()=>{console.log("Outer Div")},true)
// button.addEventListener('click',()=>{console.log("Button")},true)


// console.log("New Code")
// debugger
// console.log(b)
// // console.log(a)

// let a=23534
// var b=5674

// console.log(a)
// console.log(b)
// function print(){
//     var c=345
//     console.log(c)
//     console.log("Inside fn")
// }

// print()


// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// function infinite(){
//     infinite()
// }
// infinite()

// console.log(a)
// console.log(b)
// // console.log(c)

// var a=345
// let b=5674

// console.log(a)
// console.log(b)

// let total=40

// function calculate(){
//     console.log(total)
//     let total=100
// }
// calculate()



// console.log("First Line")
// setTimeout(()=>{console.log("after 2 sec")},2000)
// console.log("Second Line")


// setTimeout(()=>{
//     alert("Line after 2 Sec")
// },2*1000)


// const timerID=setInterval(()=>{console.log("setInterval")},1000)

// const timeoutID=setTimeout(()=>{clearInterval(timerID)},10000)
// clearTimeout(timeoutID)


// let num=1;

// const id=setInterval(()=>{
//     if(num===10)clearInterval(id)
//     console.log(num)
//     num+=1
// },1000)


// console.log("before timeout")
// setTimeout(() => {
//     console.log("Settimeout")
// }, 0);
// console.log("After timeout")

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value===""){
//         alert("Enter the name!!")
//         return;
//     }
//     const li=document.createElement('li')
//     const dlt=document.createElement('button')
//     dlt.innerText="Delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)

//     name.value=""
// })

// console.log("Starting homework...");

// setTimeout(() => {
//   console.log("Homework done!");
//   console.log("Starting dinner...");

//   setTimeout(() => {
//     console.log("Dinner done!");
//     console.log("Getting ready to go out...");

//     setTimeout(() => {
//       console.log("Going to the playground!");
//     }, 1000); // after dinner

//   }, 1500); // dinner time

// }, 2000); // homework time

// function finishHomework(callback) {
//   console.log("Starting homework...");
//   setTimeout(() => {
//     console.log("Homework done!");
//     callback();
//   }, 2000);
// }

// function eatDinner(callback) {
//   console.log("Starting dinner...");
//   setTimeout(() => {
//     console.log("Dinner done!");
//     callback();
//   }, 1500);
// }

// function goToPlayground() {
//   console.log("Going to the playground!");
// }

// // Chained in steps, but cleaner
// finishHomework(() => {
//   eatDinner(() => {
//     goToPlayground();
//   });
// });

// console.log("Before promise")
// const p=new Promise((resolve,reject)=> {
// let done = true;
// setTimeout(()=> {
//   if (done){
//     resolve("Work has been done")
//   }else{
//     reject("Work has not been completed")
//   }
//   //reject()
// },5000)
// })
// console.log(p)
// p.then((data)=>{
//   console.log(data.name)
// }).catch((err)=>{
//   console.log(err)
// }).finally(()=>{
//   console.log("finally block")
// })
// console.log("After promise")

// const homeworkPromise = new Promise((resolve, reject) => {
//   console.log("I promise to do my homework by tomorrow.");

//   setTimeout(() => {
//     const didHomework = true;

//     if (didHomework) {
//       resolve("I finished my homework and submitted it!");
//     } else {
//       reject("I forgot to do my homework.");
//     }
//   }, 3000);
// });

// console.log(" Waiting for the homework to finish...");

// console.log(homeworkPromise); 

// function doHomework() {
//   const p = new Promise((res, rej) => {
//     let done = true;
//     setTimeout(() => {
//       if (done) {
//         console.log("Homework completed");
//         res("Homework is done");
//       } else {
//         rej("Homework not completed");
//       }
//     }, 3000);
//   })
//   return p
// }

// function eatDinner() {
//   const p = new Promise((res, rej) => {
//     let done = true;
//     setTimeout(() => {
//       if (done) {
//         console.log("Dinner completed ");
//         res("Dinner is done");
//       } else {
//         rej("Dinner is not done");
//       }
//     }, 2000);
//   })
//   return p
// }

// function goToPlayground() {
//   const p = new Promise((res, rej) => {
//     let done = true;
//     setTimeout(() => {
//       if (done) {
//         console.log("Went to the playground");
//         res("Playground time");
//       } else {
//         rej("Not allowed to go !");
//       }
//     }, 2000);
//   })
//   return p
// }

// doHomework().then((data)=>{
//   console.log(data)
//   return eatDinner()
// }).then((data)=>{
//   console.log(data)
//   return goToPlayground()
// }).then((data)=>{
//   console.log(data)
// }).catch((error)=>{
//   console.log(Error)
// }).finally(()=>{
//   console.log("Go to sleep")
// })


// function orderFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Food ordered from the app");
//             resolve();
//         }, 2000);
//     });
// }

// function prepareFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Restaurant prepared the food");
//             resolve();
//         }, 1000);
//     });
// }

// function deliverFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Delivery person delivered the food");
//             resolve();
//         }, 1000);
//     });
// }

// async function foodorder() {
//     await orderFood();
//     await prepareFood();
//     await deliverFood();
//     console.log("Eating...");
// }

// foodorder();


// async function getGreeting() {
//     return "Hello from async!";
// }
// console.log("Calling the function...");
// getGreeting().then((message) => {
//     console.log("Received:", message);
// });
// console.log("Function call initiated.");



console.log("first line")
try{
  // let sample = 345
  // console.log(sample)
  // console.log("Line after sample")
  let age = 16
  if (age<18){
    console.log("You are minor")
    throw new Error ("You are minor")
  }
  //
}catch(e){
  console.log(e)
  console.log("Hello we got the error")
}
console.log("last line")

