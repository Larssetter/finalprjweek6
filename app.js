console.log("connected");
//coded along with Kristina Macias week 6 video review*

//notes class for player - name, hand [], score 
//class for deck - suits, faceValue, ranks 
//methods - create deck, shuffle, deal 

 
//goal to win all the cards in deck, deck total 52 card
// shuffle deck deal 26 cards to each player (2 player)
// flip your top card over at the same time, higher value card wins
//if both players flip the same card they go to "war"
//each player lays 3 cards face down and a fourth face up 
//who ever has highest face up value card wins all cards  


class Player {

    constructor(name) {
        this.name = name; 
        this.hand = [];
        this.score = 0; 

    }

}

//console.log(Player);

let player1 = new Player("Chris"); 
console.log("player1: ", player1);

let player2 = new Player("Jessica");
console.log("player2: ", player2)

//class for deck - suits, faceValue, ranks 
//methods - create deck, shuffle, deal deck 

class Deck {

    constructor() {
        //suit
        this.suits = ["hearts", "diamonds", "clubs", "spades"];

        //facevalue
        this.faceValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        
        //ranks
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] // 11 = J, 12 = Q, 13 = K, 14 = A

        //full deck 
        this.deck = []; //empty array to fill with cards 
    }

    //create deck 
    createDeck() {
            //create for loop to iterate over suits
            for (let s = 0; s < this.suits.length; s++) {
                //console.log(this.suits[s])
                //create a for loop to iterate over facesValues 
                for(let f = 0; f < this.faceValues.length; f++) {

                    //console.log(this.faceValues[f])
                    //variable suit 
                    const suit = this.suits[s];
                    const faceValue = this.faceValues[f];
                    const rank = this.ranks[f];

                    //push each card variable in the loop to deck 
                    this.deck.push({suit, faceValue, rank}); //wrap in braces access like object
                }

            }

            console.log("printing deck: ", this.deck)

    }

    //shuffle deck, method 
    shuffleDeck() {

        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp; 

        }
    }
    //deal deck method 
    dealDeck() {

        
        player1.hand = this.deck.slice(0, 26);
        console.log("player1 hand - 26 cards: ", player1.hand);
        player2.hand = this.deck.slice(26, 52);
        console.log("player2 hand -26 cards: ", player2.hand );
    }

}

let gameDeck = new Deck()
gameDeck.createDeck();
gameDeck.shuffleDeck();
gameDeck.dealDeck();
//console.log(gameDeck);

class Game {

    //methods

        //compare cards
        compareCards() {

            for (let round = 0; round < 26; round = round + 1) {
                //conditional statements to check which card is bigger at each round
                //player 1
                console.log(player1.name, player1.hand[round]);
                console.log(player2.name, player2.hand[round]);

                if (player1.hand[round].rank > player2.hand[round].rank) {

                    //add to player1 score 
                    player1.score += 1; 
                    console.log(`${player1.name} score: ${player1.score}`)
                    console.log(`${player2.name} score: ${player2.score}`)
                    console.log(`${player1.name} is the winner!
                    
                    `);

                }else if (player2.hand[round].rank > player1.hand[round].rank) {

                    player2.score += 1; 
                    console.log(`${player1.name} score: ${player1.score}`)
                    console.log(`${player2.name} score: ${player2.score}`)
                    console.log(`${player2.name} is the winner!
                    
                    `);


                } else {
                        //else conditional score 
                    console.log(`${player1.name} score: ${player1.score}`)
                    console.log(`${player2.name} score: ${player2.score}`)
                    console.log(`${player2.name} and ${player2.name} tied this round!`);

                    

                    
                }

               
            }
        }

        //determine winner 

        determineWinner() {

            //check to see if player1 score is great than player2 or tied
            if (player1.score > player2.score) {
                    console.log(`${player1.name} is the declared winner!`)

            }else if (player2.score > player1.score) {
                console.log(`${player2.name} is the declared winner!`)
            } else {
                console.log(`${player2.name} and ${player1.name} tied the game!`);
            }
        }
}


let playGame = new Game();
playGame.compareCards();
playGame.determineWinner();




    



    
 