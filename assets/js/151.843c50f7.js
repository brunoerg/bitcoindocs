(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{523:function(e,t,a){"use strict";a.r(t);var i=a(43),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_0-16-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-16-1"}},[e._v("#")]),e._v(" 0.16.1")]),e._v(" "),a("p",[e._v("Bitcoin Core version 0.16.1 is now available from:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://bitcoincore.org/bin/bitcoin-core-0.16.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://bitcoincore.org/bin/bitcoin-core-0.16.1/"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("This is a new minor version release, with various bugfixes\nas well as updated translations.")]),e._v(" "),a("p",[e._v("Please report bugs using the issue tracker at GitHub:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/bitcoin/bitcoin/issues"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("To receive security and update notifications, please subscribe to:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://bitcoincore.org/en/list/announcements/join/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://bitcoincore.org/en/list/announcements/join/"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"how-to-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-upgrade"}},[e._v("#")]),e._v(" How to Upgrade")]),e._v(" "),a("p",[e._v("If you are running an older version, shut it down. Wait until it has completely\nshut down (which might take a few minutes for older versions), then run the\ninstaller (on Windows) or just copy over "),a("code",[e._v("/Applications/Bitcoin-Qt")]),e._v(" (on Mac)\nor "),a("code",[e._v("bitcoind")]),e._v("/"),a("code",[e._v("bitcoin-qt")]),e._v(" (on Linux).")]),e._v(" "),a("p",[e._v("The first time you run version 0.15.0 or newer, your chainstate database will be converted to a\nnew format, which will take anywhere from a few minutes to half an hour,\ndepending on the speed of your machine.")]),e._v(" "),a("p",[e._v("Note that the block database format also changed in version 0.8.0 and there is no\nautomatic upgrade code from before version 0.8 to version 0.15.0 or higher. Upgrading\ndirectly from 0.7.x and earlier without re-downloading the blockchain is not supported.\nHowever, as usual, old wallet versions are still supported.")]),e._v(" "),a("h2",{attrs:{id:"downgrading-warning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downgrading-warning"}},[e._v("#")]),e._v(" Downgrading warning")]),e._v(" "),a("p",[e._v("Wallets created in 0.16 and later are not compatible with versions prior to 0.16\nand will not work if you try to use newly created wallets in older versions. Existing\nwallets that were created with older versions are not affected by this.")]),e._v(" "),a("h1",{attrs:{id:"compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),a("p",[e._v("Bitcoin Core is extensively tested on multiple operating systems using\nthe Linux kernel, macOS 10.8+, and Windows Vista and later. Windows XP is not supported.")]),e._v(" "),a("p",[e._v("Bitcoin Core should also work on most other Unix-like systems but is not\nfrequently tested on them.")]),e._v(" "),a("h1",{attrs:{id:"notable-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notable-changes"}},[e._v("#")]),e._v(" Notable changes")]),e._v(" "),a("h2",{attrs:{id:"miner-block-size-removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miner-block-size-removed"}},[e._v("#")]),e._v(" Miner block size removed")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("-blockmaxsize")]),e._v(" option for miners to limit their blocks' sizes was\ndeprecated in version 0.15.1, and has now been removed. Miners should use the\n"),a("code",[e._v("-blockmaxweight")]),e._v(" option if they want to limit the weight of their blocks'\nweights.")]),e._v(" "),a("h2",{attrs:{id:"_0-16-1-change-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-16-1-change-log"}},[e._v("#")]),e._v(" 0.16.1 change log")]),e._v(" "),a("h3",{attrs:{id:"policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#policy"}},[e._v("#")]),e._v(" Policy")]),e._v(" "),a("ul",[a("li",[e._v("#11423 "),a("code",[e._v("d353dd1")]),e._v(" [Policy] Several transaction standardness rules (jl2012)")])]),e._v(" "),a("h3",{attrs:{id:"mining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mining"}},[e._v("#")]),e._v(" Mining")]),e._v(" "),a("ul",[a("li",[e._v("#12756 "),a("code",[e._v("e802c22")]),e._v(" [config] Remove blockmaxsize option (jnewbery)")])]),e._v(" "),a("h3",{attrs:{id:"block-and-transaction-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-and-transaction-handling"}},[e._v("#")]),e._v(" Block and transaction handling")]),e._v(" "),a("ul",[a("li",[e._v("#13199 "),a("code",[e._v("c71e535")]),e._v(" Bugfix: ensure consistency of m_failed_blocks after reconsiderblock (sdaftuar)")]),e._v(" "),a("li",[e._v("#13023 "),a("code",[e._v("bb79aaf")]),e._v(" Fix some concurrency issues in ActivateBestChain() (skeees)")])]),e._v(" "),a("h3",{attrs:{id:"p2p-protocol-and-network-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#p2p-protocol-and-network-code"}},[e._v("#")]),e._v(" P2P protocol and network code")]),e._v(" "),a("ul",[a("li",[e._v("#12626 "),a("code",[e._v("f60e84d")]),e._v(" Limit the number of IPs addrman learns from each DNS seeder (EthanHeilman)")])]),e._v(" "),a("h3",{attrs:{id:"wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet"}},[e._v("#")]),e._v(" Wallet")]),e._v(" "),a("ul",[a("li",[e._v("#13265 "),a("code",[e._v("5d8de76")]),e._v(" Exit SyncMetaData if there are no transactions to sync (laanwj)")]),e._v(" "),a("li",[e._v("#13030 "),a("code",[e._v("5ff571e")]),e._v(" Fix zapwallettxes/multiwallet interaction. (jnewbery)")])]),e._v(" "),a("h3",{attrs:{id:"gui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gui"}},[e._v("#")]),e._v(" GUI")]),e._v(" "),a("ul",[a("li",[e._v("#12999 "),a("code",[e._v("1720eb3")]),e._v(" Show the Window when double clicking the taskbar icon (ken2812221)")]),e._v(" "),a("li",[e._v("#12650 "),a("code",[e._v("f118a7a")]),e._v(' Fix issue: "default port not shown correctly in settings dialog" (251Labs)')]),e._v(" "),a("li",[e._v("#13251 "),a("code",[e._v("ea487f9")]),e._v(" Rephrase Bech32 checkbox texts, and enable it with legacy address default (fanquake)")])]),e._v(" "),a("h3",{attrs:{id:"build-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-system"}},[e._v("#")]),e._v(" Build system")]),e._v(" "),a("ul",[a("li",[e._v("#12474 "),a("code",[e._v("b0f692f")]),e._v(" Allow depends system to support armv7l (hkjn)")]),e._v(" "),a("li",[e._v("#12585 "),a("code",[e._v("72a3290")]),e._v(" depends: Switch to downloading expat from GitHub (fanquake)")]),e._v(" "),a("li",[e._v("#12648 "),a("code",[e._v("46ca8f3")]),e._v(" test: Update trusted git root (MarcoFalke)")]),e._v(" "),a("li",[e._v("#11995 "),a("code",[e._v("686cb86")]),e._v(" depends: Fix Qt build with Xcode 9 (fanquake)")]),e._v(" "),a("li",[e._v("#12636 "),a("code",[e._v("845838c")]),e._v(" backport: #11995 Fix Qt build with Xcode 9 (fanquake)")]),e._v(" "),a("li",[e._v("#12946 "),a("code",[e._v("e055bc0")]),e._v(" depends: Fix Qt build with XCode 9.3 (fanquake)")]),e._v(" "),a("li",[e._v("#12998 "),a("code",[e._v("7847b92")]),e._v(" Default to defining endian-conversion DECLs in compat w/o config (TheBlueMatt)")])]),e._v(" "),a("h3",{attrs:{id:"tests-and-qa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests-and-qa"}},[e._v("#")]),e._v(" Tests and QA")]),e._v(" "),a("ul",[a("li",[e._v("#12447 "),a("code",[e._v("01f931b")]),e._v(" Add missing signal.h header (laanwj)")]),e._v(" "),a("li",[e._v("#12545 "),a("code",[e._v("1286f3e")]),e._v(" Use wait_until to ensure ping goes out (Empact)")]),e._v(" "),a("li",[e._v("#12804 "),a("code",[e._v("4bdb0ce")]),e._v(" Fix intermittent rpc_net.py failure. (jnewbery)")]),e._v(" "),a("li",[e._v("#12553 "),a("code",[e._v("0e98f96")]),e._v(" Prefer wait_until over polling with time.sleep (Empact)")]),e._v(" "),a("li",[e._v("#12486 "),a("code",[e._v("cfebd40")]),e._v(" Round target fee to 8 decimals in assert_fee_amount (kallewoof)")]),e._v(" "),a("li",[e._v("#12843 "),a("code",[e._v("df38b13")]),e._v(" Test starting bitcoind with -h and -version (jnewbery)")]),e._v(" "),a("li",[e._v("#12475 "),a("code",[e._v("41c29f6")]),e._v(" Fix python TypeError in script.py (MarcoFalke)")]),e._v(" "),a("li",[e._v("#12638 "),a("code",[e._v("0a76ed2")]),e._v(" Cache only chain and wallet for regtest datadir (MarcoFalke)")]),e._v(" "),a("li",[e._v("#12902 "),a("code",[e._v("7460945")]),e._v(" Handle potential cookie race when starting node (sdaftuar)")]),e._v(" "),a("li",[e._v("#12904 "),a("code",[e._v("6c26df0")]),e._v(" Ensure bitcoind processes are cleaned up when tests end (sdaftuar)")]),e._v(" "),a("li",[e._v("#13049 "),a("code",[e._v("9ea62a3")]),e._v(" Backports (MarcoFalke)")]),e._v(" "),a("li",[e._v("#13201 "),a("code",[e._v("b8aacd6")]),e._v(" Handle disconnect_node race (sdaftuar)")])]),e._v(" "),a("h3",{attrs:{id:"miscellaneous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous"}},[e._v("#")]),e._v(" Miscellaneous")]),e._v(" "),a("ul",[a("li",[e._v("#12518 "),a("code",[e._v("a17fecf")]),e._v(" Bump leveldb subtree (MarcoFalke)")]),e._v(" "),a("li",[e._v("#12442 "),a("code",[e._v("f3b8d85")]),e._v(" devtools: Exclude patches from lint-whitespace (MarcoFalke)")]),e._v(" "),a("li",[e._v("#12988 "),a("code",[e._v("acdf433")]),e._v(" Hold cs_main while calling UpdatedBlockTip() signal (skeees)")]),e._v(" "),a("li",[e._v("#12985 "),a("code",[e._v("0684cf9")]),e._v(" Windows: Avoid launching as admin when NSIS installer ends. (JeremyRand)")])]),e._v(" "),a("h3",{attrs:{id:"documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documentation"}},[e._v("#")]),e._v(" Documentation")]),e._v(" "),a("ul",[a("li",[e._v("#12637 "),a("code",[e._v("60086dd")]),e._v(" backport: #12556 fix version typo in getpeerinfo RPC call help (fanquake)")]),e._v(" "),a("li",[e._v("#13184 "),a("code",[e._v("4087dd0")]),e._v(" RPC Docs: "),a("code",[e._v("gettxout*")]),e._v(": clarify bestblock and unspent counts (harding)")]),e._v(" "),a("li",[e._v("#13246 "),a("code",[e._v("6de7543")]),e._v(" Bump to Ubuntu Bionic 18.04 in build-windows.md (ken2812221)")]),e._v(" "),a("li",[e._v("#12556 "),a("code",[e._v("e730b82")]),e._v(" Fix version typo in getpeerinfo RPC call help (tamasblummer)")])]),e._v(" "),a("h1",{attrs:{id:"credits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),a("p",[e._v("Thanks to everyone who directly contributed to this release:")]),e._v(" "),a("ul",[a("li",[e._v("251")]),e._v(" "),a("li",[e._v("Ben Woosley")]),e._v(" "),a("li",[e._v("Chun Kuan Lee")]),e._v(" "),a("li",[e._v("David A. Harding")]),e._v(" "),a("li",[e._v("e0")]),e._v(" "),a("li",[e._v("fanquake")]),e._v(" "),a("li",[e._v("Henrik Jonsson")]),e._v(" "),a("li",[e._v("JeremyRand")]),e._v(" "),a("li",[e._v("Jesse Cohen")]),e._v(" "),a("li",[e._v("John Newbery")]),e._v(" "),a("li",[e._v("Johnson Lau")]),e._v(" "),a("li",[e._v("Karl-Johan Alm")]),e._v(" "),a("li",[e._v("Luke Dashjr")]),e._v(" "),a("li",[e._v("MarcoFalke")]),e._v(" "),a("li",[e._v("Matt Corallo")]),e._v(" "),a("li",[e._v("Pieter Wuille")]),e._v(" "),a("li",[e._v("Suhas Daftuar")]),e._v(" "),a("li",[e._v("Tamas Blummer")]),e._v(" "),a("li",[e._v("Wladimir J. van der Laan")])]),e._v(" "),a("p",[e._v("As well as everyone that helped translating on "),a("a",{attrs:{href:"https://www.transifex.com/projects/p/bitcoin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transifex"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);