# Customizing class variables from parent in the child class

class Employee:
    raise_amount = 10.04

    def __init__(self, first, last, pay) -> None:
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + last + "@company.com"

    def fullName(self):
        return self.first + " " + self.last

    def apply_rasie(self):
        return int(self.pay * self.raise_amount)

    @classmethod
    def set_all_raise_amount(cls, amount): 
        cls.raise_amount = amount 

class Developer(Employee): # will have all attributes and methods of employee class
    raise_amount = 4.56 # child class will not impact parent class

dev_1 = Developer('Bob', 'Marleyd', 45000)
dev_2 = Developer('Bob', 'Marleyd', 45000)
emp_1 = Employee('Bob', 'Marleyd', 45000)
emp_2 = Employee('Mark', 'Ray', 35000)

print("Emp", emp_1.raise_amount) # 10.04
print("Emp", emp_2.raise_amount) # 10.04
print("Dev", dev_1.raise_amount) # 4.56
print("Dev", str(dev_2.raise_amount) + "\n") # 4.56

Employee.raise_amount = 11.56 
emp_1.set_all_raise_amount(11.56) # does same as above

print("Emp", emp_1.raise_amount) # now 11.56
print("Emp", emp_2.raise_amount) # now 11.56
print("Dev", dev_1.raise_amount) # 4.56 remains same however would change is there was no raise --
print("Dev", dev_2.raise_amount) # 4.56 -- amount in the Dev class as it inherits from parent class Employee




