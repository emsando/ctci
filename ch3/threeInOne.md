
### Describe how you could use a single array to implement three stacks

You could subdivide the array and keep track of the start and end points of each stack. In this way, you can make the first third one stack, the second third the second, the third the third.

You could also START with those boundaries, but allow the stacks to grow dynamically according to availability in 
other parts of the array. For example, if stack 2 is empty, stack 1 can bleed over into 2's space. 2 could then begin 
wherever 1 leads off. An issue here is the stacks will end up with varying lengths. 

Another way could be to have stacks according to index % 3 and track the top of each stack. So for example, stack 1 can occur on indices % 3 === 0, so indices 0, 3, 6, 9, etc, and you're always tracking the top index so you can push and pop accordingly. With a dynamically resizing array (like a native JS array) this allows you to grow as much as you need, however the array will need to always be at least as big as the greatest index of the three stacks, even if the others only much fewer elements.

Each option may work better than another according to varying use cases. 