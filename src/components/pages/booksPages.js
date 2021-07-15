import React, {Component} from "react";
import ItemList from '../itemList';
import Error from '../error';
import gotService from "../../services/gotService";
import { withRouter } from "react-router";


class BooksPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }


    render() {

        if (this.state.error) {
            return <Error/>
        }

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}/>
        )
    }
}

export default withRouter(BooksPage);