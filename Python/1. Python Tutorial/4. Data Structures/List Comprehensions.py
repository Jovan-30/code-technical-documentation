# Provides a concice way to make lists

# Expression followed by for clause then zero or more for or if clauses
# [expression - for clause - 0 or more/for if clauses ]
# expression is like the append line

# Example 1
squares = []
for x in range(1, 11):
    squares.append(x ** 2)
print(squares)

squares2 = [x ** 2 for x in range(1, 11)]
print(squares2)


# Example 2
combs = []
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.append((x, y))
print(combs)

combs2 = [(x,y) for x in [1,2,3] for y in [3,1,4] if x != y]
print(combs2)


# Example 3
vec = [-4, -2, 0, 2, 4]
print(vec)

doubledValues = [v * 2 for v in vec] # create a new list with the values doubled
print(doubledValues)

noNegatives = [v for v in vec if v >= 0] # filter the list to exclude negative numbers, include 0
print(noNegatives)

names = ['bob', 'mark', 'marco', 'jovan']
capitalzieNames = [n.capitalize() for n in names] # call a method to each element

tupleList = [(v, v ** 2) for v in vec] # create a list of 2-tuples like (number, square)
print(tupleList)


