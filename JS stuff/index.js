// let a = [0,1,2,3];
// let b = [...a];


// a[0] = 34;


// console.log(a)
// console.log(b)

// console.log(...a)



// let c = 56;

// let d = c


// c = 30

// console.log(c)
// console.log(d)




// const persons = ['Arif', 'Software Engineer',34,30000, 34,56,67,78,89,90];



// let [name, , age, salary, ...monthsProfit] = persons;


// console.log(name)
// // console.log(job)
// console.log(age)
// console.log(salary)

// console.log(monthsProfit);




// const personObj = {
//     personName : 'Arif',
//     personAge: 34,
//     personJob: 'Manager',
//     personSalary: 40000
// }




// const {personName, personAge} = personObj


// console.log(personName)
// console.log(personAge)


// console.log(...personObj)

// console.log(personObj)





// function add (a,b)
// {
//     return a + b;
// }

// console.log(add(4,5))


// let addition = (a,b) => a + b;


// console.log(addition(4,6))


// let adds = function(a,b)
// {
//     return a + b
// }


// console.log(adds(6,7))


// function mult (b, a = null )
// {
//     return a * b
// }


// console.log(mult(45))



// console.log()

// 0
// null
// undefined
// false
// NaN
// empty string

// if(-0)
//         console.log('if statement')
//     else
//     console.log('else statement')







// false && false = false
// true && false = false
// true && true = true
// false && true = false

// false || false = false
// true || false = true
// true || true = true
// false || true = true






// let a = 0;
// let b = 'Arif';


// console.log(a && b);



// console.log(a ?? b)

// let obj = {
//     name: 'Arif',
//     pets: 
//     {
//         cats: 2,
//         dogs: 4
//     }

// }


// console.log(obj?.pet?.cats)


// const array = [3,5,6,8,9]
// const array2 = [3,5,6,8,9]


// array.map((value)=>console.log(value))
// array2.map((value)=>console.log(value))
// array.map((value)=>{
//     // if(value == 3)
//     //     {
//     //         console.log('The value is equals to 3')
//     //     }
//     // else
//     // console.log("These values are not equals to")
// })





const products = [
    [
        {
            prodName: 'Headphone',
            prodCompany: 'Sony',
            prodPrice: 34000
        },
        {
            prodName: 'Mouse',
            prodCompany: 'Dell',
            prodPrice: 340
        },
    ],
    [
        {
            prodName: 'LCD',
            prodCompany: 'Samsung',
            prodPrice: 4000
        },
        {
            prodName: 'Keyboard',
            prodCompany: 'HP',
            prodPrice: 300
        }
    ]
]




const [electronics, appliances] = products


const all = [...electronics,...appliances];

console.log(all)
all.map((prod) => {

    container.innerHTML += `
<h1>${prod.prodName}</h1>
<h2>${prod.prodCompany}</h2>
<h3>${prod.prodPrice}</h3>
<hr>
`
})


let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')


btn1.addEventListener('click', () => {
    container.innerHTML = ``;
    electronics.map((prod) => {

        container.innerHTML += `
<h1>${prod.prodName}</h1>
<h2>${prod.prodCompany}</h2>
<h3>${prod.prodPrice}</h3>
<hr>
`
    })
})
btn2.addEventListener('click', () => {
    container.innerHTML = ``;
    appliances.map((prod) => {

        container.innerHTML += `
<h1>${prod.prodName}</h1>
<h2>${prod.prodCompany}</h2>
<h3>${prod.prodPrice}</h3>
<hr>
`
    })
})
// products.map((prod) => {

//     container.innerHTML += `
// <h1>${prod.prodName}</h1>
// <h2>${prod.prodCompany}</h2>
// <h3>${prod.prodPrice}</h3>
// <hr>
// `
// })



// products.map((prod) => {

//     container.innerHTML += `
// <h1>${prod.prodName}</h1>
// <h2>${prod.prodCompany}</h2>
// <h3>${prod.prodPrice}</h3>
// <hr>
// `
// })


