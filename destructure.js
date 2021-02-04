//object desturcture

const person = {name: 'Jack William', age: 18, Job: 'facebook', address: 'kochu Khet', phone: '0714516154', friends: ['tom hancks', 'tom']}


// const address = person.address;
// const names = person.age;

// const { name, address, friends, phone } = person;
// console.log(address, name, phone, friends);

const complexObject = {

    names: 'abdul',
    info: {
        address: 'Kola bagan',
        leader: "Tiger Leader"
    }
}

const {leader} = complexObject.info;
console.log(leader)


// array destructure 
const friends = ['sakib khan', 'arman khan', 'kan helal', 'salman kahan'];
const [firstFriend, nextFriend, ...restFriend] = friends;

// console.log(firstFriend, nextFriend, restFriend);
