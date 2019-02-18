import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GreetingForm from './GreetingForm';
import flower from '../img/flower.jpg';

class centerElements extends Component {
    render(){
        return(
            <div>
            <Container>
              <Row>
                  <Col md={{ span: 6}}>
                    <h2>Brug formen til at sende en hilsen</h2>
                  </Col>
              </Row>
              <Row>
                <Col xs={{span:12, offset:0}}>
                  <Row>
                    <Col md={{ span: 6}}>
                      <img alt="flower" src={flower}/>
                    </Col>
                    <Col md={{ span: 6}}>
                      <GreetingForm form={this.props.form} customCategory={this.props.customCategory} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} toggleChange={this.props.toggleChange}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Tidligere hilsner</h2>
                </Col>
              </Row>
              <Row>
                {this.props.greetings.map((data, index) => {
                                      return <Col xs={{span:12}} sm={{span:4}} md={{span:3}} lg={{span:3}} key={index} className="GreetingsBox">
                                      <div className="Greetings">
  
                                        <div className="category">
                                          <p>{data.category}</p>
                                        </div>
                                        <div className="comment">
                                          <p>{data.comment}</p>
                                        </div>
                                        <div className="from">
                                          <p className="name"><b>{data.name}</b></p>
                                          <p className="email">{data.email}</p>
                                          <div className="date">
                                            <p><i>{data.date}</i></p>
                                          </div>
                                        </div>

                                      </div>
                                      </Col>
                                  })}
              </Row>
            </Container>
          </div>
        );
    }
}

export default centerElements;