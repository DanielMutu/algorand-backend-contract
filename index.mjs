import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);

(async () => {
    //default starting balance
    const startingBalance = stdlib.parseCurrency(10);

    //keep in TeST account
    const accFundDonator = await stdlib.newTestAccount(startingBalance);
    const accFundCreator = await stdlib.newTestAccount(startingBalance);
    
    //create contract for all partecipats
    const ctcFundDonator = accFundDonator.contract(backend);
    const ctcFundCreator = accFundCreator.contract(backend, ctcFundDonator.getInfo());

    const Project = (Who) => ({
        putCredits:() => {
            const currentCredits = 1000; //Fixed values for DEMO
            console.log(`${Who} Put ${currentCredits} in Project`);
            return currentCredits;
        },

        getProject: () => {
            console.log(`This contract have 1000 Credits in total`);            
        }
    })

    await Promise.all([
            backend.NameFundDonator(ctcFundDonator, {
                ...Project('FundDonator'),
            }),

            backend.NameFundCreator(ctcFundCreator, {
                ...Project('FundCreator'),
            })
        ]);

})();