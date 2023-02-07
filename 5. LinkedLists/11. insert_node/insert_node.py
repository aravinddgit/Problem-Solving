
class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

# Iterative
def insert_node(head, value, index):
    
    if(index == 0):
        newNode = Node(value)
        newNode.next = head
        return newNode

    current = head
    while(index != 1):
        index -= 1
        current = current.next

    newNode = Node(value)
    nextNode = current.next
    current.next = newNode
    newNode.next = nextNode

    return head

# n = number of nodes
# Time: O(n)
# Space: O(1)


# Recursive
def insert_node(head, value, index):

    if(index == 0):
        newNode = Node(value)
        newNode.next = head
        return newNode

    if(index == 1):
        newNode = Node(value)
        nextNode = head.next
        head.next = newNode
        newNode.next = nextNode
        return head
    
    nextNode = head.next
    index -= 1
    head.next = insert_node(nextNode, value, index)
    return head
    
# n = number of nodes
# Time: O(n)
# Space: O(n)