console.log('Person1 : Shows Ticket')
console.log('Person2 : Shows Ticket')

const preMovie = async()=>{

    const promiseWifeBringingTics = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('Ticket'),3000)
    })

    const getPopcorn = new Promise((resolve,reject)=>resolve('Popcorn'))
    
    const addButter = new Promise((resolve,reject)=>resolve('Butter'))

    const getColdDrinks = new Promise((resolve,reject)=>resolve('Cold Drinks'))

    let ticket = await promiseWifeBringingTics;

    console.log(`Wife: I have the ${ticket}`)
    console.log('Husband: We should go in')
    console.log('Wife: No I am hungry')

    let popcorn = await getPopcorn;

    console.log(`Husband: I got some ${popcorn}`)
    console.log('Husband: We should go in')
    console.log('Wife: No I need butter on my popcorn')
    
    let butter = await addButter;

    console.log(`Husband: I got some ${butter} on popcorn`)
    console.log(`Husband: Anything else darling`)
    console.log(`Wife: Lets go we are getting late`)
    console.log(`Husband: Thank you for reminder *grins*`)

    let coldDrinks = await getColdDrinks;


    return ticket
}

preMovie().then((msg)=>console.log(`Person3 : shows ${msg}`))

console.log('Person4 : Shows Ticket')
console.log('Person5 : Shows Ticket')