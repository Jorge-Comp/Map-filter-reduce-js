const pets =[
    {
        name:'rex',
        type: 'dog',
        age: 10
    }, 
    {
        name:'miau',
        type: 'cat',
        age: 2
    }, 
    {
        name:'peixe',
        type: 'fish',
        age: 1
    }
]


const eMenorQueCinco=(age)=>{
    return age<5
}
const newPets = pets.filter(({age})=>{return eMenorQueCinco(age)})
//const newPets = pets.filter(({age})=>{return age<5})


const petNames = pets.map((pet)=>{
    return pet.name
})

const forEachPetNames = []

pets.forEach((pet)=>{
    forEachPetNames.push(pet.name)
})

console.log("ALL\n");
console.log( pets );
console.log("FILTER\n");
console.log(newPets);
console.log("MAP\n");
console.log(petNames);
console.log("MAP WITH FOR\n");
console.log(forEachPetNames);