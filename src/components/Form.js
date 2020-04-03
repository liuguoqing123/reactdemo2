import React from 'react';
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'我是lewis'
        }
    }
    handleUsername=(e)=>{
        this.setState({
            username: e.target.value
        });
    }
    render(){
        return(
            <div className='home'>
            <h1>form表单</h1>
            <input type='text' value={this.state.username} onChange={this.handleUsername}/>
            <br/>
            {this.state.username}
            <br/>
            <input type='text' defaultValue={this.state.username} /> 
            </div>
            
        );
    }

}

export default Form;