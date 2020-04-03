import React,{Component} from 'react';
import Home2 from './Home2';
import News from './News';
 class Footer extends Component{
  constructor(props){
    super(props);
    this.state=
        {msg:'我是一个底部组件'
    }
        
    
  } 
  
  run=()=>{
    alert('我是底部组件的run方法');
  }

  render(){
    return(
        <div>
            <h2>我是一个底部组件</h2>
            
        </div>
    );
  }
 }

 export default Footer;