import React, {Component} from 'react';
import { connect } from 'react-redux';


class ControlPanel extends Component {
  handleClick = () =>{
    this.props.deleteActiveStream(this.props.focusedStream)
    this.props.resetFocus()
  }
  render() {
    if(this.props.focusedStream){
    return (
        <div onClick={this.handleClick}>
        Delete Me
        </div>

      );
    }
    else return null
  }
}


const mapStateToProps = (state) => ({focusedStream: state.followingBarReducer.focusedStream})
export default connect(mapStateToProps,{})(ControlPanel);
