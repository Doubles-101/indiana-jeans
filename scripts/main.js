import { OwnJeansChoices } from "./OwnsJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./Urbanquestion.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnsHTML = OwnJeansChoices()
    const urbanHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
    ${jeanOwnsHTML}
    ${urbanHTML}
    ${buttonHTML}
    ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()