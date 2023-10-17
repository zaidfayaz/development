// const insert = document.querySelector("#insert")
// window.addEventListener('keydown', (e) => {
//  insert.innerHTML = `
//    <div class = 'color'
//     <table>
//     <tr>
//         <th>Key</th>
//         <th>Key-Code</th>
//         <th>Code</th>
//     </tr>
//     <tr>
//         <td> ${e.key} </td>
//         <td> ${e.keycode}  </td>
//         <td> ${e.code} </td>
//    </tr>

//    </table>
//    </div>
// `;
// });

const insert = document.querySelector("#insert")
window.addEventListener('keydown', (e) => {
 insert.innerHTML = `<h1> ${e.key} ,${e.keyCode},${e.code} </h2>`;
});