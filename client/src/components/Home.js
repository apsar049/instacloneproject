import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import moment from 'moment'

export default function Home () {
  const [data, setData] = useState([])
  console.log(data)

  const getUserData = async () => {
    const res = await axios.get('/getdata', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (res.data.status === 401 || !res.data) {
      console.log('errorr')
    } else {
      setData(res.data.getUser)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      {data.length > 0
        ? data.map((ele, i) => {
            return (
              <>
                <div style={{ marginLeft: '33.33%', paddingBottom: '50px' }}>
                  <Card
                    style={{ width: '28rem', height: 'auto' }}
                    className='ml-5'
                  >
                    <div className='d-flex justify-content-between'>
                      <Card.Title>{ele.author}</Card.Title>
                      <img src='more_icon.svg' alt='txt'></img>
                    </div>
                    <Card.Text>{ele.location}</Card.Text>
                    <Card.Img
                      style={{
                        width: '100%',
                        textAlign: 'center',
                        margin: 'auto',
                        height: '280px'
                      }}
                      src={`/uploads/${ele.imgpath}`}
                    />
                    <div className='mt-2 d-flex '>
                      <div>
                        <img src='heart.png' alt='txt'></img>
                        <h6>Like</h6>
                      </div>
                      <div style={{ paddingLeft: '20px' }}>
                        <img src='share.png' alt='txt'></img>
                        <h6 className=''>share</h6>
                      </div>
                      <div style={{ paddingLeft: '15em' }}>
                        <Card.Text>{moment(ele.date).format('L')}</Card.Text>
                      </div>
                    </div>
                    <Card.Title className='mt-2'>{ele.description}</Card.Title>
                  </Card>
                </div>
              </>
            )
          })
        : ''}
    </>
  )
}
