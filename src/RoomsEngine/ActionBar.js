import React, {Component} from 'react'

class ActionBar extends Component{
    render(){
        const buttons = this.props.actions.map((action)=> <button onClick={()=>this.props.onAction(action)}>{action.name}</button>)
        return (
        <div>
            {buttons}
        </div>)
    }

}
export default ActionBar;