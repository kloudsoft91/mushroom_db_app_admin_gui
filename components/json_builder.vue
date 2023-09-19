<template>
    <!-- JSON Builder Box -->
    <div class="json-builder-box">
        <form id="input_form">
            <label id="mush_note_1">* Enter values separated by a comma. e.g. Red,Yellow</label><br><br>
            <fieldset class="fieldset-box" id="mush_tags_fset">
                <legend>Mushroom Tags</legend>
                <label for="mush_poison">Poisonous</label>&nbsp;
                <input type="checkbox" value="Poisonous" id="mush_poison" v-model="tags" @change="addMushKey('tags', tags)" />&nbsp;&nbsp;

                <label for="mush_edible">Edible</label>&nbsp;
                <input type="checkbox" value="Edible" id="mush_edible" v-model="tags" @change="addMushKey('tags', tags)" />&nbsp;&nbsp;

                <label for="mush_psycho">Psychoactive</label>&nbsp;
                <input type="checkbox" value="Psychoactive" id="mush_psycho" v-model="tags" @change="addMushKey('tags', tags)" />&nbsp;&nbsp;

                <label for="mush_gourmet">Gourmet</label>&nbsp;
                <input type="checkbox" value="Gourmet" id="mush_gourmet" v-model="tags" @change="addMushKey('tags', tags)" />
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_basic_info_fset">
                <legend>Basic Description / Info</legend>
                <label for="mush_latin">Latin Names*</label>
                <input type="text" id="mush_latin" class="text-box-input" v-model="latinNames" @change="addMushKey('latin_names', latinNames.split(','))" />
                <br>
                <label for="mush_common">Common Names*</label>
                <input type="text" id="mush_common" class="text-box-input" v-model="commonNames" @change="addMushKey('common_names', commonNames.split(','))" />
                <br>
                <label for="mush_maori">Maori Names*</label>
                <input type="text" id="mush_maori" class="text-box-input" v-model="maoriNames" @change="addMushKey('maori_names', maoriNames.split(','))" />
                <br>
                <label for="mush_genus">Genus</label>
                <input type="text" id="mush_genus" class="text-box-input" v-model="genus" @change="addMushKey('genus', genus)" />
                <br>
                <label for="mush_desc">Description</label>
                <input type="text" id="mush_desc" class="text-box-input" v-model="description" @change="addMushKey('description', description)" />
                <br>
                <label for="mush_lookalikes">Lookalikes*</label>
                <input type="text" id="mush_lookalikes" class="text-box-input" v-model="lookalikes" @change="addMushKey('lookalikes', lookalikes.split(','))" />
                <br>
                <label for="mush_links">Links to Websites*</label>
                <input type="text" id="mush_links" class="text-box-input" v-model="links" @change="addMushKey('links', links.split(','))" />
                <br>
                <label for="mush_books">Books*</label>
                <input type="text" id="mush_books" class="text-box-input" v-model="books" @change="addMushKey('nz_books', books.split(','))" />
                <br>
                <label for="mush_edibility">Edibility</label>
                <input type="text" id="mush_edibility" class="text-box-input" v-model="edibility" @change="addMushKey('edibility', edibility)" />
                <br>
                <label for="mush_juvenile_photos">Juvenile Photos*</label>
                <input type="text" id="mush_juvenile_photos" class="text-box-input" v-model="juvenilePhotos" @change="addMushKey('juvenile_photos', juvenilePhotos.split(','))" />
                <br>
                <label for="mush_adult_photos">Adult Photos*</label>
                <input type="text" id="mush_adult_photos" class="text-box-input" v-model="adultPhotos" @change="addMushKey('adult_photos', adultPhotos.split(','))" />
                <br>
                <label for="mush_elderly_photos">Elderly Photos*</label>
                <input type="text" id="mush_elderly_photos" class="text-box-input" v-model="elderlyPhotos" @change="addMushKey('elderly_photos', elderlyPhotos.split(','))" />
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_stipe_fset">
                <legend>Stipe Features</legend>
                <label for="mush_stipe_desc">Stipe Description</label>
                <input type="text" id="mush_stipe_desc" class="text-box-input" v-model="stipeDescription" @change="addMushKey('stipe_features', stipeDescription, 'description')" />
                <br>
                <label for="mush_stipe_diameter_min">Min Diameter (cm)</label>
                <input type="text" id="mush_stipe_diameter_min" class="text-box-input" v-model="stipeDiaMin" @change="addMushKey('stipe_features', parseInt(stipeDiaMin), 'diameter_min')" />
                <br>
                <label for="mush_stipe_diameter_max">Max Diameter (cm)</label>
                <input type="text" id="mush_stipe_diameter_max" class="text-box-input" v-model="stipeDiaMax" @change="addMushKey('stipe_features', parseInt(stipeDiaMax), 'diameter_max')" />
                <br>
                <label for="mush_stipe_colour">Stipe Colour</label>
                <select id="mush_stipe_colour" name="mush_stipe_colour" class="text-box-input" v-model="stipeColour" @change="addMushKey('stipe_features', stipeColour, 'colour')">
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="yellowish-brown">Yellowish-Brown</option>
                    <option value="pink">Pink</option>
                </select>
                <br>
                <label for="mush_stipe_length_min">Min Length (cm)</label>
                <input type="text" id="mush_stipe_length_min" class="text-box-input" v-model="stipeLenMin" @change="addMushKey('stipe_features', parseInt(stipeLenMin), 'length_min')" />
                <br>
                <label for="mush_stipe_length_max">Max Length (cm)</label>
                <input type="text" id="mush_stipe_length_max" class="text-box-input" v-model="stipeLenMax" @change="addMushKey('stipe_features', parseInt(stipeLenMax), 'length_max')" />
                <br>
                <label for="mush_stipe_height_min">Min Height (cm)</label>
                <input type="text" id="mush_stipe_height_min" class="text-box-input" v-model="stipeHgtMin" @change="addMushKey('stipe_features', parseInt(stipeHgtMin), 'height_min')" />
                <br>
                <label for="mush_stipe_height_max">Max Height (cm)</label>
                <input type="text" id="mush_stipe_height_max" class="text-box-input" v-model="stipeHgtMax" @change="addMushKey('stipe_features', parseInt(stipeHgtMax), 'height_max')" />
                <br>
                <label for="mush_stipe_bruise_colour">Bruising Colour</label>
                <select id="mush_stipe_bruise_colour" name="mush_stipe_bruise_colour" class="text-box-input" v-model="stipeBruiseColour" @change="addMushKey('stipe_features', stipeBruiseColour, 'bruising_colour')">
                    <option value="na">N/A - No bruising</option>
                    <option value="blueish">Blueish</option>
                </select>
                <br>
                <label for="mush_stipe_volva">Volva Ring</label>
                <input type="text" id="mush_stipe_volva" class="text-box-input" v-model="stipeVolva" @change="addMushKey('stipe_features', stipeVolva, 'volva_ring')" />
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_gills_fset">
                <legend>Hymenium Features</legend>
                <label for="mush_gills_desc">Gills Description</label>
                <input type="text" id="mush_gills_desc" class="text-box-input" v-model="hymeniumDescription" @change="addMushKey('hymenium', hymeniumDescription, 'description')" />
                <br>
                <label for="mush_gills_colour">Gill Colour</label>
                <select id="mush_gills_colour" name="mush_gills_colour" class="text-box-input" v-model="hymeniumColour" @change="addMushKey('hymenium', hymeniumColour, 'colour')">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="orange-brown">Orange-Brown</option>
                    <option value="palebrown">Pale Brown</option>
                </select>
                <br>
                <label for="mush_gills_attach">Gill Attachment</label>
                <input type="text" id="mush_gills_attach" class="text-box-input" v-model="hymeniumAttachment" @change="addMushKey('hymenium', hymeniumAttachment, 'attachment')" />
                <br>
                <label for="mush_spore_colour">Spore Colour</label>
                <select id="mush_spore_colour" name="mush_spore_colour" class="text-box-input" v-model="hymeniumSporeColour" @change="addMushKey('hymenium', hymeniumSporeColour, 'spore_colour')">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="purplebrown">Purple Brown</option>
                    <option value="rustbrown">Rust Brown</option>
                </select>
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_cap_fset">
                <legend>Cap Features</legend>
                <label for="mush_cap_desc">Cap Description</label>
                <input type="text" id="mush_cap_desc" class="text-box-input" v-model="capDescription" @change="addMushKey('cap_features', capDescription, 'description')" />
                <br>
                <label for="mush_cap_colour">Cap Colour</label>
                <select id="mush_cap_colour" name="mush_cap_colour" class="text-box-input" v-model="capColour" @change="addMushKey('cap_features', capColour, 'colour')">
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="yellowish-brown">Yellowish-Brown</option>
                    <option value="pink">Pink</option>
                </select>
                <br>
                <label for="mush_cap_diameter_min">Min Diameter (cm)</label>
                <input type="text" id="mush_cap_diameter_min" class="text-box-input" v-model="capDiaMin" @change="addMushKey('cap_features', parseInt(capDiaMin), 'diameter_min')" />
                <br>
                <label for="mush_cap_diameter_max">Max Diameter (cm)</label>
                <input type="text" id="mush_cap_diameter_max" class="text-box-input" v-model="capDiaMax" @change="addMushKey('cap_features', parseInt(capDiaMax), 'diameter_max')" />
                <br>
                <label for="mush_cap_thickness_min">Min Thickness (cm)</label>
                <input type="text" id="mush_cap_thickness_min" class="text-box-input" v-model="capThcMin" @change="addMushKey('cap_features', parseInt(capThcMin), 'thickness_min')" />
                <br>
                <label for="mush_cap_thickness_max">Max Thickness (cm)</label>
                <input type="text" id="mush_cap_thickness_max" class="text-box-input" v-model="capThcMax" @change="addMushKey('cap_features', parseInt(capThcMax), 'thickness_max')" />
                <br>
                <label for="mush_cap_texture">Texture</label>
                <input type="text" id="mush_cap_texture" class="text-box-input" v-model="capTexture" @change="addMushKey('cap_features', capTexture, 'texture')" />
                <br>
                <label for="mush_cap_shape">Shape</label>
                <input type="text" id="mush_cap_shape" class="text-box-input" v-model="capShape" @change="addMushKey('cap_features', capShape, 'shape')" />
            </fieldset>
            <br><br>
            <button class="form-button" @click="resetForm">Reset</button>
        </form>
    </div>
