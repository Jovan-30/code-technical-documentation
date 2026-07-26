# The if-else statement2
x = int(input("Please enter an integer "))

if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0: # elif is for else if
    print('Zero')
elif x == 1:
    print('Single')
else: # else is optional
    print('More')
