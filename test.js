const fakerequestpromise = (url)=>{
    return new Promise((resolve,reject)=>{
        const delay=Math.floor(Math.random()*4500)+500
        setTimeout(()=>{
            if(delay>2000){
                reject('connection timeout')
            }
            else{
                resolve(`you got data from ${url}`)
            }

        },delay)
    })
}

// fakerequestpromise('book1.com')
// .then((data)=>{
//     console.log("success1",data)
//     fakerequestpromise('book2.com')
//     .then((data)=>{
//     console.log("success2",data)
//     fakerequestpromise('book3.com')
//     .then((data)=>{
//     console.log("success3",data)
//     fakerequestpromise('book4.com')
//     .then((data)=>{
//     console.log("success4",data)
//      })
//     .catch((err)=>{
//     console.log("error4",err)
//     })
//      })
//     .catch((err)=>{
//     console.log("error3",err)
//     })
//      })
//     .catch((err)=>{
//     console.log("error2",err)
//     })
// })
// .catch((err)=>{
//     console.log("error1",err)
// })

fakerequestpromise('book1.com')
    .then((data)=>{
    console.log("success1",data)
    return fakerequestpromise('book2.com')
    .then((data)=>{
    console.log("success2",data)
    return fakerequestpromise('book3.com')
    .then((data)=>{
    console.log("success3...............",data)
    
     })
     })
     })
    .catch((err)=>{
    console.log("error",err)
    })