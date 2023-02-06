class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

a = Node(7)
b = Node(7)
c = Node(4)

a.next = b
b.next = c

# 7 -> 7 -> 4

# Iterative
def is_univalue_list(head):
    current = head
    while(current is not None):
        if(current.val != head.val):
            return False
        current = current.next
    return True

print(is_univalue_list(a))