<template>
    <fieldset class="mb-2 border-1 border-slate-150 px-2" id="mush_gills_fset">
        <legend>Hymenium Features</legend>
        <label for="mush_gills_desc">Gills Description</label>
        <input type="text" id="mush_gills_desc" class="mb-2 border-1 border-slate-150 flex w-full" v-model="hymeniumDescription" @change="addMushKey('hymenium', hymeniumDescription, 'description')" />

        <label for="mush_gills_type">Type</label>
        <input type="text" id="mush_gills_type" class="mb-2 border-1 border-slate-150 flex w-full" v-model="hymeniumType" @change="addMushKey('hymenium', hymeniumType, 'type')" />

        <label for="mush_gills_colour">Gill Colour</label>
        <select id="mush_gills_colour" name="mush_gills_colour" class="mb-2 border-1 border-slate-150 flex w-full" v-model="hymeniumColour" @change="addMushKey('hymenium', hymeniumColour, 'colour')">
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="orange-brown">Orange-Brown</option>
            <option value="palebrown">Pale Brown</option>
        </select>

        <label for="mush_gills_attach">Gill Attachment</label>
        <input type="text" id="mush_gills_attach" class="mb-2 border-1 border-slate-150 flex w-full" v-model="hymeniumAttachment" @change="addMushKey('hymenium', hymeniumAttachment, 'attachment')" />

        <label for="mush_spore_colour">Spore Colour</label>
        <select id="mush_spore_colour" name="mush_spore_colour" class="mb-2 border-1 border-slate-150 flex w-full" v-model="hymeniumSporeColour" @change="addMushKey('hymenium', hymeniumSporeColour, 'spore_colour')">
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="purplebrown">Purple Brown</option>
            <option value="rustbrown">Rust Brown</option>
        </select>
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const hymeniumDescription = ref("")
const hymeniumType = ref("")
const hymeniumColour = ref("")
const hymeniumAttachment = ref("")
const hymeniumSporeColour = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "hymenium", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}
</script>