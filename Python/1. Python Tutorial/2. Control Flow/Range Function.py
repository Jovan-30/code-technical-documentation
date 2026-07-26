# Iterate over a sequence of numbers
for i in range(5):
    print(i) 
    # prints 0 1 2 3 4

# Range indices
print(list(range(5, 10))) # [5, 6, 7, 8, 9]
print(list(range(0, 10, 3))) # [0, 3, 6, 9]
print(list(range(-10, -100, -30))) # [-10, -40, -70]
print(list(range(-10, 0, 2))) # [-10, -8, -6, -4, -2]

# Combine range and len
a = ['Mary', 'had', 'a', 'little', 'lamb']
for i in range(len(a)):
    print(i, a[i])

# Range type is range
print(type(range(10))) # <class 'range'>

# Range can be iterative
print(sum(range(5))) # 0 + 1 + 2 + 3 + 4 = 10