import * as fs from "fs";
export default async function handler(req, res) {
  if (req.method === "POST") {
    let data = await fs.promises.readdir("contactdata");
    console.log(data); //["1.json","2.json"]
    let writtenFile = await fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );
    // console.log(writtenFile) - undefined
    res.status(200).json(["Done"]);
  } else res.status(200).json("Hi");
}
