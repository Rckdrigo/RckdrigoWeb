'use client'
import { Card, Col, Row, Button, Text } from "@nextui-org/react"

export default function App() {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header
    //  css={{ position: "absolute", zIndex: 1, top: 5 }}
    >
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Software Engineer
        </Text>
        <Text h3 color="black">
          @rckdrigo
        </Text>
      </Col>
    </Card.Header>
    <Card.Body
    //  css={{ p: 0 }}
    >
        Lorem ipsum
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            En Construccion
          </Text>
          <Text color="#000" size={12}>
            In Construction
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary" onClick={() => console.log('HEY HEY')}>
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Testing UI
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  )
}
