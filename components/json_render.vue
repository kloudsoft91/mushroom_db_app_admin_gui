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
            <!-- <slot /> -->
            <div>{{ JSON.stringify(mushJSON, undefined, 4) }}</div>
        </div>
    </div>
</template>

<script setup>
import { useClipboard } from '@vueuse/core'

const mushJSON = useState('mushJSON')
const { copy, copied, text } = useClipboard()
</script>

<style>
.json-render-box {
    flex: 1;
    padding: 2rem;
    border: 1px solid #ccc;
    max-width: 50%;
}

.code-container {
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
    margin-right: 6em;
    top: 0;
    color: white;
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
    right: 0;
    padding: 0.25em 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    background: black;
    color: white;
}

pre {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex: 1 1 0%;
    overflow-x: auto;
    padding: 1rem;
    line-height: 1.625;
    counter-reset: lines;
}

pre code {
    width: 100%;
    display: flex;
    flex-direction: column;
}

pre code .line {
    display: inline-table;
    min-height: 1rem;
}

pre code .line::before {
    counter-increment: lines;
    content: counter(lines);
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: left;
    color: rgba(115, 138, 148, 0.4);
}
</style>