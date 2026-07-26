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


class Developer(Employee): 
    raise_amount = 4.56
    def __init__(self, first, last, pay, prog_lang) -> None:
        super().__init__(first, last, pay) # also can do Employee.__init__(self, first, last, pay)
        self.prog_lang = prog_lang


class Manager(Employee):
    def __init__(self, first, last, pay, employeeList = None) -> None:
        super().__init__(first, last, pay)

        # If empty list is passed in [] then initalize new list, otherwise intialize to list passed in
        if employeeList is None:
            self.employeeList = []
        else:
            self.employeeList = employeeList

    def add_employee(self, emp):
        if emp not in self.employeeList:
            self.employeeList.append(emp)

    def remove_employee(self, emp):
        if emp in self.employeeList:
            self.employeeList.remove(emp)

    def print_emps(self):
        for emp in self.employeeList:
            print("--", emp.first + " " + emp.last, "\n", end="")


dev_1 = Developer('Bob', 'Marley', 45000, 'Java')
dev_2 = Developer('Rob', 'Blake', 45000, 'Python')

emp_1 = Employee('Jon', 'Terrace', 45000)
emp_2 = Employee('Naslund', 'Ray', 35000)

man_1 = Manager('Bob', 'Marleyd', 45000, [])
man_1.add_employee(dev_1)
man_1.add_employee(emp_2)
man_1.print_emps()
print("---------------------")
man_1.remove_employee(dev_1)
man_1.print_emps()
print("---------------------")
print(isinstance(man_1, Employee)) # True
print(isinstance(man_1, Manager)) # True
print(isinstance(man_1, Developer)) # False
print(issubclass(Developer, Developer)) # True
