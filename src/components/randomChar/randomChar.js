import React, {Component} from 'react';
import gotService from "../../services/gotService";
import Spinner from "../spinner";
import './randomChar.css';

export default class RandomChar extends Component {

    constructor() {
        super()
        this.updateChar();
    }

    gotService = new gotService();

    state = {
        char: {},
        loading: true
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25)
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {

        const {char, loading} = this.state;

        const content = loading ? <Spinner/> : <View char={char}/>

        return (
            <div className="random-block rounded">
                {content}
            </div>
        );
    }
}


const View = ({char}) => {

    return (
        <>
            <h4>Random Character: {char.name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{char.gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{char.born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{char.died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{char.culture}</span>
                    </li>
                </ul>
        </>
    )
}
