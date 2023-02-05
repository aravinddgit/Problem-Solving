class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

a = Node(5)
b = Node(7)
c = Node(10)
d = Node(12)
e = Node(20)
f = Node(28)
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
# 5 -> 7 -> 10 -> 12 -> 20 -> 28

q = Node(6)
r = Node(8)
s = Node(9)
t = Node(25)
q.next = r
r.next = s
s.next = t
# 6 -> 8 -> 9 -> 25

def print_list(head):
  output = ""
  while(head.next is not None):
    output += str(head.val) + "->"
    head = head.next
  output += str(head.val)
  print(output)

def merge_lists(head1, head2):
  if(head1 is None and head2 is None):
    return None
  if(head1 is None):
    return head2
  if(head2 is None):
    return head1
  
  mergedHead = head1 if head1.val <= head2.val else head2

  prev = Node("x")
  while(head1 is not None and head2 is not None):
    if(head2.val <= head1.val):
      nexthead2 = head2.next
      prev.next = head2
      head2.next = head1
      prev = head2
      head2 = nexthead2
    else:
      prev = head1 
      head1 = head1.next
  
  if(head1 is None):
    prev.next = head2
    
  return mergedHead


print_list(a)
print_list(q)
print_list(merge_lists(a, q))
# 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28 