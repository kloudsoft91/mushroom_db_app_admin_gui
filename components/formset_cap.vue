<template>
    <fieldset class="mb-2 border-1 border-slate-150 px-2" id="mush_cap_fset">
        <legend>Cap Features</legend>
        <label for="mush_cap_desc">Cap Description</label>
        <input type="text" id="mush_cap_desc" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capDescription" @change="addMushKey('cap_features', capDescription, 'description')" />

        <label for="mush_cap_colour">Cap Colour</label>
        <select id="mush_cap_colour" name="mush_cap_colour" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capColour" @change="addMushKey('cap_features', capColour, 'colour')">
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="yellowish-brown">Yellowish-Brown</option>
            <option value="pink">Pink</option>
        </select>

        <label for="mush_cap_diameter_min">Min Diameter (cm)</label>
        <input type="text" id="mush_cap_diameter_min" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capDiaMin" @change="addMushKey('cap_features', parseInt(capDiaMin), 'diameter_min')" />

        <label for="mush_cap_diameter_max">Max Diameter (cm)</label>
        <input type="text" id="mush_cap_diameter_max" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capDiaMax" @change="addMushKey('cap_features', parseInt(capDiaMax), 'diameter_max')" />

        <label for="mush_cap_thickness_min">Min Thickness (cm)</label>
        <input type="text" id="mush_cap_thickness_min" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capThcMin" @change="addMushKey('cap_features', parseInt(capThcMin), 'thickness_min')" />

        <label for="mush_cap_thickness_max">Max Thickness (cm)</label>
        <input type="text" id="mush_cap_thickness_max" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capThcMax" @change="addMushKey('cap_features', parseInt(capThcMax), 'thickness_max')" />

        <label for="mush_cap_texture">Texture</label>
        <input type="text" id="mush_cap_texture" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capTexture" @change="addMushKey('cap_features', capTexture, 'texture')" />

        <label for="mush_cap_shape">Shape</label>
        <input type="text" id="mush_cap_shape" class="mb-2 border-1 border-slate-150 flex w-full" v-model="capShape" @change="addMushKey('cap_features', capShape, 'shape')" />
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const capDescription = ref("")
const capColour = ref("")
const capDiaMin = ref()
const capDiaMax = ref()
const capThcMin = ref()
const capThcMax = ref()
const capTexture = ref("")
const capShape = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "hymenium", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}
</script>