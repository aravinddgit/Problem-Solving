def five_sort(nums):
  start = 0
  end = len(nums) - 1
  while start < end:
    while nums[start] != 5:
      start += 1
    while nums[end] == 5:
      end -= 1
    nums[start], nums[end] = nums[end], nums[start]
    start += 1
    end -= 1
  return nums

# test_00
print(five_sort([12, 5, 1, 5, 12, 7]))
# -> [12, 7, 1, 12, 5, 5] 
# test_01
print(five_sort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]))
# -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5] 
# test_02
print(five_sort([5, 5, 5, 1, 1, 1, 4]))
# -> [4, 1, 1, 1, 5, 5, 5] 
# test_03
print(five_sort([5, 5, 6, 5, 5, 5, 5]))
# -> [6, 5, 5, 5, 5, 5, 5] 
# test_04
print(five_sort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]))
# -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5] 
# test_05
fours = [4] * 20000
fives = [5] * 20000
nums = fours + fives
print(five_sort(nums))
# twenty-thousand 4s followed by twenty-thousand 5s
# -> [4, 4, 4, 4, ..., 5, 5, 5, 5]