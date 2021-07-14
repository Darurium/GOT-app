import React, {Component} from "react";
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import Error from '../error';
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock";


export default class BooksPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: 12,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({error: true})
    }


    render() {

        if (this.state.error) {
            return <Error/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails 
                selectedItem={this.state.selectedBook}
                getData={this.gotService.getBook}
            >
                <Field field="numberOfPages" label="NumberOfPages"/>
                <Field field="publiser" label="Publiser"/>
                <Field field="released" label="Released"/>
            </ItemDetails>
        )      


        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}