// CRUD Create Read:filter, sort, find, includes; Update, Delete 
 
 let cars = [
    {id:1, year:1998, engine:1, brand:`Tico`},
    {id:2, year:2005, engine:1.2, brand:`Matiz`},
    {id:3, year:2010, engine:1.6, brand:`Gentra`},
    {id:4, year:2010, engine:1.5, brand:`Cobalt`},
    {id:5, year:2012, engine:2, brand:`Malibu`},
    {id:6, year:2000, engine:1.2, brand:`Damas`},
    {id:7, year:2018, engine:2.4, brand:`Tracker`}
]

const read = () => {
    cars.forEach(element => {
        console.log(element);
    });

}

const sortByEngine = () => {
    let res = cars.sort((a, b)=>a.engine - b.engine);
    console.log(res);
}

const del = (id) => {
    let res = cars.filter((value)=>value.id!==id)
    console.log(res);
}

const add =()=>{
    // cars.push({id:8, year:year.value,engine:engine.value,brand:nm.value})
    cars=[...cars, {id:8, year:year.value,engine:engine.value,brand:nm.value}]
    console.log(cars);
}


const change = (id)=>{
    let res = cars.map((value)=>value.id===id?{...value, brand:nm.value}:value)
    console.log(res);
}