const fs = require("fs")
const path = "./tks.json"


const readfile = () => {
    try {
        const bufferJSON = fs.readFileSync(path)                                                                 // this returns something called bufferJSON which is binary data. Usually files are read this way to avoid errors.
        const dataJSON = bufferJSON.toString()
        return [bufferJSON, dataJSON, JSON.stringify(dataJSON)] 
    } catch (error) {
        return []
    }

}



const savetask = (task) => {
        const towrite = JSON.stringify(task)
        fs.writeFileSync(filepath, towrite)
    };
    
    const Addtask = (arg) => {
    
    }
    
    
    
    
    
    
    const command = process.argv[2]
    const argument = process.argv[3]
    
    if(command === "add"){
        Addtask(argument)
    }
    
    if(command === "removetask"){
        rmtask(argument)
    }
    
    if(command === list){
        listtask()
    }
    