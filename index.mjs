import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);

(async () => {
    //default starting balance
    const startingBalance = stdlib.parseCurrency(100);

    //keep in TeST account
    const accFundDonator = await stdlib.newTestAccount(startingBalance);
    const accFundProject = await stdlib.newTestAccount(stdlib.parseCurrency(10));
    
    //create contract for all partecipats
    const ctcFundDonator = accFundDonator.contract(backend);
    const ctcFundProject = accFundProject.contract(backend, ctcFundDonator.getInfo());

    const ftm = (x) => stdlib.formatCurrency(x,4);

    const Project = (Who) => ({
        putCredits:() => {
            const currentCredits = 1000; //Fixed values for DEMO
            console.log(`${Who} Put ${currentCredits} in Project`);
            return currentCredits;
        },

        getProject: () => {
            const currentCredits = 1000;
            console.log(`This contract have 1000 Credits in total`);
            return currentCredits;            
        }
    })

    await Promise.all([
            backend.FundDonator(ctcFundDonator, {
                ...Project('FundDonator'),
                wager: stdlib.parseCurrency(10),
            }),

            backend.FundProject(ctcFundProject, {
                ...Project('FundProject'),
                accectWager: (atm) => {
                    console.log(`Fund Project accept ${ftm(atm)}`);
                }
            })
        ]);

})();