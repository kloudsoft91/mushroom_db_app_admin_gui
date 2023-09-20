<template>
    <fieldset class="mb-2 grid grid-cols-4 border-1 border-slate-150 px-2 py-1" id="mush_tags_fset">
        <legend>Mushroom Tags</legend>
        <div class="px-2 col-start-1 justify-self-center">
            <label for="mush_poison">Poisonous</label>&nbsp;
            <input type="checkbox" value="Poisonous" id="mush_poison" v-model="tags" @change="addMushKey('tags', tags)" />
        </div>
        <div class="px-2 col-start-2 justify-self-center">
            <label for="mush_edible">Edible</label>&nbsp;
            <input type="checkbox" value="Edible" id="mush_edible" v-model="tags" @change="addMushKey('tags', tags)" />
        </div>
        <div class="px-2 col-start-3 justify-self-center">
            <label for="mush_psycho">Psychoactive</label>&nbsp;
            <input type="checkbox" value="Psychoactive" id="mush_psycho" v-model="tags" @change="addMushKey('tags', tags)" />
        </div>
        <div class="px-2 col-start-4 justify-self-center">
            <label for="mush_gourmet">Gourmet</label>&nbsp;
            <input type="checkbox" value="Gourmet" id="mush_gourmet" v-model="tags" @change="addMushKey('tags', tags)" />
        </div>
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const tags = ref([])

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "hymenium", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}
</script>