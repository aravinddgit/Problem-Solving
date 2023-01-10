def anagrams(s1, s2):
  return char_count(s1) == char_count(s2)

def char_count(s):
  count = {}
  
  for char in s:
    if char not in count:
      count[char] = 0
    count[char] += 1
  
  return count

print(anagrams('restful', 'fluster'))
print(anagrams('cats', 'tocs'))
print(anagrams('monkeyswrite', 'newyorktimes'))
print(anagrams('paper', 'reapa'))
print(anagrams('elbow', 'below'))
print(anagrams('tax', 'taxi'))
print(anagrams('taxi', 'tax'))
print(anagrams('night', 'thing'))
print(anagrams('po', 'popp'))
print(anagrams('pp', 'oo'))
