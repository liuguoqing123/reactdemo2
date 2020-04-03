import React from 'react';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            msg:'我是一个Home组件',
            message:'我是一个message',
            name:'我是一个name'
        }
        //第二种 改变this指向方法。
        this.getMessage = this.getMessage.bind(this)
    }

    run(){
        alert('我是一个run方法！');
    }
    getData(){
        alert(this.state.msg);
    }
    getMessage(){
        alert(this.state.message);
    }
    getName=()=>{
        alert(this.state.name);
    }
    setData=()=>{
        this.setState({
            msg: '我是一个Home组件,这是改变后的值！'
        });
    }
    setName=(name)=>{
        this.setState({
            name: name
        });
    }
    render(){
        return(
            <div className='home'>
                lewis:{this.state.msg}
                <hr/>
                <button onClick={this.run}>点击run方法事件</button>
                <br/>
                <br/>
                <button onClick={this.getData.bind(this)}>获取数据方法1</button>
                <br/>
                <br/>
                <button onClick={this.getMessage}>获取数据方法2</button>
                <br/>
                <br/>
                <button onClick={this.getName}>获取数据方法3</button>
                <br/>
                <br/>
                <button onClick={this.setData}>改变state的值</button>
                <br/>
                <br/>
                <button onClick={this.setName.bind(this,'国庆')}>改变state的值</button>



            </div>
            
        );
    }

}

export default Home;