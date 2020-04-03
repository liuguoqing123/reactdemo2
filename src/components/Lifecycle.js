import React,{Component} from 'react';
 class Lifecycle extends Component{
  constructor(props){
      console.log('01构造函数');
    super(props);
    this.state=
        {
            msg:'我是一个msg'
    } 
  } 
  //组件将要挂载的时候触发生命周期函数
  componentWillMount(){
      console.log('02组件将要挂载');
  }
  //组件挂载完成的时候触发生命周期函数
  componentDidMount(){
      //DOM操作   请求数据
      console.log('04组件将要挂载');
  }

  shouldComponentUpdate(){
      console.log('01是否要更新数据');
      return true;
  }
  //将要更新的时候触发
  componentWillUpdate(){
    console.log('02组件数据将要更新');
  }
  //组件更新完成
  componentDidUpdate(){
    console.log('04组件数据将要更新');
  }
  setMassage=()=>{
      this.setState({
          msg:"我是改变后的msg"
      })
  }
  //组件销毁时触发的生命周期函数
  componentWillUnmount(){
    console.log('组件销毁了')
  }

  //父组件里面改变props传值的时候触发
  componentWillReceiveProps(){
      console.log('父子组件传值，父组件里面改变了props')
  }
  render(){
      console.log('03数据渲染rander');
    return(
        <div>
                生命周期函数演示{this.state.msg}
            <hr/>
            <button onClick={this.setMassage}>更新msg数据</button>
        </div>
    );
  }
 }

 export default Lifecycle;