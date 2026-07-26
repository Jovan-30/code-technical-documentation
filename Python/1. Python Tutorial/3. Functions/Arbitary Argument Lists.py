# *args **kwargs
# Arbitary Argument List
# *args collects the positional arguments
# kwargs collects the keyword arguments

def burgerShop(burgerType, *args, **kwargs):
    print("\nThe burger type? "+ burgerType)
    print("-------------------------")

    for arg in args:
        print(arg)
    print("-------------------------")
    
    for k, w in kwargs.items():
        print(k.capitalize() + ": " + w)

burgerShop("Hamburger", "Tastes So Good", "Yum", "Yes", shopkeeper="Rob John", shopName="Burger Heaven")



# Another example 
def concat(*args, sep="/"):
    return sep.join(args)

x = concat("earth", "mars", "venus")
print(x)
# output - 'earth/mars/venus'


# Example with unpacking
def lawyerSchedule(day, *times, **associates):
    print("--------------------------")
    print("I am avaiable on: ", day)
    print("--------------------------")


    print("My available times are: ")
    for time in times:
        print(time)

    print("My asscoiates included:")
    for title, name in associates.items():
        print(title.capitalize() + ": " + name)

markSchedule = ['Thursday', '10:00', '11:00', '12:30']
markAssistants = {'bookeeper':"Rob Stone", 'assistant':"Jamie Benn", 'cleaner':"Mark Girod"}

joeSchedule = ['Wednesday', '10:00', '11:00', '12:30', '4:30', '5:15']
joeAssistants = {'bookeeper':"Mike Smith"}


lawyerSchedule(*markSchedule, **markAssistants)
lawyerSchedule(*joeSchedule, **joeAssistants)