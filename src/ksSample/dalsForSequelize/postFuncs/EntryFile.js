import { StartFunc as StartFuncwriteFile } from '../../kSequelize/WriteFileList/writeFile.js';
import { StartFunc as StartFuncImportToFile } from '../../kSequelize/WriteFileList/ImportToFile.js';
import { StartFunc as StartFuncreadFileUserAndPassword } from '../../kSequelize/ReadFileList/readFileUserAndPassword.js';
import { StartFunc as StartFunReadFileWithFilter } from '../../kSequelize/ReadFileList/readFileWithFilter.js';


let PostFunc = async (inModalObject) => {
    return await StartFuncwriteFile({ inDataToInsert: inModalObject });
};

let PostFilterFunc = async (inModalObject) => {
    return await StartFunReadFileWithFilter({ inFilterObject: inModalObject });
};

let PostUploadFromModalFunc = async ({ inDataToInsert }) => {
    return await StartFuncImportToFile({ inDataToInsert });
};


let PostGetUserFunc = async ({ LocalBodyAsModal }) => {
    return await StartFuncreadFileUserAndPassword({ LocalBodyAsModal });
};

export {
    PostFunc, PostUploadFromModalFunc, PostGetUserFunc, PostFilterFunc
};