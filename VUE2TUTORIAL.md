# Guide for this Project

### Start
```
vue create vue2_project
```
Project was created using Vue CLI and when given the choice, Vue2 was chosen. 

Project is set up with this standard form
```
<template>
    html belongs here
</template>

<script>
    JavaScript belongs here

    export default {
        name: "ComponentName",
        data: () => ({}),
        methods: () -> DON'T USE ARROW FUNCTIONS HERE
    }
</script>

<style lang="scss" scoped>
  @import './SomeComponent.scss';
</style>
```

### Things I learned initially
Important features that I initially learned are v-model, v-for in used with li tags, and emits.

Something to note. You cannot call console.log in the template as you can in React. If you want to call console.log()

```
<template>
    {{debug(x)}}
</template>

<script>
    export default {
        name: "SomeComponent",
        methods: {
            debug(x) {
                console.log(x)
            }
        }
    }
</script>
```

v-model was an important concept initially. It improves upon the some sort of onChange callback from React. Thus when v-model is used as in the example below,
someString in the data object will always reflect what the user is typing in the input. Also to note, if we are to use someString in the methods, you can access
using "this", BUT it is considered good practice to set "this" equal to a different variable (such as self in the example) because "this" may change

```
<template>
    <input v-model: "someString" />
</template>

<script>
    export default {
        name: "SomeComponent",
        data: () => ({
            someString: ""
        }),
        methods: {
            function someFunction() {
                let self = this

                console.log(self.someString)
            }
        }
    }
</script>
```

v-for changes how lists are done in Vue2 compared to React. As you might recall, in React you can use .map on an Array to make a list but in Vue2 we can do it as such.

```
<template>
    <ul>
        <li v-for="thing in something" :key="thing.id">
            {{ stuff }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "SomeComponent",
        data: () => ({
            something: []
        }),
    }
</script>
```

Emits were the hardest thing to understand coming from React. Remembering from React, when we want a child component to change the state of the parent component, we may 
pass in a callback function. If the child is pretty deep in the tree, we can keep passing the function all the way down the tree and the function will still have access to the 
scope of the parent component. 
Vue2 does it in reverse. Children will EMIT a signal to their parent usually in the form of a string and upon receiving that signal, the parent can do some action. Emits can pass a variable

```
PARENT COMPONENT
<template>
    <Child @someEmit="doSomething()" />
</template>

<script>
    import Child from './components/Child'

    export default {
        name: "Parent",
        methods: {
            doSomething(something) {
                consoole.log(something)
            }
        }
    }
</script>

CHILD COMPONENT
<template>
    <button @click="emit("someEmit", something)"
</template>

<script>
    import Child from './components/Child'

    export default {
        name: "Child",
        data: () => ({
            something: "Vue is fucking weird"
        })
    }
</script>
```

To note, I used some short hand in the last example. Vue2 has some shorthand for v-on:click which is the same as @click. For v-bind:key, it's the same as :key. 
So to make another React anology, onClick, onHover, onSomething events are equivalent to @click, @hover, @something. For the bind, you have to bind these tags to the vue component. So where in react we can just say key, href, etc. In Vue2 it would be :key, :href, :etc

### Vuex - Redux for Vue
The docs for [Vuex](https://vuex.vuejs.org/) were great and explains it very well.

### Vuetify - Material UI for Vue
As for [Vuetify](https://vuetifyjs.com/en/), there are so many components you need to just start using to get use to it. 
Something to note, v-row requires that v-col is a direct child of it. 
