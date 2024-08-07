import { CHAINS } from "@debank/common/dist/index-rabby";

export const chains = Object.values(CHAINS)
  .filter((item) => !item.isTestnet)
  .sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    return 1;
  });

export const testnetChains = Object.values(CHAINS)
  .filter((item) => item.isTestnet)
  .sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    return 1;
  });

export const defaultChainList = [
  {
    id: "eth",
    community_id: 1,
    name: "Ethereum",
    native_token: {
      id: "eth",
      symbol: "ETH",
      logo: "https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/eth/42ba589cd077e7bdd97db6480b0ff61d.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/eth/561dda8f1ed8f0b2f46474bde3f02d0b.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://etherscan.io",
    need_estimate_gas: false,
  },
  {
    id: "bsc",
    community_id: 56,
    name: "BNB Chain",
    native_token: {
      id: "bsc",
      symbol: "BNB",
      logo: "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/bsc/bc73fa84b7fc5337905e527dadcbc854.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/bsc/8e44e643d6e2fd335a72b4cda6368e1a.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://bscscan.com",
    need_estimate_gas: false,
  },
  {
    id: "xdai",
    community_id: 100,
    name: "Gnosis Chain",
    native_token: {
      id: "xdai",
      symbol: "xDai",
      logo: "https://static.debank.com/image/xdai_token/logo_url/xdai/297890dc063e6dfb6cb4065cdf38382e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/xdai/43c1e09e93e68c9f0f3b132976394529.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/xdai/d8744f83d1a3bef4941c0820d76242a2.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://gnosisscan.io",
    need_estimate_gas: false,
  },
  {
    id: "matic",
    community_id: 137,
    name: "Polygon",
    native_token: {
      id: "matic",
      symbol: "MATIC",
      logo: "https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/matic/52ca152c08831e4765506c9bd75767e8.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/matic/d9d33b57922dce7a5ac567b0e5eb1e4b.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://polygonscan.com",
    need_estimate_gas: false,
  },
  {
    id: "ftm",
    community_id: 250,
    name: "Fantom",
    native_token: {
      id: "ftm",
      symbol: "FTM",
      logo: "https://static.debank.com/image/ftm_token/logo_url/ftm/33fdb9c5067e94f3a1b9e78f6fa86984.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/ftm/14133435f89637157a4405e954e1b1b2.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/ftm/64178bae592be3a33c160b1d9b9a124a.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://ftmscan.com",
    need_estimate_gas: false,
  },
  {
    id: "okt",
    community_id: 66,
    name: "OKC",
    native_token: {
      id: "okt",
      symbol: "OKT",
      logo: "https://static.debank.com/image/okt_token/logo_url/0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15/54a64333ea780b76b96435d66ab41146.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/okt/428bf6035abb3863c9f5c1a10dc3afd3.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/okt/f99c2d812fe1fe33afb7f5a40f073437.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://www.oklink.com/okexchain",
    need_estimate_gas: false,
  },
  {
    id: "heco",
    community_id: 128,
    name: "HECO",
    native_token: {
      id: "heco",
      symbol: "HT",
      logo: "https://static.debank.com/image/heco_token/logo_url/heco/c399dcddde07e1944c4dd8f922832b53.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/heco/db5152613c669e0cc8624d466d6c94ea.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/heco/a9157fe205667b41ca4a0d2a24d775c0.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://hecoscan.io/#",
    need_estimate_gas: false,
  },
  {
    id: "avax",
    community_id: 43114,
    name: "Avalanche",
    native_token: {
      id: "avax",
      symbol: "AVAX",
      logo: "https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/avax/4d1649e8a0c7dec9de3491b81807d402.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/avax/e8a86458cb9e656052f0250d079622d8.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://snowscan.xyz",
    need_estimate_gas: false,
  },
  {
    id: "op",
    community_id: 10,
    name: "Optimism",
    native_token: {
      id: "op",
      symbol: "ETH",
      logo: "https://static.debank.com/image/op_token/logo_url/op/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/op/01ae734fe781c9c2ae6a4cc7e9244056.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/op/b571a53bc1ce3833a6cc3db42847931b.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://optimistic.etherscan.io",
    need_estimate_gas: false,
  },
  {
    id: "arb",
    community_id: 42161,
    name: "Arbitrum",
    native_token: {
      id: "arb",
      symbol: "ETH",
      logo: "https://static.debank.com/image/arb_token/logo_url/arb/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/arb/854f629937ce94bebeb2cd38fb336de7.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/arb/315c3c4560a12e9c94841706e3ed9ce5.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://arbiscan.io",
    need_estimate_gas: true,
  },
  {
    id: "celo",
    community_id: 42220,
    name: "Celo",
    native_token: {
      id: "celo",
      symbol: "CELO",
      logo: "https://static.debank.com/image/celo_token/logo_url/0x471ece3750da237f93b8e339c536989b8978a438/6f524d91db674876ba0f5767cf0124cc.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/celo/41da5c1d3c0945ae822a1f85f02c76cf.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/celo/17b4db6dd9f3559117547bc22ddc5b89.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://celoscan.io",
    need_estimate_gas: false,
  },
  {
    id: "movr",
    community_id: 1285,
    name: "Moonriver",
    native_token: {
      id: "movr",
      symbol: "MOVR",
      logo: "https://static.debank.com/image/mtr_token/logo_url/0xb158870beb809ad955bf56065c5c10d7fd957cc0/aa42368ae1d5856d15c13ecc0ff74af6.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/movr/4b0de5a711b437f187c0d0f15cc0398b.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/movr/c13a5af6c923aad7cc6cad311267da8e.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://moonriver.moonscan.io",
    need_estimate_gas: false,
  },
  {
    id: "cro",
    community_id: 25,
    name: "Cronos",
    native_token: {
      id: "cro",
      symbol: "CRO",
      logo: "https://static.debank.com/image/cro_token/logo_url/cro/7803de9b434be197c2c1399465abdf39.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/cro/f947000cc879ee8ffa032793808c741c.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/cro/555a092be8378d6e55000b3846043bec.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.cronos.org",
    need_estimate_gas: false,
  },
  {
    id: "boba",
    community_id: 288,
    name: "Boba",
    native_token: {
      id: "boba",
      symbol: "ETH",
      logo: "https://static.debank.com/image/boba_token/logo_url/boba/b1947b38a90e559eb950453965714be4.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/boba/e43d79cd8088ceb3ea3e4a240a75728f.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/boba/aea02e2a1cf1087f299f4d501777d0cd.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://bobascan.com",
    need_estimate_gas: true,
  },
  {
    id: "metis",
    community_id: 1088,
    name: "Metis",
    native_token: {
      id: "metis",
      symbol: "Metis",
      logo: "https://static.debank.com/image/coin/logo_url/metis/7485c0a61c1e05fdf707113b6b6ac917.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/metis/7485c0a61c1e05fdf707113b6b6ac917.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/metis/3fb2c5171563b035fe4add98eca01efc.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.metis.io",
    need_estimate_gas: false,
  },
  {
    id: "btt",
    community_id: 199,
    name: "BitTorrent",
    native_token: {
      id: "btt",
      symbol: "BTT",
      logo: "https://static.debank.com/image/btt_token/logo_url/btt/2130a8d57ff2a0f3d50a4ec9432897c6.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/btt/2130a8d57ff2a0f3d50a4ec9432897c6.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/btt/4d76b329327ccfa153e47c750d0775d3.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://bttcscan.com",
    need_estimate_gas: false,
  },
  {
    id: "aurora",
    community_id: 1313161554,
    name: "Aurora",
    native_token: {
      id: "aurora",
      symbol: "AETH",
      logo: "https://static.debank.com/image/aurora_token/logo_url/aurora/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/aurora/da491099bb44690eda122cdd67c5c610.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/aurora/f4109e1ec9f24aa36c23a5d9d27286fb.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://aurorascan.dev",
    need_estimate_gas: true,
  },
  {
    id: "mobm",
    community_id: 1284,
    name: "Moonbeam",
    native_token: {
      id: "mobm",
      symbol: "GLMR",
      logo: "https://static.debank.com/image/mobm_token/logo_url/mobm/a8442077d76b258297181c3e6eb8c9cc.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/mobm/a8442077d76b258297181c3e6eb8c9cc.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/mobm/293430b9780093287759bbf2ed80f939.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://moonscan.io",
    need_estimate_gas: false,
  },
  {
    id: "sbch",
    community_id: 10000,
    name: "SmartBch",
    native_token: {
      id: "sbch",
      symbol: "BCH",
      logo: "https://static.debank.com/image/sbch_token/logo_url/sbch/03007b5353bb9e221efb82a6a70d9ec9.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/sbch/d78ac780803e7f0a17b73558f423502e.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/sbch/0b08879f05d6a13d7a4181510a1138cf.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://www.smartscan.cash",
    need_estimate_gas: false,
  },
  {
    id: "fuse",
    community_id: 122,
    name: "Fuse",
    native_token: {
      id: "fuse",
      symbol: "FUSE",
      logo: "https://static.debank.com/image/arb_token/logo_url/0xbdef0e9ef12e689f366fe494a7a7d0dad25d9286/b9fe0bbfeccc43ac46bc652752e25532.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/fuse/7a21b958761d52d04ff0ce829d1703f4.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/fuse/ceda89bc24064a4c583f369811ee29b6.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.fuse.io",
    need_estimate_gas: false,
  },
  {
    id: "hmy",
    community_id: 1666600000,
    name: "Harmony",
    native_token: {
      id: "hmy",
      symbol: "ONE",
      logo: "https://static.debank.com/image/hmy_token/logo_url/hmy/734c003023531e31c636ae25d5a73172.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/hmy/b3bfb4681f81a85e25c28e150dcbfe51.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/hmy/a92fd20b6691292d93160e2606035468.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.harmony.one",
    need_estimate_gas: false,
  },
  {
    id: "klay",
    community_id: 8217,
    name: "Klaytn",
    native_token: {
      id: "klay",
      symbol: "KLAY",
      logo: "https://static.debank.com/image/klay_token/logo_url/klay/1df018b8493cb97c50b7e390ef63cba4.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/klay/1df018b8493cb97c50b7e390ef63cba4.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/klay/f5a2aefdbaa9cbc90c0fa1ec0443ec63.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://scope.klaytn.com",
    need_estimate_gas: false,
  },
  {
    id: "astar",
    community_id: 592,
    name: "Astar",
    native_token: {
      id: "astar",
      symbol: "ASTR",
      logo: "https://static.debank.com/image/astar_token/logo_url/astar/a827be92d88617a918ea060a9a6f1572.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/astar/398c7e0014bdada3d818367a7273fabe.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/astar/116f17a7abe800b7675377857fac1dcd.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://blockscout.com/astar",
    need_estimate_gas: false,
  },
  {
    id: "iotx",
    community_id: 4689,
    name: "IoTeX",
    native_token: {
      id: "iotx",
      symbol: "IOTX",
      logo: "https://static.debank.com/image/iotx_token/logo_url/iotx/d3be2cd8677f86bd9ab7d5f3701afcc9.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/iotx/d3be2cd8677f86bd9ab7d5f3701afcc9.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/iotx/419fdcf87eceb9b8c34af0c5e3985d44.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://iotexscan.io",
    need_estimate_gas: false,
  },
  {
    id: "rsk",
    community_id: 30,
    name: "RSK",
    native_token: {
      id: "rsk",
      symbol: "RBTC",
      logo: "https://static.debank.com/image/rsk_token/logo_url/rsk/1dae003fa89234ac011c0dac51126770.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/rsk/ff47def89fba98394168bf5f39920c8c.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/rsk/8f621d4d08c69ba79d5aae53bc9d3eeb.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.rsk.co",
    need_estimate_gas: false,
  },
  {
    id: "wan",
    community_id: 888,
    name: "Wanchain",
    native_token: {
      id: "wan",
      symbol: "WAN",
      logo: "https://static.debank.com/image/wan_token/logo_url/wan/f205dea796c0abae5b6749d697adfffa.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/wan/f3aa8b31414732ea5e026e05665146e6.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/wan/dc0ce7bb158767b2de10ce3f23b62675.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://www.wanscan.org",
    need_estimate_gas: false,
  },
  {
    id: "kcc",
    community_id: 321,
    name: "KCC",
    native_token: {
      id: "kcc",
      symbol: "KCS",
      logo: "https://static.debank.com/image/kcc_token/logo_url/kcc/7fca710b626725fc67f02be57f71c597.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/kcc/3a5a4ef7d5f1db1e53880d70219d75b6.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/kcc/d3f270fe9ccdd0fc9047bcf9a62d8110.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.kcc.io/en",
    need_estimate_gas: false,
  },
  {
    id: "sgb",
    community_id: 19,
    name: "Songbird",
    native_token: {
      id: "sgb",
      symbol: "SGB",
      logo: "https://static.debank.com/image/sgb_token/logo_url/0x02f0826ef6ad107cfc861152b32b52fd11bab9ed/619f46d574d62a50bdfd9f0e2f47ddc1.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/sgb/619f46d574d62a50bdfd9f0e2f47ddc1.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/sgb/eeef2dd3241f458e7f43dd06319e6cb2.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://songbird-explorer.flare.network",
    need_estimate_gas: false,
  },
  {
    id: "evmos",
    community_id: 9001,
    name: "EvmOS",
    native_token: {
      id: "evmos",
      symbol: "EVMOS",
      logo: "https://static.debank.com/image/evmos_token/logo_url/evmos/26e038b4d5475d5a4b92f7fc08bdabc9.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/evmos/26e038b4d5475d5a4b92f7fc08bdabc9.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/evmos/4d575ca6baef4f1de8dcead622091a79.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://escan.live",
    need_estimate_gas: false,
  },
  {
    id: "dfk",
    community_id: 53935,
    name: "DFK",
    native_token: {
      id: "dfk",
      symbol: "JEWEL",
      logo: "https://static.debank.com/image/dfk_token/logo_url/dfk/09b4ee0e9d0695201fcc7e912ac31595.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/dfk/233867c089c5b71be150aa56003f3f7a.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/dfk/bab611be6bf763da73c6179c2150ffdf.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host:
      "https://subnets.avax.network/defi-kingdoms/dfk-chain/explorer",
    need_estimate_gas: false,
  },
  {
    id: "tlos",
    community_id: 40,
    name: "Telos",
    native_token: {
      id: "tlos",
      symbol: "TLOS",
      logo: "https://static.debank.com/image/tlos_token/logo_url/tlos/7e45efcbc8d74f7fd6cda972938f4ade.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/telos/f9f7493def4c08ed222540bebd8ce87a.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/tlos/deae1896415f9dac66e60cb47d8165d7.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://www.teloscan.io",
    need_estimate_gas: false,
  },
  {
    id: "nova",
    community_id: 42170,
    name: "Arbitrum Nova",
    native_token: {
      id: "nova",
      symbol: "ETH",
      logo: "https://static.debank.com/image/nova_token/logo_url/nova/fa2f1f04a6761644701860eea7c4a47a.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/nova/06eb2b7add8ba443d5b219c04089c326.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/nova/b61c3a7723f39265c8b98967407e46db.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://nova.arbiscan.io",
    need_estimate_gas: true,
  },
  {
    id: "canto",
    community_id: 7700,
    name: "Canto",
    native_token: {
      id: "canto",
      symbol: "Canto",
      logo: "https://static.debank.com/image/canto_token/logo_url/canto/47574ef619e057d2c6bbce1caba57fb6.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/canto/47574ef619e057d2c6bbce1caba57fb6.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/canto/29bd07f96ac7805a1b14649f356d3eee.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://tuber.build",
    need_estimate_gas: false,
  },
  {
    id: "doge",
    community_id: 2000,
    name: "Dogechain",
    native_token: {
      id: "doge",
      symbol: "wDOGE",
      logo: "https://static.debank.com/image/doge_token/logo_url/doge/2538141079688a7a43bc22c7b60fb45f.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/doge/2538141079688a7a43bc22c7b60fb45f.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/doge/aa18ed341ae19e5e381dfac1062fee73.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.dogechain.dog",
    need_estimate_gas: false,
  },
  {
    id: "kava",
    community_id: 2222,
    name: "Kava",
    native_token: {
      id: "kava",
      symbol: "KAVA",
      logo: "https://static.debank.com/image/kava_token/logo_url/kava/f5b7c6ffbe4d99da363a78d98e748880.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/kava/b26bf85a1a817e409f9a3902e996dc21.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/kava/2e672dd7947e41a34d6cbc5995ad24b2.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://kavascan.com",
    need_estimate_gas: false,
  },
  {
    id: "step",
    community_id: 1234,
    name: "Step",
    native_token: {
      id: "step",
      symbol: "FITFI",
      logo: "https://static.debank.com/image/step_token/logo_url/step/9d345f7e03f078657bb1ffd494442d67.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/step/db79600b8feafe17845617ca9c606dbe.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/step/e3250b0b574f55b1ec82434549e6f959.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://stepscan.io",
    need_estimate_gas: false,
  },
  {
    id: "mada",
    community_id: 2001,
    name: "Milkomeda C1",
    native_token: {
      id: "mada",
      symbol: "milkADA",
      logo: "https://static.debank.com/image/mada_token/logo_url/mada/cb356bfa1b48206c834e62113604567d.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/mada/cdc4b1112c2c5a2757cbda33f4476b7f.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/mada/185df9833e6215d48ccfd389be59b752.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com",
    need_estimate_gas: false,
  },
  {
    id: "cfx",
    community_id: 1030,
    name: "Conflux",
    native_token: {
      id: "cfx",
      symbol: "CFX",
      logo: "https://static.debank.com/image/cfx_token/logo_url/cfx/f493f92ad1087e23cf8dadab9850abb5.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/cfx/eab0c7304c6820b48b2a8d0930459b82.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/cfx/d45e5225fc8e97623c798599a2f8ce50.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://evm.confluxscan.io",
    need_estimate_gas: false,
  },
  {
    id: "brise",
    community_id: 32520,
    name: "Bitgert",
    native_token: {
      id: "brise",
      symbol: "BRISE",
      logo: "https://static.debank.com/image/brise_token/logo_url/brise/4f6c040cf49f4d8c4eabbad7cd2f4ae4.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/brise/4f6c040cf49f4d8c4eabbad7cd2f4ae4.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/brise/34c2bec8f0eaaf44929ce604c645c729.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://brisescan.com",
    need_estimate_gas: false,
  },
  {
    id: "ckb",
    community_id: 71402,
    name: "Godwoken",
    native_token: {
      id: "ckb",
      symbol: "CKB",
      logo: "https://static.debank.com/image/ckb_token/logo_url/ckb/18d430b7e9b48750bad7e88513a8f2c5.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/ckb/e821893503104870d5e73f56dbd73746.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/ckb/5b7e976954a29e0ff3fc67a03d702d44.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://gwscan.com",
    need_estimate_gas: false,
  },
  {
    id: "tomb",
    community_id: 6969,
    name: "TOMB Chain",
    native_token: {
      id: "tomb",
      symbol: "TOMB",
      logo: "https://static.debank.com/image/tomb_token/logo_url/0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000/eee88f95c46faa10762514b44655a6a1.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/tomb/eee88f95c46faa10762514b44655a6a1.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/tomb/287c9006bea8dc14ece64d2d4499fa2b.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://tombscout.com",
    need_estimate_gas: false,
  },
  {
    id: "era",
    community_id: 324,
    name: "zkSync Era",
    native_token: {
      id: "era",
      symbol: "ETH",
      logo: "https://static.debank.com/image/coin/logo_url/eth/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/era/2cfcd0c8436b05d811b03935f6c1d7da.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/era/ae1951502c3514d43374d7e6718bda9a.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://era.zksync.network",
    need_estimate_gas: false,
  },
  {
    id: "ron",
    community_id: 2020,
    name: "Ronin",
    native_token: {
      id: "ron",
      symbol: "RON",
      logo: "https://static.debank.com/image/ron_token/logo_url/0xe514d9deb7966c8be0ca922de8a064264ea6bcd4/f65d4fdc17d5533c59ebcd6eb1f47320.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/ron/6e0f509804bc83bf042ef4d674c1c5ee.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/ron/a7164cbb1bcf36c6b13abece4956e7ec.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.roninchain.com",
    need_estimate_gas: false,
  },
  {
    id: "pze",
    community_id: 1101,
    name: "Polygon zkEVM",
    native_token: {
      id: "pze",
      symbol: "ETH",
      logo: "https://static.debank.com/image/pze_token/logo_url/pze/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/pze/a2276dce2d6a200c6148fb975f0eadd3.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/pze/94d0cff539cb8f18c93f11a454f894b3.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://zkevm.polygonscan.com",
    need_estimate_gas: false,
  },
  {
    id: "eos",
    community_id: 17777,
    name: "EOS EVM",
    native_token: {
      id: "eos",
      symbol: "EOS",
      logo: "https://static.debank.com/image/eos_token/logo_url/eos/3b72a264baa8cefd45b37e0520f13e6f.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/eos/7e3122a9ce6f9d522e6d5519d43b6a72.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/eos/017f8f3d4666311422524cb5da717f2e.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.evm.eosnetwork.com",
    need_estimate_gas: false,
  },
  {
    id: "core",
    community_id: 1116,
    name: "CORE",
    native_token: {
      id: "core",
      symbol: "CORE",
      logo: "https://static.debank.com/image/core_token/logo_url/core/1a7becfe112c0c9bfc25628cd70e94a6.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/core/ccc02f660e5dd410b23ca3250ae7c060.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/core/e52df8e06f7763e05e1d94cce21683a5.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://scan.coredao.org",
    need_estimate_gas: false,
  },
  {
    id: "wemix",
    community_id: 1111,
    name: "WEMIX",
    native_token: {
      id: "wemix",
      symbol: "WEMIX",
      logo: "https://static.debank.com/image/wemix_token/logo_url/wemix/6431c197ec9f2a1d334a356b316fbb49.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/wemix/d1ba88d1df6cca0b0cb359c36a09c054.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/wemix/66b877a83349d6d158796f825f5b9633.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.wemix.com",
    need_estimate_gas: false,
  },
  {
    id: "etc",
    community_id: 61,
    name: "Ethereum Classic",
    native_token: {
      id: "etc",
      symbol: "ETC",
      logo: "https://static.debank.com/image/okt_token/logo_url/0x99970778e2715bbc9cf8fb83d10dcbc2d2d551a3/782943aff604f69c7889d90926348210.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/etc/7ccf90ee6822ab440fb603337da256fa.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/etc/81a154d78dce2782739ac9e0d8e05f6d.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://blockscout.com/etc/mainnet",
    need_estimate_gas: false,
  },
  {
    id: "pls",
    community_id: 369,
    name: "Pulse",
    native_token: {
      id: "pls",
      symbol: "PLS",
      logo: "https://static.debank.com/image/pls_token/logo_url/pls/aa6be079fa9eb568e02150734ebb3db0.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/pls/aa6be079fa9eb568e02150734ebb3db0.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/pls/7c01fc668883d77e87c9334ec7d6b6ab.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host:
      "https://scan.mypinata.cloud/ipfs/bafybeidn64pd2u525lmoipjl4nh3ooa2imd7huionjsdepdsphl5slfowy/#",
    need_estimate_gas: false,
  },
  {
    id: "flr",
    community_id: 14,
    name: "Flare",
    native_token: {
      id: "flr",
      symbol: "FLR",
      logo: "https://static.debank.com/image/flr_token/logo_url/flr/c7d8087092d5d7b80794630612afb32e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/flr/9ee03d5d7036ad9024e81d55596bb4dc.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/flr/ad866bf4323576b66651c9e2bbfd8a80.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://flare-explorer.flare.network",
    need_estimate_gas: false,
  },
  {
    id: "fsn",
    community_id: 32659,
    name: "Fusion",
    native_token: {
      id: "fsn",
      symbol: "FSN",
      logo: "https://static.debank.com/image/fsn_token/logo_url/fsn/047789979f0b5733602b29517753bdf3.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/fsn/047789979f0b5733602b29517753bdf3.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/fsn/dfb374f7abf97b869ccf42bbf697feae.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://fsnscan.com",
    need_estimate_gas: false,
  },
  {
    id: "mtr",
    community_id: 82,
    name: "Meter",
    native_token: {
      id: "mtr",
      symbol: "MTR",
      logo: "https://static.debank.com/image/mtr_token/logo_url/mtr/920c6f4fdcb408703b435a97b963200b.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/mtr/2dc6f079f52ca22778eb684e1ce650b3.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/mtr/0eafbdc8de9656a9de0f28efa2070450.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://scan.meter.io",
    need_estimate_gas: false,
  },
  {
    id: "rose",
    community_id: 42262,
    name: "Oasis Emerald",
    native_token: {
      id: "rose",
      symbol: "ROSE",
      logo: "https://static.debank.com/image/rose_token/logo_url/rose/33ade55b0f3efa10e9eec002c6417257.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/rose/33ade55b0f3efa10e9eec002c6417257.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/rose/2e2351720f1772e3b3c7c2891f3d0192.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.emerald.oasis.dev",
    need_estimate_gas: false,
  },
  {
    id: "oas",
    community_id: 248,
    name: "Oasys",
    native_token: {
      id: "oas",
      symbol: "OAS",
      logo: "https://static.debank.com/image/oas_token/logo_url/oas/322b2cb0935af95b9cabd8a59b629566.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/oas/61dfecab1ba8a404354ce94b5a54d4b3.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/oas/95888aa80c9eb4dbde714c69b3cc7425.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://scan.oasys.games",
    need_estimate_gas: false,
  },
  {
    id: "zora",
    community_id: 7777777,
    name: "Zora",
    native_token: {
      id: "zora",
      symbol: "ETH",
      logo: "https://static.debank.com/image/coin/logo_url/eth/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/zora/de39f62c4489a2359d5e1198a8e02ef1.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/zora/25dfb04c552c35d3d8e30e5ba136b9e6.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.zora.energy",
    need_estimate_gas: false,
  },
  {
    id: "base",
    community_id: 8453,
    name: "Base",
    native_token: {
      id: "base",
      symbol: "ETH",
      logo: "https://static.debank.com/image/coin/logo_url/eth/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/base/ccc1513e4f390542c4fb2f4b88ce9579.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/base/025de9d02848e257740c14bdd1f9330b.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://www.basescan.org",
    need_estimate_gas: false,
  },
  {
    id: "linea",
    community_id: 59144,
    name: "Linea",
    native_token: {
      id: "linea",
      symbol: "ETH",
      logo: "https://static.debank.com/image/coin/logo_url/eth/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/linea/32d4ff2cf92c766ace975559c232179c.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/linea/adee1a93003ab543957692844fdaf9f2.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://lineascan.build",
    need_estimate_gas: false,
  },
  {
    id: "mnt",
    community_id: 5000,
    name: "Mantle",
    native_token: {
      id: "mnt",
      symbol: "MNT",
      logo: "https://static.debank.com/image/eth_token/logo_url/0x3c3a81e81dc49a522a592e7622a7e711c06bf354/a443c78c33704d48f06e5686bb87f85e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/mnt/0af11a52431d60ded59655c7ca7e1475.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/mnt/f642653f191f4fd59cbf9efefc4c007d.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.mantle.xyz",
    need_estimate_gas: true,
  },
  {
    id: "tenet",
    community_id: 1559,
    name: "Tenet",
    native_token: {
      id: "tenet",
      symbol: "TENET",
      logo: "https://static.debank.com/image/tenet_token/logo_url/tenet/2da9b626102a7de9625aaf753cfac321.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/tenet/803be22e467ee9a5abe00d69a9c3ea4f.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/tenet/651386abf4fa22f64613faf8dc5187f1.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://tenetscan.io",
    need_estimate_gas: false,
  },
  {
    id: "lyx",
    community_id: 42,
    name: "LUKSO",
    native_token: {
      id: "lyx",
      symbol: "LYX",
      logo: "https://static.debank.com/image/eth_token/logo_url/0xa8b919680258d369114910511cc87595aec0be6d/78a30c7b781e3889548d5920c09133dc.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/lyx/dbe6eef57e66817e61297d9b188248ed.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/lyx/83230c4279ab2813907de034d87ab319.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.execution.mainnet.lukso.network",
    need_estimate_gas: false,
  },
  {
    id: "manta",
    community_id: 169,
    name: "Manta Pacific",
    native_token: {
      id: "manta",
      symbol: "ETH",
      logo: "https://static.debank.com/image/manta_token/logo_url/manta/389dd9a835250219889e01d5a31a75f1.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/manta/0e25a60b96a29d6a5b9e524be7565845.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/manta/ead2552c140ffd5482e7222964bac558.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://pacific-explorer.manta.network",
    need_estimate_gas: true,
  },
  {
    id: "scrl",
    community_id: 534352,
    name: "Scroll",
    native_token: {
      id: "scrl",
      symbol: "ETH",
      logo: "https://static.debank.com/image/scrl_token/logo_url/scrl/389dd9a835250219889e01d5a31a75f1.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/scrl/1fa5c7e0bfd353ed0a97c1476c9c42d2.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/scrl/dd0d05b6fba614d57b55f0724acd723c.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://scrollscan.com",
    need_estimate_gas: false,
  },
  {
    id: "opbnb",
    community_id: 204,
    name: "opBNB",
    native_token: {
      id: "opbnb",
      symbol: "BNB",
      logo: "https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/opbnb/07e2e686e363a842d0982493638e1285.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/opbnb/8e44e643d6e2fd335a72b4cda6368e1a.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://mainnet.opbnbscan.com",
    need_estimate_gas: false,
  },
  {
    id: "loot",
    community_id: 5151706,
    name: "Loot",
    native_token: {
      id: "loot",
      symbol: "AGLD",
      logo: "https://static.debank.com/image/loot_token/logo_url/loot/a6c0dc128d515e2d32526075decae9ec.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/loot/0f098333a1a4f474115b05862e680573.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/loot/af8f162614f388e896872f628f3e3e6e.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.lootchain.com",
    need_estimate_gas: false,
  },
  {
    id: "shib",
    community_id: 109,
    name: "Shibarium",
    native_token: {
      id: "shib",
      symbol: "BONE",
      logo: "https://static.debank.com/image/shib_token/logo_url/shib/e49e9a98f5fb1fb04ad96bb536457df9.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/shib/4ec79ed9ee4988dfdfc41e1634a447be.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/shib/574d888cbdce3a08ea8a5f636fc2ae3e.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://shibariumscan.io",
    need_estimate_gas: false,
  },
  {
    id: "fx",
    community_id: 530,
    name: "Function X",
    native_token: {
      id: "fx",
      symbol: "FX",
      logo: "https://static.debank.com/image/fx_token/logo_url/fx/6fee82420b2394e0b68d7d7e692a0a01.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/fx/6fee82420b2394e0b68d7d7e692a0a01.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/fx/528e10d16f64db1798bca33092526d96.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://starscan.io/evm",
    need_estimate_gas: false,
  },
  {
    id: "mode",
    community_id: 34443,
    name: "Mode",
    native_token: {
      id: "mode",
      symbol: "ETH",
      logo: "https://static.debank.com/image/mode_token/logo_url/mode/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/mode/466e6e12f4fd827f8f497cceb0601a5e.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/mode/f7033404c6d09fafcbe53cbf806a585f.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.mode.network",
    need_estimate_gas: false,
  },
  {
    id: "beam",
    community_id: 4337,
    name: "Beam",
    native_token: {
      id: "beam",
      symbol: "BEAM",
      logo: "https://static.debank.com/image/beam_token/logo_url/beam/90a1e9f46664d070752deeb65878a3bd.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/beam/90a1e9f46664d070752deeb65878a3bd.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/beam/f54a6974e60b63c5f328721ad0281f1b.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://subnets.avax.network/beam",
    need_estimate_gas: false,
  },
  {
    id: "pego",
    community_id: 20201022,
    name: "Pego",
    native_token: {
      id: "pego",
      symbol: "PG",
      logo: "https://static.debank.com/image/pego_token/logo_url/pego/6b81cf47fdc1b86707d3fbf02f90cf18.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/pego/6b81cf47fdc1b86707d3fbf02f90cf18.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/pego/ee47a1dcfc1b990090e1894221496c8f.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://scan.pego.network",
    need_estimate_gas: false,
  },
  {
    id: "fon",
    community_id: 201022,
    name: "FON Chain",
    native_token: {
      id: "fon",
      symbol: "FON",
      logo: "https://static.debank.com/image/fon_token/logo_url/fon/369618f4d45053fa4439943c9c2d387d.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/fon/369618f4d45053fa4439943c9c2d387d.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/fon/6c5ee096ec2173f9250d58b4384343aa.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://fonscan.io",
    need_estimate_gas: false,
  },
  {
    id: "zkfair",
    community_id: 42766,
    name: "ZKFair",
    native_token: {
      id: "zkfair",
      symbol: "USDC",
      logo: "https://static.debank.com/image/zkfair_token/logo_url/zkfair/35ab0987153a8355a454223aae371ac7.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/zkfair/c66f35d57c6146cdff82dfeb316ba801.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/zkfair/4133904f2769ebcffa48177c0b7831a6.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://scan.zkfair.io",
    need_estimate_gas: false,
  },
  {
    id: "alot",
    community_id: 432204,
    name: "Dexalot",
    native_token: {
      id: "alot",
      symbol: "ALOT",
      logo: "https://static.debank.com/image/alot_token/logo_url/alot/a03e5e8bc56a8bcd5f5c7b830e8b5877.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/alot/0ed4884da27d022dbd5ed5bc919ee248.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/alot/8ed0cbf9842daef43fbb32558d4f4309.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://subnets.avax.network/dexalot",
    need_estimate_gas: false,
  },
  {
    id: "bfc",
    community_id: 3068,
    name: "Bifrost",
    native_token: {
      id: "bfc",
      symbol: "BFC",
      logo: "https://static.debank.com/image/bfc_token/logo_url/bfc/f0c01b58f084660f8c8ff43f5c85301c.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/bfc/7c10f5191b16d0cc068cb6eff32b6347.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/bfc/728682dd1707271a7b268fac3594e94e.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.mainnet.bifrostnetwork.com",
    need_estimate_gas: false,
  },
  {
    id: "xai",
    community_id: 660279,
    name: "Xai",
    native_token: {
      id: "xai",
      symbol: "XAI",
      logo: "https://static.debank.com/image/xai_token/logo_url/xai/022ab00135c182f6e67e583ecda93863.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/xai/b02622ce65251bdcb31aa6621a10a096.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/xai/9eb29c6f965e70ed84e50f8e9e577b1e.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.xai-chain.net",
    need_estimate_gas: false,
  },
  {
    id: "hubble",
    community_id: 1992,
    name: "Hubble",
    native_token: {
      id: "hubble",
      symbol: "USDC",
      logo: "https://static.debank.com/image/hubble_token/logo_url/hubble/35ab0987153a8355a454223aae371ac7.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/hubble/dc3b830260f712058db0d70bc073dfda.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/hubble/5af24266877401ea8d086ccb08155c4e.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.hubble.exchange",
    need_estimate_gas: false,
  },
  {
    id: "zeta",
    community_id: 7000,
    name: "ZetaChain",
    native_token: {
      id: "zeta",
      symbol: "ZETA",
      logo: "https://static.debank.com/image/zeta_token/logo_url/zeta/d0e1b5e519d99c452a30e83a1263d1d0.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/zeta/d0e1b5e519d99c452a30e83a1263d1d0.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/zeta/fb4ab4eb798244887bfd65455bd42d6b.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://zetachain.blockscout.com",
    need_estimate_gas: false,
  },
  {
    id: "rari",
    community_id: 1380012617,
    name: "RARI",
    native_token: {
      id: "rari",
      symbol: "ETH",
      logo: "https://static.debank.com/image/rari_token/logo_url/rari/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/rari/67fc6abba5cfc6bb3a57bb6afcf5afee.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/rari/73456a9386ce19d00584fec493206005.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://mainnet.explorer.rarichain.org",
    need_estimate_gas: false,
  },
  {
    id: "dym",
    community_id: 1100,
    name: "Dymension",
    native_token: {
      id: "dym",
      symbol: "DYM",
      logo: "https://static.debank.com/image/dym_token/logo_url/dym/ab62b0f446408c84a2e17d9178a4e8e9.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/dym/ab62b0f446408c84a2e17d9178a4e8e9.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/dym/0a9e4481802f4c0aae6a5a97605809d8.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://dym.fyi",
    need_estimate_gas: false,
  },
  {
    id: "merlin",
    community_id: 4200,
    name: "Merlin",
    native_token: {
      id: "merlin",
      symbol: "BTC",
      logo: "https://static.debank.com/image/merlin_token/logo_url/merlin/fe230e468272b84aba78d08bb4140456.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/merlin/458e4686dfb909ba871bd96fe45417a8.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/merlin/72e28432e865c544c1045017892187bc.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://scan.merlinchain.io",
    need_estimate_gas: false,
  },
  {
    id: "blast",
    community_id: 81457,
    name: "Blast",
    native_token: {
      id: "blast",
      symbol: "ETH",
      logo: "https://static.debank.com/image/blast_token/logo_url/blast/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/blast/15132294afd38ce980639a381ee30149.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/blast/828eb570083948e156a34ab8588e26b3.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://blastscan.io",
    need_estimate_gas: false,
  },
  {
    id: "platon",
    community_id: 210425,
    name: "PlatON",
    native_token: {
      id: "platon",
      symbol: "LAT",
      logo: "https://static.debank.com/image/platon_token/logo_url/platon/b5df1214981b0888e48fbb18d302c6ba.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/platon/b5df1214981b0888e48fbb18d302c6ba.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/platon/e5104b97d20a18df9f28b0673ebd7440.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://scan.platon.network",
    need_estimate_gas: false,
  },
  {
    id: "sx",
    community_id: 416,
    name: "SX",
    native_token: {
      id: "sx",
      symbol: "SX",
      logo: "https://static.debank.com/image/sx_token/logo_url/sx/1cd91dbcb82de12b4587607bc4924bc9.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/sx/1cd91dbcb82de12b4587607bc4924bc9.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/sx/0bddf854e56d6e7629b2f8ca1be707b0.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://explorer.sx.technology",
    need_estimate_gas: false,
  },
  {
    id: "eon",
    community_id: 7332,
    name: "Horizen EON",
    native_token: {
      id: "eon",
      symbol: "ZEN",
      logo: "https://static.debank.com/image/eon_token/logo_url/eon/bf6e7dbdd2facde7ed39c9f881537775.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/eon/36deb31f3e0a7c74762971d79245f82e.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/eon/f071cd6b0e2c8a9ea6a3e213651ed7f2.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://eon-explorer.horizenlabs.io",
    need_estimate_gas: false,
  },
  {
    id: "map",
    community_id: 22776,
    name: "MAP Protocol",
    native_token: {
      id: "map",
      symbol: "MAPO",
      logo: "https://static.debank.com/image/map_token/logo_url/map/3efde740a6e9d32661757aad8ae2b3a2.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/map/3efde740a6e9d32661757aad8ae2b3a2.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/map/18ec31888ba251dd6d47e469b636d5fe.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://www.maposcan.io",
    need_estimate_gas: false,
  },
  {
    id: "karak",
    community_id: 2410,
    name: "Karak",
    native_token: {
      id: "karak",
      symbol: "ETH",
      logo: "https://static.debank.com/image/karak_token/logo_url/karak/d61441782d4a08a7479d54aea211679e.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/karak/a9e47f00f6eeb2c9cc8f9551cff5fe68.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/karak/5d5ca3507b4a1d64a85406f7382412d7.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://explorer.karak.network",
    need_estimate_gas: false,
  },
  {
    id: "aze",
    community_id: 3776,
    name: "Astar zkEVM",
    native_token: {
      id: "aze",
      symbol: "ETH",
      logo: "https://static.debank.com/image/aze_token/logo_url/aze/389dd9a835250219889e01d5a31a75f1.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/aze/6def6ac081a37e94ed0106da2cefeaf4.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/aze/490d08032b0ee878dc0251c35c26383b.png",
    eip_1559: false,
    is_disabled: false,
    explorer_host: "https://astar-zkevm.explorer.startale.com",
    need_estimate_gas: false,
  },
  {
    id: "frax",
    community_id: 252,
    name: "Fraxtal",
    native_token: {
      id: "frax",
      symbol: "frxETH",
      logo: "https://static.debank.com/image/frax_token/logo_url/frax/4313f25f6c5196e8fce2c80fa34c73d0.png",
      decimals: 18,
    },
    logo_url:
      "https://static.debank.com/image/chain/logo_url/frax/2e210d888690ad0c424355cc8471d48d.png",
    white_logo_url:
      "https://static.debank.com/image/chain/white_logo_url/frax/7ae2bc54b406cd3c378b0bd28df2b3ff.png",
    eip_1559: true,
    is_disabled: false,
    explorer_host: "https://fraxscan.com",
    need_estimate_gas: false,
  },
];
