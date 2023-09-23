<template>
    <fieldset class="mb-2 border-1 border-slate-150 px-2" id="mush_stipe_fset">
        <legend>Stipe Features</legend>
        <label for="mush_stipe_desc">Stipe Description</label>
        <input type="text" id="mush_stipe_desc" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeDescription" @change="addMushKey('stipe_features', stipeDescription, 'description')" />

        <label for="mush_stipe_diameter_min">Min Diameter (cm)</label>
        <input type="text" id="mush_stipe_diameter_min" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeDiaMin" @change="addMushKey('stipe_features', parseInt(stipeDiaMin), 'diameter_min')" />

        <label for="mush_stipe_diameter_max">Max Diameter (cm)</label>
        <input type="text" id="mush_stipe_diameter_max" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeDiaMax" @change="addMushKey('stipe_features', parseInt(stipeDiaMax), 'diameter_max')" />

        <label for="mush_stipe_colour">Stipe Colour</label>
        <select id="mush_stipe_colour" name="mush_stipe_colour" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeColour" @change="addMushKey('stipe_features', stipeColour, 'colour')">
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="yellowish-brown">Yellowish-Brown</option>
            <option value="pink">Pink</option>
        </select>

        <label for="mush_stipe_length_min">Min Length (cm)</label>
        <input type="text" id="mush_stipe_length_min" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeLenMin" @change="addMushKey('stipe_features', parseInt(stipeLenMin), 'length_min')" />

        <label for="mush_stipe_length_max">Max Length (cm)</label>
        <input type="text" id="mush_stipe_length_max" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeLenMax" @change="addMushKey('stipe_features', parseInt(stipeLenMax), 'length_max')" />

        <label for="mush_stipe_height_min">Min Height (cm)</label>
        <input type="text" id="mush_stipe_height_min" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeHgtMin" @change="addMushKey('stipe_features', parseInt(stipeHgtMin), 'height_min')" />

        <label for="mush_stipe_height_max">Max Height (cm)</label>
        <input type="text" id="mush_stipe_height_max" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeHgtMax" @change="addMushKey('stipe_features', parseInt(stipeHgtMax), 'height_max')" />

        <label for="mush_stipe_bruise_colour">Bruising Colour</label>
        <select id="mush_stipe_bruise_colour" name="mush_stipe_bruise_colour" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeBruiseColour" @change="addMushKey('stipe_features', stipeBruiseColour, 'bruising_colour')">
            <option value="na">N/A - No bruising</option>
            <option value="blueish">Blueish</option>
        </select>

        <label for="mush_stipe_attachment">Attachment</label>
        <input type="text" id="mush_stipe_attachment" class="mb-2 border-1 border-slate-150 flex w-full" v-model="stipeattachment" @change="addMushKey('stipe_features', stipeattachment, 'attachment')" />
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const stipeDescription = ref("")
const stipeDiaMin = ref()
const stipeDiaMax = ref()
const stipeColour = ref("")
const stipeLenMin = ref()
const stipeLenMax = ref()
const stipeHgtMin = ref()
const stipeHgtMax = ref()
const stipeBruiseColour = ref("")
const stipeattachment = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "hymenium", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}
</script>