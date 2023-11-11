const newDataFetch = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const data = "welcome next level web developer"
        const error = false

        if(!error){
            resolve(data)
        }else{
            reject('something went wrong')
        }
    }, 2000)
})

// newDataFetch.then((data)=> {
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

async function getData(){
    try{
        const data = await newDataFetch
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getData()