import React from 'react';
import './Auth.scss'
import { Form, Button } from "semantic-ui-react";

const Auth = () => {
  return (
    <div className={'auth'}>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>

    </div>
  )
}

export default Auth;
