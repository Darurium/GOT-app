import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {

    state = {
        charView: true
    }

    onToggleChar = () => {
        this.setState({
            charView: !this.state.charView
        })
    }

    render() {

        const {charView} = this.state;

        const randomCharToggle = charView ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharToggle}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button onClick={this.onToggleChar}>RandomChar</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
