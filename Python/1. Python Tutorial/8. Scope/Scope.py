# LEGB --> Local -> Enclosing -> Global -> Built-In
# LEGB --> Follow eac one in order


# Example 1 - Global and Local
x = 'global x' # global variable 

def test():
    y = 'local y' # local variable 
    x = 'local x'
    print(y)
    print(x)

# print(y) # Name Error
print(x) # global x
test() # local y local x



# Example 2 - Global and Local
x = 'global x' # global variable 

def test():
    global x # have to set at top, x now in global scope

    y = 'local y' # local variable 
    x = 'local x'
    print(y)
    print(x)

# print(y) # Name Error
print('\n' + x) # global x
test() # local y local x
print(x) # local x



# Example 3 - BuilIn Scope
import builtins
# print(dir(builtins))

# def min(): # Local scope 
#     pass

def my_min(): # Local scope - This works cause diff name
    pass

# Does not work if def min() uncommented as it will go local scope func: def min() --
# -- and expect 0 arguments, but this built-in min has 1. Confues both mins but goes --
# -- to local scope def min() fucntion before built-in scope
m = min([5, 1, 4, 2, 3]) # Built-In Scope
print("\n" + str(m))
print("\n")



# Example 4 - Enclosing Scope Introduction
def outer():
    x = 'outer x' # local to outer fucntion

    def inner(): # fucntion is local to outer fucntion
        x = 'innex x' # local to inner fucntion
        print(x) # looks for local variable so local inner

    inner() 
    print(x) # look for local variable so outer local 

outer() # inner x, outer x



# Example 4 - Enclosing - What it is?
print("\n")

def outer():
    x = 'outer x' # local to outer fucntion

    def inner(): # fucntion is local to outer fucntion
        print(x) # Checks local, then local scope in any ENCCLOSING FUCNTION, thus outer x

    inner() 
    print(x) # look for local variable so outer local

outer() # outer x, outer x



# Example 5 - Enclosing - Error
# def outer():

#     def inner(): # fucntion is local to outer fucntion
#         x = 'inner x'
#         print(x) # local x variable to inner fucntion

#     inner() 
#     print(x) # look for local, enclsoing, global, butilin SCOPE and there is no x. SO ERROR HERE

# outer() # inner x THEN ERROR



# Example 6 - Nonlocal keyword, similar to global keyword but for enclosing functions
print("\n")
def outer():
    x = 'outer x'

    def inner(): # fucntion is local to outer fucntion
        nonlocal x # Impacting variable in eclosing fucntion now, similar to global
        x = 'inner x' # Now overwrites enclsoing outer fucntions x
        print(x)

    print(x)
    inner() 
    print(x) 

outer() # outer x, inner x, inner x



# Example 7
print("\nExample 7")
x = 'global x'

def outer():
    x = 'outer x'

    def inner():
        nonlocal x
        x = 'inner x'
        print(x)

    print(x)
    inner()
    print(x)

outer() # outter x, inner x, inner x
print(x) # global x

