const fs = require("fs")
const path = "./tks.json"


const readfile = () => {
    try {
        const bufferJSON = fs.readFileSync(path)                                                                 // this returns something called bufferJSON which is binary data. Usually files are read this way to avoid errors.
        const dataJSON = bufferJSON.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        console.log("hi", error);
        return []
    }

}

// const command = process.argv[2]
const argument = process.argv[2]

const savetask = (task) => {
        const towrite = JSON.stringify(task)
        fs.writeFileSync(path, towrite)
    };
    


const Addtask = (arg) => {
    const filcontent = readfile()
    filcontent.push( {arg} ) // if u push wo {} it pushed direcly as buffer always push as object
    savetask(filcontent)
}
    
Addtask(argument)