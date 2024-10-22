function fetchUserdata(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({Name: "hi",date: 123});
        }, 2000
    );
    })
}

function fetchUsercomment(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({Comment: "this  is commentr"});
        }, 3000
    );
    })
}

// method one to run this
// fetchUsercomment()
// .then((rl) => console.log(rl));

async function fetchonlyUserdata() {
    try {
        const a = await fetchUserdata();
        console.log(a);
    } catch (error) {
        console.log("failed to load userdata",error);
    }
    
}

// better method, but to run more than one functions at once we use async await promise all.
// fetchonlyUserdata();

async function hi() {
    try {
        const [j,k] = await Promise.all([fetchUserdata(), fetchUsercomment()]);
        console.log(j,k);
    } catch (error) {
        console.log("the error is:",error);
    }
    
}

hi();