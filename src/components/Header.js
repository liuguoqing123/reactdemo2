import React,{Component} from 'react';
import Home2 from './Home2';
import News from './News';
 class Header extends Component{
  constructor(props){
    super(props);
    this.state=
        {msg:'我是一个头部组件'
    }
        
    
  } 
  
  getNews=()=>{
    alert(this.props.news.state.title);
  }

  render(){
    return(
        <div>
            {this.props.title}
            <br/>
            <button onClick={this.props.run}>調用news組件的run方法</button>
            <br/>
            <button onClick={this.props.news.getData}>調用news組件的getData方法</button>
            <br/>
            <button onClick={this.getNews}>獲取父組件的數據</button>
            <br/>
            <button onClick={this.props.news.getChildData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button>
        </div>
    );
  }
 }

 export default Header;