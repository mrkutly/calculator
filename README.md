I am building a calculator with a UI as my last project in the
JS portion of the Odin Project's Web Dev 101 course.

I am only using vanilla JS and CSS for functionality and styling to make sure
I am comfortable with these languages and not relying on libraries.


After trying a couple really messy ways of building the "equals" function,
I realized that I could do sub operations using an array index and comparing that
index to the indices around it. That way, I can keep track of a current value
and a global value (kinda like kadane's algorithm).
