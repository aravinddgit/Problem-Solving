class Node:
    def __init__(self, value):
        self.val = value
        self.next = None

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

# a -> b -> c -> d

# Iterative
def linked_list_find(head, target):
    current = head
    while(current is not None):
        if (current.val == target):
            return True
        current = current.next
    return False

# Recursive
def linked_list_find1(head, target):
    if(head is None):
        return False
    if(head.val == target):
        return True
    return linked_list_find1(head.next, target)


print(f"Answer: {linked_list_find(a, 'c')}") # True
print(f"Answer: {linked_list_find1(a, 'c')}") # True