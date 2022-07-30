<h1>Blood bank Website via cloud computing</h1>
<h3> In process of developing by Abhay and Ankush</h3>
<h4>Currently working on main page<h4>

// fs.readFile("./blood-sample.json", function (err, data1) {
// if (err) throw err;
// data1 = JSON.parse(data1);

// // data1.data.forEach((data2) => {
// // console.log(data2[0]);
// // });

// for (let index = 0; index < 5; index++) {
// if (data1.data[index][1] === "Andaman and Nicobar Islands") {
// console.log(data1.data[index]);
// } else console.log("mhm");
// }
// });
app.post("/findblood", function (req, res) {
res.render("blood-info");
console.log("tes1");
});
