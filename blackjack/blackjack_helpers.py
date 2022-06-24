def take_bet(player_chips):
    chips_available = player_chips.chip_total
    try:
        bet = int(input('Place your bet! '))
    except:
        print("Whoops! That is not a number.")
        take_bet(player_chips)
    else:
        if bet > chips_available:
            print(f'You only have {chips_available} chips, place a smaller bet')
            take_bet(player_chips)
        else:
            print("Bet accepted, good luck!")
            return bet

def blackjack_on_deal(player_hand,dealer_hand,player_chips,bet):
    blackjack_dealt = False
    if player_hand.value == 21 and len(player_hand.hand) == 2:
        if dealer_hand.value == 21 and len(dealer_hand.hand) == 2:
            print('YOU GOT BLACKJACK, BUT SO DID THE DEALER!')
            push(player_chips,bet)
            blackjack_dealt = True
        else:
            print('BLACKJACK! YOU WIN')
            player_wins(player_chips,bet)
            blackjack_dealt = True
    elif dealer_hand.value == 21 and len(dealer_hand.hand) == 2:
        print('DEALER GOT BLACKJACK! HOUSE WINS!')
        dealer_wins(player_chips,bet)
        show_all(player_hand,dealer_hand)
        blackjack_dealt = True
    else:
        blackjack_dealt = False
    return blackjack_dealt

def hit(deck,hand,other_hand):
    hand.add_card(deck.deck.pop(0))
    hand.value = hand.find_hand_value()
    show_some(hand,other_hand)
    return hand.value

def hit_or_stand(deck,hand,other_hand):
    hit_choice = input('\nHit or Stand? (H/S): ').upper()
    if hit_choice == 'H':
        print('HIT!')
        hit(deck,hand,other_hand)
        print(f'New hand value is: {hand.value}')
        if hand.value > 21:
            print('Hand value is > 21')
        else:
            hit_or_stand(deck,hand,other_hand)
    elif hit_choice == 'S':
        print(f'You stand at {hand.value}.')
    else:
        print('Error. Please enter H or S')
    return hand.value

def dealer_hit(game_deck,player_hand,dealer_hand):
    while dealer_hand.value < 17:
        hit(game_deck,dealer_hand,dealer_hand)

def show_some(player_hand,dealer_hand):
    print('\n' + 30*'=')
    print('\nDealer shows:')
    for i in range(1,len(dealer_hand.hand)):
        print(f' {dealer_hand.hand[i]}')
    print(f'\nYour hand: {player_hand}')
    print('\n' + 30*'=')

def show_all(player_hand,dealer_hand):
    print('\n' + 30*'=')
    print(f'\nDealer has: {dealer_hand}')
    print(f'\nYou have: {player_hand}')
    print('\n' + 30*'=')

def player_busts(player_chips,bet):
    print('\nBUST! Better luck next time!')
    player_chips.lose_bet(bet)
    return player_chips

def player_wins(player_chips,bet):
    print('\nYOU WIN!')
    player_chips.win_bet(bet)
    return player_chips

def dealer_busts(player_chips,bet):
    print('\nDEALER BUSTS! YOU WIN!')
    player_chips.win_bet(bet)
    return player_chips

def dealer_wins(player_chips,bet):
    print('\nDEALER WINS!')
    player_chips.lose_bet(bet)
    return player_chips

def push(player_chips,bet):
    print('\nPush.')
    return player_chips

def win_check(player_hand,dealer_hand,player_chips,bet):
    if player_hand.value > 21:
        player_busts(player_chips,bet)
    elif dealer_hand.value > 21 and player_hand.value <= 21:
        dealer_busts(player_chips,bet)
    elif 21 >= player_hand.value > dealer_hand.value:
        player_wins(player_chips,bet)
    elif player_hand.value < dealer_hand.value <= 21:
        dealer_wins(player_chips,bet)
    else:
        push(player_chips,bet)

def replay():
    return input('Do you want to play again? (y/n): ').lower().startswith('y')