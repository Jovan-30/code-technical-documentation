# Compound data type, no constants, way to organize and manage data values of any data type

# Basic List
squares2 = [1, 4, 9, 16, 25, 36]
print(squares2)

# List Slicing - returns a new list
print(squares2[-2:])
print(squares2[2:-2])

# Concatenate Lists
squares2 = squares2 + [49, 64, 81, 100]
print(squares2)

# Add new items to the end of the list
squares = [1, 4, 9, 16, 25]
squares.append(40)
print(squares)
print(squares[3])

# List Mutable, Strings Immutable, 
squares[0] = 2
print(squares)

squares[-6] = 1
print(squares)

# Len for Lists
print(len(squares))

# Nested Lists
a = ['a', 'b', 'c']
n = [1, 2, 3]
x = [a, n]
print(x)
print(x[1][1]) # x [first or second array] [value you want to grab for that array]