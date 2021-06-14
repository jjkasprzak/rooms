import React, {Component} from 'react'

import './ActionBar.css';
class ActionBar extends Component{
    render(){
        const buttons = this.props.actions.map((action)=> <button onClick={()=>this.props.onAction(action)}>{action.name}</button>)
        return (
        <div className="ActionBar">
            {buttons}
        </div>)
    }

}
export default ActionBar;