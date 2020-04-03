import React,{Component} from 'react';

import Header from './Header';
 class Home2 extends Component{
  constructor(props){
    super(props);
    this.state=
        {msg:'我是一个首页组件',
        title:'首页组件'
    }
        
    
  } 
  

  render(){
    return(
        <div>
            <Header title={this.state.title}/>
            <hr/>
            {this.state.msg}
        </div>
    );
  }
 }

 export default Home2;