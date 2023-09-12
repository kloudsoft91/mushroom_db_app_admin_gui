function clearStorage() {
    if (process.client) {
        sessionStorage.clear();
        sessionStorage.setItem("mushJSON", {
            stipe_features: {},
            hymenium: {},
            cap_features: {}
        });
    }
}

function addMushKey(key, subKey = "",  val) {
    const data = {};
    if (process.client)  {
        if (sessionStorage.getItem("mushJSON")) {
            data = sessionStorage.getItem("mushJSON");
        } else {
            clearStorage();
            data = sessionStorage.getItem("mushJSON");
        }
        if (["stipe_features", "hymenium", "cap_features"].includes(key)) {
            data[key][subKey] = val;
        } else {
            data[key] = val;
        }
        sessionStorage.setItem("mushJSON", data);
    }
}

let mush_poison = document.getElementById("mush_poison");
mush_poison.addEventListener("change", () => {
    addMushKey("tag", "Poisonous");
});

let mush_edible = document.getElementById("mush_edible");
mush_edible.addEventListener("change", () => {
    addMushKey("tag", "Edible");
});

let mush_psycho = document.getElementById("mush_psycho");
mush_psycho.addEventListener("change", () => {
    addMushKey("tag", "Psychoactive");
});

let mush_gourmet = document.getElementById("mush_gourmet");
mush_gourmet.addEventListener("change", () => {
    addMushKey("tag", "Gourmet");
});

let mush_latin = document.getElementById("mush_latin");
mush_latin.addEventListener("change", () => {
    addMushKey("tag", mush_common.value);
});

let mush_common = document.getElementById("mush_common");
mush_common.addEventListener("change", () => {
    addMushKey("latin_names", mush_latin.value);
});

let mush_genus = document.getElementById("mush_genus");
mush_genus.addEventListener("change", () => {
    addMushKey("genus", mush_genus.value);
});

let mush_desc = document.getElementById("mush_desc");
mush_desc.addEventListener("change", () => {
    addMushKey("description", mush_desc.value);
});

let mush_lookalikes = document.getElementById("mush_lookalikes");
mush_lookalikes.addEventListener("change", () => {
    addMushKey("lookalikes", mush_lookalikes.value);
});

let mush_links = document.getElementById("mush_links");
mush_links.addEventListener("change", () => {
    addMushKey("links", mush_links.value);
});

let mush_books = document.getElementById("mush_books");
mush_books.addEventListener("change", () => {
    addMushKey("books", mush_books.value);
});

let mush_edibility = document.getElementById("mush_edibility");
mush_edibility.addEventListener("change", () => {
    addMushKey("edibility", mush_edibility.value);
});

let mush_spore_colour = document.getElementById("mush_spore_colour");
mush_spore_colour.addEventListener("change", () => {
    addMushKey("hymenium", "spore_colour", mush_spore_colour.value);
});

let mush_juvenile_photos = document.getElementById("mush_juvenile_photos");
mush_juvenile_photos.addEventListener("change", () => {
    addMushKey("juvenile_photos", mush_juvenile_photos.value);
});

let mush_adult_photos = document.getElementById("mush_adult_photos");
mush_adult_photos.addEventListener("change", () => {
    addMushKey("adult_photos", mush_adult_photos.value);
});

let mush_elderly_photos = document.getElementById("mush_elderly_photos");
mush_elderly_photos.addEventListener("change", () => {
    addMushKey("elderly_photos", mush_elderly_photos.value);
});

let mush_stipe_desc = document.getElementById("mush_stipe_desc");
mush_stipe_desc.addEventListener("change", () => {
    addMushKey("stipe_features", "description", mush_stipe_desc.value);
});

let mush_stipe_diameter_min = document.getElementById("mush_stipe_diameter_min");
mush_stipe_diameter_min.addEventListener("change", () => {
    addMushKey("stipe_features", "diameter_min", mush_stipe_diameter_min.value);
});

