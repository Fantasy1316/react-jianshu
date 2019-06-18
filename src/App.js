import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.hanleItemDelect = this.hanleItemDelect.bind(this);
  }

  render() {
    return (
      <Fragment >
        <div>
          <input 
            className="input"
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleButtonClick}
          >Submit</button>
        </div>
        <ul>
          {this.randerTodoList()}
        </ul>
      </Fragment>
    );
  }
  randerTodoList() {
    return this.state.list.map((item, index) => {
      return (
        <Fragment
          key={index}
        >
          <TodoItem 
            content={item} 
            index={index}
            delectItem={this.hanleItemDelect}
          />
          {/*<li 
            key={index} 
            onClick={this.hanleItemDelect.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
          >
            {item}
          </li>*/}
        </Fragment>
      )
    })
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value;
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  };
  handleButtonClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }))
  };
  hanleItemDelect(index){
    let list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }
}

export default App;
