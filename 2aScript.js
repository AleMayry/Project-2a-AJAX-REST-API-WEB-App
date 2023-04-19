/**************
 * AJAX call to an API
 */
let countryList = document.querySelector('.countries');

//1. create an XMLHttpRequest Object 
let request = new XMLHttpRequest()

//2. create the request
request.open('GET','https://restcountries.com/v3.1/name/usa');

//3. Send the request

request.send();

request.addEventListener('load', function(){
    //convert JSON string to JavaScript object
    let [data] = JSON.parse(request.responseText);
    console.log(data);

    const html = 
    '<article class="country"> <img class="country__img" src="${data.flag}" /> <div class="country__data"> <h3 class="country__name">COUNTRY</h3> <h4 class="country__region">REGION</h4> <p class="country__row"><span></span>POPULATION</p> <p class="country__row"><span></span>LANGUAGE</p> <p class="country__row"><span></span><b>CURRENCY</b></p> </div> </article>';
})
