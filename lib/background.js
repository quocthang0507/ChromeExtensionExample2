chrome.runtime.onInstalled.addListener(function () {
  console.log("The Extension is installed!");
  get_html();
});

function get_html() {
  let headers = new Headers();
  fetch('http://qlgd.dlu.edu.vn/public/DrawingClassStudentSchedules_Mau2?YearStudy=2021-2022&TermID=HK02&Week=9&ClassStudentID=CTK45B', {
    mode: 'no-cors',
    credentials: 'include',
    method: 'GET',
    headers: headers
  })
    .then(response => response.text())
    .then(response => {
      console.log(response);
    })
    .catch(error => console.log('Authorization failed : ' + error.message));
}