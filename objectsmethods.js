// var a={
//     name:"sumanth",
//     age:21,
//     job:"softwer",
//     salary:45000
// }
// a.area="hyderabad"
// // console.log(Object.entries(a));
// Object.freeze(a)
// // Object.seal(a)
// a.job="vamshi"
// console.log(a);
// // Object.isFrozen(a)
// Object.isExtensible(a)
// console.log(Object.isExtensible(a));
                //   TASK
        //  1
var car={
    name:"benzz",
    model:"c203",
    year:"2023"
}
Object.freeze(car)
car.price=2500000,
car.name="audi"
console.log(car); //we cant change the data when we give frezz 

// 2
var user={
    name:"sumanth",
    age:21,
    email:"myakalasumanthreddy@gamil.com"

}
Object.isFrozen(user)
console.log(Object.isFrozen(user)); //the result is FALSE because we not freez the data

// 3
var product={
    name:"santoor soap",
    catagory:"soap",
    price:40
}
Object.seal(product)
product.price=50
console.log(product);
console.log(Object.isSealed(product)); // it show true because the data is sealed we madified the data that price changed 40 to 50 

// 4
var laptop={
    brand:"HP",
    model:"i7 13th generation",
    price:65000
}
console.log(Object.keys(laptop)); // o/p: ['brand', 'model', 'price'] it displayed all keys in data

// 5
var house={
    Location:"hyderabad",
    size:"double bed room",
    price:5000000
}
console.log(Object.values(house)); // o/p: ['hyderabad', 'double bed room', 5000000] it displayed all values of given data



// Multiple Methods Questions:
// 6
var smartphone={
    phone:"iqoo z7 pro 5g",
    storage:"256gb",
    price:25000
}
Object.seal(smartphone)
smartphone.price=270000
console.log(smartphone); //here price is changed to 270000 
console.log(Object.isSealed(smartphone)); //true because it we seal the data

// 7
var book={
    title:"the monkey boy",
    author:"akashpatil",
    publishedyear:2004
}
Object.freeze(book)
book.publishedyear=2005 // not changed 
console.log(Object.isFrozen(book)); //true 

// 8
var person={
    fname:"akash",
    lname:"patil",
    age:22,
    job:"softwer",
    location:"hyderbad"
}
console.log(Object.keys(person)); //o/p - keys: ['fname', 'lname', 'age', 'job', 'location']
console.log(Object.values(person)); // o/p - values : ['akash', 'patil', 22, 'softwer', 'hyderbad']

// 9
var course={
    title:"java full stack",
    instructur:"vamshi",
    duration:"6months"
}
console.log(Object.entries(course));
delete course.duration
console.log(course); // here duration is deleted

// 10
var employee={
    name:"vamshi",
    position:"softwer empoloyee",
    salary:400000
}
Object.seal(employee)
employee.salary=50000
console.log(Object.keys(employee));
console.log(Object.values(employee));

























