import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function DataShow({ info }) {
    return (
        <>
            <Link to={`/api/info/${info._id}`}>

                <Card className='my-5 p-3 rounded'>
                    <Link to={`/api/info/${info._id}`}>
                        <Card.Img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" variant='top' alt="djvs" />
                    </Link>

                    <Card.Body>
                        <Link to={`/api/info/${info._id}`}>
                            <Card.Title as='div'>
                                <strong>{info.country}</strong>
                            </Card.Title>
                        </Link>

                        <Card.Text as='h3'>${info.title}</Card.Text>
                    </Card.Body>
                </Card>


            </Link>
        </>
    )
}

export default DataShow
