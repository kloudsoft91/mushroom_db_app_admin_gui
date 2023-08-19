
<template>
  <navbar />
  <!-- Main content -->
  <div class="main-content">
    <!-- Filter panel -->
    <aside class="filter-panel">
      <div id="mushroom-identification">
        <h2>Mushroom Identification</h2>
        <input v-model="text">
      </div>
      <div id="advanced-search">
        <h2>Advanced Search</h2>
        <h3>Size</h3>
        <input v-model="text">
        <h3>Colour</h3>
        <input v-model="text">
        <h3>Environment</h3>
        <input v-model="text">
        <h3>Time of Year</h3>
        <input v-model="text">
        <br>
        <button>Apply Filters</button>
      </div>
      <hr>
      <div id="mushroom-name">
        <h2>Mushroom Name</h2>
        <h3>Edibility: Safe</h3>
        <button>View Details</button>
      </div>
    </aside>

    <!-- Main content section -->
    <main class="landing-content">
      <!-- Landing page content here -->
      <h1>Welcome to Mushroom Finder</h1>
      <p>
        There are lots of interesting mushrooms to discover all around where we live. I've seen at least 10
        different species in my back yard the last month or so. Only one of those is edible. Mushroom
        identification is tricky. There are often only subtle differences between something delicious and a day
        or two of "severe gastrointestinal distress". One to two species can kill you, but it's a week before
        you start to feel symptoms.
      </p>
    </main>
  </div>
</template>
  
<script setup>
import '~/assets/css/admin_gui.css'
</script>  