# Segregated Witness (by BitcoinBook - ch07)

Segregated Witness (segwit) is an upgrade to the bitcoin consensus rules and network protocol, proposed and implemented as a BIP-9 soft-fork that was activated on bitcoin's mainnet on August 1st, 2017.

In cryptography, the term "witness" is used to describe a solution to a cryptographic puzzle. In bitcoin terms, the witness satisfies a cryptographic condition placed on a unspent transaction output (UTXO).

In the context of bitcoin, a digital signature is _one type of witness_, but a witness is more broadly any solution that can satisfy the conditions imposed on an UTXO and unlock that UTXO for spending. The term “witness” is a more general term for an “unlocking script” or “scriptSig.”

Before segwit’s introduction, every input in a transaction was followed by the witness data that unlocked it. The witness data was embedded in the transaction as part of each input. The term _segregated witness_, or _segwit_ for short, simply means separating the signature or unlocking script of a specific output. Think "separate scriptSig," or “separate signature” in the simplest form.

Segregated Witness therefore is an architectural change to bitcoin that aims to move the witness data from the +scriptSig+ (unlocking script) field of a transaction into a separate _witness_ data structure that accompanies a transaction. Clients may request transaction data with or without the accompanying witness data.

In this section we will look at some of the benefits of Segregated Witness, describe the mechanism used to deploy and implement this architecture change, and demonstrate the use of Segregated Witness in transactions and addresses.

Segregated Witness is defined by the following BIPs:

[BIP141](/bips/141.md "wikilink") The main definition of Segregated Witness.

[BIP143](/bips/143.md "wikilink") Transaction Signature Verification for Version 0 Witness Program

[BIP144](/bips/144.md "wikilink") Peer Services&#x2014;New network messages and serialization formats

[BIP145](/bips/145.md "wikilink") getblocktemplate Updates for Segregated Witness (for mining)

[BIP173](/bips/173.md "wikilink") Base32 address format for native v0-16 witness outputs


## Why Segregated Witness?

Segregated Witness is an architectural change that has several effects on the scalability, security, economic incentives, and performance of bitcoin:

Transaction Malleability :: By moving the witness outside the transaction, the transaction hash used as an identifier no longer includes the witness data. Since the witness data is the only part of the transaction that can be modified by a third party (see <<segwit_txid>>), removing it also removes the opportunity for transaction malleability attacks. With Segregated Witness, transaction hashes become immutable by anyone other than the creator of the transaction, which greatly improves the implementation of many other protocols that rely on advanced bitcoin transaction construction, such as payment channels, chained transactions, and lightning networks.

Script Versioning :: With the introduction of Segregated Witness scripts, every locking script is preceded by a _script version_ number, similar to how transactions and blocks have version numbers. The addition of a script version number allows the scripting language to be upgraded in a backward-compatible way (i.e., using soft fork upgrades) to introduce new script operands, syntax, or semantics. The ability to upgrade the scripting language in a nondisruptive way will greatly accelerate the rate of innovation in bitcoin.

Network and Storage Scaling :: The witness data is often a big contributor to the total size of a transaction. More complex scripts such as those used for multisig or payment channels are very large. In some cases these scripts account for the majority (more than 75%) of the data in a transaction. By moving the witness data outside the transaction, Segregated Witness improves bitcoin’s scalability. Nodes can prune the witness data after validating the signatures, or ignore it altogether when doing simplified payment verification. The witness data doesn’t need to be transmitted to all nodes and does not need to be stored on disk by all nodes.

Signature Verification Optimization :: Segregated Witness upgrades the signature functions (CHECKSIG, CHECKMULTISIG, etc.) to reduce the algorithm's computational complexity. Before segwit, the algorithm used to produce a signature required a number of hash operations that was proportional to the size of the transaction. Data-hashing computations increased in O(n^2^) with respect to the number of signature operations, introducing a substantial computational burden on all nodes verifying the signature. With segwit, the algorithm is changed to reduce the complexity to O(n).

