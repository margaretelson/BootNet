function index() {
    return (
        <div class="column right has-text-centered">
        <h1 class="title is-4">Log in</h1>
        <p class="description"></p>
        <form>
          <div class="field">
            <div class="control">
              <input class="input is-medium" type="text" placeholder="Name"/>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <input class="input is-medium" type="email" placeholder="Email"/>
            </div>
          </div>
          <button class="button is-block is-info is-fullwidth is-medium">Log in</button>
          <br />
          <small><em><a href="route"><br/>Sing up</a></em></small>
        </form>
      </div>
    )
}

export default index
