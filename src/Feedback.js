import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'

export default class Feedback extends Component {
    state={
        feedback:"",
    }

    onSubmit()
  {
    alert("Your Information Has Been Added To Our Database, Thankyou!!")
    firebase.database().ref(`/${this.state.profession}`).push(
        {
            Feedback:this.state.feedback,
        }
    )}
  render() {
    return (
      <div>

        <Form>
        <Form.TextArea label='Feedback' placeholder='Help us improve.....' onChange={(text)=>{ this.setState({feedback:text.target.value}) }}/>
        <Link to="/">
        <Form.Button onClick={()=>{this.onSubmit()}}>Submit</Form.Button>
        </Link>        
        </Form>    
        

      </div>
    )
  }
}
