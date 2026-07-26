# A method is a function that “belongs to” an object.

class Employee2:
    def __init__(self, firstName, lastName, pay) -> None: 
        self.firstName = firstName # same as manually -- emp_1.firstName = 'Cory'
        self.lastName = lastName # same as manually -- emp_1.lastName = 'Schafer'
        self.pay = pay

    def fullNameEmail(self): # automatically takes instance as first argument
        return self.firstName + " " + self.lastName + "@companyEmail.com"


emp_1 = Employee2('Bob', 'Schmore', 35000) # init method will run automatically
emp_2 = Employee2('Rob', 'Blake', 95000) 

print("Employee 1", emp_1.firstName + " " + emp_1.lastName, emp_1.pay, emp_1.fullNameEmail())
print("Employee 1", emp_2.firstName + " " + emp_2.lastName, emp_2.pay, emp_2.fullNameEmail())


# Same as emp_1.fullNameEmail(), but now we pass in the instance, so it knows what instance to use
print(Employee2.fullNameEmail(emp_1)) # does same as emp_1.fullNameEmail()
print(Employee2.fullNameEmail(emp_2)) # does same as emp_2.fullNameEmail()


# NO SELF IN METHOD
    # def fullNameEmail(): # automatically takes instance as first argument
    #     return self.firstName + " " + self.lastName + "@companyEmail.com"
    # print(emp_1.fullNameEmail())
# Error message - Expecting 0 positonal argument, but 1 was given
# This is cause instance passes itself as the first argument



# Methods may call other methods by using method attributes of the self argument:
class Bag:
    def __init__(self):
        self.data = []

    def add(self, x):
        self.data.append(x)

    def addtwice(self, x): 
        self.add(x) # calling add method
        self.add(x) # calling add method