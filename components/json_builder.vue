<template>
    <!-- JSON Builder Box -->
    <div class="json-builder-box">
        <form id="input_form">
            <label id="mush_note_1">* Enter values separated by a comma. e.g. Red, Yellow</label><br><br>
            <fieldset class="fieldset-box" id="mush_tags_fset">
                <legend>Mushroom Tags</legend>
                <label id="mush_poison_lbl">Poisonous</label>&nbsp;
                <input type="checkbox" id="mush_poison" />&nbsp;
                
                <label id="mush_edible_lbl">Edible</label>&nbsp;
                <input type="checkbox" id="mush_edible" />&nbsp;
                
                <label id="mush_psycho_lbl">Psychoactive</label>&nbsp;
                <input type="checkbox" id="mush_psycho" />&nbsp;
                
                <label id="mush_gourmet_lbl">Gourmet</label>&nbsp;
                <input type="checkbox" id="mush_gourmet" />
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_basic_info_fset">
                <legend>Basic Description / Info</legend>
                <label id="mush_latin_lbl">Latin Names*</label>
                <input type="text" id="mush_latin" class="text-box-input" />
                <br>
                <label id="mush_common_lbl">Common Names*</label>
                <input type="text" id="mush_common" class="text-box-input" />
                <br>
                <label id="mush_genus_lbl">Genus</label>
                <input type="text" id="mush_genus" class="text-box-input" />
                <br>
                <label id="mush_desc_lbl">Description</label>
                <input type="text" id="mush_desc" class="text-box-input" />
                <br>
                <label id="mush_lookalikes_lbl">Lookalikes*</label>
                <input type="text" id="mush_lookalikes" class="text-box-input" />
                <br>
                <label id="mush_links_lbl">Links to Websites*</label>
                <input type="text" id="mush_links" class="text-box-input" />
                <br>
                <label id="mush_books_lbl">Books*</label>
                <input type="text" id="mush_books" class="text-box-input" />
                <br>
                <label id="mush_edibility_lbl">Edibility</label>
                <input type="text" id="mush_edibility" class="text-box-input" />
                <br>
                <label id="mush_spore_colour_lbl">Spore Colour</label>
                <select id="mush_spore_colour" name="mush_spore_colour" class="text-box-input">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="purplebrown">Purple Brown</option>
                    <option value="rustbrown">Rust Brown</option>
                </select>
                <br>
                <label id="mush_juvenile_photos_lbl">Juvenile Photos*</label>
                <input type="text" id="mush_juvenile_photos" class="text-box-input" />
                <br>
                <label id="mush_adult_photos_lbl">Adult Photos*</label>
                <input type="text" id="mush_adult_photos" class="text-box-input" />
                <br>
                <label id="mush_elderly_photos_lbl">Elderly Photos*</label>
                <input type="text" id="mush_elderly_photos" class="text-box-input" />
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_stipe_fset">
                <legend>Stipe Features</legend>
                <label id="mush_stipe_desc_lbl">Stipe Description</label>
                <input type="text" id="mush_stipe_desc" class="text-box-input" />
                <br>
                <label id="mush_stipe_diameter_min_lbl">Min Diameter (cm)</label>
                <input type="text" id="mush_stipe_diameter_min" class="text-box-input" />
                <br>
                <label id="mush_stipe_diameter_max_lbl">Max Diameter (cm)</label>
                <input type="text" id="mush_stipe_diameter_max" class="text-box-input" />
                <br>
                <label id="mush_stipe_colour_lbl">Stipe Colour</label>
                <select id="mush_stipe_colour" name="mush_stipe_colour" class="text-box-input">
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="yellowish-brown">Yellowish-Brown</option>
                    <option value="pink">Pink</option>
                </select>
                <br>
                <label id="mush_stipe_length_min_lbl">Min Length (cm)</label>
                <input type="text" id="mush_stipe_length_min" class="text-box-input" />
                <br>
                <label id="mush_stipe_length_max_lbl">Max Length (cm)</label>
                <input type="text" id="mush_stipe_length_max" class="text-box-input" />
                <br>
                <label id="mush_stipe_height_min_lbl">Min Height (cm)</label>
                <input type="text" id="mush_stipe_height_min" class="text-box-input" />
                <br>
                <label id="mush_stipe_height_max_lbl">Max Height (cm)</label>
                <input type="text" id="mush_stipe_height_max" class="text-box-input" />
                <br>
                <label id="mush_stipe_bruise_colour_lbl">Bruising Colour</label>
                <select id="mush_stipe_bruise_colour" name="mush_stipe_bruise_colour" class="text-box-input">
                    <option value="na">N/A - No bruising</option>
                    <option value="blueish">Blueish</option>
                </select>
                <br>
                <label id="mush_stipe_volva_lbl">Volva Ring</label>
                <input type="text" id="mush_stipe_volva" class="text-box-input" />
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_gills_fset">
                <legend>Hymenium Features</legend>
                <label id="mush_gills_desc_lbl">Gills Description</label>
                <input type="text" id="mush_gills_desc" class="text-box-input" />
                <br>
                <label id="mush_gills_colour_lbl">Gill Colour</label>
                <select id="mush_gills_colour" name="mush_gills_colour" class="text-box-input">
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="orange-brown">Orange-Brown</option>
                    <option value="palebrown">Pale Brown</option>
                </select>
                <br>
                <label id="mush_gills_attach_lbl">Gill Attachment</label>
                <input type="text" id="mush_gills_attach" class="text-box-input" />
            </fieldset>
            <br>
            <fieldset class="fieldset-box" id="mush_cap_fset">
                <legend>Cap Features</legend>
                <label id="mush_cap_desc_lbl">Cap Description</label>
                <input type="text" id="mush_cap_desc" class="text-box-input" />
                <br>
                <label id="mush_cap_colour_lbl">Cap Colour</label>
                <select id="mush_cap_colour" name="mush_cap_colour" class="text-box-input">
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="yellowish-brown">Yellowish-Brown</option>
                    <option value="pink">Pink</option>
                </select>
                <br>
                <label id="mush_cap_diameter_min_lbl">Min Diameter (cm)</label>
                <input type="text" id="mush_cap_diameter_min" class="text-box-input" />
                <br>
                <label id="mush_cap_diameter_max_lbl">Max Diameter (cm)</label>
                <input type="text" id="mush_cap_diameter_max" class="text-box-input" />
                <br>
                <label id="mush_cap_thickness_min_lbl">Min Thickness (cm)</label>
                <input type="text" id="mush_cap_thickness_min" class="text-box-input" />
                <br>
                <label id="mush_cap_thickness_max_lbl">Max Thickness (cm)</label>
                <input type="text" id="mush_cap_thickness_max" class="text-box-input" />
                <br>
                <label id="mush_cap_texture_lbl">Texture</label>
                <input type="text" id="mush_cap_texture" class="text-box-input" />
                <br>
                <label id="mush_cap_shape_lbl">Shape</label>
                <input type="text" id="mush_cap_shape" class="text-box-input" />
            </fieldset>
            <br><br>
            <input type="reset" class="form-button" />
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

<script>
export default {
  mounted() {
    if (process.client) {
      const script = document.createElement("script");
      script.onload = this.onScriptLoaded;
      script.type = "text/javascript";
      script.src = "~/assets/scripts/admin_gui.js";
      document.head.appendChild(script);
    } else {
      this.onScriptLoaded();
    }
  },
  methods: {
    onScriptLoaded(event = null) {
      if (event) {
        console.log("Was added");
      } else {
        console.log("Already existed");
      }
    }
  }
}
</script>