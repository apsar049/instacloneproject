import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register () {
  const [author, setAuthor] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')
  const history = useNavigate()
  const addUserData = async e => {
    e.preventDefault()

    var formData = new FormData()
    formData.append('author', author)
    formData.append('location', location)
    formData.append('description', description)
    formData.append('photo', file)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const res = await Axios.post('/register', formData, config)

    if (res.data.status === 401 || !res.data) {
      console.log('errorr')
    } else {
      history('/')
    }
  }

  return (
    <div className='container mt-8 '>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            name='author'
            onChange={e => setAuthor(e.target.value)}
            placeholder='author'
            style={{ marginBottom: '10px' }}
          />
          <Form.Control
            type='text'
            name='location'
            onChange={e => setLocation(e.target.value)}
            placeholder='location'
            style={{ marginBottom: '10px' }}
          />
          <Form.Control
            type='text'
            name='description'
            onChange={e => setDescription(e.target.value)}
            placeholder='description'
            style={{ marginBottom: '10px' }}
          />
        </Form.Group>

        <Form.Group
          className='mb-3'
          style={{
            marginBottom: '10px',
            borderRadius: '2px '
          }}
        >
          <Form.Control
            type='file'
            name='photo'
            onChange={e => setFile(e.target.files[0])}
            placeholder=''
          />
        </Form.Group>

        <Button variant='primary' type='submit' onClick={addUserData}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
