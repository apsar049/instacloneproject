import React from 'react'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'

export default function Header () {
  return (
    <div className='mb-5'>
      <Navbar
        bg='white'
        variant='white'
        style={{ height: '80px', border: '2px solid black' }}
      >
        <Container>
          <div>
            <img
              src='icon.jpg.svg'
              alt='circle'
              style={{
                paddingBottom: '25px',
                paddingRight: '10px'
              }}
            ></img>
            <NavLink
              to='/'
              style={{
                fontFamily: 'Palatino, Regular',
                fontSize: '64px',
                color: '#006238',
                textDecoration: 'none'
              }}
            >
              InstaClone
            </NavLink>
          </div>

          <NavLink to='register'>
            <img src='camera.png' alt='txt'></img>
          </NavLink>
        </Container>
      </Navbar>
    </div>
  )
}
