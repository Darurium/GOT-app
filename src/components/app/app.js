import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Error from '../error';


export default class App extends Component {

    state = {
        charView: true,
        selectedChar: 130,
        error: false
    }

    componentDidCatch() {
        console.log("Error")
        this.setState({error: true})
    }

    onToggleChar = () => {
        this.setState({
            charView: !this.state.charView
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {

        const {charView} = this.state;

        const randomCharToggle = charView ? <RandomChar/> : null;

        if (this.state.error) {
            return <Error/>
        }

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
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails selectedChar={this.state.selectedChar}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
