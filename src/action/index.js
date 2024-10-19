export const DecCounter = (value)=>{

    return{
        type : "DEC",
        payLoad : value
    }

}


export const IncCounter = (value)=>{

    return{
        type : "INC",
        payLoad : value
    }

}