# The break statement breaks out of the innermost enclosing for or while loop.

for item in range(1, 6):
    print(item)
    break # will print 1

for item in range(1, 6):
    if item == 4:
        break

    print(item) # will print 1 2 3 This will end




# An example with while a while loop
n = 6

while n <= 10:
    print(n)
    n += 1

    if n == 9:
        break # this will print 6 7 8 
print("End of while loop") 