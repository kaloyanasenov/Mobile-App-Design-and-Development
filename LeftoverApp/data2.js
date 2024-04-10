//API for the suggestion tab
const changeButtonSuggestion = document.querySelector('#btn-random');
const randomMeal = document.getElementById("random");


changeButtonSuggestion.addEventListener('click', getRandomMeal);

function getRandomMeal(){
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(response => response.json())
    .then(data => {
       // console.log(data)
       let html = "";
       if(data.meals){
           data.meals.forEach(meal => {
               html += `
                   <ion-card-item data-id = "${meal.idMeal}">
                       <ion-card-header>
                           <ion-card-title id="title-name">${meal.strMeal}</ion-card-title>
                       </ion-card-header>
                       <ion-card-content>
                           <ion-img src = "${meal.strMealThumb} "id="img-display" ></ion-img>
                       </ion-card-content>
                       <ion-item>
                            <a href = "${meal.strYoutube}">
                                <ion-button id="recipe-btn" color="secondary" expand="block" slot="primary">Get video recipe</ion-button>
                            </a>
                       </ion-item>
                   </ion-card-item>
               `;
           });
       }

       randomMeal.innerHTML = html;
    })
}
