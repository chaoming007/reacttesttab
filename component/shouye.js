import React from 'react';

import { BrowserRouter,Route,Link,Router,Switch } from 'react-router-dom'

import Neirong1 from './Neirong1.js'
import Neirong2 from './Neirong2.js'
import Tab from './tab.js'

import "../src/css/main.scss"


class Shouye extends React.Component{
   constructor(props){
      super(props);
      this.state={
         tabDat:{
            "tabNavDat":["第一个","第二个","第三个"],
            "tabConDat":["内容1_111111111","内容2_222222222","内容3_3333333333"]
         }
      }
     
   }
   


  render(){
      return (
        <div>
            <Tab data={this.state.tabDat}></Tab>
        
        </div>
      )
  }
  
  
}

export default Shouye;
