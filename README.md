# @sigveh/use-datepicker

A headless datepicker component for Vue 3.

## Installation

```sh
# npm
npm install @sigveh/use-datepicker

# pnpm
pnpm add @sigveh/use-datepicker
```

## Usage

The `useDatepicker` composable encapsulates logic needed for a functional datepicker component.

```html
<script setup lang="ts">
  import { useDatepicker } from '@sigveh/use-datepicker'
  const { currentDate, getDateProps, getDateEvents, days } = useDatepicker()
</script>

<template>
  <div>
    <h2>{{ currentDate }}</h2>
    <ul>
      <li v-for="date in days" :key="date">
        <button v-bind="getDateProps(date)" v-on="getDateEvents(date)">
          {{ date }}
        </button>
      </li>
    </ul>
  </div>
</template>
```

## License

This project is licensed under [MIT](./LICENSE)
