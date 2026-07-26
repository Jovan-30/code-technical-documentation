# That a varaible is meant to be scoped in the global scope

# If no global in function it creates a new global outside of the fucntion
# For example
#  def do_global():
#         global spam
#         spam = "global spam"

# Example 1
a = 25
def my_func():
    global a
    print(a)
    a = 2
my_func()
print(a)
# 25
# 2


# Example 2
a = 25
def my_func():
    global a
    print(a)
    a = 2
print(a)
# 25


# Example 3
def my_func():
    global b
    b = 35
my_func()
print(b)
# 35


globalNameSpaceDictionary = globals() # To view global namespace dictionary
print(globalNameSpaceDictionary)
