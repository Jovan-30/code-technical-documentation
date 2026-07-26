# Liks a switch case in Java

# Similar to id/else
status = 701

match status:
    case 401 | 400 | 700:
        print("Bad request")
    case 402 | 501 | 701:
        print("Good request")
    case _: # default match if nothing else gets hit
        print("Something is wrong")