Offline Signing Improvement :: Segregated Witness signatures incorporate the value (amount) referenced by each input in the hash that is signed. Previously, an offline signing device, such as a hardware wallet, would have to verify the amount of each input before signing a transaction. This was usually accomplished by streaming a large amount of data about the previous transactions referenced as inputs. Since the amount is now part of the commitment hash that is signed, an offline device does not need the previous transactions. If the amounts do not match (are misrepresented by a compromised online system), the signature will be invalid.

## How Segregated Witness Works

At first glance, Segregated Witness appears to be a change to how transactions are constructed and therefore a transaction-level feature, but it is not. Rather, Segregated Witness is a change to how individual UTXO are spent and therefore is a per-output feature.

A transaction can spend Segregated Witness outputs or traditional (inline-witness) outputs or both. Therefore, it does not make much sense to refer to a transaction as a “Segregated Witness transaction.” Rather we should refer to specific transaction outputs as “Segregated Witness outputs."

When a transaction spends an UTXO, it must provide a witness. In a traditional UTXO, the locking script requires that witness data be provided _inline_ in the input part of the transaction that spends the UTXO. A Segregated Witness UTXO, however, specifies a locking script that can be satisfied with witness data outside of the input (segregated).

## Soft Fork (Backward Compatibility)

Segregated Witness is a significant change to the way outputs and transactions are architected. Such a change would normally require a simultaneous change in every bitcoin node and wallet to change the consensus rules&#x2014;what is known as a hard fork. Instead, segregated witness is introduced with a much less disruptive change, which is backward compatible, known as a soft fork. This type of upgrade allows nonupgraded software to ignore the changes and continue to operate without any disruption.

Segregated Witness outputs are constructed so that older systems that are not segwit-aware can still validate them. To an old wallet or node, a Segregated Witness output looks like an output that _anyone can spend_. Such outputs can be spent with an empty signature, therefore the fact that there is no signature inside the transaction (it is segregated) does not invalidate the transaction. Newer wallets and mining nodes, however, see the Segregated Witness output and expect to find a valid witness for it in the transaction’s witness data.

## Segregated Witness Output and Transaction Examples

Let’s look at some of our example transactions and see how they would change with Segregated Witness. We’ll first look at how a Pay-to-Public-Key-Hash (P2PKH) payment is transformed with the Segregated Witness program. Then, we’ll look at the Segregated Witness equivalent for Pay-to-Script-Hash (P2SH) scripts. Finally, we’ll look at how both of the preceding Segregated Witness programs can be embedded inside a P2SH script.

### Pay-to-Witness-Public-Key-Hash (P2WPKH)

In `<<cup_of_coffee>>` Alice created a transaction to pay Bob for a cup of coffee. That transaction created a P2PKH output with a value of 0.015 BTC that was spendable by Bob. The output’s script looks like this:

#### Example P2PKH output script
```
DUP HASH160 ab68025513c3dbd2f7b92a94e0581f5d50f654e7 EQUALVERIFY CHECKSIG
```

With Segregated Witness, Alice would create a Pay-to-Witness-Public-Key-Hash (P2WPKH) script, which looks like this:

#### Example P2WPKH output script
```
0 ab68025513c3dbd2f7b92a94e0581f5d50f654e7
```

As you can see, a Segregated Witness output’s locking script is much simpler than a traditional output. It consists of two values that are pushed on to the script evaluation stack. To an old (nonsegwit-aware) bitcoin client, the two pushes would look like an output that anyone can spend and does not require a signature (or rather, can be spent with an empty signature). To a newer, segwit-aware client, the first number (0) is interpreted as a version number (the _witness version_) and the second part (20 bytes) is the equivalent of a locking script known as a _witness program_. The 20-byte witness program is simply the hash of the public key, as in a P2PKH script.

Now, let’s look at the corresponding transaction that Bob uses to spend this output. For the original script (nonsegwit), Bob’s transaction would have to include a signature within the transaction input:

Decoded transaction showing a P2PKH output being spent with a signature

