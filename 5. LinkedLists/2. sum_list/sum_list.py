class Node:
    def __init__(self, value):
        self.val = value
        self.next = None

a = Node(2)
b = Node(8)
c = Node(3)
d = Node(-1)
e = Node(7)

a.next = b
b.next = c
c.next = d
d.next = e

# 2 -> 8 -> 3 -> -1 -> 7

def sum_list(head):
    current = head
    sum = 0
    while(current is not None):
        sum += current.val
        current = current.next
    return sum

def sum_list1(head):
    if head is None:
        return 0
    return head.val + sum_list(head.next)

print(sum_list(a))
print(sum_list1(a))