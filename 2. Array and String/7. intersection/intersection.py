# def intersection(a, b):
#   setA = set(a)
#   setB = set(b)
#   return list(setA & setB)

def intersection(a, b):
  set_a = set(a)
  return [ num for num in b if num in set_a]

print(intersection([4,2,1,6], [3,6,9,2,10]))
print(intersection([2,4,6], [4,2]))
print(intersection([4,2,1], [1,2,4,6]))
print(intersection([0,1,2], [10,11]))

a = [ i for i in range(0, 50000) ]
b = [ i for i in range(0, 50000) ]
print(intersection(a,b))