import React, {Component} from 'react';
import gotService from "../../services/gotService";
import './charDetails.css';


const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}

export {
    Field
}


export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedChar !== prevProps.selectedChar) {
            this.updateChar()
        }
    }

    updateChar() {
        const {selectedChar} = this.props;
        if (!selectedChar) {
            return
        }

        this.gotService.getCharacter(selectedChar)
            .then(char => {
                this.setState({char})
            })
    }

    render() {

        if (!this.state.char) {
            return <span>Выберите персонажа</span>
        }

        const {char} = this.state;
        const {name} = char;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }
                </ul>
            </div>
        );
    }
}