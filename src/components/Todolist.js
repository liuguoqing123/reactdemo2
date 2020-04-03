import React from 'react';
import '../assets/css/index.css'


class Todolist extends React.Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }

    handleAdd=()=>{
        console.log(this.refs.addInput.value);
        var tempList = this.state.list;
        tempList.push(this.refs.addInput.value);
        this.setState(
            {
                list:tempList
            }
        );
        this.refs.addInput.value='';
    }

    handleDelete=(key)=>{
        console.log(key);
        var tempList = this.state.list;
        tempList.splice(key,1);
        this.setState(
            {
                list:tempList
            }
        );
    }

    render(){
        return(
            <div className='home'>
            <h2>form表单TodoList</h2>
            <br/>
            <input ref='addInput'/><button onClick={this.handleAdd}>增加</button>
            <hr/>
            <br/>
            <ul className='list'>
            {
                this.state.list.map((value,key)=>{
                return(
                <li key={key} >{value} ------<button onClick={this.handleDelete.bind(this,key)}>删除</button></li> 
                )
                })
            }
            </ul>
            </div>
            
        );
    }

}

export default Todolist;