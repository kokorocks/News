document.addEventListener('DOMContentLoaded', function() {
    // Your code here


function random(number){
    return Math.floor(Math.random()*number)
}

const cities = ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary", "Edmonton", "Winnipeg", "Quebec City", "Halifax", "Victoria", "London", "Kitchener", "Hamilton", "Surrey", "Richmond", "Markham", "Mississauga", "Brampton", "Burnaby", "Regina", "Saskatoon", "St. John's", "Thunder Bay", "Barrie", "Kingston", "Guelph", "Prince George", "Chatham-Kent", "Moncton", "Fredericton", "Saint John", "Sherbrooke", "Laval", "Longueuil", "Saguenay", "Drummondville", "Granby", "Blainville", "Lethbridge", "Grande Prairie", "Fort McMurray", "Whitehorse", "Yellowknife", "Iqaluit", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Indianapolis", "Fort Worth", "Charlotte", "Seattle", "Denver", "El Paso", "Detroit", "Boston", "Memphis", "Nashville", "Baltimore", "Oklahoma City", "Las Vegas", "Louisville", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Kansas City", "Mesa", "Atlanta", "Colorado Springs", "Virginia Beach", "Raleigh", "Omaha", "Miami", "Cleveland", "Tulsa", "Oakland", "Minneapolis", "Wichita", "Arlington", "Bakersfield", "Tampa", "Aurora", "Honolulu", "Anaheim", "Corpus Christi", "Riverside", "Lexington", "Stockton", "Henderson", "Saint Paul", "Cincinnati", "St. Louis", "Pittsburgh", "Greensboro", "Lincoln", "Anchorage", "Plano", "Orlando", "Irvine", "Newark", "Toledo", "Chula Vista", "Fort Wayne", "Jersey City", "Durham", "Laredo", "Buffalo", "Madison", "Lubbock", "Chandler", "Scottsdale", "Glendale", "North Las Vegas", "Gilbert", "Winston-Salem", "Long Beach", "Baton Rouge", "Richmond", "Boise", "Des Moines", "Modesto", "Fargo", "Grand Rapids", "Akron", "Shreveport", "Yonkers", "Augusta", "Mobile", "Salt Lake City", "Huntsville", "Little Rock", "Charleston", "Knoxville", "Wilmington", "Provo", "Columbia", "Oshkosh", "Santa Ana", "Norfolk", "Napa", "Lynchburg"];
const names = ["John","Diane","Phil","Nathan","Matt","Matthew","Rick","Richard","Bill","Billy","Manny","Opal","David","June","Steve","Zachary","Jeremiah","Sebastian","Harrison","Kenneth","Branden","Karen","Clara","Amy","Debra","Betty","Jeremy","joel",];
const lastname = ["Philips","Ostraly","Hyonda","Park","Manning","Jobs","Lanning","M","N","B","C","L","Jones","Roberson","Olson","Moore","Melendez","Durham",""];
const times = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",random(31)];  
const problems = ['disappeared',`made ${random(100000000)}$`,'broke a record','won an eating contest']
const Lead = []
const body = []
const conclusions = []
const images = []

document.getElementById('img').src=`images/${random(25)}`

function getQueryParam(param) {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get(param);
}

// Get the value of the "stuff" parameter
const stuffValue = getQueryParam('h');
const headline = decodeURI(stuffValue)
console.log(headline)
document.getElementById('headline').innerHTML= headline
});