```
[...]
“Vin” : [
"txid": "0627052b6f28912f2703066a912ea577f2ce4da4caa5a5fbd8a57286c345c2f2",
"vout": 0,
     	 "scriptSig": “<Bob’s scriptSig>”,
]
[...]
```

However, to spend the Segregated Witness output, the transaction has no signature on that input. Instead, Bob’s transaction has an empty +scriptSig+ and includes a Segregated Witness, outside the transaction itself:

Decoded transaction showing a P2WPKH output being spent with separate witness data

```
[...]
“Vin” : [
"txid": "0627052b6f28912f2703066a912ea577f2ce4da4caa5a5fbd8a57286c345c2f2",
"vout": 0,
     	 "scriptSig": “”,
]
[...]
“witness”: “<Bob’s witness data>”
[...]
```

#### Wallet construction of P2WPKH

It is extremely important to note that P2WPKH should only be created by the payee (recipient) and not converted by the sender from a known public key, P2PKH script, or address. The sender has no way of knowing if the recipient's wallet has the ability to construct segwit transactions and spend P2WPKH outputs.

Additionally, P2WPKH outputs must be constructed from the hash of a _compressed_ public key. Uncompressed public keys are nonstandard in segwit and may be explicitly disabled by a future soft fork. If the hash used in the P2WPKH came from an uncompressed public key, it may be unspendable and you may lose funds. P2WPKH outputs should be created by the payee's wallet by deriving a compressed public key from their private key.

::: warning
P2WPKH should be constructed by the payee (recipient) by converting a compressed public key to a P2WPKH hash. You should never transform a P2PKH script, bitcoin address, or uncompressed public key to a P2WPKH witness script.
:::

#### Pay-to-Witness-Script-Hash (P2WSH)

The second type of witness program corresponds to a Pay-to-Script-Hash (P2SH) script. We saw this type of script in `<<p2sh>>`. In that example, P2SH was used by Mohammed's company to express a multisignature script. Payments to Mohammed's company were encoded with a locking script like this:

Example P2SH output script
```
HASH160 54c557e07dde5bb6cb791c7a540e0a4796f5e97e EQUAL
```

This P2SH script references the hash of a _redeem script_ that defines a 2-of-5 multisignature requirement to spend funds. To spend this output, Mohammed's company would present the redeem script (whose hash matches the script hash in the P2SH output) and the signatures necessary to satisfy that redeem script, all inside the transaction input:

Decoded transaction showing a P2SH output being spent
```
[...]
“Vin” : [
"txid": "abcdef12345...",
"vout": 0,
     	 "scriptSig": “<SigA> <SigB> <2 PubA PubB PubC PubD PubE 5 CHECKMULTISIG>”,
]
```

Now, let's look at how this entire example would be upgraded to segwit. If Mohammed's customers were using a segwit-compatible wallet, they would make a payment, creating a Pay-to-Witness-Script-Hash (P2WSH) output that would look like this:

Example P2WSH output script
```
0 a9b7b38d972cabc7961dbfbcb841ad4508d133c47ba87457b4a0e8aae86dbb89
```

Again, as with the example of P2WPKH, you can see that the Segregated Witness equivalent script is a lot simpler and omits the various script operands that you see in P2SH scripts. Instead, the Segregated Witness program consists of two values pushed to the stack: a witness version (0) and the 32-byte SHA256 hash of the redeem script.


::: tip
While P2SH uses the 20-byte RIPEMD160(SHA256(script)) hash, the P2WSH witness program uses a 32-byte +SHA256(script)+ hash. This difference in the selection of the hashing algorithm is deliberate and is used to differentiate between the two types of witness programs (P2WPKH and P2WSH) by the length of the hash and to provide stronger security to P2WSH (128 bits of security in P2WSH versus 80 bits of security in P2SH).
:::

Mohammed's company can spend the P2WSH output by presenting the correct redeem script and sufficient signatures to satisfy it. Both the redeem script and the signatures would be segregated _outside_ the spending transaction as part of the witness data. Within the transaction input, Mohammed's wallet would put an empty +scriptSig+:

