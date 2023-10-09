<template>
    <fieldset class="mb-2 border border-slate-200 px-2" id="mush_gills_fset">
        <legend>Hymenium Features</legend>
        <label for="mush_gills_desc">Gills Description</label>
        <input
            type="text"
            id="mush_gills_desc"
            class="form-input"
            v-model="hymeniumDescription"
            @change="addMushKey('hymenium', hymeniumDescription, 'description')" />

        <!-- <label for="mush_gills_type">Type</label>
        <input
            type="text"
            id="mush_gills_type"
            class="form-input"
            v-model="hymeniumType"
            @change="addMushKey('hymenium', hymeniumType, 'type')" /> -->

        <label for="mush_gills_colour">Gill Colour</label>
        <select
            id="mush_gills_colour"
            name="mush_gills_colour"
            class="form-input"
            v-model="hymeniumColour"
            @change="addMushKey('hymenium', hymeniumColour, 'colour')">
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="yellowish-orange">Yellowish-Orange</option>
                <option value="orange-brown">Orange-Brown</option>
                <option value="palebrown">Pale Brown</option>
                <option value="indigo">Indigo</option>
        </select>

        <label for="mush_gills_attach">Gill Attachment</label>
        <select
            type="text"
            id="mush_gills_attach"
            class="form-input"
            v-model="hymeniumAttachment"
            @change="addMushKey('hymenium', hymeniumAttachment, 'attachment')">
            <option value="none">None</option>
            <option value="adnate">Adnate</option>
            <option value="adnexed">Adnexed</option>
            <option value="decurrent">Decurrent</option>
            <option value="emarginate">Emarginate</option>
            <option value="free">Free</option>
            <option value="seceding">Seceding</option>
            <option value="sinuate">Sinuate</option>
            <option value="subdecurrent">Subdecurrent</option>
        </select>

        <label for="mush_spore_colour">Spore Colour</label>
        <select
            id="mush_spore_colour"
            name="mush_spore_colour"
            class="form-input"
            v-model="hymeniumSporeColour"
            @change="addMushKey('hymenium', hymeniumSporeColour, 'spore_colour')">
                <option value="white">White</option>
                <option value="black">Black</option>
                <option value="purplebrown">Purple Brown</option>
                <option value="rustbrown">Rust Brown</option>
                <option value="reddishpink">Reddish Pink</option>
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

watch(mushJSON, async (newMushJSON, oldMushJSON) => {
    if (mushJSON.value['hymenium']['description']) {
        hymeniumDescription.value = mushJSON.value['hymenium']['description']
    }
    if (mushJSON.value['hymenium']['type']) {
        hymeniumType.value = mushJSON.value['hymenium']['type']
    }
    if (mushJSON.value['hymenium']['colour']) {
        hymeniumColour.value = mushJSON.value['hymenium']['colour']
    }
    if (mushJSON.value['hymenium']['attachment']) {
        hymeniumAttachment.value = mushJSON.value['hymenium']['attachment']
    }
    if (mushJSON.value['hymenium']['spore_colour']) {
        hymeniumSporeColour.value = mushJSON.value['hymenium']['spore_colour']
    }
})
</script>