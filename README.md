OK, so I initially setup the latin text to fall within the div ng-view as a separate file.
Would you have done it that way (I created a file called into.html).

So, I have put the default values in controller for the new-meal so if you move away and come back it resets to zero each time.

What I have done is OK right now. I suppose in theory I should do a reset the counter for everything to zero - not just the new meal form (as that doesn't currently reset the "my earnings")

An interesting thought came to me...
What if I wanted to store each meal (values) in an array and list out the details for each
So therefore I'd have a meal object that adds to the meal listing object
and if that listing would allow me to delete a row / edit a row...
Then the "summary" meal object would house the earnings, count, avg tip etc...