Decoded transaction showing a P2WSH output being spent with separate witness data

```
[...]
“Vin” : [
"txid": "abcdef12345...",
"vout": 0,
     	 "scriptSig": “”,
]
[...]
“witness”: “`<SigA> <SigB>` <2 PubA PubB PubC PubD PubE 5 CHECKMULTISIG>”
[...]
```


#### Differentiating between P2WPKH and P2WSH

In the previous two sections, we demonstrated two types of witness programs: `<<p2wpkh>>` and `<<p2wsh>>`. Both types of witness programs consist of a single byte version number followed by a longer hash. They look very similar, but are interpreted very differently: one is interpreted as a public key hash, which is satisfied by a signature and the other as a script hash, which is satisfied by a redeem script. The critical difference between them is the length of the hash:

* The public key hash in P2WPKH is 20 bytes
* The script hash in P2WSH is 32 bytes

This is the one difference that allows a wallet to differentiate between the two types of witness programs. By looking at the length of the hash, a wallet can determine what type of witness program it is, P2WPKH or P2WSH.

### Upgrading to Segregated Witness

As we can see from the previous examples, upgrading to Segregated Witness is a two-step process. First, wallets must create special segwit type outputs. Then, these outputs can be spent by wallets that know how to construct Segregated Witness transactions. In the examples, Alice's wallet was segwit-aware and able to create special outputs with Segregated Witness scripts. Bob's wallet is also segwit-aware and able to spend those outputs. What may not be obvious from the example is that in practice, Alice's wallet needs to _know_ that Bob uses a segwit-aware wallet and can spend these outputs. Otherwise, if Bob's wallet is not upgraded and Alice tries to make segwit payments to Bob, Bob's wallet will not be able to detect these payments.

::: tip
For P2WPKH and P2WSH payment types, both the sender and the recipient wallets need to be upgraded to be able to use segwit. Furthermore, the sender's wallet needs to know that the recipient's wallet is segwit-aware.
:::

Segregated Witness will not be implemented simultaneously across the entire network. Rather, Segregated Witness is implemented as a backward-compatible upgrade, where _old and new clients can coexist_. Wallet developers will independently upgrade wallet software to add segwit capabilities. The P2WPKH and P2WSH payment types are used when both sender and recipient are segwit-aware. The traditional P2PKH and P2SH will continue to work for nonupgraded wallets. That leaves two important scenarios, which are addressed in the next section:

* Ability of a sender's wallet that is not segwit-aware to make a payment to a recipient's wallet that can process segwit transactions

* Ability of a sender's wallet that is segwit-aware to recognize and distinguish between recipients that are segwit-aware and ones that are not, by their _addresses_.

#### Embedding Segregated Witness inside P2SH

Let's assume, for example, that Alice's wallet is not upgraded to segwit, but Bob's wallet is upgraded and can handle segwit transactions. Alice and Bob can use "old" non-segwit transactions. But Bob would likely want to use segwit to reduce transaction fees, taking advantage of the discount that applies to witness data.

In this case Bob's wallet can construct a P2SH address that contains a segwit script inside it. Alice's wallet sees this as a "normal" P2SH address and can make payments to it without any knowledge of segwit. Bob's wallet can then spend this payment with a segwit transaction, taking full advantage of segwit and reducing transaction fees.

Both forms of witness scripts, P2WPKH and P2WSH, can be embedded in a P2SH address. The first is noted as P2SH(P2WPKH) and the second is noted as P2SH(P2WSH).

#### Pay-to-Witness-Public-Key-Hash inside Pay-to-Script-Hash

The first form of witness script we will examine is P2SH(P2WPKH). This is a Pay-to-Witness-Public-Key-Hash witness program, embedded inside a Pay-to-Script-Hash script, so that it can be used by a wallet that is not aware of segwit.

