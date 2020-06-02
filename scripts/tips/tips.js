

const tipConverter = (tipObject) => {

    const tipHTMLRepresentation = `
    <section class="tip">
        <p class="tip__tip"> ${tipObject.tip}</p>
    </section>
    `
    return tipHTMLRepresentation
}