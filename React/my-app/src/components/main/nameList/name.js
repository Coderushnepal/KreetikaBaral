import React from 'react'

export default class NameList extends React.Component {
    findColor() {
        let f1 = this.props.name.slice(0,1).toLowerCase();
        return f1 == 'a' || f1 == 'e' || f1 == 'i' || f1 == 'o' || f1 == 'u' ? true:false;
    }
    render() {
        return <p className={[ 'name', this.findColor() ? 'red' : 'blue'].join(' ')}> {this.props.name}</p>
    }
}