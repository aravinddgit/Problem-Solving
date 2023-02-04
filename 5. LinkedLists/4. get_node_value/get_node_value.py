class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

# def get_node_value(head, index):
#   current = head
#   while(current is not None):
#     if(index == 0):
#       return current.val
#     index -= 1
#     current = current.next
  
def get_node_value(head, index):
  if index == 0:
    return head.val
  if head is None:
    return None
  index -= 1
  return get_node_value(head.next, index)
  
print(f"Answer: {get_node_value(a, 2)}") # 'c'