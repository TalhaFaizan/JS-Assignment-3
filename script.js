//Single Spaces

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  let count = 0;

  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === "  ") {
      count++;
    }
  }

  console.log("Paragraph: " + paragraph);
  console.log("Total spaces: " + count);

  // Double Spaces

//   let paragraph = "Lorem  ipsum dolor  sit amet,  consectetur  adipiscing elit.";
//   let count = 0;

//   for (let i = 0; i < paragraph.length - 1; i++) {
//     if (paragraph[i] === " " && paragraph[i + 1] === " ") {
//       count++;
//     }
//   }

//   console.log("Paragraph: " + paragraph);
//   console.log("Total double spaces: " + count);


