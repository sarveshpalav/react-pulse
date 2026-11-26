import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';

const concepts = [
  {
    title: 'Components',
    badge: 'Building blocks',
    text: 'Create reusable pieces of interface that can be composed together to build complete applications.',
  },
];

interface MainProps {
  onLearnMore: () => void;
}

const Main = ({ onLearnMore }: MainProps) => {
  return (
    <main className="py-5">
      <Container>
        <div className="mb-4">
          <h1 className="fw-bold">React concepts</h1>
          <p className="text-secondary mb-0">
            Explore the ideas that power interactive React applications.
          </p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {concepts.map((concept) => (
            <Col key={concept.title}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="d-flex flex-column p-4">
                  <Badge bg="primary" className="align-self-start mb-3">
                    {concept.badge}
                  </Badge>
                  <Card.Title as="h2" className="h4">
                    {concept.title}
                  </Card.Title>
                  <Card.Text className="text-secondary flex-grow-1">
                    {concept.text}
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    className="align-self-start"
                    onClick={onLearnMore}
                  >
                    Learn more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Main;