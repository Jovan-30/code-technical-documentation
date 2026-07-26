# A namespace is a dictionary, mapping names (as strings) to values. When you do an assignment, 
# like a = 1, you're mutating a namespace. When you make a reference, like print(a), Python 
# looks through a list of namespaces to try and find one with the name as a key.

# A scope defines which namespaces will be looked in and in what order. The scope of any 
# reference always starts in the local namespace, and moves outwards until it reaches the
# module's global namespace, before moving on to the builtins (the namespace that references
# Python's predefined functions and constants, like range and getattr), which is the end of the 
# line.

# Imagine you have a function named inner, nested within a global function named outer, and inner
# contains a reference to a name. Python first looks in the inner namespace. If the name's not
# there, Python then looks in the outer namespace. If that fails, Python tries the module's global 
# namespace, then the builtin namespace, eventually throwing a NameError if the name isn't found.

# When we say x is in a function's namespace, we mean it is defined there, locally within the 
# function. When we say x is in the function's scope, we mean x is either in the function's 
# namespace or in any of the outer namespaces that the function's namespace is currently
# nested within.

# Whenever you define a function, you create a new namespace and a new scope. The namespace is 
# the new, local hash of names. The scope is the implied chain of namespaces that starts at the
# new namespace, then works its way through any outer namespaces (outer scopes), up to the global
# namespace (the global scope), and on to the builtins.

# Local namespace --> Global namespace --> Built-in namepsace


# Example 1
# var1 is in the global namespace
var1 = 5
def some_func():
 
    # var2 is in the local namespace
    var2 = 6
    def some_inner_func():
 
        # var3 is in the nested local
        # namespace
        var3 = 7


# Examples 2
a = 25

def myfunc():
    prefix = "value of a is"
    print(f"{prefix} {a}")

myfunc()
# Namespace
#
#
# Built-In
# print | Ox7f91
#
# Global
# a | Ox7fae
# myfunc | Ox7fyH
#
# Local
# prefix | 02xa4d
#