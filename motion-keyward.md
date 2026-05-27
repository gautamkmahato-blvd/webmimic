there are fixed corner positions on each path:Left side (in path order, from outside coming in):

Notion (top-left, far)
Linear (top, second)
Apple (corner, bends down)
... continues down to cloud
Right side (mirrored):

LinkedIn / Microsoft (top-right, top corner)
HubSpot (corner where path bends down)
... continues down to cloud
The logos don't slide continuously — they dwell at each corner/node position, then jump-snap to the next position when a new logo arrives at the entrance. Like a queue: each logo is at a fixed slot, and when the time comes, every logo shifts one slot forward simultaneously. So the animation should be:

All visible logos sit still at their slot positions
After a delay, every logo moves at once to the next slot (Notion → Linear's spot, Linear → Apple's spot, Apple → exits into cloud, new logo appears at Notion's empty spot)
Pause again at the new positions
Repeat
That's a discrete shift rather than a continuous flow.