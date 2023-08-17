import fs from 'fs';
import {VM, VMScript} from 'vm2';
import {fileURLToPath} from 'url';
import path from 'path';
const vm = new VM();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cat_vm2_code = ''
const code_file = './__ac_signature.js'
const script = new VMScript(cat_vm2_code + fs.readFileSync(code_file), `${__dirname}/调试.js`);
debugger
vm.run(script)
debugger