// // let temp=fetch('https://restcountries.com/v2/all')
// // .then((data)=>{return data.json()})
// // .then((v1)=>
// // {
// //    let cc=v1[0].name
  
// //     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=82b75d38197a57dd76ae689441ed9e86`)  
    
// // }).then((v2)=>{
// //     return v2.json();
// // }).then((v3)=>{
// //     console.log(v3)
// // }).catch((error)=>{console.log(error)}).catch((error)=>console.log(error))
// // console.log(temp)




// async function foo()
// {
//     let data=await  "HI"
//     console.log(data)
//     return data
// }
// console.log(foo())
// // foo();


// // create a function return a promise

// function fun1()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("Hello you are rejected")
//         }, 3000);
//     })
// }

// function fun2()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject("hello fun2 got rejected")
//         }, 3000);
//     })
// }

// async function compute()
// {
//     try{
//     var res=await fun1()    
//     var res1=await fun2()
//     console.log(res)
//     console.log(res1)
//     }
//     catch(error)
//     {
// console.log(error)
//     }
// }

// compute();

// //using promise

// let temp=fetch('https://restcountries.com/v2/all')
// .then((data)=>{return data.json()})
// .then((v1)=>
// {
//    let cc=v1[0].name
  
//     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=82b75d38197a57dd76ae689441ed9e86`)  
    
// }).then((v2)=>{
//     return v2.json();
// }).then((v3)=>{
//     console.log(v3)
// }).catch((error)=>{console.log(error)}).catch((error)=>console.log(error))
// console.log(temp)

// //using async and await
// let cc;
// let resturi='https://restcountries.com/v2/all'
// async function pro(){
//     try{
// let restcont= await fetch(resturi);
// let restcontdata=await restcont.json();
// cc=restcontdata[2].name;
// let openweathermap= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=82b75d38197a57dd76ae689441ed9e86`);
// let openweathermapdata=await openweathermap.json();
// console.log(openweathermapdata.main.temp)
//     }
//     catch(error)
//     {console.log('something went wrong')}
// }
// pro()



async function getcoviddetail()
{
let input=document.getElementById('countryname').value;    
let getcoviddata=await fetch(`https://api.covid19api.com/total/dayone/country/${input}`)
let jsondata=await getcoviddata.json();
console.log(jsondata)
var count=0;
for(var data in jsondata)
{
    count=count+1;
    console.log(
    `Day ${count}:
    Active Cases:${jsondata[data].Active} 
    Recoverd Cases:${jsondata[data].Recovered}
    Death Cases:${jsondata[data].Deaths}
    Confirmed Cases:${jsondata[data].Confirmed}`)
}
}
