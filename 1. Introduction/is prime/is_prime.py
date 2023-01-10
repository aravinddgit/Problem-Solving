from math import sqrt, floor

def is_prime(n):
  if n < 2:
    return False
  
  for i in range(2, floor(sqrt(n)) + 1):
    if n % i == 0:
      return False
    
  return True

print(is_prime(2))
print(is_prime(3))
print(is_prime(4))
print(is_prime(5))
print(is_prime(6))
print(is_prime(7))
print(is_prime(8))
print(is_prime(31))
print(is_prime(2017))
print(is_prime(2048))
print(is_prime(1))
print(is_prime(713))
