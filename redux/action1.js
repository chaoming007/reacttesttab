let defaultState={num:1};

export function action_1(state=defaultState,action){
  
     switch(action.type){
        case "ADD":
           state.num+=action.payload;
           return {...state}
           break;
        case "JIAN":
            state.num-=action.payload;
            return {...state}
            break;
        default:
           return state;

     }
  
}

export function ADDFUN(num){
   return{
      type:"ADD",
      payload:num
   }
}

export function JIANFUN(num){
   return{
      type:"JIAN",
      payload:num
   }
}
