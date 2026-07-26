# Instance variables - contain data that is unique to each instance


# Example 1
class Employee: 
    pass

emp_1 = Employee() # unique instance of the employee class
emp_2 = Employee() # unique instance of the employee class

# Manually create instance variables to each employee
# Each of these instances have attributes unique to them
emp_1.firstName = 'Cory'
emp_1.lastName = 'Schafer'
emp_1.email = 'CorySchafer@company.com'

emp_2.manager = 'Bob Hartley'

print("Employee 1", emp_1.firstName + " " + emp_1.lastName)
print("Employee 2",  emp_2.manager)



# Example 2
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
