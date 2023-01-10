# def uncompress(s):
#   start = 0
#   end = 0
#   outputString = ""
#   while(start < len(s)):
#     while(s[end].isnumeric()):
#         end += 1
#     repeatValue = int(s[start:end])
#     while(repeatValue != 0):
#         outputString += s[end]
#         repeatValue -= 1
#     end += 1
#     start = end
#   return outputString

def uncompress(s):
  start = 0
  end = 0
  outputArr = []
  while(start < len(s)):
    while(s[end].isnumeric()):
        end += 1
    outputArr.append(s[end] * int(s[start:end]))
    end += 1
    start = end
  return "".join(outputArr)

print(uncompress("2c3a1t"))
