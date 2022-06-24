from blackjack_helpers import *
import random

suits = ('Hearts', 'Diamonds', 'Spades', 'Clubs')
ranks = ('Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace')
values = {'Two':2, 'Three':3, 'Four':4, 'Five':5, 'Six':6, 'Seven':7, 'Eight':8,
          'Nine':9, 'Ten':10, 'Jack':10, 'Queen':10, 'King':10, 'Ace':11}

class Card:

    def __init__(self,suit,rank):

        self.suit = suit
        self.rank = rank
        self.value = values[rank]

    def __str__(self):
        return self.rank + " of " + self.suit

class Deck:

    def __init__(self):

        self.dealt_cards = []
        self.deck = []
        for suit in suits:
            for rank in ranks:
                created_card = Card(suit,rank)
                self.deck.append(created_card)

    def __str__(self):
        deck_comp = ''
        for card in self.deck:
            deck_comp += '\n ' + card.__str__()
        return f'\nThe deck has {len(self.deck)} cards:\n {deck_comp}'

    def shuffle(self):
        random.shuffle(self.deck)

    def deal(self):
        self.dealt_cards = []
        i = 0
        for i in range(0,2):
            self.dealt_cards.append(self.deck.pop(0))
            i+=1
        return self.dealt_cards

class Hand:

    def __init__(self):
        self.hand = []
        self.value = 0
        self.aces = 0

    def add_card(self,card):
        if type(card) == type([]):
            self.hand.extend(card)
        else:
            self.hand.append(card)

    def find_hand_value(self):
        aces = 0
        self.value = 0

        for i in range(0,len(self.hand)):
            self.value += self.hand[i].value
            if self.hand[i].rank == 'Ace':
                aces += 1
            else:
                continue

        while self.value > 21 and aces > 0:
                self.value -= 10
                aces -= 1

        return self.value

    def __str__(self):
        hand_string = ''
        for card in self.hand:
            hand_string += '\n ' + card.__str__()
        return hand_string

class Chips:

    def __init__(self,chip_total=0):
        self.chip_total = chip_total
        self.bet = 0

    def win_bet(self,bet):
        self.bet = bet
        self.chip_total+=self.bet
        return self.chip_total

    def lose_bet(self,bet):
        self.bet = bet
        self.chip_total-=self.bet
        return self.chip_total

    def __str__(self):
        return f'You have {self.chip_total} chips.'

player_chips = Chips(100)

game_on=True
while game_on:

    game_deck = Deck()
    game_deck.shuffle()

    bet = take_bet(player_chips)

    player_hand = Hand()
    dealer_hand = Hand()

    game_deck.deal()
    player_hand.add_card(game_deck.dealt_cards)

    game_deck.deal()
    dealer_hand.add_card(game_deck.dealt_cards)

    player_hand.find_hand_value()
    dealer_hand.find_hand_value()

    show_some(player_hand,dealer_hand)

    if blackjack_on_deal(player_hand,dealer_hand,player_chips,bet) == False:

        hit_or_stand(game_deck,player_hand,dealer_hand)

        if player_hand.value <= 21:
            dealer_hit(game_deck,player_hand,dealer_hand)

    show_all(player_hand, dealer_hand)

    win_check(player_hand,dealer_hand,player_chips,bet)

    print(player_chips)

    if not replay():
        print('Thanks for playing!')
        game_on = False
        break