import React from 'react';
import '../assets/css/index.css';
//引入自定义模块
import storage from '../model/storage';


class Todolist2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                // {
                //     'title': '录制angular',
                //     'checked': false
                // },
                // {
                //     'title': '录制vue',
                //     'checked': false
                // },
                // {
                //     'title': '录制react',
                //     'checked': true
                // },
                // {
                //     'title': '录制jquary',
                //     'checked': false
                // },
                // {
                //     'title': '录制easyUI',
                //     'checked': true
                // }
            ]
        }
    }

    addTitle = (e) => {
        if (e.keyCode == 13) {
            let templist = this.state.list;
            templist.push(
                {
                    'title': this.refs.title.value,
                    'checked': false
                }
            )
            this.setState({
                list: templist
            })
            this.refs.title.value='';
            //执行缓存数据
            //localStorage.setItem('todolist',JSON.stringify(templist) );
            storage.set('todolist',templist);
        }
    }
    checkBoxChange= (key) =>{
        let templist = this.state.list;
        templist[key].checked = !templist[key].checked
        this.setState({
            list: templist
        })
        //执行缓存数据
            storage.set('todolist',templist);
    }
    deleteData=(key)=>{
        let templist = this.state.list;
        templist.splice(key,1);
        this.setState({
            list: templist
        })
        storage.set('todolist',templist);
    }

    
    //生命周期函数  页面加载就会触发 
    componentDidMount(){
        //获取缓存数据
        var list = storage.get('todolist');//JSON.parse(localStorage.getItem('todolist'));
        if(list){
            this.setState({
                list: list
            })
        }

    }
    render() {
        return (
            <div>
                <header className='todolistTitle'> Todolist2<input ref='title' onKeyUp={this.addTitle.bind(this)} /></header>
                <br />
                <h2>待办事项</h2>
                <ul >
                    {
                        this.state.list.map((value, key) => {
                            if (!value.checked) {
                                return (<li key={key}>
                                    <input type='checkbox' checked={value.checked} onChange={this.checkBoxChange.bind(this,key)}/>{value.title}
                                -------<button onClick={this.deleteData.bind(this,key)}>删除</button>
                                </li>)
                            }

                        })
                    }
                </ul>
                <h2>已办事项</h2>
                <ul >
                    {
                        this.state.list.map((value, key) => {
                            if (value.checked) {
                                return (<li key={key}>
                                    <input type='checkbox' checked={value.checked} onChange={this.checkBoxChange.bind(this,key)}/>{value.title}
                                -------<button onClick={this.deleteData.bind(this,key)}>删除</button>
                                </li>)
                            }

                        })
                    }
                </ul>
            </div>

        );
    }

}

export default Todolist2;