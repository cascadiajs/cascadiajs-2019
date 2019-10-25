module.exports = function Template (props) {
    let {schedule} = props

    return /*html*/`
  <div class="schedule page">
    <h1>Conference Schedule</h1>
    <p><a href="https://calendar.google.com/calendar/embed?src=hdd4ka4knbei1tk6l6ilkoigf0%40group.calendar.google.com&ctz=America%2FLos_Angeles"><i class="fas fa-calendar-alt"></i> Google/iCal</a>
    <div>
        ${schedule}
    </div>
  </div>
  `
  }
