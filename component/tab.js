import React from 'react';
import Filter from '../filter/filter.js'

class Tab extends React.Component{
   constructor(props){
   	super(props);
   	this.state = { num:0};
   }
   
  
  // dataFormat(val){
  //    return val.substring(0,val.indexOf("_"));
  // }
   
   
  render(){
    let dat_nav=this.props.data.tabNavDat;
    let dat_con=this.props.data.tabConDat; 
    let num=0;   
     return (
        <div>
           <div className="tab">
              <ul className="tab-nav">
                 {
                   dat_nav.map((item,key)=>{
                      return <li onClick={()=>{ this.setState({ num:key })}} className={key===this.state.num?"current":""}   key={key}>{item}</li>
                   })
                 }
              </ul>
              <div className="tab-con">
                 {
                   dat_con.map((item,key)=>{
                     return <div key={ key} className={ key===this.state.num? "tab-txt current" : "tab-txt" }>{Filter.datFormat(item)}</div>
                   })
                 }
              </div>
           </div>  
        </div> 
     )
  }

}

export default Tab
