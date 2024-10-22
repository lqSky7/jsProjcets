function hi(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            kk = false;
            if (kk) {
                resolve("hi");
            }
            else {reject("no"); }
        },3000)
        
    });
}
hi()
    .then((ll) => {return console.log(ll);})
    .catch((err) => {return console.log(err);});

