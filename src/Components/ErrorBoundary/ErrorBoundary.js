import React, { Component } from 'react'


class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = ( error, info) => {
        this.setState({hashError: true, errorMessage : error});
    }
     
    render() {
        if(this.state.hasError){
        return <h1>Somthing went wrong</h1>
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;