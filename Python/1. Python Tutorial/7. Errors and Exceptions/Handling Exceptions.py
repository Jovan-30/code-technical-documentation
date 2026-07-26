# Handling Exception
while True:
    try:
        x = int(input("Enter a number: "))
        break
    except ValueError as vError:
        print("Not a valid number: ", vError)



def this_fails():
    x = 1/0
try:
    this_fails()
except ZeroDivisionError as err:
    print('Handling run-time error:', err)
except Exception:
    print("Something went wrong")


# Can have more than one except clause
# ... except (RuntimeError, TypeError, NameError):
# ...     pass



# If no exception, then it runs the else block
#
#
# for arg in sys.argv[1:]:
#     try:
#         f = open(arg, 'r')
#     except OSError:
#         print('cannot open', arg)
#     else:
#         print(arg, 'has', len(f.readlines()), 'lines')
#         f.close()