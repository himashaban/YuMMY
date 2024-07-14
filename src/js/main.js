
import { getApi, arrabiata } from "./request.js";
let rowData = document.getElementById("rowData");


  $(".rightSide i").click(function () {
    let leftWidth = $(".leftSide").outerWidth();
    let hiddenWidth = $(".leftSide").offset().left;

    if ($(this).hasClass("fa-bars")) {
      $(this).removeClass("fa-bars").addClass("fa-x");
    } else {
      $(this).removeClass("fa-x").addClass("fa-bars");
    }

   

    if (hiddenWidth === 0) {
      $(".sideBar").css({ left: `-${leftWidth}px`, transition: "left 0.5s" });
       $(".leftSide a").css({ opacity: 0, transform: "translateY(20px)" });
    } else {
      $(".sideBar").css({ left: `0px`, transition: "left 0.5s" });
      $(".leftSide a").each(function (index) {
        $(this).css({
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity 0.5s ease ${index * 0.3}s, transform 0.5s ease ${
            index * 0.2
          }s`,
        });
      });
    }
  });


(async () => {
  try {
    await arrabiata.loading();
    await Promise.all([arrabiata.FetchApi(), arrabiata.filterData("a")]);
  } catch (error) {
    console.error("Error:", error);
  }
})();
$('#search').click(function(){
  $(".inputs").removeClass("hidden");
  rowData.innerHTML=``;
  
})

$("#searchLetter").keyup(function(){
let valuz = $("#searchLetter").val();
 arrabiata.loading();
  arrabiata.filterData(valuz);
  
 
 
})

$("#searchName").keyup(function () {
  let valuz = $("#searchName").val();
arrabiata.loading();
  arrabiata.filterData(valuz);
});
$("#categories").click(async function () {
  $(".inputs").addClass("hidden");
 await arrabiata.displayData();
});
$(document).on("click", ".cover", async function () {
  arrabiata.loading();
  await arrabiata.FetchApi(); // Ensure data is fetched

  // Retrieve the strCategory of the clicked .cover element
  let category = $(this).find(".caption h2").text().trim();
  console.log(category);
  arrabiata.selectedCategory(category);
});

$("#area").click(async function () {
  $(".inputs").addClass("hidden");
  
   arrabiata.loading();
  await arrabiata.displayArea();
});
$(document).on("click", ".country", async function () {
  await arrabiata.displayArea()
  let value =  $(this).find("h3").text().trim();
  console.log(value);
  // rowData.innerHTML=``;
   arrabiata.selectedArea(value);
});
$("#ingredients").click(async function () {
  $(".inputs").addClass("hidden");

  arrabiata.loading();
  await arrabiata.getIngrediant();
});
$(document).on("click", ".ingred", async function () {
  await arrabiata.displayArea();
  let value = $(this).find("h3").text().trim();
  console.log(value);
  // rowData.innerHTML=``;
  arrabiata.selectedIngredient(value);
});
$("#contactus").click(function(){
  arrabiata.loading()
  rowData.innerHTML=``
  console.log('hey');
   document.body.innerHTML = ` <form id="myForm" class="w-full form m-auto  max-w-lg bg-black p-8 rounded-lg shadow-md">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
          Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane Doe">
        <p class="text-red-500 text-xs hidden">Please enter your name.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
          Email
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="jane.doe@example.com">
        <p class="text-red-500 text-xs hidden">Please enter a valid email address.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone">
          Phone
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" type="tel" placeholder="(555) 555-5555">
        <p class="text-red-500 text-xs hidden">Please enter your phone number.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="age">
          Age
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="age" type="number" placeholder="30">
        <p class="text-red-500 text-xs hidden">Please enter your age.</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
          Password
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="password" type="password" placeholder="********">
        <p class="text-red-500 text-xs hidden">Please enter a password.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="repeatPassword">
          Repeat Password
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="repeatPassword" type="password" placeholder="********">
        <p class="text-red-500 text-xs hidden">Passwords do not match.</p>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onclick="validateForm()">
        Submit
      </button>
    </div>
  </form> `;
})
