const getCard = (id, name, number) =>
`
<div class="col-sm">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="img/${id}.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 id="${id}" class="card-title">0</h5>
            <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
            <p class="card-text">
                <p><b>Al día</b> - ${Math.round(number / 365).toLocaleString()}</p>
                <p><b>A la hora</b> - ${Math.round(number / 365 / 24).toLocaleString()}</p>
                <p><b>Al minuto</b> - ${Math.round(number / 365 / 24 / 60).toLocaleString()}</p>
                </li>
                </ul>
            </p>
        </div>
    </div>
    <br />
</div>
`;

const addCard = (card) => {
	$("#main-content").append(card);
}

addCard(getCard("akc-wild_caught_fish", "Peces pescados", 970000000000));
addCard(getCard("akc-chickens", "Gallinas", 61000000000));
addCard(getCard("akc-farmed_fish", "Peces de piscifactoría", 38000000000));
addCard(getCard("akc-ducks", "Patos", 2800000000));
addCard(getCard("akc-pigs", "Cerdos", 1450000000));
addCard(getCard("akc-rabbits", "Conejos", 1200000000));
addCard(getCard("akc-geese", "Ocas", 680000000));
addCard(getCard("akc-turkeys", "Pavos", 620000000));
addCard(getCard("akc-sheep", "Ovejas", 540000000));
addCard(getCard("akc-goats", "Cabras", 440000000));
addCard(getCard("akc-cattle", "Vacas", 300000000));
addCard(getCard("akc-rodents", "Roedores", 70000000));
addCard(getCard("akc-other_birds", "Palomas y otras aves", 60000000));
addCard(getCard("akc-buffalo", "Búfalos", 25000000));
addCard(getCard("akc-horses", "Caballos", 50000000));
addCard(getCard("akc-camels", "Camellos y otros camélidos", 3250000));
addCard(getCard("akc-donkeys", "Burros y mulas", 3210000));

window.addEventListener('DOMContentLoaded', function () {
	var updatesPerSecond = 20;
	var animalsKilledPerYear = {
		"wild_caught_fish": 970000000000,
		"chickens": 61171973510,
		"farmed_fish": 38000000000,
		"ducks": 2887594480,
		"pigs": 1451856889.38,
		"rabbits": 1171578000,
		"geese": 687147000,
		"turkeys": 618086890,
		"sheep": 536742256.33,
		"goats": 438320370.99,
		"cattle": 298799160.08,
		"rodents": 70371000,
		"other_birds": 59656000,
		"buffalo": 25798819,
		"horses": 4863367,
		"donkeys": 3213400,
		"camels": 3243266.03,
	};

	var secondsPerYear = 365 * 24 * 60 * 60;
	var interval = 1000 / updatesPerSecond;
	var count = 0, start = new Date().getTime();

	function update(intervalCount) {
		for (var subset in animalsKilledPerYear) {
			var numKilled = animalsKilledPerYear[subset];
			var countElement = document.getElementById("akc-" + subset);
			if (countElement) {
				countElement.innerHTML = Math.round(intervalCount * (numKilled / secondsPerYear) / updatesPerSecond).toLocaleString();
			}
		}
	}

	function selfCorrectingTimeoutInterval() {
		update(++count);
		window.setTimeout(selfCorrectingTimeoutInterval, interval - (new Date().getTime() - start - count * interval));
	}
	window.setTimeout(selfCorrectingTimeoutInterval, interval);
});
