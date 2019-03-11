import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const prices = {
    salad: 4,
        bacon: 5,
        cheese: 5,
        meat: 8
};

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        ordered: false
    };

    ingredientAdder = (type, comment) => {
        let ingredients = {...this.state.ingredients};
        ingredients[type]++;
        let totalPrice = this.calculateTotalPrice(ingredients);
        this.setState({ingredients: ingredients, totalPrice: totalPrice});
        console.log(comment);
    };

    ingredientRemover = (type) => {
        if (this.state.ingredients[type] - 1 >= 0) {
            let ingredients = {...this.state.ingredients};
            ingredients[type]--;
            let totalPrice = this.calculateTotalPrice(ingredients);
            this.setState({ingredients: ingredients, totalPrice: totalPrice});
        }
    };

    calculateTotalPrice = (ingredients) => {
        let totalPrice = 0;

        for (let ingredient in ingredients) {
            totalPrice += ingredients[ingredient] * prices[ingredient];
        }

        return totalPrice;
    };

    orderDisable = () => {
        return this.state.totalPrice === 0;
    };

    orderHandler = () => {
      this.setState({ordered: true})
    };

    orderConfirmHandler = () => {
        this.setState({ordered: false})
    };

    orderCloseHandler = () => {
        this.setState({ordered: false})
    };

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    totalPrice={this.state.totalPrice}
                    adder={this.ingredientAdder}
                    remover={this.ingredientRemover}
                    ingredients={this.state.ingredients}
                    orderDisable={() => this.orderDisable()}
                    order={this.orderHandler}
                />
                <Modal orderClose={this.orderCloseHandler} style={{display: this.state.ordered ? 'initial' : 'none'}}>
                    <OrderSummary
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        orderConfirm={this.orderConfirmHandler}
                        orderClose={this.orderCloseHandler}
                    />
                </Modal>
            </>
        );
    }
}

export default BurgerBuilder;