def most_frequent_char(s):
  charMap = {}
  for char in s:
    if(char not in charMap):
      charMap[char] = 0
    charMap[char] += 1
  
  mostFreqCount = 0
  mostFreqChar = ""
  for char in charMap:
    if(charMap[char] > mostFreqCount):
      mostFreqChar = char
      mostFreqCount = charMap[char]
  
  return mostFreqChar

print(most_frequent_char('bookeeper'))
print(most_frequent_char('david'))
print(most_frequent_char('abby'))
print(most_frequent_char('mississippi'))
print(most_frequent_char('potato'))
print(most_frequent_char('eleventennine'))
print(most_frequent_char('riverbed'))
      