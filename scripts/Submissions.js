export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissionsAPI = await response.json()

    // Iterate the submissions and create some <section> representations
    let html = ""
    for (const submission of submissionsAPI) {
        html += `<section class="submission">
        <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area type foriegn key? ${submission.socioLocationId}</div>
        </section>`
    }

    // Return the HTML string
    return html

}