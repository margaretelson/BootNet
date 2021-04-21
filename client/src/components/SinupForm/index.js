

function SinupForm() {
    return (
        <div class="column right has-text-centered">
        <h1 class="title is-4">Sign up today</h1>
        <p class="description">There's strength in alumni</p>
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
          <div class="field">
            <div class="control">
              <input class="input is-medium" type="password" placeholder="Password"/>
            </div>
          </div>
          <button class="button is-block is-info is-fullwidth is-medium">sing Up</button>
          <br />
          <small><em>We're a network of bootcamp grads helping other bootcamp grads find job opportunities. Let's stick together and kick some booty!</em></small>
          <small><em><a href="route"><br/>Log in</a></em></small>
        </form>
      </div>
    )
}

export default SinupForm
