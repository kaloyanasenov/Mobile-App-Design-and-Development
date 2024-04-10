//API for home screen
const changeButton = document.querySelector('#btn-saveL');
const mealList = document.getElementById("meal");


changeButton.addEventListener('click', getMealList);


function getMealList(){
    let searchInputTxt = document.querySelector('#input-text').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
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
                        </ion-card-content><br>
                        <ion-itema>
                            <ion-button id="recipe-btn" color="secondary" expand="block">Get video recipe</ion-button>
                        </ion-itema>
                    </ion-card-item>
                `;
                
            });
        }else{
            html = "Sorry, there are no available meal ideas with  " + searchInputTxt;
        }

        mealList.innerHTML = html;
    })
}   


