const greetNextLevelDeveloper = (name) => {
    const greetMessage = `Hello ${name} ,welcome to next level developer`
    console.log(greetMessage);
}
// greetNextLevelDeveloper('tufael')

export const greetNewDevelopers = (name) => {
    const message = 'Hello new developer ' + name + ' welcome your new journey'
    console.log(message);
}

const superDevelopers = (name) => {
    const say = `hi, my name is ${name}. I am super excited work with you`
    console.log(say);
}

export {greetNextLevelDeveloper, superDevelopers};