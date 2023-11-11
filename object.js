// array destructuring main thing is position
const myFriends = [ 'sujoy', 'rakib', 'habib', 'sonjoy', 'polash', 'sazid']
// console.log(myFriends[0]);

// const [best, normal, good, average, ] = [ 'sujoy', 'rakib', 'habib', 'sonjoy', 'polash', 'sazid']
const [best, normal, good, average, ] = myFriends
// console.log(average);

// object destructuring main thing is object name or variable name is fixed
const address = {
    houseNo: 3344,
    houseName: 'khan bari',
    road: '3453',
    road: 'G T road',
    place: 'kasem bazar',
    area: 'charman ghat',
    location: 'chandpur',
    // postal: {
    //     code: 3602,
    // }
}
const {place, road} = address;
// console.log(place, road, );
// console.log(address.location);
console.log(address["houseName"]);

const myArea = "area"
console.log(address?.postal?.code);