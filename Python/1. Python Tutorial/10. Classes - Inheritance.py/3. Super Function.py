# The super() function is used to give access to methods and properties of a parent or sibling class.
# The super() function returns an object that represents the parent class.

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


# The super() function is used to give access to methods and properties of a parent or sibling class.
# The super() function returns an object that represents the parent class.
class Developer(Employee): 
    raise_amount = 4.56

    # want to add another attribute
    def __init__(self, first, last, pay, prog_lang) -> None:
        super().__init__(first, last, pay) # also can do Employee.__init__(self, first, last, pay)
        self.prof_lang = prog_lang



dev_1 = Developer('Bob', 'Marleyd', 45000, 'Java')
dev_2 = Developer('Bob', 'Marleyd', 45000, 'Python')

emp_1 = Employee('Bob', 'Marleyd', 45000)
emp_2 = Employee('Mark', 'Ray', 35000)