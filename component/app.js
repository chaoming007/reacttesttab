import React from 'react';


class App extends React.Component{
  

  render(){ 
    return(
      <div>
         范德萨发的发的说法
         {this.props.children}
      </div>
    )
  }
  
  
}

export default App;
