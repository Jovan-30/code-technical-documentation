name = input("What is your name? ")

match name:
    case "Bob":
        print("Hello", name)
    case "Bill" | "Mike":
        print("Hi", name)
    case "Joe":
        print("Bye", name)
    case _:
        print("Hello?")