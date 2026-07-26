# The else in loops if knowns as "NO BREAK"

my_list = [1, 2, 3, 4, 5]

for i in my_list:
    print(i)
else:
    print ('Hit the for/else statement!')
# prints 1 2 3 4 5 Hit the for/else statement!



# With a break statement it does not hit the else
# However the break statement does not execute
for i in my_list:
    print(i)

    if i == 6:
        break
else:
    print ('Hit the for/else statement!')
# prints 1 2 3 4 5 Hit the for/else statement!



# Break is hit so now it does not print
for i in my_list:
    print(i)

    if i == 4:
        break
else:
    print ('Hit the for/else statement!')
# prints 1 2 3 4


# Practical Example
my_names = ['Bob', 'Charlie', 'Mark']

def name_exists(names, targetName):
    for name in names:
        if name == targetName:
            print("Name found")
            break
    else:
        print("No name found")

name_exists(my_names, 'Mark') # Name found
name_exists(my_names, 'Bob') # Name found
name_exists(my_names, 'Joe') # No name found
name_exists(my_names, 'charlie') # No name found