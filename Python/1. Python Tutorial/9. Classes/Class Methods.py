# Class methods are methods that are called on the class itself, not on a specific object instance. 
# Therefore, it belongs to a class level, and all class instances share a class method. 
# A class method is bound to the class and not the object of the class.

class Employee:
    raise_amount = 1.04
    totalEmployees = 0

    def __init__(self, first, last, pay) -> None:
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + last + "@company.com"

        Employee.totalEmployees += 1 

    def fullName(self):
        return self.first + " " + self.last

    def apply_rasie(self):
        return int(self.pay * self.raise_amount)

    @classmethod
    def set_all_raise_amount(cls, amount): # class passed in automatically as 1st argument
        cls.raise_amount = amount # sets all raise_amount to 1.05 when called

    # Can also be used as an alternative constructor
    @classmethod # alternative constructor like unpacking
    def from_string_alt_consrtcutor(cls, emp_str):
        first, last, pay = emp_str.split('-')
        return cls(first, last, pay)

data1 = ['Corey', 'Schafer', 40000]
emp_1 = Employee(*data1)
emp_2 = Employee('Bob', 'Marley', 35000)

Employee.set_all_raise_amount(1.05) # same as emp_1.set_all_raise_amount(1.05)

print(Employee.raise_amount) # now all class variables changed from class method for each instance
print(emp_1.raise_amount)  # now all class variables changed from class method for each instance
print(emp_2.raise_amount)  # now all class variables changed from class method for each instance


# Class Methods as alternative constructors
emp_1_str = 'Jon-Do-70000'

new_emp_1 = Employee.from_string_alt_consrtcutor(emp_1_str)
print(new_emp_1.first + " " + new_emp_1.last)