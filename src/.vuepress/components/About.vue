<template>
  <div class="cards-list">
    <a href="/whitepaper">
      <div class="card 1">
        <div class="card_image test"></div>
        <div class="card_title title-white">
          <p>Whitepaper</p>
        </div>
      </div>
    </a>

    <a href="/releases">
      <div class="card 2">
        <div class="card_image">
        </div>
        <div class="card_title title-white">
          <p>Releases</p>
        </div>
      </div>
    </a>

    <a href="/bips">
      <div class="card 3">
        <div class="card_image">
        </div>
        <div class="card_title title-white">
          <p>BIPs</p>
        </div>
      </div>
    </a>
    
    <a href="/segwit">
      <div class="card 4">
        <div class="card_image">
        </div>
        <div class="card_title title-white">
          <p>SegWit</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cards-list {
  z-index: 0;
  width: 100%;
  margin-top: 4%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 220px;
  max-width: 100%;
  height: 220px;
  border-radius: 40px;
  border-style: solid;
  border-color: grey;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -75%;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
</style>