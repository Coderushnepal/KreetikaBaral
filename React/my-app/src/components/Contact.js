import React from 'react';

class Contact extends React.Component {
    render(){
        // console.log(this.props);
        return (
            <div>
                This is contact page.
                <h2>{this.props.data}</h2>
            </div>
            
        );
    }
}

export default Contact;