</template>

<style>
.json-builder-box {
    flex: 1;
    padding: 2rem;
    border: 1px solid #ccc;
    max-width: 50%;
}

.fieldset-box {
    border: 1px solid #ccc;
    padding: 0.25em 0.5em;
}

.text-box-input {
    flex: 1;
    border: 1px solid #ccc;
    position: relative;
    align-items: right;
    margin-right: 20em;
    width: 100%;
}

.form-button {
    border: 1px solid black;
    padding: 0.25em 0.5em;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
}
</style>

<script setup>
import initData from '~/assets/data/initData.js'
import { ref, onMounted } from 'vue'

const mushJSON = useState('mushJSON', () => ref({}))
const tags = ref([])
const latinNames = ref([])
const commonNames = ref([])
const maoriNames = ref([])
const genus = ref("")
const description = ref("")
const lookalikes = ref([])
const links = ref([])
const books = ref([])
const edibility = ref("")
const juvenilePhotos = ref([])
const adultPhotos = ref([])
const elderlyPhotos = ref([])
const stipeDescription = ref("")
const stipeDiaMin = ref()
const stipeDiaMax = ref()
const stipeColour = ref("")
const stipeLenMin = ref()
const stipeLenMax = ref()
const stipeHgtMin = ref()
const stipeHgtMax = ref()
const stipeBruiseColour = ref("")
const stipeVolva = ref("")
const hymeniumDescription = ref("")
const hymeniumColour = ref("")
const hymeniumAttachment = ref("")
const hymeniumSporeColour = ref("")
const capDescription = ref("")
const capColour = ref("")
const capDiaMin = ref()
const capDiaMax = ref()
const capThcMin = ref()
const capThcMax = ref()
const capTexture = ref("")
const capShape = ref("")

onMounted(() => {
    resetForm();
})

const resetForm = () => {
    mushJSON.value = initData;
}

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "hymenium", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}
</script>