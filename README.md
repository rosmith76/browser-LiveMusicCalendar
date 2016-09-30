Browser ReadME
Live Music Calendar API
I set out to create a local live music calendar. Anyone who visits the sites will
be able to view the calendar. If a user wants to use the calendar they will need
to create an account. Once a user has an account they will be able to indicate
if they will attend a particular event. For now I will load the calendar data.
Once I get that part worked out, I may allow users to enter event data. This model
will be both beneficial and problematic all at the same time. It will be beneficial
as it will be more robust if all users can add even data. It will be challenging to
communicate with rails as far as the user relationships with events they own vs.
events they will attend. It could also create problems if a user/event owner decides
to delete an event if they are no longer going. I may need only allow admin rights
to delete an event. It would also be great if venues could supply a csv file for
events. The last issue I see if two users entering the same event with a slightly
different name.
Wire Frame http://framebox.org/YwWj-RhIuvC
ERD https://docs.google.com/drawings/d/1AFRqmXcqpulKkyZBsomAu1TIwnpeef0DV5rfJ1Kqe2s/edit?usp=sharing
ERD V2 https://docs.google.com/drawings/d/1FInxXfyG_BW3gQsjnJBHv0GK7_4Bhg4dbFFIoKAoqk0/edit?usp=sharing
