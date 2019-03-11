import React, {Component} from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render() {
        const ingridientsList = Object.keys(this.props.ingredients).map((ingredient) => <li key={ingredient}>{ingredient} : {this.props.ingredients[ingredient]}</li>);

        return (
            <>
                <h3>Your order</h3>
                <p>Your burger consists of:</p>
                <ul>
                    {ingridientsList}
                </ul>
                <p>Total Price: {this.props.price.toFixed(2)}</p>
                <Button type="Accept" onClick={this.props.orderConfirm}>Continue</Button>
                <Button type="Cancel" onClick={this.props.orderClose}>Cancel</Button>
            </>
        );
    }
}

export default OrderSummary;