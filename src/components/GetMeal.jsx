import React, {Component} from 'react';
import axios from 'axios';
import '../App.scss';
import './GetMeal.scss';

import FastfoodIcon from '@mui/icons-material/Fastfood';

// API Link = 'https://www.themealdb.com/api/json/v1/1/random.php';

class Meal extends Component {
    constructor(props){
        super(props);

        this.state = {
            meals: [],
        };
    }

    getMeal(){
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            console.log(response)
            this.setState({meals: response.data.meals}) 
        })
        .catch(error => {
            console.log(error)
        })
    }


    render(){
        const { meals } = this.state
        
        return(
            <div>
              
                <div className="title">
                    <h2>What should you make today?</h2>
                    <button variant="contained" className="get-meal" onClick={this.getMeal.bind(this)} >Get Recipe <FastfoodIcon /></button>
                </div>
                
                <div>
                    {meals.map(meal => 
                            <div key={meal.idMeal}>
                                    
                                    <div className='meal'>
                                        <div className="img">
                                            <h4>{meal.strMeal}</h4>
                                            <img src={meal.strMealThumb} className="img-thumb"/>
                                        </div>
                                        <div className="video">
                                                <div className="video-resource">
                                                    <h3>Video Recipe</h3>
                                                    <iframe width="420" height="315" src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`}>
                                                        
                                                    </iframe>
                                                </div>
                                        </div>
                                    </div>
                                    
                                    <div className="guide">
                                        <div className="instructions">
                                            <h3>Method</h3>
                                            <div>{meal.strInstructions}</div>
                                        </div>
                                        <div className="row">
                                            <h3>Ingredients</h3>
                                            <div>
                                                <ul>
                                                    <li>{meal.strMeasure1} {meal.strIngredient1}</li>
                                                    <li>{meal.strMeasure2} {meal.strIngredient2}</li>
                                                    <li>{meal.strMeasure3} {meal.strIngredient3}</li>
                                                    <li>{meal.strMeasure4} {meal.strIngredient4}</li>
                                                    <li>{meal.strMeasure5} {meal.strIngredient5}</li>
                                                    <li>{meal.strMeasure6} {meal.strIngredient6}</li>
                                                    <li>{meal.strMeasure7} {meal.strIngredient7}</li>
                                                    <li>{meal.strMeasure8} {meal.strIngredient8}</li>
                                                    <li>{meal.strMeasure9} {meal.strIngredient9}</li>
                                                    <li>{meal.strMeasure10} {meal.strIngredient10}</li>
                                                    <li>{meal.strMeasure11} {meal.strIngredient11}</li>
                                                    <li>{meal.strMeasure12} {meal.strIngredient12}</li>
                                                    <li>{meal.strMeasure13} {meal.strIngredient13}</li>
                                                    <li>{meal.strMeasure14} {meal.strIngredient14}</li>
                                                    <li>{meal.strMeasure15} {meal.strIngredient15}</li>
                                                    <li>{meal.strMeasure16} {meal.strIngredient16}</li>
                                                    <li>{meal.strMeasure17} {meal.strIngredient17}</li>
                                                    <li>{meal.strMeasure18} {meal.strIngredient18}</li>
                                                    <li>{meal.strMeasure19} {meal.strIngredient19}</li>
                                                    <li>{meal.strMeasure20} {meal.strIngredient20}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Meal;