import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class headerImg extends Component {
    render(){
        return(            
            <div className="headerImg">
            <div className="headerImgOverlay"></div>
            <Container className=" fullHight">
              <Row>
                  <div className="headerTextBox">
                    <Col md={{span:7}} className=" fixedWidth">
                      <h2>Skab glæde send en hilsen til en du holder af</h2>
                    </Col>
                  </div>
              </Row>
            </Container>
          </div>
        );
    }
}

export default headerImg;