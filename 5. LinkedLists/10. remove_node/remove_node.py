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

# Iterative
def remove_node(head, target_val):
  
  if(head.val == target_val):
    return head.next

  current = head
  prev = current
  current = current.next
  while(current is not None):
    if(current.val == target_val):
      nextNode = current.next
      prev.next = nextNode
      return head
    prev = current
    current = current.next

  return head

# n = number of nodes
# Time: O(n)
# Space: O(1)

# Recursive
def remove_node1(head, target_val):
  if head is None:
    return None

  if head.val == target_val:
    return head.next

  head.next = remove_node(head.next, target_val)
  return head

# n = number of nodes
# Time: O(n)
# Space: O(n)

remove_node(a, "c")
# remove_node1(a, "c")
# a -> b -> d -> e -> f