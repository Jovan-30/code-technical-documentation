# Assign variables to items in the list, tuple or range
# Must have the same number of variables as items in the list

t = (12345, 54321, 'hello!') 
x, y, z = t
print(x, y, z)

var1, var2, var3, var4 = [1, 2, 3, 4]
print(var1, var2, var3, var4)

var1, var2, var3, var4 = 6, 7, 8, 9
print(var1, var2, var3, var4)

var1, var2, var3, var4 = range(1, 5)
print(var1, var2, var3, var4)

a, b, *c = [1, 2, 3, 4] # the *c will generate a list for remaining items
print(a, b, c) # 1, 2, [3, 4]

a, *b, c = [1, 2, 3, 5, 4] # the *b will generate a list for remaining items
print(a, b, c) # 1, [2,3,5], 4