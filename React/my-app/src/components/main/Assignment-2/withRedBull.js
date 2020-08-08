import React from 'react';
const withRedBull=(WrappedComponent) => {
    class UserWrapper extends React.Component {
        constructor(props){
            super(props);
            
            this.state={
               wings:null
            }
        }

        flyaway = () => {
            this.setState({wings: 'Yeaaahh!! I have wings now. I can fly.'})
        }

        render() {  
                return <WrappedComponent wings={this.state.wings} flyaway={this.flyaway} {...this.props}/>
        
        }
    }
    return UserWrapper;
};
export default withRedBull;