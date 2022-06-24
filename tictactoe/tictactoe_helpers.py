from IPython.display import clear_output
import random

# decode_dict = {'0':'7','1':'8','2':'9','3':'4','4':'5','5':'6','6':'1','7':'2','8':'3'}
# encode_dict = {'7':'0','8':'1','9':'2','4':'3','5':'4','6':'5','1':'6','2':'7','3':'8'}

okay_nums = [1,2,3,4,5,6,7,8,9]
test_board = ['X','O','X','O','X','O','X','O','X']
code_board = ['7','8','9','4','5','6','1','2','3']
code_board_ints = [7,8,9,4,5,6,1,2,3]
ind_board = ['0','1','2','3','4','5','6','7','8']
blank_board = [' ']*9
part_board = ['X','O',' ',' ',' ','O','X','O',' ']
decode_board = [['0','7'],['1','8'],['2','9'],['3','4'],['4','5'],['5','6'],['6','1'],['7','2'],['8','3']]

# Step 1: Write a function that can print out a board. 
# Set up your board as a list, where each index 1-9 corresponds 
# with a number on a number pad, so you get a 3 by 3 board 
# representation.
# take in a list, prints the visual board 
def display_board(board):

    clear_output()
    print(f' {board[0]}  |  {board[1]}  |  {board[2]}')
    print(f'---------------')
    print(f' {board[3]}  |  {board[4]}  |  {board[5]}')
    print(f'---------------')
    print(f' {board[6]}  |  {board[7]}  |  {board[8]}')

# takes in a list, prints the visual board 
def display_blank_board(board):
    
    print(f' {board[0]}  |  {board[1]}  |  {board[2]}')
    print(f'---------------')
    print(f' {board[3]}  |  {board[4]}  |  {board[5]}')
    print(f'---------------')
    print(f' {board[6]}  |  {board[7]}  |  {board[8]}')


# asks for input from user (str), returns tuple including 2 str objects
def player_input():

    choice = 'wrong'
    a = ['X','O','x','o']

    while choice not in a:
        choice = input('Player 1, would you like to be X or O? ')
        # print(f'\nSorry, I don''t understand, please enter X or O')

    # Assign player 2 the opposite marker
    p1 = choice.upper()

    if p1 == 'X':
        p2 = 'O'
    else: 
        p2 = 'X'

    return (p1,p2)
# p1_marker, p2_marker = player_input()


# takes in board list, marker string, and position int
# assigns position input for current marker to the board
def place_marker(board, marker, position):
    board[position] = marker.upper()


# takes in board list and mark string
# returns bool 
def win_check(board, mark):

    win = False

    if board[0]==board[1]==board[2]==mark or board[3]==board[4]==board[5]==mark or board[6]==board[7]==board[8]==mark or board[0]==board[3]==board[6]==mark or board[1]==board[4]==board[7]==mark or board[2]==board[5]==board[8]==mark or board[0]==board[4]==board[8]==mark or board[6]==board[4]==board[2]==mark:
        win = True
        print(f'\n{mark} is the winner!')    

    return win


# returns str 'X' or 'O'
def choose_first():
    
    first = ''
    
    if random.randint(0,1)==1:
        first = 'X' 
    else:
        first = 'O'
        
    print(f'\n{first} goes first!\n')
    
    return first


# takes in board list and position int
# returns True if the position is open
# returns False if the position is taken
def space_check(board, position):
    
    a = ['X','O']
    
    return board[position] not in a


# takes in board list
# returns bool - True if board is full, False if board is not full
def full_board_check(board):
    
    full = True
    
    a = ['X','O']
    
    for i in board:
        if i not in a:
            full = False
            break
    
    return full


# takes in board list
# asks for user input from numpad 
# returns an int indicating the board list index corresponding to the numpad entry
def player_choice(board):
    
    if full_board_check(board)==True:
        print('The board is full!')
        return False
    
    code_board_ints = [7,8,9,4,5,6,1,2,3]    
    okay_nums = ['1','2','3','4','5','6','7','8','9']
    desired_position = 7
    decoder = 0
    
    
    # check if input is valid 
    valid_input = False    
    check = False
    
    while valid_input==False or check == False:
        
        desired_position = input('Which position would you like to mark? (1-9 on num pad): ')  
        
        if desired_position.isdigit() == False:
            print('\nPlease enter a number 1-9')
            continue
                   
        elif desired_position not in okay_nums:
            print('\nPlease enter a number 1-9')
            
        elif desired_position in okay_nums:
            
            decoder = code_board_ints.index(int(desired_position))
            
            if not space_check(board,decoder):
                print('\nThat position is occupied.\n\nPlease choose another position on the board.')

            else: 
                return decoder


def replay():
    
    a = ['n','N','y','Y']
    b = ['y','Y']
    
    replay_choice = input(f'\nPlay again? (Y/N): ')
    
    if replay_choice not in a:
        print('f\nSorry, I don''t understand, please enter Y or N')
    
    return replay_choice in b


def marker_switch(m):

    if m == 'X':
        m = 'O'
    elif m == 'O':
        m = 'X'

    return m