	//Hero Characters
	//Will swap with enemy characters when one is chosen.
var char1 = {
	name: 'Obi Wan Kenobi',
	hp: 95,
	atk: 16,
	baseAtk: 16,
	rival: 'Darth Maul',
	rivalAtk: 20
};

var char2 = {
	name: 'Luke Skywalker',
	hp: 115,
	atk: 14,
	baseAtk: 14,
	rival: 'Darth Vader',
	rivalAtk: 15
};

var char3 = {
	name: 'Rey',
	hp: 90,
	atk: 15,
	baseAtk: 15,
	rival: 'Kylo Ren',
	rivalAtk: 25
};

var char4 = {
	name: 'Han Solo',
	hp: 105,
	atk: 11,
	baseAtk: 11,
	rival: 'Boba Fett',
	rivalAtk: 30
};
var inCombat = false;
var currentHero = {};
var currentRival = {};

var defeatedRivals = 0;

$('#foes').css('display', 'none');
$('#character1-Battle').css('display', 'none');
$('#character2-Battle').css('display', 'none');
$('#character3-Battle').css('display', 'none');
$('#character4-Battle').css('display', 'none');
//Selects a hero by hiding the non-selected heroes, and reveals the Rival Row
function charSelect (){	
	$('#character1-Select').click(function(){
		currentHero = char1;
		$('#charSelect').html('Your Hero<br> <img id="character1-Select" class = "heroThumbnail" src="assets/images/Hero1.png">');
		defeatedRivals++;
		console.log('You Chose '+ currentHero.name);
		$('#foes').prepend('Select Your Foe<br>');
		$('#character2-Select').css('display', 'none');
		$('#character3-Select').css('display', 'none');
		$('#character4-Select').css('display', 'none');
		$('#foes').css('display', 'inline');
		$('#character1-Foe').css('display', 'none')
		rivalSelect();
	});
	
	$('#character2-Select').click(function(){
		currentHero = char2;
		$('#charSelect').html('Your Hero<br> <img id="character2-Select" class = "heroThumbnail" src="assets/images/Hero2.png">');
		defeatedRivals++;
		console.log('You Chose '+ currentHero.name);
		$('#foes').prepend('Select Your Foe<br>');
		$('#character1-Select').css('display', 'none');
		$('#character3-Select').css('display', 'none');
		$('#character4-Select').css('display', 'none');
		$('#foes').css('display', 'inline');
		$('#character2-Foe').css('display', 'none')
		rivalSelect();
	});
	
	$('#character3-Select').click(function(){
		currentHero = char3;
		$('#charSelect').html('Your Hero<br> <img id="character3-Select" class = "heroThumbnail" src="assets/images/Hero3.png">');
		defeatedRivals++;
		console.log('You Chose '+ currentHero.name);
		$('#foes').prepend('Select Your Foe<br>');
		$('#character1-Select').css('display', 'none');
		$('#character2-Select').css('display', 'none');
		$('#character4-Select').css('display', 'none');
		$('#foes').css('display', 'inline');
		$('#character3-Foe').css('display', 'none')
		rivalSelect();
	});

	$('#character4-Select').click(function(){
		currentHero = char4;
		$('#charSelect').html('Your Hero<br> <img id="character4-Select" class = "heroThumbnail" src="assets/images/Hero4.png">');
		defeatedRivals++;
		console.log('You Chose '+ currentHero.name);
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
	if (inCombat == false){
			$('#character1-Foe').click(function(){
				currentRival = char1;
				$('#character1-Foe').css('display', 'none');
				$('#character1-Battle').css('display', 'inline');
				console.log(currentRival);
				inCombat = true;
				runFight();
		});
	
			$('#character2-Foe').click(function(){
				currentRival = char2;
				$('#character2-Foe').css('display', 'none');
				$('#character2-Battle').css('display', 'inline');
				console.log(currentRival);
				inCombat = true;
				runFight();
		});
	
			$('#character3-Foe').click(function(){
				currentRival = char3;
				$('#character3-Foe').css('display', 'none');
				$('#character3-Battle').css('display', 'inline');
				console.log(currentRival);
				inCombat = true;
				runFight();
		});
	
			$('#character4-Foe').click(function(){
				currentRival = char4;
				$('#character4-Foe').css('display', 'none');
				$('#character4-Battle').css('display', 'inline');
				console.log(currentRival);
				inCombat = true;
				runFight();
		});
	}
	};

function runFight(){
	$('#fightButton').click(function(){
		console.log('runFight has started.')
		if (currentRival.hp > 0 && currentHero.hp > 0){
					currentRival.hp -= currentHero.atk;
					currentHero.atk += currentHero.baseAtk;
					currentHero.hp -= currentRival.rivalAtk;
					$('#gameText').html('You strike '+currentRival.rival+' for '+currentHero.atk+' damage!')
					$('#gameText').append('<br>'+currentRival.rival+" strikes you for "+currentRival.rivalAtk+' damage!')
					console.log(currentHero.hp, currentHero.name);
					console.log(currentRival.hp, currentRival.rival);}
			
		else if (currentHero.hp < 1){
			return function(){
				inCombat = false;
				$('#charSelect').html('<h1>You are defeated! The Galaxy belongs to the Sith.<h1>')
			}
		}

		else if (currentRival.hp < 1){
			return function(){
				defeatedRivals++;
				$('#gameText').html('Your rival has fallen!');
			}
		}

		else{
			$('.jumbotron').html('<h1>Error!</h1>');
		}
			/*if (currentRival.hp > 0){
				currentHero.hp - currentRival.rivalAtk;
				$('gameText').html('You strike '+currentRival.rival+' for '+currentHero.atk+' damage!')
				$('gameText').append('<br>'+currentRival.rival+" strikes you for "+currentRival.rivalAtk+' damage!')
			}/*
			else if(currentRival.hp<0){
				return function(){
					defeatedRivals++;
					$('#gameText').html('Your rival has fallen!');
				}
			}
		
		else if(currentHero.hp < 1){
			return function(){
				$('charSelect').html('<h1>You are defeated! The Galaxy belongs to the Sith.<h1>')
			}
		}*/
	});
};

charSelect();