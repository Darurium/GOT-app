import React, {Component} from "react";
import ItemDetails, {Field} from '../itemDetails';
import gotService from "../../services/gotService";

export default class BooksItem extends Component {

    gotService = new gotService();

    render() {
        return (
            <ItemDetails 
                selectedItem={this.props.bookId}
                getData={this.gotService.getBook}>
                <Field field="numberOfPages" label="NumberOfPages"/>
                <Field field="publiser" label="Publiser"/>
                <Field field="released" label="Released"/>
            </ItemDetails>
        )
    }
}