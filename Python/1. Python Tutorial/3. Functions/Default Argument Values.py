# Non-Default/Positional Vales Must Come First
def ask_ok(prompt, y = 4, k = 7):
    print(prompt + " " + str(y) +  str(k))

ask_ok('Do you really want to quit?')
ask_ok('OK to overwrite the file?', 2)
ask_ok('OK to overwrite the file?', 2, 6)


# The default values are evaluated at the point of function definition in the defining scope
i = 5 # The default value

def f(arg=i): # Default value is only 5
    print(arg)

i = 6 # Defined after, therefore not default
f() # Prints 5




# The default value is mutable
def f(a, L=[]):
    L.append(a)
    return L

print(f(1))
print(f(2))
print(f(3))
# [1]
# [1, 2]
# [1, 2, 3]


# Never want to pass mutable data type like list as argument
def f(a, L=None): # To fix it
    if L is None:
        L = []
    L.append(a)
    return L
print(f(1))
print(f(2))
print(f(3))
# [1]
# [2]
# [3]




