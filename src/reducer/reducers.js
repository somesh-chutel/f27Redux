let intialState = 40;

export const changeCounter = (state = intialState,action)=>{

    switch (action.type){

        case "DEC" : return state - action.payLoad; 

        case "INC" : return state + action.payLoad;

        default : return state;

    }

}