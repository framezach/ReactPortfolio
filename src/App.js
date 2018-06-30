import React, { Component } from 'react';
import './App.css';

import { Button, 
  Jumbotron, 
  Navbar, 
  NavbarToggler, 
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverBody,
  PopoverHeader, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col } from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal

    });
  }
  render() {
    return (
      <div>
    {/*TODO: Break down into components. Just creating a skeleton today. */}
        <Navbar color="light" light expand="md">
        <NavbarBrand href="https://www.linkedin.com/in/zach-frame/">Find me on LinkedIn!</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/framezach">GitHub</NavLink>
              </NavItem>
           </Nav>
          </Collapse>
        </Navbar>

        <Jumbotron >
          <h1 className="display-2">Zach Frame</h1>
          <p className="lead">This is a simple portfolio page built using React.</p>
          <hr className="my-2" />
          <p> I will be updating it with links to WIP projects, as well as links to completed projects as I finish them. </p>
        </Jumbotron>
  <Row>
    <Col sm="6">
      <Card>
        <CardBody>
          <CardTitle>Par-King</CardTitle>
          <CardSubtitle>This was our first project.</CardSubtitle>
          <CardText>We wanted to create a simple app using API's to find parking and parking features. We achieved many of the goals
          we began with.</CardText>
          <Button color="light"><a href="https://github.com/bootcamp-project-cwru/parking-project">Github Link</a></Button>
        </CardBody>
      </Card>
    </Col>
    <Col sm="6">
      <Card>
        <CardBody>
          <CardTitle>GitBank</CardTitle>
          <CardSubtitle>This was our second project.</CardSubtitle>
          <CardText>We wanted to create a budgeting application. Our goals quickly became too big to accomplish in the time we had. 
          This is a WIP.</CardText>
          <Button color="light"><a href="https://github.com/bootcamp-project-cwru/parking-project">Github Link</a></Button>
        </CardBody>
      </Card>
    </Col>
  </Row>
  
  <Row>
      <Col sm="12">
        <Card>
        <CardBody>
            <CardTitle>Rekt</CardTitle>
            <CardSubtitle>This is our current WIP project.</CardSubtitle>
            <CardText>This is our third project. It's a full stack application that aims to simplify 
            rec league stat keeping and team management. We were inspired after hearing the stories of 
            a current rec league manager who oversees an adult softball rec league that still keeps track of stats 
            using pen and paper. Current applications that adult rec league participants use are abysmal, and so we see 
            a niche that would both serve the community as well as be profitable. </CardText>
            <Button color="light"><a href="https://github.com/framezach/rekt">Github Link</a></Button>
            </CardBody>
        </Card>
      </Col>
  </Row>

      </div>
    );
  }
}

export default App;



// <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
//             <PopoverHeader>Par-King</PopoverHeader>
//             <PopoverBody>Our first project, "Par-King", was built to solve one simple problem; parking. We wanted to build an app that would let users 
//             check for available parking, as well as what available features that parking garage had. It gets information from a few different API's,
//             utilizes firebase to retain user inputs, and taught us a lot about web development. This was before we had dug into back end, and in the future,
//             I'd like to try to give it a real backend so it would be a viable product. One day! 
            
//             <a href="https://github.com/bootcamp-project-cwru/parking-project"> Github Repo</a>
//             </PopoverBody>
//           </Popover>