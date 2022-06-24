'''
Number Guessing Game
Created as exercise for udemy 2022 Complete Python Bootcamp From Zero to Hero in Python course
Feb 2022
Warmer and Colder indications only compare current guess to one previous guess
'''

from random import randint

print('Guess the random number! Accepted range is 1-100 inclusive, integers only.')

x=randint(1,100)
guesslist=[0]
win=False
while win==False:
    guess = int(input('\nEnter your guess here: '))
    if guess > 100 or guess < 1:
        print('\nNumber out of bounds, enter a number between 1 and 100!')
    elif guess != x:
        guesslist.append(int(guess))
        if len(guesslist)<=2:
            if abs(guess-x)<=10:
                print('Warm!')
            else:
                print('Cold!')
        else:
            if abs(guesslist[-1]-x) < abs(guesslist[-2]-x):
                print('Warmer')
            else:
                print('Colder')
    else:
        win=True
        print(f'\n\nYOU WIN! The correct number was {x}. It took you {len(guesslist)} tries to guess correctly!')