Bob's wallet constructs a P2WPKH witness program with Bob's public key. This witness program is then hashed and the resulting hash is encoded as a P2SH script. The P2SH script is converted to a bitcoin address, one that starts with a "3," as we saw in the `<<p2sh>>` section.

Bob's wallet starts with the P2WPKH witness program we saw earlier:

Bob's P2WPKH witness program
```
0 ab68025513c3dbd2f7b92a94e0581f5d50f654e7
```

The P2WPKH witness program consists of the witness version and Bob's 20-byte public key hash.

Bob's wallet then hashes the preceding witness program, first with SHA256, then with RIPEMD160, producing another 20-byte hash.

Let's use +bx+ on the command-line to replicate that:

HASH160 of the P2WPKH witness program
````
echo \
'0 [ab68025513c3dbd2f7b92a94e0581f5d50f654e7]'\
 | bx script-encode | bx sha256 | bx ripemd160
3e0547268b3b19288b3adef9719ec8659f4b2b0b
````


Next, the redeem script hash is converted to a bitcoin address. Let's use +bx+ on the command-line again:

P2SH address
````
echo \
'3e0547268b3b19288b3adef9719ec8659f4b2b0b' \
| bx address-encode -v 5
37Lx99uaGn5avKBxiW26HjedQE3LrDCZru
````

Now, Bob can display this address for customers to pay for their coffee. Alice's wallet can make a payment to +37Lx99uaGn5avKBxiW26HjedQE3LrDCZru+, just as it would to any other bitcoin address.

To pay Bob, Alice's wallet would lock the output with a P2SH script:
````
HASH160 3e0547268b3b19288b3adef9719ec8659f4b2b0b EQUAL
````

Even though Alice's wallet has no support for segwit, the payment it creates can be spent by Bob with a segwit transaction.

#### Pay-to-Witness-Script-Hash inside Pay-to-Script-Hash

Similarly, a P2WSH witness program for a multisig script or other complicated script can be embedded inside a P2SH script and address, making it possible for any wallet to make payments that are segwit compatible.

As we saw in `<<p2wsh>>`, Mohammed's company is using Segregated Witness payments with multisignature scripts. To make it possible for any client to pay his company, regardless of whether their wallets are upgraded for segwit, Mohammed's wallet can embed the P2WSH witness program inside a P2SH script.

First, Mohammed's wallet hashes the redeem script with SHA256 (just once). Let's use +bx+ to do that on the command-line:

Mohammed's wallet creates a P2WSH witness program
````
echo \
2 \ [04C16B8698A9ABF84250A7C3EA7EEDEF9897D1C8C6ADF47F06CF73370D74DCCA01CDCA79DCC5C395D7EEC6984D83F1F50C900A24DD47F569FD4193AF5DE762C587] \
[04A2192968D8655D6A935BEAF2CA23E3FB87A3495E7AF308EDF08DAC3C1FCBFC2C75B4B0F4D0B1B70CD2423657738C0C2B1D5CE65C97D78D0E34224858008E8B49] \
[047E63248B75DB7379BE9CDA8CE5751D16485F431E46117B9D0C1837C9D5737812F393DA7D4420D7E1A9162F0279CFC10F1E8E8F3020DECDBC3C0DD389D9977965] \
[0421D65CBD7149B255382ED7F78E946580657EE6FDA162A187543A9D85BAAA93A4AB3A8F044DADA618D087227440645ABE8A35DA8C5B73997AD343BE5C2AFD94A5] \
[043752580AFA1ECED3C68D446BCAB69AC0BA7DF50D56231BE0AABF1FDEEC78A6A45E394BA29A1EDF518C022DD618DA774D207D137AAB59E0B000EB7ED238F4D800] \
5 CHECKMULTISIG \
| bx script-encode | bx sha256
9592d601848d04b172905e0ddb0adde59f1590f1e553ffc81ddc4b0ed927dd73
````

Next, the hashed redeem script is turned into a P2WSH witness program:

````
0 9592d601848d04b172905e0ddb0adde59f1590f1e553ffc81ddc4b0ed927dd73
````

