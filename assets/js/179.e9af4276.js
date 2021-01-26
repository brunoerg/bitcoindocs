(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{553:function(e,i,t){"use strict";t.r(i);var n=t(43),o=Object(n.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_0-9-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-9-2"}},[e._v("#")]),e._v(" 0.9.2")]),e._v(" "),t("p",[e._v("Bitcoin Core version 0.9.2 is now available from:")]),e._v(" "),t("p",[e._v("https://bitcoin.org/bin/0.9.2/")]),e._v(" "),t("p",[e._v("This is a new minor version release, bringing mostly bug fixes and some minor\nimprovements. OpenSSL has been updated because of a security issue (CVE-2014-0224).\nUpgrading to this release is recommended.")]),e._v(" "),t("p",[e._v("Please report bugs using the issue tracker at github:")]),e._v(" "),t("p",[e._v("https://github.com/bitcoin/bitcoin/issues")]),e._v(" "),t("h2",{attrs:{id:"how-to-upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-upgrade"}},[e._v("#")]),e._v(" How to Upgrade")]),e._v(" "),t("p",[e._v("If you are running an older version, shut it down. Wait until it has completely\nshut down (which might take a few minutes for older versions), then run the\ninstaller (on Windows) or just copy over /Applications/Bitcoin-Qt (on Mac) or\nbitcoind/bitcoin-qt (on Linux).")]),e._v(" "),t("p",[e._v("If you are upgrading from version 0.7.2 or earlier, the first time you run\n0.9.2 your blockchain files will be re-indexed, which will take anywhere from\n30 minutes to several hours, depending on the speed of your machine.")]),e._v(" "),t("h2",{attrs:{id:"downgrading-warnings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#downgrading-warnings"}},[e._v("#")]),e._v(" Downgrading warnings")]),e._v(" "),t("p",[e._v("The 'chainstate' for this release is not always compatible with previous\nreleases, so if you run 0.9.x and then decide to switch back to a\n0.8.x release you might get a blockchain validation error when starting the\nold release (due to 'pruned outputs' being omitted from the index of\nunspent transaction outputs).")]),e._v(" "),t("p",[e._v("Running the old release with the -reindex option will rebuild the chainstate\ndata structures and correct the problem.")]),e._v(" "),t("p",[e._v("Also, the first time you run a 0.8.x release on a 0.9 wallet it will rescan\nthe blockchain for missing spent coins, which will take a long time (tens\nof minutes on a typical machine).")]),e._v(" "),t("h1",{attrs:{id:"important-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#important-changes"}},[e._v("#")]),e._v(" Important changes")]),e._v(" "),t("h2",{attrs:{id:"gitian-osx-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitian-osx-build"}},[e._v("#")]),e._v(" Gitian OSX build")]),e._v(" "),t("p",[e._v("The deterministic build system that was already used for Windows and Linux\nbuilds is now used for OSX as well. Although the resulting executables have\nbeen tested quite a bit, there could be possible regressions. Be sure to report\nthese on the Github bug tracker mentioned above.")]),e._v(" "),t("h2",{attrs:{id:"compatibility-of-linux-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-of-linux-build"}},[e._v("#")]),e._v(" Compatibility of Linux build")]),e._v(" "),t("p",[e._v("For Linux we now build against Qt 4.6, and filter the symbols for libstdc++ and glibc.\nThis brings back compatibility with")]),e._v(" "),t("ul",[t("li",[e._v("Debian 6+ / Tails")]),e._v(" "),t("li",[e._v("Ubuntu 10.04")]),e._v(" "),t("li",[e._v("CentOS 6.5")])]),e._v(" "),t("h1",{attrs:{id:"_0-9-2-release-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-9-2-release-notes"}},[e._v("#")]),e._v(" 0.9.2 Release notes")]),e._v(" "),t("p",[e._v("The OpenSSL dependency in the gitian builds has been upgraded to 1.0.1h because of CVE-2014-0224.")]),e._v(" "),t("p",[e._v("RPC:")]),e._v(" "),t("ul",[t("li",[e._v("Add "),t("code",[e._v("getwalletinfo")]),e._v(", "),t("code",[e._v("getblockchaininfo")]),e._v(" and "),t("code",[e._v("getnetworkinfo")]),e._v(" calls (will replace hodge-podge "),t("code",[e._v("getinfo")]),e._v(" at some point)")]),e._v(" "),t("li",[e._v("Add a "),t("code",[e._v("relayfee")]),e._v(" field to "),t("code",[e._v("getnetworkinfo")])]),e._v(" "),t("li",[e._v("Fix RPC related shutdown hangs and leaks")]),e._v(" "),t("li",[e._v("Always show syncnode in "),t("code",[e._v("getpeerinfo")])]),e._v(" "),t("li",[t("code",[e._v("sendrawtransaction")]),e._v(": report the reject code and reason, and make it possible to re-send transactions that are already in the mempool")]),e._v(" "),t("li",[t("code",[e._v("getmininginfo")]),e._v(" show right genproclimit")])]),e._v(" "),t("p",[e._v("Command-line options:")]),e._v(" "),t("ul",[t("li",[e._v("Fix "),t("code",[e._v("-printblocktree")]),e._v(" output")]),e._v(" "),t("li",[e._v("Show error message if ReadConfigFile fails")])]),e._v(" "),t("p",[e._v("Block-chain handling and storage:")]),e._v(" "),t("ul",[t("li",[e._v("Fix for GetBlockValue() after block 13,440,000 (BIP42)")]),e._v(" "),t("li",[e._v("Upgrade leveldb to 1.17")])]),e._v(" "),t("p",[e._v("Protocol and network code:")]),e._v(" "),t("ul",[t("li",[e._v("Per-peer block download tracking and stalled download detection")]),e._v(" "),t("li",[e._v("Add new DNS seed from bitnodes.io")]),e._v(" "),t("li",[e._v("Prevent socket leak in ThreadSocketHandler and correct some proxy related socket leaks")]),e._v(" "),t("li",[e._v("Use pnode->nLastRecv as sync score (was the wrong way around)")])]),e._v(" "),t("p",[e._v("Wallet:")]),e._v(" "),t("ul",[t("li",[e._v("Make GetAvailableCredit run GetHash() only once per transaction (performance improvement)")]),e._v(" "),t("li",[e._v("Lower paytxfee warning threshold from 0.25 BTC to 0.01 BTC")]),e._v(" "),t("li",[e._v("Fix importwallet nTimeFirstKey (trigger necessary rescans)")]),e._v(" "),t("li",[e._v("Log BerkeleyDB version at startup")]),e._v(" "),t("li",[e._v("CWallet init fix")])]),e._v(" "),t("p",[e._v("Build system:")]),e._v(" "),t("ul",[t("li",[e._v("Add OSX build descriptors to gitian")]),e._v(" "),t("li",[e._v("Fix explicit --disable-qt-dbus")]),e._v(" "),t("li",[e._v("Don't require db_cxx.h when compiling with wallet disabled and GUI enabled")]),e._v(" "),t("li",[e._v("Improve missing boost error reporting")]),e._v(" "),t("li",[e._v("Upgrade miniupnpc version to 1.9")]),e._v(" "),t("li",[e._v("gitian-linux: --enable-glibc-back-compat for binary compatibility with old distributions")]),e._v(" "),t("li",[e._v("gitian: don't export any symbols from executable")]),e._v(" "),t("li",[e._v("gitian: build against Qt 4.6")]),e._v(" "),t("li",[e._v("devtools: add script to check symbols from Linux gitian executables")]),e._v(" "),t("li",[e._v("Remove build-time no-IPv6 setting")])]),e._v(" "),t("p",[e._v("GUI:")]),e._v(" "),t("ul",[t("li",[e._v("Fix various coin control visual issues")]),e._v(" "),t("li",[e._v("Show number of in/out connections in debug console")]),e._v(" "),t("li",[e._v("Show weeks as well as years behind for long timespans behind")]),e._v(" "),t("li",[e._v("Enable and disable the Show and Remove buttons for requested payments history based on whether any entry is selected.")]),e._v(" "),t("li",[e._v("Show also value for options overridden on command line in options dialog")]),e._v(" "),t("li",[e._v("Fill in label from address book also for URIs")]),e._v(" "),t("li",[e._v("Fixes feel when resizing the last column on tables (issue #2862)")]),e._v(" "),t("li",[e._v("Fix ESC in disablewallet mode")]),e._v(" "),t("li",[e._v("Add expert section to wallet tab in optionsdialog")]),e._v(" "),t("li",[e._v("Do proper boost::path conversion (fixes unicode in datadir)")]),e._v(" "),t("li",[e._v("Only override -datadir if different from the default (fixes -datadir in config file)")]),e._v(" "),t("li",[e._v("Show rescan progress at start-up")]),e._v(" "),t("li",[e._v("Show importwallet progress")]),e._v(" "),t("li",[e._v("Get required locks upfront in polling functions (avoids hanging on locks)")]),e._v(" "),t("li",[e._v("Catch Windows shutdown events while client is running")]),e._v(" "),t("li",[e._v("Optionally add third party links to transaction context menu")]),e._v(" "),t("li",[e._v("Check for !pixmap() before trying to export QR code (avoids crashes when no QR code could be generated)")]),e._v(" "),t("li",[e._v('Fix "Start bitcoin on system login"')])]),e._v(" "),t("p",[e._v("Miscellaneous:")]),e._v(" "),t("ul",[t("li",[e._v("Replace non-threadsafe C functions (gmtime, strerror and setlocale)")]),e._v(" "),t("li",[e._v("Add missing cs_main and wallet locks")]),e._v(" "),t("li",[e._v("Avoid exception at startup when system locale not recognized")]),e._v(" "),t("li",[e._v("Changed bitrpc.py's raw_input to getpass for passwords to conceal characters during command line input")]),e._v(" "),t("li",[e._v("devtools: add a script to fetch and postprocess translations")])]),e._v(" "),t("h2",{attrs:{id:"credits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#credits"}},[e._v("#")]),e._v(" Credits")]),e._v(" "),t("p",[e._v("Thanks to everyone who contributed to this release:")]),e._v(" "),t("ul",[t("li",[e._v("Addy Yeow")]),e._v(" "),t("li",[e._v("Altoidnerd")]),e._v(" "),t("li",[e._v("Andrea D'Amore")]),e._v(" "),t("li",[e._v("Andreas Schildbach")]),e._v(" "),t("li",[e._v("Bardi Harborow")]),e._v(" "),t("li",[e._v("Brandon Dahler")]),e._v(" "),t("li",[e._v("Bryan Bishop")]),e._v(" "),t("li",[e._v("Chris Beams")]),e._v(" "),t("li",[e._v("Christian von Roques")]),e._v(" "),t("li",[e._v("Cory Fields")]),e._v(" "),t("li",[e._v("Cozz Lovan")]),e._v(" "),t("li",[e._v("daniel")]),e._v(" "),t("li",[e._v("Daniel Newton")]),e._v(" "),t("li",[e._v("David A. Harding")]),e._v(" "),t("li",[e._v("ditto-b")]),e._v(" "),t("li",[e._v("duanemoody")]),e._v(" "),t("li",[e._v("Eric S. Bullington")]),e._v(" "),t("li",[e._v("Fabian Raetz")]),e._v(" "),t("li",[e._v("Gavin Andresen")]),e._v(" "),t("li",[e._v("Gregory Maxwell")]),e._v(" "),t("li",[e._v("gubatron")]),e._v(" "),t("li",[e._v("Haakon Nilsen")]),e._v(" "),t("li",[e._v("harry")]),e._v(" "),t("li",[e._v("Hector Jusforgues")]),e._v(" "),t("li",[e._v("Isidoro Ghezzi")]),e._v(" "),t("li",[e._v("Jeff Garzik")]),e._v(" "),t("li",[e._v("Johnathan Corgan")]),e._v(" "),t("li",[e._v("jtimon")]),e._v(" "),t("li",[e._v("Kamil Domanski")]),e._v(" "),t("li",[e._v("langerhans")]),e._v(" "),t("li",[e._v("Luke Dashjr")]),e._v(" "),t("li",[e._v("Manuel Araoz")]),e._v(" "),t("li",[e._v("Mark Friedenbach")]),e._v(" "),t("li",[e._v("Matt Corallo")]),e._v(" "),t("li",[e._v("Matthew Bogosian")]),e._v(" "),t("li",[e._v("Meeh")]),e._v(" "),t("li",[e._v("Michael Ford")]),e._v(" "),t("li",[e._v("Michagogo")]),e._v(" "),t("li",[e._v("Mikael Wikman")]),e._v(" "),t("li",[e._v("Mike Hearn")]),e._v(" "),t("li",[e._v("olalonde")]),e._v(" "),t("li",[e._v("paveljanik")]),e._v(" "),t("li",[e._v("peryaudo")]),e._v(" "),t("li",[e._v("Philip Kaufmann")]),e._v(" "),t("li",[e._v("philsong")]),e._v(" "),t("li",[e._v("Pieter Wuille")]),e._v(" "),t("li",[e._v("R E Broadley")]),e._v(" "),t("li",[e._v("richierichrawr")]),e._v(" "),t("li",[e._v("Rune K. Svendsen")]),e._v(" "),t("li",[e._v("rxl")]),e._v(" "),t("li",[e._v("shshshsh")]),e._v(" "),t("li",[e._v("Simon de la Rouviere")]),e._v(" "),t("li",[e._v("Stuart Cardall")]),e._v(" "),t("li",[e._v("super3")]),e._v(" "),t("li",[e._v("Telepatheic")]),e._v(" "),t("li",[e._v("Thomas Zander")]),e._v(" "),t("li",[e._v("Torstein Husebø")]),e._v(" "),t("li",[e._v("Warren Togami")]),e._v(" "),t("li",[e._v("Wladimir J. van der Laan")]),e._v(" "),t("li",[e._v("Yoichi Hirai")])])])}),[],!1,null,null,null);i.default=o.exports}}]);