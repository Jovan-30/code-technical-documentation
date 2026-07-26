# if number is prime or not
def is_prime(num: int) -> str:
    """Check is integer is prime ot not"""
    
    if not num > 1:
        return f'{num} is not a prime number'

    for n in range(2, num):
        if num % n == 0:
            return f'{num} is not a prime number'

        
    return f'{num} is a prime number'

print(is_prime(-1))
print(is_prime(2))
print(is_prime(8))
print(is_prime(9))
print(is_prime(11))