Then, the witness program itself is hashed with SHA256 and RIPEMD160, producing a new 20-byte hash, as used in traditional P2SH. Let's use +bx+ on the command-line to do that:

The HASH160 of the P2WSH witness program
````
 echo \
'0 [9592d601848d04b172905e0ddb0adde59f1590f1e553ffc81ddc4b0ed927dd73]'\
 | bx script-encode | bx sha256 | bx ripemd160
86762607e8fe87c0c37740cddee880988b9455b2
````

Next, the wallet constructs a P2SH bitcoin address from this hash. Again, we use +bx+ to calculate on the command-line:

P2SH bitcoin address
````
echo \
'86762607e8fe87c0c37740cddee880988b9455b2'\
 | bx address-encode -v 5
3Dwz1MXhM6EfFoJChHCxh1jWHb8GQqRenG
````

Now, Mohammed's clients can make payments to this address without any need to support segwit. To send a payment to Mohammed, a wallet would lock the output with the following P2SH script:

P2SH script used to lock payments to Mohammed's multisig
````
HASH160 86762607e8fe87c0c37740cddee880988b9455b2 EQUAL
````

Mohammed's company can then construct segwit transactions to spend these payments, taking advantage of segwit features including lower transaction fees.

#### Segregated Witness addresses

Even after segwit activation, it will take some time until most wallets are upgraded. At first, segwit will be embedded in P2SH, as we saw in the previous section, to ease compatibility between segwit-aware and unaware wallets.

However, once wallets are broadly supporting segwit, it makes sense to encode witness scripts directly in a native address format designed for segwit, rather than embed it in P2SH.

The native segwit address format is defined in BIP-173:

[BIP-173](/bips/173.md "github") Base32 address format for native v0-16 witness outputs

BIP-173 only encodes witness (P2WPKH and P2WSH) scripts. It is not compatible with non-segwit P2PKH or P2SH scripts. BIP-173 is a checksummed Base32 encoding, as compared to the Base58 encoding of a "traditional" bitcoin address. BIP-173 addresses are also called _bech32_ addresses, pronounced "beh-ch thirty two", alluding to the use of a "BCH" error detection algorithm and 32-character encoding set.

BIP-173 addresses use 32 lower-case-only alphanumeric character set, carefully selected to reduce errors from misreading or mistyping. By choosing a lower-case-only character set, bech32 is easier to read, speak, and 45% more efficient to encode in QR codes.

The BCH error detection algorithm is a vast improvement over the previous checksum algorithm (from Base58Check), allowing not only detection but also _correction_ of errors. Address-input interfaces (such as text-fields in forms) can detect and highlight which character was most likely mistyped when they detect an error.

From the BIP-173 specification, here are some examples of bech32 addresses:

Mainnet P2WPKH:: bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t4
Testnet P2WPKH:: tb1qw508d6qejxtdg4y5r3zarvary0c5xw7kxpjzsx
Mainnet P2WSH:: bc1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3qccfmv3
Testnet P2WSH:: tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7

As you can see in these examples, a segwit bech32 string is up to 90 characters long and consists of three parts:

*The human readable part*
This prefix "bc" or "tb" identifying mainnet or testnet.

The separator:: The digit "1", which is not part of the 32-character encoding set and can only appear in this position as a separator

The data part:: A minimum of 6 alphanumeric characters, the checksum encoded witness script

At this time, only a few wallets accept or produce native segwit bech32 addresses, but as segwit adoption increases, you will see these more and more often.

#### Transaction identifiers

One of the greatest benefits of Segregated Witness is that it eliminates third-party transaction malleability.

Before segwit, transactions could have their signatures subtly modified by third parties, changing their transaction ID (hash) without changing any fundamental properties (inputs, outputs, amounts). This created opportunities for denial-of-service attacks as well as attacks against poorly written wallet software that assumed unconfirmed transaction hashes were immutable.

With the introduction of Segregated Witness, transactions have two identifiers, +txid+ and +wtxid+. The traditional transaction ID +txid+ is the double-SHA256 hash of the serialized transaction, without the witness data. A transaction +wtxid+ is the double-SHA256 hash of the new serialization format of the transaction with witness data.

