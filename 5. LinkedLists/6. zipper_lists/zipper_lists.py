class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

a = Node("a")
b = Node("b")
c = Node("c")
a.next = b
b.next = c
# a -> b -> c

x = Node("x")
y = Node("y")
z = Node("z")
x.next = y
y.next = z
# x -> y -> z

def print_list(head):
  output = ""
  while(head.next is not None):
    output += str(head.val) + "->"
    head = head.next
  output += str(head.val)
  print(output)

# Iterative
def zipper_lists(head_1, head_2):
  if(head_1 is None and head_2 is None):
    return None
  if(head_1 is None):
    return head_2
  if(head_2 is None):
    return head_1
  zipperHead = head_1

  while(head_1 is not None and head_2 is not None):
    nextHead1 = head_1.next
    nextHead2 = head_2.next
    head_1.next = head_2
    if nextHead1 is not None:
      head_2.next = nextHead1
    head_1 = nextHead1
    head_2 = nextHead2
  return zipperHead

# Iterative 2
def zipper_lists1(head_1, head_2):
  tail = head_1
  current_1 = head_1.next
  current_2 = head_2
  count = 0
  while current_1 is not None and current_2 is not None:
    if count % 2 == 0:
      tail.next = current_2
      current_2 = current_2.next
    else:
      tail.next = current_1
      current_1 = current_1.next
    tail = tail.next
    count += 1
    
  if current_1 is not None:
    tail.next = current_1
  if current_2 is not None:
    tail.next = current_2
    
  return head_1
    
# Recursive 
def zipper_lists2(head_1, head_2):
  if(head_1 is None and head_2 is None):
    return None
  if(head_1 is None):
    return head_2
  if(head_2 is None):
    return head_1
  
  nextHead1 = head_1.next
  head_1.next = head_2
  head_2.next = zipper_lists2(nextHead1,head_2.next)
  
  return head_1

print_list(a)
print_list(x)
print_list(zipper_lists(a, x))
# print_list(zipper_lists1(a, x))
# print_list(zipper_lists1(a, x))
# a -> x -> b -> y -> c -> z