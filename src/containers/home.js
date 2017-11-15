import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as indexActions from './../actions/index'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }

    this.handleGetAll = this.handleGetAll.bind(this);
  }
  handleGetAll(){
    this.props.getAll()
  }
  iterateItems(){
    if(this.props.items.length > 0){
      return this.props.items.map((i,k) => {
        return (
          <tr key={k}>
            <td>{i.id}</td>
            <td>{i.name}</td>
          </tr>
        )
      })
    }
  }

  render(){
    return (
      <div>
        <table>
          {this.iterateItems()}
        </table>
        <button onClick={this.handleGetAll} >Obetener Data </button>
      </div>
    )
  }
}


function mapStateToProps(state){
    return { items: state.items }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAll: indexActions.getAll
      // showLessMenuOnDesktop: menuActions.showLessMenuOnDesktop
    }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
