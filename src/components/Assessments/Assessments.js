import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Chat  } from "react-bootstrap-icons";
import asseJson from "../../api/odas/index";

const Assessments = () => {
  const [assessMent, setAssessments] = useState([]);
  Promise.resolve(asseJson.get()).then(data => {
    setAssessments(data['assessments']);
  })
  return (
    <Container fluid>
       
    <Row>
      <Col xs={12} md={7}> <h6 className="text-h-color">AVAILABLE</h6>   
      </Col>     
    </Row>
      <Row className="justify-content-md-center">        
        {assessMent && assessMent.length > 0 && assessMent.map((userObj, index) => (
          <Card style={{ width: '50rem' }}>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={1}>                 
                    {
                      (() => {
                        if (userObj.tag === 'Health') {
                          return (
                            <Button className="custom-red"><Chat /></Button>
                          )
                        } else if (userObj.tag === 'Food') {
                          return (
                            <Button className="custom-blue"><Chat /></Button>
                          )
                        } else if (userObj.tag == '') {
                          return (
                            <Button className="custom-darkblue"><Chat /></Button>
                          )
                        }else {
                          return (
                            <Button className="custom-purple"><Chat /></Button>
                          )
                        }
                      })()
                    }
                  
                </Col>
                <Col xs={8} >
                  <div className="d-flex flex-column">
                    <h5 className="mb-1 text-title-align text-p-color" >{userObj.title}</h5>
                    <p className="mb-0 text-title-align">{userObj.author}</p>
                  </div>
                </Col>
                <Col  xs={12} md={3} className=" block"  >
                  <Button className="button_background block" onClick={() => alert(`${userObj.title}`)}>
                  Get Started  &gt;
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
};

export default Assessments;