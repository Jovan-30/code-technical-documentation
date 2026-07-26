# Inheritance allows us to define a class that inherits all the methods and properties --
# -- from another class.

# Print(help(Developer)) prints method resolution order
#
# class Developer(Employee)
#  |  Developer(first, last, pay) -> None
#  |
#  |  # method resolution order is the chain of inheritance
#  |
#  |  Method resolution order:
#  |      Developer
#  |      Employee
#  |      builtins.object # EVERY CLASS IN PYTHON INHERITS FROM THIS BASE OBJECT
#  |
#  |  Methods inherited from Employee:
#  |
#  |  __init__(self, first, last, pay) -> None
#  |      Initialize self.  See help(type(self)) for accurate signature.
#  |
# -- More  --

class Employee:
    raise_amount = 1.04

    def __init__(self, first, last, pay) -> None:
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + last + "@company.com"

    def fullName(self):
        return self.first + " " + self.last

    def apply_rasie(self):
        return int(self.pay * self.raise_amount)

class Developer(Employee): # will have all attributes and methods of employee class
    pass

dev_1 = Developer('Bob', 'Marleyd', 45000)
print(dev_1.email)