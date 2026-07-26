# Provides a concice way to make sets

# Expression followed by for clause then zero or more for or if clauses
# [expression - for clause - 0 or more/for if clauses ]
# expression is like the append line

# Example 1
squares = set()
for x in range(1, 11):
    squares.add(x ** 2)
print(squares)

squares2 = {x ** 2 for x in range(1, 11)}
print(squares2)


# Example 2
combs = set()
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.add((x, y))
print(combs)

combs2 = {(x,y) for x in [1,2,3] for y in [3,1,4] if x != y}
print(combs2)


# Example 3
vec = [4, 2, 0, 2, 4]

doubledValues = {v * 2 for v in vec} # create a new list with the values doubled
print(doubledValues)


