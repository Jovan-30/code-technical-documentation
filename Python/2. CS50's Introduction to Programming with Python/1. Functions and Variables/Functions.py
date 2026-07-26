def main():
    name = input("What is your name? ")
    
    hello(name)
    hello()

def hello(to="World"):
    print("Hello", to)

main()


