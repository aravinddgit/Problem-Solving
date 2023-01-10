def compress(s):
  outputString = ""
  startIndex = 0
  endIndex = 0
  while(startIndex < len(s)):
    while(endIndex < len(s) and (s[endIndex] == s[startIndex])):
      endIndex += 1
    charCount = endIndex - startIndex
    outputString += (str(charCount) if charCount > 1 else "") + s[startIndex]
    startIndex = endIndex
  return outputString

print(compress('ccaaatsss'))
print(compress('ssssbbz'))
print(compress('ppoppppp'))
print(compress('nnneeeeeeeeeeeezz'))
print(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'))