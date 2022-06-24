from tictactoe_helpers import *

# show "blank" game board
game_board = [' ']*9

print('Welcome to Tic Tac Toe!')
display_blank_board(game_board)

# player 1 selects x or o
players = player_input()

game_on = True

while game_on:
    
    game_board = [' ']*9
    win = False
    full_board = False
    
    # x or o is randomly selected to have the first turn
    marker = choose_first()
    
    while win == False:
        
        position = player_choice(game_board) 
        
        place_marker(game_board, marker, position)
        
        display_board(game_board)      
        
        if win_check(game_board,marker):
            break
        
        marker = marker_switch(marker)
        
        if full_board_check(game_board):
            print("\nIt's a tie, good game!")
            win = True
            
    game_on = replay()
    
    if not game_on:
        print('\nThanks for playing!\n')
        break
