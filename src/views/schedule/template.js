module.exports = function Template (props) {
    let {schedule} = props

    return /*html*/`
  <div class="schedule page">
    <h1>Schedule</h1>
    <div>
        ${schedule}
    </div>
  </div>
  `
  }
