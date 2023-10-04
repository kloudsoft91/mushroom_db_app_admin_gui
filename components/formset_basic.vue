<template>
    <fieldset class="mb-2 border-1 border-slate-150 px-2" id="mush_basic_info_fset">
        <legend>Basic Description / Info</legend>
        <label for="mush_latin">Latin Names*</label>
        <input
            type="text"
            id="mush_latin"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="latinNames"
            @change="addMushKey('latin_names', latinNames.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_common">Common Names*</label>
        <input
            type="text"
            id="mush_common"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="commonNames"
            @change="addMushKey('common_names', commonNames.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_maori">Maori Names*</label>
        <input
            type="text"
            id="mush_maori"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="maoriNames"
            @change="addMushKey('maori_names', maoriNames.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_genus">Genus</label>
        <input
            type="text"
            id="mush_genus"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="genus"
            @change="addMushKey('genus', genus)" />
        
        <label for="mush_desc">Description</label>
        <input
            type="text"
            id="mush_desc"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="description"
            @change="addMushKey('description', description)" />
        
        <label for="mush_lookalikes">Lookalikes*</label>
        <input
            type="text"
            id="mush_lookalikes"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="lookalikes"
            @change="addMushKey('lookalikes', lookalikes.split(',').map(Number))" />

        <label for="mush_lookalikes_desc">Lookalike Description</label>
        <input
            type="text"
            id="mush_lookalikes_desc"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="lookalikeDesc"
            @change="addMushKey('lookalikes_description', lookalikeDesc)" />
        
        <label for="mush_links">Links to Websites*</label>
        <input
            type="text"
            id="mush_links"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="links"
            @change="addMushKey('links', links.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_books">Books*</label>
        <input
            type="text"
            id="mush_books"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="books"
            @change="addMushKey('nz_books', books.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_edibility">Edibility</label>
        <input
            type="text"
            id="mush_edibility"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="edibility"
            @change="addMushKey('edibility', edibility)" />

        <label for="mush_ecology">Ecology</label>
        <input
            type="text"
            id="mush_ecology"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="ecology"
            @change="addMushKey('ecology', ecology)" />

        <label for="mush_environment">Environment</label>
        <input
            type="text"
            id="mush_environment"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="environment"
            @change="addMushKey('environment', environment)" />

        <label for="mush_timeofyear">Time of Year</label>
        <select
            id="mush_timeofyear"
            name="mush_timeofyear"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="timeOfYear"
            @change="addMushKey('time_of_year', timeOfYear)"
            multiple>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
        </select>

        <label for="mush_native">Native? (or Introduced)</label>
        <select
            id="mush_native"
            name="mush_native"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="native"
            @change="addMushKey('native_or_introduced', native==='Native')">
                <option>Native</option>
                <option>Introduced</option>
        </select>
        
        <label for="mush_juvenile_photos">Juvenile Photos*</label>
        <input
            type="text"
            id="mush_juvenile_photos"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="juvenilePhotos"
            @change="addMushKey('juvenile_photos', juvenilePhotos.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_adult_photos">Adult Photos*</label>
        <input
            type="text"
            id="mush_adult_photos"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="adultPhotos"
            @change="addMushKey('adult_photos', adultPhotos.split(',').map((item) => {return item.trimStart()}))" />
        
        <label for="mush_elderly_photos">Elderly Photos*</label>
        <input
            type="text"
            id="mush_elderly_photos"
            class="mb-2 border-1 border-slate-150 flex w-full"
            v-model="elderlyPhotos"
            @change="addMushKey('elderly_photos', elderlyPhotos.split(',').map((item) => {return item.trimStart()}))" />
    </fieldset>
</template>

<script setup>
import { ref } from 'vue'
const mushJSON = useState('mushJSON')
const latinNames = ref("")
const commonNames = ref("")
const maoriNames = ref("")
const genus = ref("")
const description = ref("")
const lookalikes = ref("")
const lookalikeDesc = ref("")
const links = ref("")
const books = ref("")
const edibility = ref("")
const ecology = ref("")
const environment = ref("")
const timeOfYear = ref([])
const native = ref()
const juvenilePhotos = ref("")
const adultPhotos = ref("")
const elderlyPhotos = ref("")

const addMushKey = (key, val, subKey = "") => {
    if (["stipe_features", "hymenium", "cap_features"].includes(key) && subKey != "") {
        mushJSON.value[key][subKey] = val;
    } else {
        mushJSON.value[key] = val;
    }
}

watch(mushJSON, async (newMushJSON, oldMushJSON) => {
    if (mushJSON.value['latin_names']) {
        latinNames.value = mushJSON.value['latin_names'].join(', ')
    }
    if (mushJSON.value['common_names']) {
        commonNames.value = mushJSON.value['common_names'].join(', ')
    }
    if (mushJSON.value['maori_names']) {
        maoriNames.value = mushJSON.value['maori_names'].join(', ')
    }
    if (mushJSON.value['genus']) {
        genus.value = mushJSON.value['genus']
    }
    if (mushJSON.value['description']) {
        description.value = mushJSON.value['description']
    }
    if (mushJSON.value['lookalikes']) {
        lookalikes.value = mushJSON.value['lookalikes'].join(', ')
    }
    if (mushJSON.value['lookalikes_description']) {
        lookalikeDesc.value = mushJSON.value['lookalikes_description']
    }
    if (mushJSON.value['links']) {
        links.value = mushJSON.value['links'].join(', ')
    }
    if (mushJSON.value['nz_books']) {
        books.value = mushJSON.value['nz_books'].join(', ')
    }
    if (mushJSON.value['edibility']) {
        edibility.value = mushJSON.value['edibility']
    }
    if (mushJSON.value['ecology']) {
        ecology.value = mushJSON.value['ecology']
    }
    if (mushJSON.value['environment']) {
        environment.value = mushJSON.value['environment']
    }
    if (mushJSON.value['time_of_year']) {
        timeOfYear.value = mushJSON.value['time_of_year']
    }
    if (mushJSON.value['native_or_introduced']) {
        if (mushJSON.value['native_or_introduced'] == true) {
            native.value = "Native"
        } else {
            native.value = "Introduced"
        }
    }
    if (mushJSON.value['juvenile_photos']) {
        juvenilePhotos.value = mushJSON.value['juvenile_photos'].join(', ')
    }
    if (mushJSON.value['adult_photos']) {
        adultPhotos.value = mushJSON.value['adult_photos'].join(', ')
    }
    if (mushJSON.value['elderly_photos']) {
        elderlyPhotos.value = mushJSON.value['elderly_photos'].join(', ')
    }
})
</script>