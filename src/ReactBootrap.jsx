import React from 'react'
import { Alert, Button, Badge, Stack } from 'react-bootstrap'

export default function ReactBootstrap() {
  return (
    <div>
        <Button>Click Me</Button>
        <Alert variant='success'>This is a alert—check it out!</Alert>
        <Stack direction="horizontal" gap={2}>
        <Badge bg="primary">Primary</Badge>
        <Badge bg="secondary">Secondary</Badge>
        <Badge bg="success">Success</Badge>
        <Badge bg="danger">Danger</Badge>
        <Badge bg="warning" text="dark">
            Warning
        </Badge>
        <Badge bg="info">Info</Badge>
        <Badge bg="light" text="dark">
            Light
        </Badge>
        <Badge bg="dark">Dark</Badge>
        </Stack>

      <div style={{marginTop: '50px'}}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </div>
      <div style={{marginTop: '100px'}}>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-secondary">Secondary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
            <Button variant="outline-info">Info</Button>
            <Button variant="outline-light">Light</Button>
            <Button variant="outline-dark">Dark</Button>
      </div>
    </div>
  )
}