The traditional +txid+ is calculated in exactly the same way as with a nonsegwit transaction. However, since the segwit transaction has empty ++scriptSig++s in every input, there is no part of the transaction that can be modified by a third party. Therefore, in a segwit transaction, the +txid+ is immutable by a third party, even when the transaction is unconfirmed.

The +wtxid+ is like an "extended" ID, in that the hash also incorporates the witness data. If a transaction is transmitted without witness data, then the +wtxid+ and +txid+ are identical. Note that since the +wtxid+ includes witness data (signatures) and since witness data may be malleable, the +wtxid+ should be considered malleable until the transaction is confirmed. Only the +txid+ of a segwit transaction can be considered immutable by third parties and only if _all_ the inputs of the transaction are segwit inputs.


::: tip
Segregated Witness transactions have two IDs: +txid+ and +wtxid+. The +txid+ is the hash of the transaction without the witness data and the +wtxid+ is the hash inclusive of witness data. The +txid+ of a transaction where all inputs are segwit inputs is not susceptible to third-party transaction malleability.
:::

### Segregated Witness' New Signing Algorithm

Segregated Witness modifies the semantics of the four signature verification functions (CHECKSIG, CHECKSIGVERIFY, CHECKMULTISIG, and CHECKMULTISIGVERIFY), changing the way a transaction commitment hash is calculated.

Signatures in bitcoin transactions are applied on a _commitment hash_, which is calculated from the transaction data, locking specific parts of the data indicating the signer's commitment to those values. For example, in a simple +SIGHASH_ALL+ type signature, the commitment hash includes all inputs and outputs.

Unfortunately, the way the commitment hash was calculated introduced the possibility that a node verifying the signature can be forced to perform a significant number of hash computations. Specifically, the hash operations increase in O(n^2^) with respect to the number of signature operations in the transaction. An attacker could therefore create a transaction with a very large number of signature operations, causing the entire bitcoin network to have to perform hundreds or thousands of hash operations to verify the transaction.

Segwit represented an opportunity to address this problem by changing the way the commitment hash is calculated. For segwit version 0 witness programs, signature verification occurs using an improved commitment hash algorithm as specified in BIP-143.

The new algorithm achieves two important goals. Firstly, the number of hash operations increases by a much more gradual O(n) to the number of signature operations, reducing the opportunity to create denial-of-service attacks with overly complex transactions. Secondly, the commitment hash now also includes the value (amounts) of each input as part of the commitment. This means that a signer can commit to a specific input value without needing to "fetch" and check the previous transaction referenced by the input. In the case of offline devices, such as hardware wallets, this greatly simplifies the communication between the host and the hardware wallet, removing the need to stream previous transactions for validation. A hardware wallet can accept the input value "as stated" by an untrusted host. Since the signature is invalid if that input value is not correct, the hardware wallet doesn't need to validate the value before signing the input.

### Economic Incentives for Segregated Witness

Bitcoin mining nodes and full nodes incur costs for the resources used to support the bitcoin network and the blockchain. As the volume of bitcoin transactions increases, so does the cost of resources (CPU, network bandwidth, disk space, memory). Miners are compensated for these costs through fees that are proportional to the size (in bytes) of each transaction. Nonmining full nodes are not compensated, so they incur these costs because they have a need to run an authoritative fully validating full-index node, perhaps because they use the node to operate a bitcoin business.

Without transaction fees, the growth in bitcoin data would arguably increase dramatically. Fees are intended to align the needs of bitcoin users with the burden their transactions impose on the network, through a market-based price discovery mechanism.

The calculation of fees based on transaction size treats all the data in the transaction as equal in cost. But from the perspective of full nodes and miners, some parts of a transaction carry much higher costs. Every transaction added to the bitcoin network affects the consumption of four resources on nodes:

