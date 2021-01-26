(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{549:function(e,t,n){"use strict";n.r(t);var i=n(43),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_0-8-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-5"}},[e._v("#")]),e._v(" 0.8.5")]),e._v(" "),n("p",[e._v("Bitcoin-Qt version 0.8.5 is now available from:\nhttp://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.8.5/")]),e._v(" "),n("p",[e._v("This is a maintenance release to fix a critical bug;\nwe urge all users to upgrade.")]),e._v(" "),n("p",[e._v("Please report bugs using the issue tracker at github:\nhttps://github.com/bitcoin/bitcoin/issues")]),e._v(" "),n("h2",{attrs:{id:"how-to-upgrade"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-upgrade"}},[e._v("#")]),e._v(" How to Upgrade")]),e._v(" "),n("p",[e._v("If you are running an older version, shut it down. Wait\nuntil it has completely shut down (which might take a few minutes for older\nversions), then run the installer (on Windows) or just copy over\n/Applications/Bitcoin-Qt (on Mac) or bitcoind/bitcoin-qt (on Linux).")]),e._v(" "),n("p",[e._v("If you are upgrading from version 0.7.2 or earlier, the first time you\nrun 0.8.5 your blockchain files will be re-indexed, which will take\nanywhere from 30 minutes to several hours, depending on the speed of\nyour machine.")]),e._v(" "),n("h1",{attrs:{id:"_0-8-5-release-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-5-release-notes"}},[e._v("#")]),e._v(" 0.8.5 Release notes")]),e._v(" "),n("h2",{attrs:{id:"bugs-fixed"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bugs-fixed"}},[e._v("#")]),e._v(" Bugs fixed")]),e._v(" "),n("p",[e._v("Transactions with version numbers larger than 0x7fffffff were\nincorrectly being relayed and included in blocks.")]),e._v(" "),n("p",[e._v("Blocks containing transactions with version numbers larger\nthan 0x7fffffff caused the code that checks for LevelDB database\ninconsistencies at startup to erroneously report database\ncorruption and suggest that you reindex your database.")]),e._v(" "),n("p",[e._v("This release also contains a non-critical fix to the code that\nenforces BIP 34 (block height in the coinbase transaction).")]),e._v(" "),n("p",[e._v("--")]),e._v(" "),n("p",[e._v("Thanks to Gregory Maxwell and Pieter Wuille for quickly\nidentifying and fixing the transaction version number bug.")])])}),[],!1,null,null,null);t.default=a.exports}}]);