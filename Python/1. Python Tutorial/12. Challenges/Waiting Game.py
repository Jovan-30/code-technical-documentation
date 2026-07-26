from random import randint 
from time import time

def waiting_game():
    targetTime = round(randint(2, 4), 3)

    print(f"Your target time is {targetTime} seconds")

    input('\n---Press Enter to Begin---')
    startTime = time()

    input(f'---Press Enter again atfter {targetTime} seconds---')
    endTime = time()

    result = abs(round(startTime - endTime, 3))
    
    # Output display
    resultInterface = f"\nElapsed time: {result} seconds\n"

    if result == targetTime:
        print(resultInterface + "Perfect")

    elif result > targetTime:
        difference = result - round(targetTime, 3)
        print(f'{resultInterface} ({round(difference, 3)} seconds too slow)') 

    elif result < targetTime:
        difference = round(targetTime, 3) - result
        print(f'{resultInterface} ({round(difference, 3)} seconds too fast)') 


waiting_game()