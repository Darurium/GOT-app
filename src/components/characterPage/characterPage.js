import React, {Component} from "react";
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import Error from '../error';
import gotService from "../../services/gotService";


export default class CharacterPage extends Component {

    gotService = new gotService();

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
        this.setState({error: true})
    }


    render() {

        if (this.state.error) {
            return <Error/>
        }


        return (
            <Row>
                <Col md='6'>
                    <ItemList
                        onCharSelected={this.onCharSelected}
                        getData={this.gotService.getAllCharacters}
                        renderItem={(item) => (`${item.name} / ${item.gender}`)}/>
                </Col>
                <Col md='6'>
                    <CharDetails selectedChar={this.state.selectedChar}/>
                </Col>
            </Row>
        )
    }
}