import React from 'react';

export default class FetchDrink extends React.Component {
    //Set base values for drink metadata
    state = {
        loading: true,
        drink_name: null,
        drink_id: null,
        drink_image: null,
        drink: null,
    };

    //Get the drink via the api
    async chooseDrink () {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({drink_name: data.drinks[0].strDrink, 
            loading: false,
            drink_image: data.drinks[0].strDrinkThumb,
            drink: data
        });
        

        console.log(this.state.drink);
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
                            <div>{this.state.drink_name}</div>
                            <div>
                                <button onClick={() => {this.chooseDrink()}}>Choose a new drink!</button>
                            </div>
                            <img src={this.state.drink_image} />
                        </div>
                        )}
            </div>
        );
    }
}