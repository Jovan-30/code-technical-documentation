# Class variables - are variables that are shared across all instances of a class
# Are the same for each instance, e.g. data shared among all employees for Employee class



# Example 1
class Employee:

    # class variable - eg raise percentage is 25 percent
    raise_amount = 1.25 # class variable
    totalEmployees = 0

    def __init__(self, first, last, pay) -> None:
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + last + "@company.com"

        Employee.totalEmployees += 1 # class variable. Use Employee over self cause we do not want to change (even instance) at all

    def fullName(self):
        return self.first + " " + self.last

    def apply_rasie(self):
        # Can use self or Employee.raise_amount to call class var
        # Our instance checks instance vars for raise_amount then it checks class vars
        return int(self.pay * self.raise_amount)

emp_1 = Employee('Corey', 'Schafer', 45000)
emp_2 = Employee('Bob', 'Marley', 35000)

print(emp_1.apply_rasie()) # prints the function
print(emp_2.apply_rasie()) # prints the function

print(Employee.totalEmployees) # prints total employees class variable

emp_1.raise_amount = 1.05 # creates an attribute/instance variable manually for emp_1 --
# -- since we check instance vars b4 class vars. rasie_amount is now 1.05 for emp_1 only
# -- as an instance variable

Employee.manager = 'Bob Mckenzie' # manually create class variables
print(emp_1.manager)
print(emp_2.manager)