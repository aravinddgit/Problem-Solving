class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")
e = Node("e")
f = Node("f")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

# a -> b -> c -> d -> e -> f

def print_list(head):
  output = ""
  while(head.next is not None):
    output += str(head.val) + "->"
    head = head.next
  output += str(head.val)
  print(output)

# Iterative
def reverse_list(head):
  prev = None
  current = head
  while(current is not None):
    nextNode = current.next
    current.next = prev
    prev = current
    current = nextNode
  return prev

# Recursive
def reverse_list1(head, prev = None):
  if head is None:
    return prev
  nextNode = head.next
  head.next = prev
  return reverse_list1(nextNode, head)

print_list(a)
print_list(reverse_list(a)) # f -> e -> d -> c -> b -> a
# print_list(reverse_list1(a))