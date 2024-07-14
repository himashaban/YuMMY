let rowData = document.getElementById("rowData");
let contData = document.getElementById("contData");

export class getApi {
  constructor(name, searchletter) {
    this.name = name;
    this.dataArr = [];
    this.searchletter = searchletter;
  }

  async FetchApi() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    let data = await response.json();
    this.dataArr = data.categories;
  }
  loading() {
    rowData.innerHTML = `<div class="loader-content flex items-center justify-center fixed inset-0">
            <div class="loader text-xl">Loading...</div>
        </div>`;
  }
  async displayData() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    let data = await response.json();
    this.dataArr = data.categories;
    let box = ``;
    for (let i = 0; i < this.dataArr.length; i++) {
      box += `
      <div class='cover'>
      <div class="shank pic-container rounded text-center">
<div class="pic ">
    <img src='${this.dataArr[i].strCategoryThumb}' alt="pic">
</div>
<div class="caption rounded cursor-pointer ">
    <h2 class='font-bold'>${this.dataArr[i].strCategory}</h2>
    <p>${this.dataArr[i].strCategoryDescription}</p>
</div>
</div>
</div>`;
    }
    rowData.innerHTML = box;
  }
  async filterData(search) {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );

    let data = await response.json();
    this.dataArr = data.meals;
    let box = ``;
    for (let i = 0; i < this.dataArr.length; i++) {
      box += `<div class="shank pic-container rounded py-1">
      <div class="pic ">
        <img src='${this.dataArr[i].strMealThumb}' alt="pic">
      </div>
      <div class="captionn  items-center justify-center  rounded cursor-pointer ">
        <h2 class='font-bolde'>${this.dataArr[i].strMeal}</h2>
      </div>
    </div>`;
    }
    rowData.innerHTML = box;

    // Add event listeners to the div elements
    const divElements = rowData.querySelectorAll(".shank");
    divElements.forEach((div, index) => {
      div.addEventListener("click", () => {
        this.getdetails(this.dataArr[index].idMeal);
      });
    });
  }
  async getCategorys(category) {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );

    let data = await response.json();
    this.dataArr = data.categories;
  }
  async selectedCategory(category) {
    rowData.innerHTML = ``;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    console.log(data);
    const dataArr = data.meals;

    dataArr.forEach((meal) => {
      const element = document.createElement("div");
      element.className = "shankz py-4";
      element.innerHTML = `
      <div class="shank pic-container rounded text-center">
        <div class="pic ">
          <img src='${meal.strMealThumb}' alt="pic">
        </div>
        <div class="caption rounded cursor-pointer ">
          <h2 class='font-bold'>${meal.strMeal}</h2>
        </div>
      </div>
    `;
      element.addEventListener("click", () => {
        this.getdetails(meal.idMeal);
      });
      rowData.appendChild(element);
    });
  }

  async selectedArea(Area) {
    rowData.innerHTML = ``;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`
    );
    const data = await response.json();
    console.log(data);
    const dataArr = data.meals;

    dataArr.forEach((meal) => {
      const element = document.createElement("div");
      element.className = "shankz py-4 px-1";
      element.innerHTML = `
      <div class="shank pic-container rounded text-center">
        <div class="pic ">
          <img src='${meal.strMealThumb}' alt="pic">
        </div>
        <div class="caption rounded cursor-pointer ">
          <h2 class='font-bold'>${meal.strMeal}</h2>
        </div>
      </div>
    `;
      element.addEventListener("click", () => {
        this.getdetails(meal.idMeal);
      });
      rowData.appendChild(element);
    });
  }
  async displayArea() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );

    let data = await response.json();

    // let dataArr = await data.meals;

    let cartoona = "";

    for (let i = 0; i < this.dataArr.length; i++) {
      cartoona += `
      
        <div class="country text-white p-5 py-6 cursor-pointer  hover:text-orange-600">
                        <i class="fa-solid fa-house-laptop fa-4x text-white"></i>
                        <h3>${this.dataArr[i].strArea}</h3>
                       
                </div>
        </div>
        `;

      rowData.innerHTML = cartoona;
    }
  }
  async selectedArea(Area) {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`
    );

    let data = await response.json();
    console.log(data);
    this.dataArr = data.meals;

    for (let i = 0; i < this.dataArr.length; i++) {
      const element = document.createElement("div");
      element.className = "shankz py-4 px-1";
      element.innerHTML = `
      <div class="shank pic-container rounded text-center">
        <div class="pic ">
          <img src='${this.dataArr[i].strMealThumb}' alt="pic">
        </div>
        <div class="caption rounded cursor-pointer ">
          <h2 class='font-bold'>${this.dataArr[i].strMeal}</h2>
        </div>
      </div>
    `;
      element.addEventListener("click", () => {
        this.getdetails(this.dataArr[i].idMeal);
      });
      rowData.appendChild(element);
    }
  }
  async getIngrediant() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );

    let data = await response.json();
    console.log(data);

    let dataArr = data.meals.slice(0, 20);

    console.log(dataArr);
    let cartoona = "";

    for (let i = 0; i < dataArr.length; i++) {
      cartoona += `
      
        <div  class="rounded-2 ingred text-white text-center cursor-pointer hover:text-orange-600">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${dataArr[i].strIngredient}</h3>
                        <p>${dataArr[i].strDescription.slice(0, 100)}</p>
                </div>
        `;

      rowData.innerHTML = cartoona;
    }
  }
  async selectedIngredient(ingred) {
    rowData.innerHTML = ``;
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`
    );

    let data = await response.json();
    this.dataArr = data.meals;
    console.log(data);

    for (let i = 0; i < this.dataArr.length; i++) {
      const element = document.createElement("div");
      element.className = "shankz py-4 px-1";
      element.innerHTML = `
      <div class="shank pic-container rounded text-center">
        <div class="pic ">
          <img src='${this.dataArr[i].strMealThumb}' alt="pic">
        </div>
        <div class="caption rounded cursor-pointer ">
          <h2 class='font-bold'>${this.dataArr[i].strMeal}</h2>
        </div>
      </div>
    `;
      element.addEventListener("click", () => {
        this.getdetails(this.dataArr[i].idMeal);
      });
      rowData.appendChild(element);
    }
  }
  async getdetails(idMeal) {
    rowData.innerHTML = ``;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const data = await response.json();
    console.log(data);
    let Arr = data.meals;
    let box = ``;
    for (let i = 0; i < Arr.length; i++) {
      box += `
      <div class=" flex text-white details py-4 px-1">
    <img  class='detimg'src='${Arr[i].strMealThumb}' alt="pic"> 
    <h1 class='insttitle'>instractions</h1>
    <br>
    <p class='instraction'>${Arr[i].strInstructions.slice(0, 900)}</p>
    <br>
    <div class='desc'>
      <h2 class='Area mt-3'>Area: ${Arr[i].strArea}</h2>
     <h2 class='category'>category: ${Arr[i].strCategory}</h2>
     <h2 class='Ingredient'>Recipes:</h2>
     <ul class="list-unstyled d-flex g-3 flex-nowrap gap-2 grid md:grid-cols-3">
               
                  <li onclick="selectedIngredient('${
                    Arr[i].strIngredient3
                  }')" class=' text-center rounded bg-sky-600 w-auto cursor-pointer my-3'>${
        Arr[i].strMeasure3
      }${Arr[i].strIngredient3}</li>
                  <li onclick="selectedIngredient('${
                    Arr[i].strIngredient4
                  }')" class=' text-center rounded bg-sky-600 w-auto cursor-pointer my-3'>${
        Arr[i].strMeasure4
      }${Arr[i].strIngredient4}</li>
                  <li onclick="selectedIngredient('${Arr[i].strIngredient3}')"
                   class=' text-center rounded bg-sky-600 w-auto cursor-pointer my-3'> ${
                     Arr[i].strMeasure5
                   }${Arr[i].strIngredient5}</li>
                  <li onclick="selectedIngredient('${
                    Arr[i].strIngredient6
                  }')" class=' text-center rounded bg-sky-600 w-auto cursor-pointer my-3'>${
        Arr[i].strMeasure6
      }${Arr[i].strIngredient6}</li>
                  <li onclick="selectedIngredient('${
                    Arr[i].strIngredient7
                  }')" class=' text-center rounded bg-sky-600 w-auto cursor-pointer my-3'>${
        Arr[i].strMeasure7
      }${Arr[i].strIngredient7}</li>
                  

                     


                       


                </ul>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                  

                </ul>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                  

                </ul>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                   

                </ul>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                   

                </ul>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                  

                </ul>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                  

                </ul>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                   

                </ul>

                <h2>tags:</h2>
                <ul class="list-unstyled d-flex g-3 flex-wrap gap-2 my-4">
                <a href='${Arr[i].strSource}'>
                <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
  source
</button>
                </a>
                <a href='${Arr[i].strYoutube}'>
                <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
   youtube
</button>
                </a>
                
                
                </ul>

    </div>
   
    </div>`;
    }
    document.body.innerHTML = box;
  }
  
}

export const arrabiata = new getApi();
