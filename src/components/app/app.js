import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import Error from '../error';


export default class App extends Component {

    state = {
        charView: true,
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
                    <CharacterPage/>
                    <CharacterPage/>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};
