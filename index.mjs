import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const accProjectFunded = await stdlib.newTestAccount(stdlib.parseCurrency(100));
const accFunder = await stdlib.newTestAccount(stdlib.parseCurrency(100));

const ctcProjectFunded = accProjectFunded.contract(backend);
const ctcFunder = accFunder.contract(backend, ctcProjectFunded.getInfo());

await Promise.all([
  ctcProjectFunded.participants.ProjectFunded({
    request: stdlib.parseCurrency(5),
    info: 'Info about the project'
  }),
  ctcFunder.p.Funder({
    want: (amt) => console.log(`ProjectFunded asked Funder for ${stdlib.formatCurrency(amt)}`),
    got: (secret) => console.log(`ProjectFunded secret is: ${secret}`),
  }),
]);