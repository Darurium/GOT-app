import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Error from '../error';
import gotService from "../../services/gotService";


export default class App extends Component {

    gotService = new gotService();

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

                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onCharSelected={this.onCharSelected}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => (`${item.name} / ${item.region}`)}
                            />
                        </Col>
                        <Col md='6'>
                            <CharDetails selectedChar={this.state.selectedChar}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                onCharSelected={this.onCharSelected}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => (`${item.name} / ${item.numberOfPages}`)}
                            />
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
