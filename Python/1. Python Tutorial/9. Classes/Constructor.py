# Constructor is implicitly called at the time of instantiation. 
# And it is not a method, its sole purpose is to initialize the instance variables.

class Employee2:
    # Constructor - # returns None cause it's not called directly by your code
    # Instantiates the variables
    def __init__(self, firstName, lastName, pay) -> None: 
        self.first = firstName # same as manually -- emp_1.firstName = 'Cory'
        self.lastName = lastName # same as manually -- emp_1.lastName = 'Schafer'
        self.pay = pay
        self.email = firstName + lastName + "@company.com"

emp_1 = Employee2('Bob', 'Schmore', 35000) # init method will run automatically
emp_2 = Employee2('Rob', 'Blake', 95000) 

print("Employee 1", emp_1.first + " " + emp_1.lastName, emp_1.pay, emp_1.email)
print("Employee 1", emp_2.first + " " + emp_2.lastName, emp_2.pay, emp_2.email)
