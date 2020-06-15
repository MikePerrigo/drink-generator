import React from 'react';

export default class FetchDrink extends React.Component {
    //Set base values for drink metadata
    state = {
        loading: true,
        drink_name: null,
        drink_id: null,
        drink_image: null,
        drink: null,
        ingredients: [],
    };

    //Get the drink via the api
    async chooseDrink () {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({drink_name: data.drinks[0].strDrink, 
            loading: false,
            drink_image: data.drinks[0].strDrinkThumb,
            drink: data,
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient1])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient2])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient3])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient4])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient5])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient6])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient7])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient8])
        });
        this.setState({
            ingredients: this.state.ingredients.concat([data.drinks[0].strIngredient9])
        });
                
        console.log(this.state.drink);
        console.log(this.state.ingredients);
    }



    // Render Drink Name and Image if the page is no longer loading
    render() {
        return (
            <div>
                {this.state.loading || !this.state.drink_name ? ( 
                    <div>
                        <p>
                            <button onClick={() => {this.chooseDrink()}}>Choose Your Sprint Drink!</button>
                        </p>
                    </div> 
                    ) : (
                        <div>
                            <div><h2>{this.state.drink_name}</h2></div>
                            <div>
                                <button onClick={() => {this.chooseDrink()}}>Choose a new drink!</button>
                            </div>
                            <img src={this.state.drink_image} />
                            <div>
                                <ul>
                                    {this.state.ingredients.map((item,i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                        )}
            </div>
        );
    }
}