import React from 'react';

class TestApp extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(`姓名：${this.nameInput.value}`);
        //console.log(`学校：${ReactDOM.findDOMNode(this.refs.schoolInput).value}`);
    }
    render(){
        return(
            <form>
                <input type="text" ref={(nameInput) => {nameInput.focus();this.nameInput = nameInput}}/><br></br>
                {/* <input type="text" ref="schoolInput"/><br></br> */}
                <button onClick={this.handleSubmit}>提交</button>
            </form>
        )
    };
}

export default TestApp;