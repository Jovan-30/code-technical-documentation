# These methods give us complete control over the various high-level interfaces --
# -- that we use to interact with objects. 

# In Python, special methods are a set of predefined methods you can use to enrich your classes.

# dunder is the __funname__, essentially the double underscores



# Example 1 of Dunder method
print(int.__add__(1, 2)) # same as print(1 + 2)

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

    # Should be used for debugging and logging all of that - for developers
    def __repr__(self) -> str:
        return f"Employee('{self.first}', '{self.last}', {self.pay})"

    # Readable representation of object - for end user
    def __str__(self) -> str:
        return f"{self.fullName()} - {self.email} - {self.pay}"

    # Add employees like emp1 + emp2
    def __add__(self, other):
        return self.pay + other.pay

    # grabs lenght
    def __len__(self):
        return len(self.fullName().replace(" ", ""))

emp_1 = Employee('Jon', 'Terrace', 45000)
emp_2 = Employee('Naslund', 'Ray', 35000)

print(emp_1)
print(repr(emp_1)) # same as - print(emp_1.__repr__)
print(str(emp_1)) # same as - print(emp_1.__str__)

print(emp_1 + emp_2) # does not work without dunder method

print(len(emp_1))