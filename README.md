# Javascript - Cookie Clicker
**Assignment source** : https://github.com/becodeorg/BXL-Swartz-5.34/blob/main/1.The-Field/12.Javascript/cookieClicker.md

## Tools and languages used
- HTML, CSS (Sass?), Javascript (languages)
- Visual Studio Code (coding)
- Discord, Google Meet, Github (Communication)

## Day one (25/10) 
### Instructions review
- What : Cookie Clicker.
- Why : consolidation project (mainly of Javascript skills).
- When : Starting today, 4 full days of team work, until 28/10.
- How : in groups of three, collaborating, and using respective code languages.
- Who : Teodora Cozma, Brigita Sabutyte, David Tirel.
    - Which roles ? There's frontend, backend and project management. All roles can be interchangeable and the code is shared anyways, but overall, one person can focus more on a given role.
        - Backend (Javascript) : David.
        - Backend (Javascript) + Frontend (HTML structure) : Brigita.
        - Frontend (CSS + maybe Sass) + Project Manager : Teodora.

### Brainstorming
**3 sections :**
1. Cookie section : Header 1 for the cookie counter. H1 for the amount of clicks.
    - Interactive cookie + its title + cookie counter = 1st section.
    - "Within the HTML, put a click button which will increment a counter and a label initialised at 0 to display said counter."
2. Score section :
    - Score section : score count.
    - 1 cookie : the cookie is its own button.

*(Cookie + score = left half)*

3. Store section :
    - Achievements and upgrades ?
    - Store section = button upgrade clicker + point counter = 2nd section
        - Make a multiplier (double or triple points) --> this step for review
        - Multiplier price (purchased)
        - Score updating
        - Counter within the multiplier
        - Cost increase (the cost of higher multiplier)
            - Dedicated display as well (a button underneath ?)

        - Step 12 : necessary element, certain buttons are deactivated. ex: under 20 points, player can't access certain features.

*(Right half)*

Example (reference) : http://orteil.dashnet.org/cookieclicker/.

#### Tasks for today
**This morning (10.30 - 12.30)**
- Research on the project (assignment instructions).
    - See what corresponds with the current mandatory steps (bonuses are set aside for the moment).
- Indepth look at the code of the original cookie clicker.

(https://www.youtube.com/watch?v=2Dx76lD8Scc&t=69s)
*Description of the game (and its existential qualities!)*
    - 1 click = 1 cookie
    - 15 clicks = 15 cookies = 1 cursor (purchased)
    - 10 cursors = 1 cookie/sec (CpS)
    - 100 cookies = grandma that produces and markets your cookies.
    - Cookies are currency that allows you to purchase farms, mines, factories, etc.
    = cookie economy that is permeating and overwhelming. This expands into an eventual cookieverse
    - Transcendance of existence = Ascend and start again
    - Golden cookie spawns randomly
    - Whatch out for the grandma's : potential rebellion and apocalypse. Save everyone with economic gain, or exploit them to make more wealth.
    - Small "code hack" in the console : Game.Earn(x).

(http://orteil.dashnet.org/cookieclicker/)
*Info log/Version history*
- Safe saving
- Cursor display style
- Import/export feature : retrieve a save game from an onld version (disabled after a week)
- Sell button
- Random golden cookie (how to determine its frequency)
- Clicking stats
- Clicking boosts
- Grandma discontent and apocalypse --> creatures spawned that consume cookies
- Stats menu section for upgrades and achievements
    - Milk flavour achievements -_- 
- Options menu : 
    - General : save + auto save, export/import, wipe save ; 
    - Settings : volume, fancy graphics, sounds... these are all bonuses.

*Behind the code (investigated with the inspector)*
- **HTML structure** (what we might retain for the appearance):
    - Head : all the links to styles and scripts (the Title is blinking...)
    - Body : 
        - No banner wrappers
        - Topbar : copyright and link to Social Media (like a footer but at the top of the page). We'll definitely need to include the copyright stuff with our names, this year and links to our landing pages (?).
        - Div id:"game" : the actual section of the game.
            - The sections are under the tag "section", and have their own names depending on their position (left, right, middle) + seperators.
            - Anchors : are they their own class type ? Look it up.
            - **Cookie anchor = clickable cookie !!!**
                - Canvas tag
            - Do we add a fictional backery name ?
            - Cookie counter : x cookies ; per second : s.
        - Do we create a menu with options, stats, info,... ?
            - Also, subsection for each menu item ?
        - (Technical issue : the page keeps refreshing to update data to it's hard to stay on one section to take a look at the code, before it blinks)
        - "b" tag : what's it for ?
        - Some divs are hidden ?
        - Store section :
            - Buy/Sell : these should be linked to Javascript events as their values will change with each click.
            - Products (mines, grandmas) : when the game first starts, these should be hidden/obscured.
*(Another interesting reference : https://particle-clicker.web.cern.ch/)*

**This afternoon(13.30 - 17)**
- Gathering ideas, research, and pooling resources.
- What technical difficulties/challenges may lie ahead ?
    - How does the multiplier work ?
    - Display an layout of sections and their buttons (though this is not particularly worrysome).
    - Understanding how to apply Javascript.
        - Gather resources and information on how to write the code for each button.

- Prototyping session on Figma

- What is our groupwork methodology ?
    - How does each one of us work ?
        - Alone
        - Research focused
        - Coding focused
        - Do we do "live coding sessions", where we share our screen and type code, and each one gives their input on the spot ?
    - How can we make this deadline work for us ?
    - How do we split the coding work ? How do we determine following tasks and delegate them ? If we each work on our own time, how do we agree on and consolidate the final code ?

    - Deciding how to communicate and share information :
    - On Discord, room 4 (chat + call).
    - ... (other collaboration tools).
    - Definitely Github, the repositories will be shared

- Deciding on next steps :
    - Finish research today ?
    - Start planning (+ writing ?) the HTML structure? The Javascript structure ?
    - Do we follow each step to the letter ?
        - It's been decided, at least the mandatory steps (all the inputs and buttons that have the most important functions) will be included, and the bonuses have been set aside for now (but may be included if possible.)
        - These steps are to be followed one after the other, or some at the same time ?
            - This is an important question to raise since the roles are shared : 2 people collaborating on the backend, 2 people for the frontend.
            - Therefore, in Javascript, would these steps be distributed ?
    - When it comes to actually building the project, how much do we take from the original, and how much do we make it our own ?

    - UX Prototype (please ? ^_^)


#### Thinking ahead - the evaluation portion
- Regularly assess out progress and make sure the must-have features are included
- Regularly update the ReadMe.
- Towards the end (on the last day, or even during the coding process), use the validation and performance tools (See Lighthouse and W3C Validation tool).

## Resources
- http://orteil.dashnet.org/cookieclicker/
- https://en.wikipedia.org/wiki/Cookie_Clicker 
- https://particle-clicker.web.cern.ch/
- https://www.youtube.com/watch?v=2Dx76lD8Scc&t=69s 

- https://www.flaticon.com/free-icons/cookie 
- https://www.youtube.com/watch?v=uUgOBe_wb6E
- https://www.youtube.com/watch?v=j_nI6G3ZDiE 