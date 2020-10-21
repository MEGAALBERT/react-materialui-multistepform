import React, { Component } from 'react';
import FormUserDetails from "./FormUserDetails";

export class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        ocupation: '',
        city: '',
        bio: '',
    }

    //Proceed to next step
    nextStep=()=>{
      const { step } = this.state;
      this.setState({
         step: step + 1
      })
      console.log(step)
    }

    //Go back to previous step
    prevStep=()=>{
      const { step } = this.state;
      this.setState({
         step: step - 1
      })
    }

    //Handle fields change
    handleChange=(input)=>e=>{
       this.setState({[input]: e.target.value }) 
       console.log(this.state)
    }

    render() {

        const { step } = this.state;
        const { firstName, lastName, email, ocupation, city, bio } = this.state;
        const values = { firstName, lastName, email, ocupation, city, bio }

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
                )
            case 2:
                return <h1>FormPersonalDetails</h1>
            case 3:
                return <h1>Confirm</h1>
            case 4:
                return <h1>Success</h1>
            default:
                return null
        }
    }
}

export default UserForm