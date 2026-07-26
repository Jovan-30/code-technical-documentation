# Similar to global but instead allows working with local variable to enclosing fucntion


# Example 1 - Nonlocal keyword, similar to global keyword but for enclosing functions
x = 'global x'

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
print(x)