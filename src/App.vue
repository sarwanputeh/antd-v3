<template>
  <nav>
    <div class="card">
      <div class="card-content">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Orix_logo.svg/1024px-Orix_logo.svg.png"
                width="40"
                height="50"
              />
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item"> ORIX </a>
              <a class="navbar-item"> Ticket List </a>
              <a class="navbar-item"> Place </a>
              <a class="navbar-item"> Dashbord</a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light"> Log in </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <!-- <div class="content">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">|About</router-link>
          <router-link to="/HelloView">|HelloView</router-link>
        </div> -->
      </div>
    </div>
  </nav>
  <br />
  <br />
  <content>
    <div class="columns">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column">
        <div class="row">
          <div class="card">
            <footer class="card-footer">
              <router-link to="/" class="card-footer-item"
                >StartOCR</router-link
              >
              <router-link to="/about" class="card-footer-item"
                >Verify</router-link
              >
              <router-link to="/HelloView" class="card-footer-item"
                >Insert Data</router-link
              >
            </footer>
          </div>
        </div>
      </div>
    </div>
  </content>

  <router-view />
</template>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


