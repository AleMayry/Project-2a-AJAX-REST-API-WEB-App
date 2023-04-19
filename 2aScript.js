/**************
 * AJAX call to an API
 
function getCountryInfo(country){
    let countryList = document.querySelector('.countries');

//1. create an XMLHttpRequest Object 
let request = new XMLHttpRequest();

//2. create the request
request.open('GET','https://restcountries.com/v3.1/name/'+country);

//3. Send the request

request.send();

request.addEventListener('load', function(){
    //convert JSON string to JavaScript object
    let[data] = JSON.parse(request.responseText);
    console.log(data);

    const html = '<article class="country"> <img class="country__img" src="$[data.flag]" > <div class="country__data"> <h3 class="country__name">${data.name}</h3> <h4 class="country__region">${data.region}</h4> <p class="country__row"><span></span>${data.population}</p> <p class="country__row"><span></span>${data.languages[0].name}</p> <p class="country__row"><span></span><b>${data.currencies[0].name}</b></p> </div> </article>';

    countryList.insertAdjacentHTML('beforeend', html)
})
}
getCountryInfo('usa');
getCountryInfo('germany');
getCountryInfo('brazil'); */

const countries=document.querySelector(".countries");