let mush_stipe_diameter_max = document.getElementById("mush_stipe_diameter_max");
mush_stipe_diameter_max.addEventListener("change", () => {
    addMushKey("stipe_features", "diameter_max", mush_stipe_diameter_max.value);
});

let mush_stipe_colour = document.getElementById("mush_stipe_colour");
mush_stipe_colour.addEventListener("change", () => {
    addMushKey("stipe_features", "colour", mush_stipe_colour.value);
});

let mush_stipe_length_min = document.getElementById("mush_stipe_length_min");
mush_stipe_length_min.addEventListener("change", () => {
    addMushKey("stipe_features", "length_min", mush_stipe_length_min.value);
});

let mush_stipe_length_max = document.getElementById("mush_stipe_length_max");
mush_stipe_length_max.addEventListener("change", () => {
    addMushKey("stipe_features", "length_max", mush_stipe_length_max.value);
});

let mush_stipe_height_min = document.getElementById("mush_stipe_height_min");
mush_stipe_height_min.addEventListener("change", () => {
    addMushKey("stipe_features", "height_min", mush_stipe_height_min.value);
});

let mush_stipe_height_max = document.getElementById("mush_stipe_height_max");
mush_stipe_height_max.addEventListener("change", () => {
    addMushKey("stipe_features", "height_max", mush_stipe_height_max.value);
});

let mush_stipe_bruise_colour = document.getElementById("mush_stipe_bruise_colour");
mush_stipe_bruise_colour.addEventListener("change", () => {
    addMushKey("stipe_features", "bruise_colour", mush_stipe_bruise_colour.value);
});

let mush_stipe_volva = document.getElementById("mush_stipe_volva");
mush_stipe_volva.addEventListener("change", () => {
    addMushKey("stipe_features", "volva", mush_stipe_volva.value);
});

let mush_gills_desc = document.getElementById("mush_gills_desc");
mush_gills_desc.addEventListener("change", () => {
    addMushKey("hymenium", "description", mush_gills_desc.value);
});

let mush_gills_colour = document.getElementById("mush_gills_colour");
mush_gills_colour.addEventListener("change", () => {
    addMushKey("hymenium", "colour", mush_gills_colour.value);
});

let mush_gills_attach = document.getElementById("mush_gills_attach");
mush_gills_attach.addEventListener("change", () => {
    addMushKey("hymenium", "attachment", mush_gills_attach.value);
});

let mush_cap_desc = document.getElementById("mush_cap_desc");
mush_cap_desc.addEventListener("change", () => {
    addMushKey("cap_features", "description", mush_common.value);
});

let mush_cap_colour = document.getElementById("mush_cap_colour");
mush_cap_colour.addEventListener("change", () => {
    addMushKey("cap_features", "colour", mush_cap_colour.value);
});

let mush_cap_diameter_min = document.getElementById("mush_cap_diameter_min");
mush_cap_diameter_min.addEventListener("change", () => {
    addMushKey("cap_features", "diameter_min", mush_cap_diameter_min.value);
});

let mush_cap_diameter_max = document.getElementById("mush_cap_diameter_max");
mush_cap_diameter_max.addEventListener("change", () => {
    addMushKey("cap_features", "diameter_max", mush_cap_diameter_max.value);
});

let mush_cap_thickness_min = document.getElementById("mush_cap_thickness_min");
mush_cap_thickness_min.addEventListener("change", () => {
    addMushKey("cap_features", "thickness_min", mush_cap_thickness_min.value);
});

let mush_cap_thickness_max = document.getElementById("mush_cap_thickness_max");
mush_cap_thickness_max.addEventListener("change", () => {
    addMushKey("cap_features", "thickness_max", mush_cap_thickness_max.value);
});

let mush_cap_texture = document.getElementById("mush_cap_texture");
mush_cap_texture.addEventListener("change", () => {
    addMushKey("cap_features", "texture", mush_cap_texture.value);
});

let mush_cap_shape = document.getElementById("mush_cap_shape");
mush_cap_shape.addEventListener("change", () => {
    addMushKey("cap_features", "shape", mush_cap_shape.value);
});