Disk Space :: Every transaction is stored in the blockchain, adding to the total size of the blockchain. The blockchain is stored on disk, but the storage can be optimized by “pruning” older transactions.

CPU :: Every transaction must be validated, which requires CPU time.

Bandwidth :: Every transaction is transmitted (through flood propagation) across the network at least once. Without any optimization in the block propagation protocol, transactions are transmitted again as part of a block, doubling the impact on network capacity.

Memory :: Nodes that validate transactions keep the UTXO index or the entire UTXO set in memory to speed up validation. Because memory is at least one order of magnitude more expensive than disk, growth of the UTXO set contributes disproportionately to the cost of running a node.

As you can see from the list, not every part of a transaction has an equal impact on the cost of running a node or on the ability of bitcoin to scale to support more transactions. The most expensive part of a transaction are the newly created outputs, as they are added to the in-memory UTXO set. By comparison, signatures (aka witness data) add the least burden to the network and the cost of running a node, because witness data are only validated once and then never used again. Furthermore, immediately after receiving a new transaction and validating witness data, nodes can discard that witness data. If fees are calculated on transaction size, without discriminating between these two types of data, then the market incentives of fees are not aligned with the actual costs imposed by a transaction. In fact, the current fee structure actually encourages the opposite behavior, because witness data is the largest part of a transaction.

The incentives created by fees matter because they affect the behavior of wallets. All wallets must implement some strategy for assembling transactions that takes into consideration a number of factors, such as privacy (reducing address reuse), fragmentation (making lots of loose change), and fees. If the fees are overwhelmingly motivating wallets to use as few inputs as possible in transactions, this can lead to UTXO picking and change address strategies that inadvertently bloat the UTXO set.

Transactions consume UTXO in their inputs and create new UTXO with their outputs. A transaction, therefore, that has more inputs than outputs will result in a decrease in the UTXO set, whereas a transaction that has more outputs than inputs will result in an increase in the UTXO set. Let’s consider the _difference_ between inputs and outputs and call that the “Net-new-UTXO.” That’s an important metric, as it tells us what impact a transaction will have on the most expensive network-wide resource, the in-memory UTXO set. A transaction with positive Net-new-UTXO adds to that burden. A transaction with a negative Net-new-UTXO reduces the burden. We would therefore want to encourage transactions that are either negative Net-new-UTXO or neutral with zero Net-new-UTXO.

Let’s look at an example of what incentives are created by the transaction fee calculation, with and without Segregated Witness. We will look at two different transactions. Transaction A is a 3-input, 2-output transaction, which has a Net-new-UTXO metric of &#x2013;1, meaning it consumes one more UTXO than it creates, reducing the UTXO set by one. Transaction B is a 2-input, 3-output transaction, which has a Net-new-UTXO metric of 1, meaning it adds one UTXO to the UTXO set, imposing additional cost on the entire bitcoin network. Both transactions use multisignature (2-of-3) scripts to demonstrate how complex scripts increase the impact of segregated witness on fees. Let’s assume a transaction feerate of 30 satoshi per byte and a 75% fee discount on witness data:


**Without Segregated Witness**
Transaction A fee: 28,590 satoshi
Transaction B fee: 20,760 satoshi


**With Segregated Witness**
Transaction A fee: 12,255 satoshi
Transaction B fee: 10,425 satoshi


Both transactions are less expensive when segregated witness is implemented. Comparing the costs between the two transactions, we see that before Segregated Witness, the transaction with the positive Net-new-UTXO has significant cost-savings. With Segregated Witness, the cost difference shrinks significantly in absolute as well as relative terms. While it would require inputs to become cheaper than outputs to incentivize UTXO set consolidation, this discount reduces the incentive to create new UTXO in order to avoid using more inputs.

Segregated Witness therefore has two main effects on the fees paid by bitcoin users. Firstly, segwit reduces the overall cost of transactions by discounting witness data and increasing the capacity of the bitcoin blockchain. Secondly, segwit’s discount on witness data partially mitigates a misalignment of incentives that may have inadvertently created more bloat in the UTXO set.