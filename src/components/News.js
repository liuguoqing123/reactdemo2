import React,{Component} from 'react';

import Header from './Header';
import Footer from './Footer';
 class News extends Component{
  constructor(props){
    super(props);
    this.state=
        {
          msg:'我是新闻组件msg',
        title:'新闻组件'
    } 
  } 

  run=()=>{
    alert('我是父组件的run方法');
  }
  
  getData=()=>{
    alert('獲取整個news組件');
  }

  getChildData=(result)=>{
    alert(result);
    this.setState(
      {
        msg:result
      }
    )
  }
  //父组件主动调用子组件的数据和方法
  getFooter=()=>{
    //alert(this.refs.footer.state.msg)
    this.refs.footer.run();
  }
  render(){
    return(
        <div>
            <Header title={this.state.title}  run={this.run} news={this}/>
            <hr/>
            {this.state.title}
            <br/>
            这是新闻组件内容。===={this.state.msg}
            <br/>
            <button onClick={this.getFooter}>获取整个底部组件</button>
            <br/>
            <hr/>
            <Footer ref='footer'/>
        </div>
    );
  }
 }

 export default News;