<template>
    <!-- JSON Render Box -->
    <div class="json-render-box">
        <div class="code-container">
            <span class="language-text">json</span>
            <div class="top-container">
                <div class="copy-container">
                    <span class="copied-text" v-if="copied">Copied code!</span> -->
                    <button class="copy-button" @click="copy(code)">Copy Code</button>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const { copy, copied, text } = useClipboard();

const props = withDefaults(
    defineProps<{
        code?: string;
    }>(),
    { code: '' }
);
</script>

<style>
.json-render-box {
    flex: 1;
    background-color: #fff;
    padding: 2rem;
    border: 1px solid #ccc;
    max-width: 50%;
}

.code-container {
    background: #1e1e1e;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-top: 1em;
    overflow: hidden;
    border-radius: 0.5rem;
}

.top-container {
    display: flex;
    justify-content: flex-end;
}

.copy-container {
    display: flex;
}

.copied-text {
    margin-right: 1em;
}

.language-text {
    position: absolute;
    top: 0;
    left: 1em;
    padding: 0.25em 0.5em;
    font-size: 14px;
    text-transform: uppercase;
    border-bottom-right-radius: 0.25em;
    border-bottom-left-radius: 0.25em;
    background-color: #f7df1e;
    color: black;
}

.copy-button {
    position: absolute;
    top: 0;
    right: 0em;
    padding: 0.25em 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    background: black;
    color: white;
}

:slotted(pre) {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex: 1 1 0%;
    overflow-x: auto;
    padding: 1rem;
    line-height: 1.625;
    counter-reset: lines;
}

:slotted(pre code) {
    width: 100%;
    display: flex;
    flex-direction: column;
}

:slotted(pre code .line) {
    display: inline-table;
    min-height: 1rem;
}

:slotted(pre code .line::before) {
    counter-increment: lines;
    content: counter(lines);
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: left;
    color: rgba(115, 138, 148, 0.4);
}

:slotted(pre code .highlight) {
    background-color: #363b46;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid red;
}
</style>