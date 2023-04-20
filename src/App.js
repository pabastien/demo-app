import './App.css'
import { Button, Card, Container } from 'react-bootstrap'
import { data } from './data'
import { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Popup from './components/Popup'

function App() {
  const popupRef = useRef();

  return (
    <div className="App">
      <Container className="p-4">
        <Card bg="light" style={{ width: "28rem" }}>
          <Card.Header>{data.name}</Card.Header>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <div className='buttons'>
              <Button variant="primary" onClick={() => popupRef.current.handleShow() }>More...</Button>
              <Button variant="primary">Choose</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Popup ref={popupRef} {...data}/>
    </div>
  )
}

export default App
