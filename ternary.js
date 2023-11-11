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
    //     name: 'baburhat',
    // }
}
// console.log(address.postal?.code);

const mypostal = address.postal?.code ? address.postal.code : false;
console.log(mypostal);