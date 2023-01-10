def max_value(nums):
  max_value = float("-inf")
  for num in nums:
    if num > max_value:
      max_value = num
  return max_value

print(max_value([4, 7, 2, 8, 10, 9]))
print(max_value([10, 5, 40, 40.3]))
print(max_value([-5, -2, -1, -11]))
print(max_value([42]))
print(max_value([1000, 8]))
print(max_value([1000, 8, 9000]))
print(max_value([2, 5, 1, 1, 4]))
