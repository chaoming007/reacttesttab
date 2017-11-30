import React from 'react';
import { connect } from 'react-redux'
import { ADDFUN,JIANFUN } from '../redux/action1.js'


// let mapStatetoProps=(state)=>{
// 
//     return {
//       num:state.action_1.num    
//     }  
// };
// let actionCreators={ ADDFUN, JIANFUN};

@connect(state=>{ return {num:state.action_1.num}},{ ADDFUN, JIANFUN})


class Neirong extends React.Component{
  
  
  shouldComponentUpdate(nextProps, nextState) {
      console.log(nextProps.num,"-----",nextState);
      return true;
  }

  render(){ 
    
    let num=this.props.num;
    let add=this.props.ADDFUN;
    let jian=this.props.JIANFUN;
      return (
          <div>
              <div>这是结果值：{num}</div>
              <button className="btn" onClick={()=>{ add(2)} }>增加</button>
              <button className="btn" onClick={()=>{ jian(2)} }>减少</button>
              
              
               
            
               
          </div>
      )
  }
  
  
}



export default Neirong;
