from math import floor
def pair_product(numbers, target_product):
  numMap = {}
  for index,num in enumerate(numbers):
    complement = floor(target_product/num)
    if(complement in numMap):
        return (numMap[complement],index)
    numMap[num] = index


print(pair_product([3, 2, 5, 4, 1], 8))
print(pair_product([3, 2, 5, 4, 1], 10))
print(pair_product([4, 7, 9, 2, 5, 1], 5))
print(pair_product([4, 7, 9, 2, 5, 1], 35))
print(pair_product([3, 2, 5, 4, 1], 10))
print(pair_product([4, 6, 8, 2], 16))