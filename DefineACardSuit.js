/*

8 kyu 

Define a card suit 

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

function defineSuit(card) {
    let suit = card[card.length-1];
    if (suit == "♣") return "clubs";
    if (suit == "♦") return "diamonds";
    if (suit == "♥") return "hearts";
    return "spades";
}