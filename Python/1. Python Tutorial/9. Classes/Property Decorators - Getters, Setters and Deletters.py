class Fruit:
    def __init__(self, name: str) -> None:
        self.name = name

    # Getter
    @property
    def fruit_name(self):
        return f'{self.name}'

    @fruit_name.setter
    def fruit_name(self, value):
        self.name = value

    @fruit_name.deleter
    def fruit_name(self):
        del self.name

fruit = Fruit('Orange')

print(fruit.fruit_name)
fruit.fruit_name = 'Bannana'
print(fruit.fruit_name)

# deleteing the value
del fruit.fruit_name




# Example 2
class Money:
    def __init__(self, dollars, cents):
        self.total_cents = dollars * 100 + cents

    # Getter and setter for dollars...
    @property
    def dollars(self):
        return self.total_cents // 100
    
    @dollars.setter
    def dollars(self, new_dollars):
        self.total_cents = 100 * new_dollars + self.cents

    # And the getter and setter for cents.
    @property
    def cents(self):
        return self.total_cents % 100
    
    @cents.setter
    def cents(self, new_cents):
        self.total_cents = 100 * self.dollars + new_cents

money = Money(27, 12)

print("I have {} dollar and {} cents.".format(money.dollars, money.cents))
# prints I have 27 dollar and 12 cents.