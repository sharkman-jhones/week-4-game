	//Hero Characters
	//Will swap with enemy characters when one is chosen.
var char1 = {
	name: 'Obi Wan Kenobi',
	hp: 95,
	atk: 16,
	rival: 'Darth Maul',
	rivalAtk: 20
};

var char2 = {
	name: 'Luke Skywalker',
	hp: 115,
	atk: 14,
	rival: 'Darth Vader',
	rivalAtk: 15
};

var char3 = {
	name: 'Rey',
	hp: 90,
	atk: 15,
	rival: 'Kylo Ren',
	rivalAtk: 25
};

var char4 = {
	name: 'Han Solo',
	hp: 105,
	atk: 11,
	rival: 'Boba Fett',
	rivalAtk: 30
};

var currentRival = {};

var defeatedRivals = 0;

$('#foes').css('display', 'none');
$('#defender').css('display', 'none');

//Selects a hero by hiding the non-selected heroes, and reveals the Rival Row
function charSelect (){	
	$('#character1-Select').click(function(){
		$('#charSelect').html('Your Hero<br> <img id="character1-Select" class = "heroThumbnail" src="assets/images/Hero1.png">');
		defeatedRivals++;
		console.log('You Chose a Hero');
		$('#foes').prepend('Select Your Foe<br>');
		$('#character2-Select').css('display', 'none');
		$('#character3-Select').css('display', 'none');
		$('#character4-Select').css('display', 'none');
		$('#foes').css('display', 'inline');
		$('#character1-Foe').css('display', 'none')
		rivalSelect();
	});
	
	$('#character2-Select').click(function(){
		$('#charSelect').html('Your Hero<br> <img id="character2-Select" class = "heroThumbnail" src="assets/images/Hero2.png">');
		defeatedRivals++;
		console.log('You Chose a Hero');
		$('#foes').prepend('Select Your Foe<br>');
		$('#character1-Select').css('display', 'none');
		$('#character3-Select').css('display', 'none');
		$('#character4-Select').css('display', 'none');
		$('#foes').css('display', 'inline');
		$('#character2-Foe').css('display', 'none')
		rivalSelect();
	});
	
	$('#character3-Select').click(function(){
		$('#charSelect').html('Your Hero<br> <img id="character3-Select" class = "heroThumbnail" src="assets/images/Hero3.png">');
		defeatedRivals++;
		console.log('You Chose a Hero');
		$('#foes').prepend('Select Your Foe<br>');
		$('#character1-Select').css('display', 'none');
		$('#character2-Select').css('display', 'none');
		$('#character4-Select').css('display', 'none');
		$('#foes').css('display', 'inline');
		$('#character3-Foe').css('display', 'none')
		rivalSelect();
	});

	$('#character4-Select').click(function(){
		$('#charSelect').html('Your Hero<br> <img id="character4-Select" class = "heroThumbnail" src="assets/images/Hero4.png">');
		defeatedRivals++;
		console.log('You Chose a Hero');
		$('#foes').prepend('Select Your Foe<br>');
		$('#character1-Select').css('display', 'none');
		$('#character2-Select').css('display', 'none');
		$('#character3-Select').css('display', 'none');
		$('#foes').css('display', 'inline');
		$('#character4-Foe').css('display', 'none')
		rivalSelect();
	});
}

function rivalSelect(){
		$('#character1-Foe').click(function(){
			currentRival = char1;
			$('#defender').css('display', 'inline');
			$('#character1-Foe').css('display', 'none');
			$('#character1-Battle').css('display', 'inline');
			$('#character2-Battle').css('display', 'none');
			$('#character3-Battle').css('display', 'none');
			$('#character4-Battle').css('display', 'none');
			console.log(currentRival);
	});

		$('#character2-Foe').click(function(){
			currentRival = char2;
			$('#defender').css('display', 'inline');
			$('#character2-Foe').css('display', 'none');
			$('#character1-Battle').css('display', 'none');
			$('#character2-Battle').css('display', 'inline');
			$('#character3-Battle').css('display', 'none');
			$('#character4-Battle').css('display', 'none');
			console.log(currentRival);
	});

		$('#character3-Foe').click(function(){
			currentRival = char3;
			$('#defender').css('display', 'inline');
			$('#character3-Foe').css('display', 'none');
			$('#character1-Battle').css('display', 'none');
			$('#character2-Battle').css('display', 'none');
			$('#character3-Battle').css('display', 'inline');
			$('#character4-Battle').css('display', 'none');
			console.log(currentRival);
	});

		$('#character4-Foe').click(function(){
			currentRival = char4;
			$('#defender').css('display', 'inline');
			$('#character4-Foe').css('display', 'none');
			$('#character1-Battle').css('display', 'none');
			$('#character2-Battle').css('display', 'none');
			$('#character3-Battle').css('display', 'none');
			$('#character4-Battle').css('display', 'inline');
			console.log(currentRival);
	});
};

charSelect();