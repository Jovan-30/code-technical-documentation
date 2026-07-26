# Static methods do not pass instance (self) ot the class (cls) in methods
# Does not depend on instance or class variable
# Perform just like regular functions but have some logical connection with the class

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
    def set_all_raise_amount(cls, amount): 
        cls.raise_amount = amount 

    # I do not access the cls or self, thus static method, no instance ot class vars
    @staticmethod  
    def is_workday_weekday(day):
        match day.weekday():
            case 5 | 6:
                return False
            case _:
                return True 


data1 = ['Corey', 'Schafer', 40000]
data2 = ['Bob', 'Marley', 35000]

emp_1 = Employee(*data1)
emp_2 = Employee(*data2)

#  Grabs date
from datetime import date as myDate
my_date = myDate(2023, 1, 21)

# Check if date is weekday workday or not
date = Employee.is_workday_weekday(my_date)
print(date)
