import * as fs from 'fs';
export default async function handler(req,res){
    let files = await fs.promises.readdir('blogdata')
    files = files.slice(0,parseInt(req.query.count))
    let allBlogs = []
    for (const file of files){
        let data = await fs.promises.readFile('blogdata/'+file,'utf-8');
        // console.log(data)
        allBlogs.push(JSON.parse(data))
    }
    res.status(200).json(allBlogs)
}
