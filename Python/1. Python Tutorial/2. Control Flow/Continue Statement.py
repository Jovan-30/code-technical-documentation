# Use continue to statement to skip code insdie control flow

# Continue statement to skip the even numbers
for num in range(2, 10):
    if num % 2 == 0: # skip the even numbers
        continue
    print("Found an odd number", num)


# Use the statement to point out the even and odd numbers
for num in range(2, 10):
    if num % 2 == 0:
        print("Found an even number", num)
        continue
    print("Found an odd number", num)


    
# An example with while a while loop
n = 6
while n <= 10:
    n += 1 # has to come first

    if n == 9:
        continue 
    print(n) # prints 6 7 8 10 11

print("End of while loop") 