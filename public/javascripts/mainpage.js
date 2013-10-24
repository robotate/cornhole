var players = 2
namesForm = document.getElementById('names')
playersForm = document.getElementById('playersInput')
playerNames = new Array()
gamesDiv = document.getElementById('games')
games = new Array()

//testing game 1vs2
games[0] = new Array()
game1v2 = new Object()
game1v2.winner = 2
game1v2.firstScore = 13
game1v2.secondScore = 21
games[0][1] = game1v2

function createGame(player1,player2) {
	console.log("create "+player1+" , "+player2)
	game = new Object()
	game.winner = -1
	game.firstScore = 0
	game.secondScore = 0
	if (games.length < (player1+1)) {
		for (i=games.length;i<(player1+1);i++) {
			games[i] = new Array()
		}
	}
	games[player1][player2] = game
}


function drawGame(player1,player2) {
	console.log("draw "+player1+" , "+player2)
	game = games[player1][player2]
	console.log(game)
	fstScore = document.createElement('input')
	fstScore.setAttribute('id',(player1+1)+'vs'+(player2+1)+'score1')
	fstScore.value=game.firstScore	
	sndScore = document.createElement('input')
	sndScore.setAttribute('id',(player1+1)+'vs'+(player2+1)+'score2')
	sndScore.value=game.secondScore
	gameDiv = document.createElement('div')
	gameDiv.setAttribute('id',(player1+1)+'vs'+(player2+1))
	titles = document.createTextNode(playerNames[player1]+"     "+playerNames[player2])
	gameDiv.appendChild(titles)
	gameDiv.appendChild(document.createElement('br'))
	gameDiv.appendChild(fstScore)
	gameDiv.appendChild(sndScore)	
	first = document.getElementById('player'+(player1+1))
	first.appendChild(gameDiv)
	second = document.getElementById('player'+(player2+1))
	gameDiv = gameDiv.cloneNode()
	second.appendChild(gameDiv)
}


function addPlayer(){
	console.log('add')
	players++
	newPlayer = document.createElement('input')
	newPlayer.setAttribute('type','text')
	newPlayer.setAttribute('id','name'+players)
	newLine = document.createElement('br')
	newLine.setAttribute('id','br'+players)
	namesForm.appendChild(newPlayer)
	namesForm.appendChild(newLine)
	for (i=0;i<players-1;i++) {
		createGame(i,players-1)
	}
	
	redraw()
}
function removePlayer(){
	console.log('remove')
	delPlayer = document.getElementById('name'+players)
	delLine = document.getElementById('br'+players)
	namesForm.removeChild(delPlayer)
	namesForm.removeChild(delLine)
	for (i=0;i<players-1;i++) {
		games[i].pop()
	}
	players--
	redraw()
}

function drawGames() {
	for (i=0;i<games.length;i++) {
		for (j=i;j<games[i].length;j++) {
			if (i != j) {
				drawGame(i,j);
			}
		}
	}
}

function redraw() {
	playersForm.value = players
	getPlayerNames()
	drawPlayers()
	drawGames()
}

function getPlayerNames() {
	playerNames = new Array()
	for (i=0;i<players;i++) {
		nameField = document.getElementById('name'+(i+1))
		playerNames.push(nameField.value)
		if (playerNames[i] == "") {
			playerNames[i] = "*blank*"
		}
	}
}
function drawPlayer(num) {
	playerDiv = document.createElement('div')
	playerDiv.setAttribute('id','player'+num)
	playerHeader = document.createElement('h2')
	playerHeader.setAttribute('id','playerName'+num)
	nameTemp = playerNames[num-1]
	if (nameTemp == "") {
		nameTemp = "*blank*"
	}
	playerHeader.innerHTML = nameTemp
	playerDiv.appendChild(playerHeader)
	gamesDiv.appendChild(playerDiv)
}
function drawPlayers(){
	gamesDiv.innerHTML = ""
	for (i=0;i<players;i++) {
		drawPlayer(i+1)
	}
}
