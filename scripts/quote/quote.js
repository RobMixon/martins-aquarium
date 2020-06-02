

const quoteConverter = (quoteObject) => {

    const quoteHTMLRepresentation = `
    <section class="quote">
        <p class="quote__text"> ${quoteObject.quote} </p>
    </section> `

    return quoteHTMLRepresentation
}