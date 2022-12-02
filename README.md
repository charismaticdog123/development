# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

The goal of this application is to allow users to create their own adventure character(s) through picking through types (background, archetype, weapon) or through tropes (the antihero, comedic relief, lovable rogue, magical being, written by a woman). This makes it easier for writers or DnD fans to create quick characters. Each selection is tied to 'survivability points' (likelihood of surviving an adventure), which are aggregated in the card to the right after each selection.

### Usability Principles Considered

The main usability principles I had in mind were effectiveness and efficiency in terms of allowing users to create characters quickly and with ease and consistency and design/layout consistency. The latter was done through cards that used consistent design and columns to see as many cards as possible without being overwhelming.

### Organization of Components

There is a separate component for the aggregator and the trope-items. I also had components for the sort by radio buttons and the filtering buttons, but was not able to finish with the filtering.

### How Data is Passed Down Through Components

For the aggregator, the prop that is passed in is the 'cart' which tallies up the amount of survivability points after aggregating. For the trope-items, the prop that passed in is the item itself, which has the attributes that it can access such as name, description, type, trope, image, and survivability points.

### How the User Triggers State Changes

The user triggers state through selecting one of the radio buttons for sorting (either by survivability points or none, which resets the order) and by selecting one of the checkboxes to filter through the categories. The two categories to filter through are Type and Trope.


# dev
