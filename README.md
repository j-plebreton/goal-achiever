# Goal Environment Selector

This is a simple web page that allows you to select one or more goals and see which environments are compatible with all of your selected goals. The list of goals and environments is stored in a JSON file, which can be easily edited to add or remove items.

## Usage

To use the web page, simply open the index.html file in a web browser. You will see a list of goals that you can select by clicking on them. As you select goals, the page will display a list of environments that are compatible with all of your selected goals.

## Adding/Changing Data

The list of goals and environments is stored in a file called data.json. To add or change items in this file, simply open it in a text editor and modify the JSON data. Here's the structure of the JSON data:

```json
{
    "goals": ["goal1", "goal2", "goal3", ...],
    "environments": [
        {
            "name": "environment1",
            "goals": ["goal1", "goal2", "goal3", ...]
        },
        {
            "name": "environment2",
            "goals": ["goal2", "goal4", "goal5", ...]
        },
        ...
    ]
}
```

To add a new goal, simply add a new string to the "goals" array:

```json
{
    "goals": ["goal1", "goal2", "goal3", "newgoal", ...],
    ...
}
```

To add a new environment, add a new object to the "environments" array. The object should have a "name" property (a string) and a "goals" property (an array of strings representing the goals that are compatible with this environment):

```json
{
    "environments": [
        {
            "name": "environment1",
            "goals": ["goal1", "goal2", "goal3", ...]
        },
        {
            "name": "environment2",
            "goals": ["goal2", "goal4", "goal5", ...]
        },
        {
            "name": "newenvironment",
            "goals": ["goal3", "newgoal", ...]
        },
        ...
    ]
}
```

You can also remove items from the JSON data by simply deleting the corresponding array elements or objects.

## Conclusion

That's it! With these instructions, you should be able to use and modify the Goal Environment Selector web page to suit your needs.
