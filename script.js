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



// async function getcoviddetail()
// {
//     try{
// let input=document.getElementById('countryname').value;    
// let getcoviddata=await fetch(`https://api.covid19api.com/total/dayone/country/${input}`)
// let jsondata=await getcoviddata.json();
// console.log(jsondata)
// var count=0;
// for(var data in jsondata)
// {
//     count=count+1;
//     console.log(
//     `Day ${count}:
//     Active Cases:${jsondata[data].Active} 
//     Recoverd Cases:${jsondata[data].Recovered}
//     Death Cases:${jsondata[data].Deaths}
//     Confirmed Cases:${jsondata[data].Confirmed}`)
// }
//     }
//     catch(error){
//         console.log("something went wrong")
//     }
// }


let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v2/all',true)
xhr.send()
xhr.onload=(()=>{
var data=xhr.response;
data=JSON.parse(data)

//a.Get all the countries from Asia continent /region using Filter function

var result=data.filter((newval)=>{
    if(newval.region=="Asia")
    {          
       return true
    }
})
console.log('a.Get all the countries from Asia continent /region using Filter function')
console.log(result)


//b.Get all the countries with a population of less than 2 lakhs using Filter function

var population=data.filter((newval)=>{
if(newval.population<200000)
{    
    return true
}

})
console.log('b.Get all the countries with a population of less than 2 lakhs using Filter function')
console.log(population)

//c.Print the following details name, capital, flag using forEach function
var arr=[]
data.forEach(element => {
    var obj=new Object();
    obj.name=element.name;
    obj.capital=element.capital;
    obj.flag=element.flag;
    arr.push(obj)
    
});
console.log(arr)

//d.Print the total population of countries using reduce function
var i=0;
var res=data.reduce((acc,currentValue) =>{

    let cv=data[i].population
    i=i+1
    return parseInt(acc) +parseInt(cv)
    
  },0)
console.log(res)

//e.Print the country which uses US Dollars as currency.

var response=data.filter((element)=>{
    
    for(var i in element.currencies)
    {
        if(element.currencies[i].symbol=='$')
        {
            console.log(element)
        }
    }
})

})
