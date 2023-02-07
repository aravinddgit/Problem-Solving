class Node:
  def __init__(self, val):
    self.val = val
    self.next = None


def print_list(head):
  output = ""
  while(head.next is not None):
    output += str(head.val) + "->"
    head = head.next
  output += str(head.val)
  print(output)

# Iterative
def create_linked_list(values):

    if(len(values) == 0):
        return None
    
    dummyNode = Node(None)
    prev = dummyNode
    for i in range(len(values)):
        newNode = Node(values[i])
        prev.next = newNode
        prev = newNode

    return dummyNode.next

# Recursive
def create_linked_list1(values, index=0):
    if(len(values) == 0):
        return None
    if(index == len(values)):
        return None
    newNode = Node(values[index])
    newNode.next = create_linked_list(values, index+1)
    return newNode


    
print_list(create_linked_list(["h", "e", "y"]))
# print_list(create_linked_list1(["h", "e", "y"]))