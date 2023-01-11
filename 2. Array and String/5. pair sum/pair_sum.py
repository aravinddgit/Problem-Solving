def pair_sum(numbers, target_sum):
  numMap = {}
  for index,num in enumerate(numbers):
    complement = target_sum - num
    if(complement in numMap):
      return (numMap[complement], index)
    numMap[num] = index  
    
      
print(pair_sum([3, 2, 5, 4, 1], 8))
print(pair_sum([4, 7, 9, 2, 5, 1], 5))
print(pair_sum([4, 7, 9, 2, 5, 1], 3))
print(pair_sum([1, 6, 7, 2], 13))
print(pair_sum([9, 9], 18))
print(pair_sum([6, 4, 2, 8 ], 12))