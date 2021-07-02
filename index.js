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
//const newPets = pets.filter(({age})=>{return age<5}) //Filter mais direto


const petNames = pets.map((pet)=>{  //map realizado com o nome dos pets(criação de um novo array com os nomes dos pets)
    return pet.name
})

const forEachPetNames = []

pets.forEach((pet)=>{
    forEachPetNames.push(pet.name)
})

const totalAge = pets.reduce((totalAge,pet)=>{ //reduce para realizar um somatória de todas as idades dos pets
    return totalAge += pet.age
}, 0)

console.log("\nALL\n");
console.log( pets );
console.log("\nFILTER\n");
console.log(newPets);
console.log("\nMAP\n");
console.log(petNames);
console.log("\nMAP WITH FOR\n");
console.log(forEachPetNames);
console.log("\nREDUCE\n");
console.log(totalAge);