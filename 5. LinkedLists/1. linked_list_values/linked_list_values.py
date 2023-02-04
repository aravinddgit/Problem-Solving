class Node:
    def __init__(self, value):
        self.val = value
        self.next = None

a = Node("A")
b = Node("B")
c = Node("C")
d = Node("D")

a.next = b
b.next = c
c.next = d

# def linked_list_values(head):
#   current = head
#   outputList = []
#   while(current is not None):
#     outputList.append(current.val)
#     current = current.next
#   return outputList

def linked_list_values(head, arr=[]):
  values = []
  _linked_list_values(head, values)
  return values
  
def _linked_list_values(head, values):
  if head is None:
    return
  values.append(head.val)

print(linked_list_values(a))