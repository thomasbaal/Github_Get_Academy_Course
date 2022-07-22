  // Creating a card deck array.
        // create array with suits in one array, and card values in another.
        var suits = ["spades", "diamonds", "clubs", "hearts"];
        var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        var deck = new Array();

        // Creating a fresh new array with everything combined.
        function getDeck() {
            // let deck = new Array();
            let deck = [];
            for (let i = 0; i < suits.length; i++) {
                for (let x = 0; x < values.length; x++) {
                    let card = { Value: values[x], Suit: suits[i] }; // creating keys inside array
                    deck.push(card);
                }
            }

            return deck;
        }
        console.log(getDeck());

        console.log(suits);
        console.log(values);
        // getDeck()




        // Creating a shuffle algorithm.
        function shuffle(deck) {
            // for 1000 turns
            // switch the values of two random cards
            for (let i = 0; i < 1000; i++) {
                let location1 = Math.floor((Math.random() * deck.length));
                let location2 = Math.floor((Math.random() * deck.length));
                let tmp = deck[location1];

                deck[location1] = deck[location2];
                deck[location2] = tmp;
            }

        }

        // Creating elements and rendering the cards out.
        function renderDeck(deck) {
            document.getElementById("deck").innerHTML = "";
            document.getElementById('carddeck').innerHTML = '';

            for (let i = 0; i < deck.length; i++) {
                let card = document.createElement("div");
                let value = document.createElement("div");
                let suit = document.createElement("div");
                card.className = "card";
                value.className = "value";
                suit.className = "suit " + deck[i].Suit;

                value.innerHTML = deck[i].Value;
                card.appendChild(value);
                card.appendChild(suit);

                document.getElementById("deck").appendChild(card);
            }
        }