def main():
    number = getNumber()
    printLine(number)

def getNumber():
    while True:
        n = int(input("What is the number? "))
        if n > 0:
            break # or just return here and it breaks out of the loop
    return n
    
def printLine(n):
    for _ in range(n):
        print("This is a line")

main()