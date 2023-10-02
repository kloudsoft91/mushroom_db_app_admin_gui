<template>
    <!-- JSON Builder Box -->
    <div class="flex p-4 border-1 border-slate-150 w-1/2">
        <form id="input_form" class="w-full grid">
            <label id="mush_note_1">* Enter list values separated by a comma. e.g. Red, Yellow</label>
            <br><br>
            <formset_tags />
            <formset_basic />
            <formset_stipe />
            <formset_hymenium />
            <formset_cap />
            <button class="border-1 border-black rounded-lg px-2 py-1 w-auto justify-self-right" @click="resetForm">Reset</button>
        </form>
    </div>
</template>

<script setup>
import initData from '~/assets/data/initData.js'
import { ref, onMounted } from 'vue'

const mushJSON = useState('mushJSON', () => ref({}))

onMounted(() => {
    resetForm();
})

const resetForm = () => {
    mushJSON.value = initData;
}
</script>