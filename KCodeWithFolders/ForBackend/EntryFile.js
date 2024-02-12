import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';
import { StartFunc as StartFuncForConfigJson } from './ForConfigJson/EntryFile.js';
import { StartFunc as StartFuncForRestClients } from './ForRestClients/EntryFile.js';
import { StartFunc as StartFuncForkLowDb } from './ForkLowDb/EntryFile.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    StartFuncForRoutesFile({ inTablesCollection, inFrom, inTo });
    StartFuncForConfigJson({ inTablesCollection, inFrom, inTo })
    StartFuncForRestClients({ inTablesCollection, inFrom, inTo });
    StartFuncForkLowDb({ inTablesCollection, inFrom, inTo });
};

export { StartFunc };