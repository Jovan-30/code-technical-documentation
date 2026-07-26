# Self is this instance of the class

# -- We can have many different instances of the same class, thus same methods --
# -- Thus, when we create methods inside of a class they receive the instance as --
# -- the first argument automatically, so the class knows which instance we are --
# -- talking about

# -- Example: an increment fucntion. Once instance is at 3 and another is at 2. --
# -- We want to increment() the 3, thus we need to know which instance and that is --
# -- why we receive the instance as the first argument

class Employee2:
    def __init__(self) -> None: # returns None cause it's not called directly by your code
        pass

emp1 = Employee2() # no need for self, cause automatically passed in