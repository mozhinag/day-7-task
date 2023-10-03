//Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();


request.onload=function(){
    const result = JSON.parse(this.response);
    console.log(result);
   let res = result.filter((ele) => ele.population < 200000);
  console.log(res);
   var r1 = res.map((ele) => ele.population);
   console.log(r1);
   //Asian continents/region:
   let countries = result.filter((ele) => ele.region ==='Asia') ;
   console.log(countries);
   var name = countries.map((e) => e.name);
   console.log(name);
//Print the following details name, capital, flag using forEach function
    result.forEach(element => {
      console.log(element.name,element.capital,element.flag);
      
    });

//Print the total population of countries using reduce function
 let population = result.reduce((acc,elem) => acc + elem.population,0);
 console.log(population);

//Print the country which uses US Dollars as currency.
var n1 = result.filter((value) =>{
  for(let i in value.currencies.symbol.$){
    if( i ==="$") {
      return true;
    }
  }
});
console.log(n1);
var name1 = n1.map((el) => el.name);
console.log(name1);
}