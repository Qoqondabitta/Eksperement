  let cars = [
    {id:1, year:1998, engine:1, brand:`Tico`},
    {id:2, year:2005, engine:1.2, brand:`Matiz`},
    {id:3, year:2010, engine:1.6, brand:`Gentra`},
    {id:4, year:2010, engine:1.5, brand:`Cobalt`},
    {id:5, year:2012, engine:2, brand:`Malibu`},
    {id:6, year:2000, engine:1.2, brand:`Damas`},
    {id:7, year:2018, engine:2.4, brand:`Tracker`}
]

// let filter = cars.filter((value)=>value.year < 2000)
// let filter = cars.filter((value)=>value.year > 2010)
// let filter = cars.filter((value)=> value.year < 2010)
// let filter = cars.filter((value)=> value.year == 2010)
// let filter = cars.sort((a,b)=> a.year-b.year)
// let filter = cars.sort((a,b)=>a.engine-b.engine)
// let filter = cars.sort((a,b)=> a.brand.localeCompare(b.brand))
let filter = cars.filter((value)=> value.year < 2000 )
// filter.value.push(endi=`eski`)
console.log(filter.push(endi=`eski`));