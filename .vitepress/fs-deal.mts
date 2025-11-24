import * as path from 'path'
import * as fs from 'fs';
import { fileURLToPath } from 'url';

function readDirSync(dir) {
    const result = [];
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (file === '.vitepress') {
            return
        }
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            result.push(filePath)
        }
    });
    return result;
}

// 读取目录下面的文件和包含子文件
function readAllFilesSync(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            readAllFilesSync(filePath, fileList);
        } else {
            const fileName = filePath.split('docs')[1];
            if(fileName.endsWith('.md')) {
                fileList.push(fileName.replace('.md',''));
            }
        }
    });
    return fileList;
}



// {
//     '/backend/':[
//         {
//             text: 'backend',
//             items: [
//                 {text: 'Introduction', link: '/backend/introduction'},
//                 {
//                     text: 'Quick Start',
//                     link: '/guide/quick-start'
//                 }
//             ]
//         }],
// }

export function getDirLink(path) {
    const dirs = readDirSync(path);
    let res = {}
    for(let dir of dirs){
        if(dir.endsWith('node_modules')) {
            continue
        }
        const items = readAllFilesSync(dir).map(i => {
            const index = i.lastIndexOf('/')
            return {
                text: i.slice(index + 1), link: i
            }
        })

        let index = dir.lastIndexOf('/')
        let name = '/'+dir.slice(index + 1)+'/'
        res[name]= items
    }
    return res;
}

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);

// 3. 计算 __dirname（当前文件所在的目录路径）
const __dirname = path.dirname(__filename);

console.log(getDirLink(__dirname+"/.."))