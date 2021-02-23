const contentTarget = document.querySelector(".contactForm")
const eventHub = document.querySelector("#container")

export const RenderContactForm = () => {
    contentTarget.innerHTML = `
    <section class="contactContainer">
        <fieldset>
            <h3>Contact Us</h3>
            <form action="">
                <fieldset>
                    <label for="name">Name: </label>
                    <input type="text" placeholder="Name" id="contact-author">
                </fieldset>
                <fieldset>
                    <label for="email">Email: </label>
                    <input type="text" placeholder="Email" id="contact-email">
                </fieldset>
                <fieldset>
                    <label for="text">Phone Number: </label>
                    <input type="text" placeholder="Phone Number" id="contact-phone">
                </fieldset>
                <fieldset>
                    <label for="description">Description: </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </fieldset>
                <fieldset>
                    <button id="submitContactForm">Submit</button>
                </fieldset>
            </form>
        </fieldset>
    </section>
    `
}

eventHub.addEventListener("click", event => {
    if(event.target.id === "contactLink") {
        RenderContactForm()
    }
})