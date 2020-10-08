/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import { Row, Col, Button } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          
          <div className="content-center brand">
          {/* <div className="title">
              <h3>Carousel</h3>
            </div> */}
            {/* <Row>
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Bootstrap carousel
                </h1>
                <h3 className="d-none d-sm-block">
            UX Designer specializing in context-driven design, passionate about finding innovative solutions for sophisticated business problems with a human-centered approach.
            </h3>
                <Button
                  className="mt-4"
                  color="warning"
                  href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alerts"
                >
                  See all components
                </Button>
              </Col>
              </Row> */}
            {/* </Container> <Col className="mt-5 mt-sm-0" sm="3" xs="6"> */}
            <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/img6.jpg")}
                  style={{ width: "150px" }}
                />
            <h2 className="h1-seo">Hello • I'm Yuliia  
            </h2>
            <h3 className="d-none d-sm-block">
            UX Designer specializing in context-driven design, passionate about finding innovative solutions for sophisticated business problems with a human-centered approach.
            </h3>
            <Button
                  className="mt-4"
                  color="primary"
                  href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alerts"
                >
                 <i className="tim-icons icon-spaceship" /> Look at my portfolio
                </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
