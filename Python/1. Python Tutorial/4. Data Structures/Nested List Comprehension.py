# Main example
l = [[i for j in range(2)] for i in range(3)]
print(l)
# [[0, 0], [1, 1], [2, 2]] - 
# Why cause for i for j in range(2) = [0.1] but since appending i instead of elements [i,i]
# Thus [i,i] for i in rangre[3] = 0, 1, 2 and we append each elemnmt append[i,i]


# Example 1
combs = []
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.append((x, y))
print(combs)

combs2 = [(x,y) for x in [1,2,3] for y in [3,1,4] if x != y]
print(combs2)
