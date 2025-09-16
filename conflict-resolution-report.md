While working on our project, I ran into a merge conflict in the README.md file. 
This happened when I tried to merge the feature/api-endpoints branch into the feature/user-authentication branch. 
Both branches had changes in the same part of the file: the authentication branch described the login feature, 
while the API branch added notes about the API structure. Git didn’t know which version to keep, 
so it inserted conflict markers like <<<<<<<, =======, and >>>>>>> to highlight the overlapping changes.

To fix it, I opened the file and carefully read both sets of edits. 
I then combined the content so that all important information was included and made sense together. 
I removed the conflict markers and saved the file. After that, I staged and committed the 
changes with the message: “Resolve README.md conflict by merging authentication and API details.”

Looking back, there are ways we could have prevented this conflict. 
Communicating clearly about which sections each team member is working on is key. 
Pulling updates from the main branch more frequently can also help, so branches stay up to date. 
Breaking work into smaller files or sections reduces overlap, making merges smoother. Finally,
 assigning specific responsibilities to each branch and
 using descriptive branch names makes it easier to avoid editing the same lines simultaneously.

This experience taught me that conflicts aren’t just problems—they’re a natural part of teamwork in Git.
 Taking the time to resolve them carefully ensures that no work is lost and that the final merged 
file accurately reflects all contributions from the team. Handling conflicts manually, while slightly tedious, 
gives complete control over what goes into the project and keeps it organized.
