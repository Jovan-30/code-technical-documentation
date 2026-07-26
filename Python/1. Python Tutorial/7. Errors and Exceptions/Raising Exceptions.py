# The raise statement allows the programmer to force a specified exception to occur.
#
#
# raise NameError("Hi There")
#
# 


while True:
    try:
        x = int(input("Enter a number: "))
        
        if x < 0 or x > 150:
            raise ValueError("Age range is invalid")


    except ValueError as vError:
        print("Not a valid number: ", vError)
    except Exception as exc:
        print("Something went wrong")

