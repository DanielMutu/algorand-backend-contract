// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: [],
      2: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function FundCreator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for FundCreator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for FundCreator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v67, v68], secs: v70, time: v69, didSend: v31, from: v66 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v40, from: v74 } = txn2;
  ;
  const v80 = stdlib.protect(ctc0, await interact.getProject(), {
    at: './index.rsh:52:65:application',
    fs: ['at ./index.rsh:51:21:application call to [unknown function] (defined at: ./index.rsh:51:25:function exp)'],
    msg: 'getProject',
    who: 'FundCreator'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v80],
    evt_cnt: 1,
    funcNum: 2,
    lct: v76,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v82], secs: v84, time: v83, didSend: v49, from: v81 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v49, from: v81 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
export async function FundDonator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for FundDonator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for FundDonator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v60 = stdlib.protect(ctc0, interact.wager, 'for FundDonator\'s interact field wager');
  
  const v65 = stdlib.protect(ctc0, await interact.putCredits(), {
    at: './index.rsh:35:63:application',
    fs: ['at ./index.rsh:33:21:application call to [unknown function] (defined at: ./index.rsh:33:25:function exp)'],
    msg: 'putCredits',
    who: 'FundDonator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v60, v65],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v67, v68], secs: v70, time: v69, didSend: v31, from: v66 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v67, v68], secs: v70, time: v69, didSend: v31, from: v66 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v40, from: v74 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v49, from: v81 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
export async function FundProject(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for FundProject expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for FundProject expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v67, v68], secs: v70, time: v69, didSend: v31, from: v66 } = txn1;
  ;
  const v73 = stdlib.protect(ctc0, await interact.getProject(), {
    at: './index.rsh:45:62:application',
    fs: ['at ./index.rsh:43:21:application call to [unknown function] (defined at: ./index.rsh:43:25:function exp)'],
    msg: 'getProject',
    who: 'FundProject'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v73],
    evt_cnt: 1,
    funcNum: 1,
    lct: v69,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v75], secs: v77, time: v76, didSend: v40, from: v74 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v75], secs: v77, time: v76, didSend: v40, from: v74 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v49, from: v81 } = txn3;
  ;
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECCCYBACI1ADEYQQETKGRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQABZSSQMQAAnJBJEJDQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEl073FzT/FlCwQgBpSCM0ARJENARJIhJMNAISEURJNQUXNf+ABNUVGRQ0/xZQsCQ1ATIGNQJCAFlIgaCNBogAoiI0ARJENARJIhJMNAISEURJNQVJIls1/yVbNf6ABKzRH8M0/xZQNP4WULAjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161089c38038061089c833981016040819052610022916101bb565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1610085341560076100c3565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100bb9260029201906100ec565b505050610250565b816100e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f890610215565b90600052602060002090601f01602090048101928261011a5760008555610160565b82601f1061013357805160ff1916838001178555610160565b82800160010185558215610160579182015b82811115610160578251825591602001919060010190610145565b5061016c929150610170565b5090565b5b8082111561016c5760008155600101610171565b604080519081016001600160401b03811182821017156101b557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101ce57600080fd5b6101d6610185565b835181526040601f19830112156101ec57600080fd5b6101f4610185565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061022957607f821691505b6020821081141561024a57634e487b7160e01b600052602260045260246000fd5b50919050565b61063d8061025f6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806345f7039614610078578063832307571461008b578063873779a1146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610509565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae366004610509565b610204565b3480156100bf57600080fd5b506100c8610359565b60405161006f92919061052c565b6100e6600260005414600c6103f6565b610100813515806100f957506001548235145b600d6103f6565b60008080556002805461011290610589565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610589565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906105be565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516101d69291906105e0565b60405180910390a16101ea3415600b6103f6565b600080805560018190556102009060029061041b565b5050565b61021460016000541460096103f6565b61022e8135158061022757506001548235145b600a6103f6565b60008080556002805461024090610589565b80601f016020809104026020016040519081016040528092919081815260200182805461026c90610589565b80156102b95780601f1061028e576101008083540402835291602001916102b9565b820191906000526020600020905b81548152906001019060200180831161029c57829003601f168201915b50505050508060200190518101906102d191906105be565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f722533836040516103049291906105e0565b60405180910390a1610318341560086103f6565b600260009081554360015560408051602081018390520160405160208183030381529060405260029080519060200190610353929190610458565b50505050565b60006060600054600280805461036e90610589565b80601f016020809104026020016040519081016040528092919081815260200182805461039a90610589565b80156103e75780601f106103bc576101008083540402835291602001916103e7565b820191906000526020600020905b8154815290600101906020018083116103ca57829003601f168201915b50505050509050915091509091565b816102005760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461042790610589565b6000825580601f10610437575050565b601f01602090049060005260206000209081019061045591906104dc565b50565b82805461046490610589565b90600052602060002090601f01602090048101928261048657600085556104cc565b82601f1061049f57805160ff19168380011785556104cc565b828001600101855582156104cc579182015b828111156104cc5782518255916020019190600101906104b1565b506104d89291506104dc565b5090565b5b808211156104d857600081556001016104dd565b60006040828403121561050357600080fd5b50919050565b60006040828403121561051b57600080fd5b61052583836104f1565b9392505050565b82815260006020604081840152835180604085015260005b8181101561056057858101830151858201606001528201610544565b81811115610572576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061059d57607f821691505b6020821081141561050357634e487b7160e01b600052602260045260246000fd5b6000602082840312156105d057600080fd5b8151801515811461052557600080fd5b6001600160a01b03831681526060810161052560208301848035825260209081013591015256fea2646970667358221220031a28bfc2f79e75c8b70f2b35221e2fa538cff4137d7438cef73b51401a61fa64736f6c634300080c0033`,
  BytecodeLen: 2204,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:49:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:59:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "FundCreator": FundCreator,
  "FundDonator": FundDonator,
  "FundProject": FundProject
  };
export const _APIs = {
  };
