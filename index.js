const pets =[
    {
        name:'rex',
        type: 'dog',
        age: 10,
        weight:5
    }, 
    {
        name:'bolinha',
        type: 'dog',
        age: 8,
        weight:6
    },
    {
        name:'miau',
        type: 'cat',
        age: 2,
        weight:3
    }, 
    {
        name:'peixe',
        type: 'fish',
        age: 1,
        weight:1
    }
]


const eMenorQueCinco=(age)=>{
    return age<5
}
const newPets = pets.filter(({age})=>{return eMenorQueCinco(age)})
//const newPets = pets.filter(({age})=>{return age<5}) //direct filter


const petNames = pets.map((pet)=>{  //map made with name of pets(criating of a new array of pets name)
    return pet.name
})

const forEachPetNames = []

pets.forEach((pet)=>{
    forEachPetNames.push(pet.name)
})

const total = pets.reduce((total,pet)=>{ //reduce for make a sum of age from pet and yours weights 
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight : total.totalWeight + pet.weight
    }
}, {totalAge:0, totalWeight: 0})

const totalWeightDog = pets.reduce((totalWeight,pet)=>{
    if(pet.type !== 'dog') return totalWeight //make use a filter for select the targets of reduce
    return totalWeight + pet.weight
},0)

const dogsWeight = pets.filter((pet)=>{  //a union of filter and reduce 
}).reduce((total,pet)=>{
    return total + pet.weight
},0)

console.log("\nALL\n");
console.log( pets );
console.log("\nFILTER\n");
console.log(newPets);
console.log("\nMAP\n");
console.log(petNames);
console.log("\nMAP WITH FOR\n");
console.log(forEachPetNames);
console.log("\nREDUCE\n");
console.log(total);
console.log("\nREDUCE OF DOGS\n");
console.log(totalWeightDog);
console.log("\nFILTER WITH REDUCE\n");
console.log(dogsWeight);