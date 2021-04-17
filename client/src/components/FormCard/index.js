function index() {
    return (
        <div class="column right has-text-centered">
        <h1 class="title is-4">Sign up today</h1>
        <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
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
          <button class="button is-block is-primary is-fullwidth is-medium">Submit</button>
          <br />
          <small><em>Lorem ipsum dolor sit amet consectetur.</em></small>
        </form>
      </div>
    )
}

export default index
