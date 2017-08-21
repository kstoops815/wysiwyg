console.log("in js file");
var people = [];


var Justin = {
  name: 'Justin Timberlake',
  title: 'Singer/actor',
  bio: 'Born in Memphis, TN, Justin Timberlake first gained notariety as a member of the boyband NSYNC. After the breakup of the band, Timberlake launched a very successful solo career. He went on to become an actor, starring in films such as "Bad Teacher", "Friends With Benefits", and "In Time". Timberlake is married to actress Jessica Biel, and they have one son named Silas.',
  image: './images/Justin.jpg',
  lifespan: {
    birth: 1981,
    death: "still kickin' it"
  }
}

var Morgan = {
  name: 'Morgan Freeman',
  title: 'Actor',
  bio: 'A famous actor, Morgan Freeman was born in 1937 in Memphis, TN. He began acting at the young age of 9, playing the lead role in a school play. He turned down a drama scholarship at Jason State University in favor of working as a radar mechanic in the U.S. Air Force in 1955. He returned to acting after his service, and has starred in many movies, such as "The Shawshank Redemption", "Glory", and "Dolphin Tale". He won an Academy Award for Best Supporting Actor for his role in "Million Dollar Baby". He has 3 daughters and 1 son.',
  image: './images/Morgan.jpg',
  lifespan: {
    birth: 1937,
    death: "still kickin' it"
  }	
}

people.push(Justin);
people.push(Morgan);
//console.log(people);

var peopleContainer=document.getElementById('comeHere');

function buildBio(person){
	var bio = "";

	bio+= `<div class="peopleBio">`;
	bio+=	`<header class="nameTitle">`;
	bio+= 		`<div class="title"> ${person.title}</div>`;
	bio+= 		`<h1 class="name">${person.name}</h1>`;
	bio+=	`</header>`;
	bio+=	`<section class="bioImage">`;
	bio+=		`<div class="bio">${person.bio}</div>`;
	bio+=		`<img src=${person.image} class="images" alt=${person.name}>`;
	bio+=	`</section>`;
	bio+=	 `<footer class="lifespan"> Birth: ${person.lifespan.birth}, Death: ${person.lifespan.death}</footer>`;
	bio+= `</div>`;
	return bio;
}

function printPeopleToDom(peopleArray){
	for(i=0; i < peopleArray.length; i++){

		var currentPerson = peopleArray[i];
		var peopleDomString = buildBio(currentPerson);
		peopleContainer.innerHTML += peopleDomString;
	}
}

printPeopleToDom(people);