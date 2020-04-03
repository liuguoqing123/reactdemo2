import React from 'react';
class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'form表单2',
            name: '',
            sex: '1',
            city: '',
            citys: [
                '北京', '上海', '西安'
            ],
            hobby: [
                {
                    'title': '睡觉',
                    'checked': true
                },
                {
                    'title': '吃饭',
                    'checked': false
                },
                {
                    'title': '逛该',
                    'checked': false
                }
            ],
            info: ''
        }
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    handleSubmit = (e) => {
        //组织submit的提交事件
        e.preventDefault();
        console.log(this.state.name, this.state.sex, this.state.city, this.state.hobby, this.state.info)
    }
    handleSex = (e) => {
        this.setState({
            sex: e.target.value
        });
    }
    handleCitys = (e) => {
        this.setState({
            city: e.target.value
        });
    }
    handleHobby = (key) => {
        var hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobby: hobby
        });
    }
    handleTextArea = (e) => {
        this.setState({
            info: e.target.value
        });
    }
    render() {
        return (
            <div className='home'>
                <li>{this.state.msg}</li>

                <form onSubmit={this.handleSubmit}>
                    用户名： <input type="text" value={this.state.name} onChange={this.handleName} /><br />
                性别：<input type="radio" value="1" checked={this.state.sex === '1'} onChange={this.handleSex} />男
                    <input type="radio" value="2" checked={this.state.sex === '2'} onChange={this.handleSex} />女
                    <br />
                居住城市：
                <select value={this.state.city} onChange={this.handleCitys}>
                        {
                            this.state.citys.map((value, key) => {
                                return <option key={key}>{value}</option>
                            })
                        }

                    </select>
                    <br />
                爱好：{
                        this.state.hobby.map((value, key) => {
                            return (
                                <span key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this, key)} />{value.title}
                                </span>
                            )
                        })
                    }
                    <br />
                备注:
                <textarea value={this.state.info} onChange={this.handleTextArea} />
                    <br />
                    <input type="submit" defaultValue="提交" />

                </form>

            </div>
        );
    }
}

export default Form2;