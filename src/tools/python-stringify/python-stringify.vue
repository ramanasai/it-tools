<script setup lang="ts">
// import { parse as patsePython } from 'pyright';
function transformer(input: string): string {
  return input
}

const rules = [
  (v: string) => !!v || 'Input is required',
]

</script>
<template>
  <format-transformer
    input-label="Your Python Code"
    input-placeholder="Enter your Python code here..."
    output-label="Your Transformed Code"
    output-placeholder="Your transformed code will appear here..."
    :input-validation-rules="rules"
    :transformer="transformer"
  />
</template>
