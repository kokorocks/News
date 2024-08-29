function random(number){
    return Math.floor(Math.random()*number)
}

const cities = ["Toronto", "Vancouver", "Montreal", "Ottawa", "Calgary", "Edmonton", "Winnipeg", "Quebec City", "Halifax", "Victoria", "London", "Kitchener", "Hamilton", "Surrey", "Richmond", "Markham", "Mississauga", "Brampton", "Burnaby", "Regina", "Saskatoon", "St. John's", "Thunder Bay", "Barrie", "Kingston", "Guelph", "Prince George", "Chatham-Kent", "Moncton", "Fredericton", "Saint John", "Sherbrooke", "Laval", "Longueuil", "Saguenay", "Drummondville", "Granby", "Blainville", "Lethbridge", "Grande Prairie", "Fort McMurray", "Whitehorse", "Yellowknife", "Iqaluit", "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Columbus", "Indianapolis", "Fort Worth", "Charlotte", "Seattle", "Denver", "El Paso", "Detroit", "Boston", "Memphis", "Nashville", "Baltimore", "Oklahoma City", "Las Vegas", "Louisville", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Kansas City", "Mesa", "Atlanta", "Colorado Springs", "Virginia Beach", "Raleigh", "Omaha", "Miami", "Cleveland", "Tulsa", "Oakland", "Minneapolis", "Wichita", "Arlington", "Bakersfield", "Tampa", "Aurora", "Honolulu", "Anaheim", "Corpus Christi", "Riverside", "Lexington", "Stockton", "Henderson", "Saint Paul", "Cincinnati", "St. Louis", "Pittsburgh", "Greensboro", "Lincoln", "Anchorage", "Plano", "Orlando", "Irvine", "Newark", "Toledo", "Chula Vista", "Fort Wayne", "Jersey City", "Durham", "Laredo", "Buffalo", "Madison", "Lubbock", "Chandler", "Scottsdale", "Glendale", "North Las Vegas", "Gilbert", "Winston-Salem", "Long Beach", "Baton Rouge", "Richmond", "Boise", "Des Moines", "Modesto", "Fargo", "Grand Rapids", "Akron", "Shreveport", "Yonkers", "Augusta", "Mobile", "Salt Lake City", "Huntsville", "Little Rock", "Charleston", "Knoxville", "Wilmington", "Provo", "Columbia", "Oshkosh", "Santa Ana", "Norfolk", "Napa", "Lynchburg"];
const names = ["John","Diane","Phil","Nathan","Matt","Matthew","Rick","Richard","Bill","Billy","Manny","Opal","David","Any","June","Steve","Zachary","Jeremiah","Sebastian","Harrison","Kenneth","Brayden","Karen","Clara","Amy","Debra","Betty","Jeremy","joel",];
const lastname = ["Philips","Ostraly","Hyonda","Park","Manning","Jobs","Lanning","M","N","B","C","L","Jones","Roberson","Olson","Moore","Melendez","Durham",""];
const times = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",random(31)];  
const problems = ['disappeared',`made ${random(100000000)}$`]
let headlines=[]
const images = ['path/to/img.url.png']

function regenerate(){
    headlines=[`${names[random(names.length)]} ${lastname[random(names.length)]} ${problems[random(problems.length)]} on ${times[random(times.length)]}, and you won't guess what happened next`]
}

for(let i=0;i<=12;i++){
    document.getElementById('articles').innerHTML+document.getElementById('articles').innerHTML=`<a href='news.html?headline=${encodeURI(headlines[random(headlines.length)])}' class="box">${headlines[random(headlines.length)]}<br /><img src='assets/images/${random(0)}'></a>`
}