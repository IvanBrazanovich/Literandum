import { Button, Layout, Row, Col } from "antd";
import Wants from "./Wants";

const Home = () => {
  const onAddBook = () => {
    // Send to Add book page
    console.log("Hola");
    return redirect("/add-book");
  };
  return (
    <Layout>
      <Layout>
        <Row className="buttons" gutter={8} style={{ margin: "1rem" }}>
          <Col>
            <Button
              onClick={onAddBook}
              type="primary"
              style={{ display: "inline-block" }}
            >
              Add book
            </Button>
          </Col>
          <Col>
            <Button type="primary" style={{ display: "inline-block" }}>
              Add book
            </Button>
          </Col>
        </Row>
      </Layout>
      <Wants />
    </Layout>
  );
};

export default Home;
