# vue-todo-app
Progressive lessons (Quick Demo) to learn Vue.js by creating a "To do application". 
For more details, please review my Vue Repository ["Vue Introduction"](https://github.com/anmarjarjees/vue.js-intro)
    
    NOTE: This repo only contains Part1 code examples for now. Part2 will be added later.

# Code Sequence:
Following the current code example sequence:

### index1.html
-   {{ title }} = mustache syntax
    - Think of it as a placeholder for your JS variable inside HTML.
    - Changes in JS automatically update the page — no manual DOM manipulation.

- data()
    - Built-in Vue function; always returns an object.
    - Vue "reactively" monitors every property returned by data().
    - This is why changing title in JS instantly updates "< h1 >".
- Why the structure looks like nested brackets
    - data() is a function => must return an object => object contains key-value pairs for each reactive variable.
    - It might seem complex at first, but it's a consistent pattern in Vue 3 and foundational for all later lessons (v-model, event handling, lists, etc.).

### index2.html
- v-model
    - Two-way binding between JS variable and input.
    - Any change on one side instantly reflects on the other.

- Reactive variable message
    - Declared inside data() — Vue automatically monitors it.
    - Changing it in JS or typing in input updates the DOM immediately.
- Mustache expressions still work
    - {{ message.toUpperCase() }} demonstrates using JS expressions in the template.

- Step-by-step intensive comments
    - Every line that might trigger a question has a student-friendly explanation.
    - Official Vue documentation is linked for deeper reading.

### index3.html
- Reactive counter (counter) — demonstrates automatic DOM updates.
- Event handling (v-on / @click) — shows how Vue listens to user actions.
- Methods inside Vue — shows organized, reusable functions.
- Conditional rendering (v-if / v-else-if / v-else) — introduces simple UI logic reacting to data.
- Inline expressions — shows small JavaScript snippets directly in templates.
- Rich comments + official links — students can read and experiment with Link.

### index4.html
- v-if — only renders element if condition is true.
- v-else-if / v-else — provides alternative rendering paths.
- Reactive variable (taskCount) — tied to <input> via v-model for real-time updates.
- Step-by-step comments — students can read, understand, and experiment.
- Official links — direct references to Vue docs for deeper exploration.

### index5.html
- v-for — loop through arrays and display each item.
- (item, index) in array — access both item value and its index.
- :key — essential for Vue to efficiently track items during updates.
- Reactive arrays — adding or removing items will automatically update the UI (used in later To-Do lessons).
- Step-by-step comments + links — ensures students understand both the concept and syntax

### index6.html
- Methods: Functions defined inside methods and called via Vue directives.
- Event Handling: @click="methodName" syntax to trigger methods on user actions.
- Reactive Updates: Changing a reactive variable (counter) automatically updates the DOM.
- Step-by-Step Comments: Every piece of code is explained in student-friendly language.
- Official References Included for further reading.

### index7.html
- Shows v-for with index to manipulate specific items in an array.
- Uses methods to encapsulate addTask and deleteTask logic.
- Demonstrates reactive DOM updates automatically when the tasks array changes.
- Includes official documentation links for each concept.

# References, Resources, and Credits:
- My Other Repositories about Vue.JS:
    - https://github.com/anmarjarjees/vue.js-intro
    - https://github.com/anmarjarjees/vue.js-basic-app
- Vue 3 Quick Start – Get started with Vue 3 using CDN or NPM:
    - https://vuejs.org/guide/quick-start
- Creating & Mounting Vue Apps – Learn how to use Vue.createApp() and connect it to the DOM:
    - https://vuejs.org/guide/essentials/application.html#mounting-the-app
- Reactivity Fundamentals – Understand reactive state and how data() works:
    - https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state
- Template Syntax – Learn about mustache syntax {{ }} for displaying reactive data:
    - https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation
- Forms & v-model – Two-way binding for input elements and forms:
    - https://vuejs.org/guide/essentials/forms.html#using-v-model
- Conditional Rendering (v-if / v-else) – Show or hide elements based on reactive conditions:
    - https://vuejs.org/guide/essentials/conditional.html#v-if-else
- Rendering Lists with v-for – Loop through arrays and objects in the template:
    - https://vuejs.org/guide/essentials/list.html#v-for
- Methods – Define functions inside Vue apps and understand the this context:
    - https://vuejs.org/guide/essentials/methods.html
- Event Handling – Use @event directives to respond to user actions:
    - https://vuejs.org/guide/essentials/event-handling.html