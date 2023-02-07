class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

a = Node(9)
b = Node(9)
c = Node(1)
d = Node(9)
e = Node(9)
f = Node(9)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

# 9 -> 9 -> 1 -> 9 -> 9 -> 9

def longest_streak(head):

    if head is None:
        return 0

    count = 1
    maxCount = 0

    prev = head
    head = head.next
    while(head is not None):
        if prev.val == head.val:
            count += 1
            prev = head
            head = head.next
        else:
            if(count > maxCount):
                maxCount = count
            count = 1
            prev = head
            head = head.next
    
    if(count > maxCount):
        maxCount = count

    return maxCount

        

print(longest_streak(a))
    
  



