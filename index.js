import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter,Route,NavLink,Router,Switch } from 'react-router-dom'
import { createStore,compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from './redux/reducers.js'
import App from './component/app.js'





import Shouye from './component/shouye.js'
import Neirong from './component/Neirong.js'

let store=createStore(reducers,compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


ReactDom.render(
   (      
       <Provider store={store }>
           <HashRouter>
              <div>
                   <ul>
                     <li><NavLink to="/neirong1"  exact >内容1</NavLink></li>
                     <li><NavLink to="/neirong2" >内容2</NavLink></li>
                   </ul> 
                 
                     <Route path="/" component={ App }>
                       <Route path="/neirong1" component={Shouye}></Route>
                       <Route path="/neirong2" component={Neirong}></Route>
                     </Route>
                
            </div>
          </HashRouter>
      </Provider>

   ),
   document.getElementById("app")
)
