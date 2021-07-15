import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {BooksPage, CharacterPage, HousesPage} from '../pages';
import Error from '../error';
import gotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from 'react-router-dom';


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
            <Router>
                <div className="app"> 
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
                        
                        <Route path="/characters" component={CharacterPage}/>
                        <Route path="/houses" component={HousesPage}/>
                        <Route path="/books" exact component={BooksPage}/>
                        <Route path="/books/:id" component={BooksPage}/>

                        
                    </Container>
                </div>
            </Router>
        );
    }
};
