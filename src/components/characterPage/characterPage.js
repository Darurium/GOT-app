import React, {Component} from "react";
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Error from '../error';


export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        console.log("Error")
        this.setState({error: true})
    }


    render() {

        if (this.state.error) {
            return <Error/>
        }


        return (
            <Row>
                <Col md='6'>
                    <ItemList onCharSelected={this.onCharSelected}/>
                </Col>
                <Col md='6'>
                    <CharDetails selectedChar={this.state.selectedChar}/>
                </Col>
            </Row>
        )
    }
}