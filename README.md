# doingDone
## A To-Do app for young families (and anyone else who needs reminding to do the boring things in life)

Part of the aim of this app is to gamify household life by asigning points to day-to-day tasks. The other aim is to shift the responsibility of seeing that tasks are completed from responsible household members to the app and the task doers.

## Who is this app good for

It's primary audience is families with school age kids. It aims to be Autism friendly by providing step by step guide to each task and lists each task in order of when they are due (i.e. tasks that need to be completed sooner are listed at the top).

It would also be good for share houses where there are regular communal tasks that no one wants to do but still need doing.

## Why was this app created

I have a family with two school age kids, one of whom has mild autism. I (and my partner) are constantly telling the kids to do various tasks and I'm sick of it. Hopefully this app will provide a list of tasks (some of which I always forget) to the kids without it haveing to be me (or my partner) saying "Put your shoes on" in the morning or "Brush your teeth" before bed. It's also useful to remind me of the jobs I have to do as part of the household (like "Clean the toilet" on Friday night or "Unpack the dishwasher" after dinner).

It's written in React/Redux because a while ago I went for a job interview. I didn't get the job because I didn't have any front-end framework experience. Hopefully this will stop that from happening again.

## How it works

1. Someone in the family (presumably a parent - AKA "_Approver_") creates tasks and assigns household members to those tasks
2. Every day a list of tasks is created for each household members
3. The household members completes task
4. The _Approver_ approves the task setting the level of completion and the amount of intervention required (i.e. if the task is done without prompting intervention would be 0, if the task doer was repeatedly prompted and cajolled to complte the task intervention would be 3) and points are assigned (also if the household implements pocket money each task gets a calculated dollar value)
5. Throughout the week points (and if applicable dollars) are awarded. Task doers can see their progress

## Todo

1. Get sort out time management.
2. Get local persistance working.
3. Get user completion of tasks and approval workflow working.
4. Get images and task steps working.
5. Implement regular and random date recurrance for tasks
6. Implement user management
7. Implement household settings
8. Implement pocket money & reward management
9. Implement personal goals
10. Get local persistance synced with cloud/server
11. Implement sharehouse mode - all tasks are rotated between each household member and any household member (other than the taks doer) can approve a task activity.
12. Create an native android version of the app. If there's enough money, (and demand) I'll employ someone to create an iOS app version too. Windows (and other platforms) will only have access the web app.

## The future

After testing the app I would like to offer it as a subscription service (probably AU$10 a year or AU$1 per month per household). This will allow me to keep developing the app, without need to put annoying adds on or sell data.

__NOTE:__ I will __*NEVER*__ sell user data. If it comes down to it, I will end the subscription service. I will provide an easy way to extract all your data. Users will be able to set up their own local servers if they want.