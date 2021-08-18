import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData';

class ParentComponent extends React.Component{
    state = {
        firstName: "",
        lastName: "",
    }
    handleFirsName = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastName = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render(){
        return (
            <div>
            <Form
                formData={this.state}
                handleFirsName={this.handleFirsName}
                handleLastName={this.handleLastName}
            />
            <DisplayData formData={this.state}/>
            </div>
        )
    }
}
export default ParentComponent;