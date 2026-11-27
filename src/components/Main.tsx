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
    <main className="home-page">
      <Container className="home-content">
        <div className="home-intro">
          <p className="home-eyebrow">A practical guide to React</p>
          <h1>React concepts<span>.</span></h1>
          <p className="home-summary">
            Explore the ideas that power interactive React applications.
          </p>
        </div>

        <Row className="g-4">
          {concepts.map((concept) => (
            <Col key={concept.title} xs={12} md={8} lg={6}>
              <Card className="concept-card h-100">
                <Card.Body className="d-flex flex-column p-4">
                  <Badge bg="success" className="align-self-start mb-3">
                    {concept.badge}
                  </Badge>
                  <Card.Title as="h2" className="concept-title h4">
                    {concept.title}
                  </Card.Title>
                  <Card.Text className="text-secondary flex-grow-1">
                    {concept.text}
                  </Card.Text>
                  <Button
                    variant="outline-success"
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