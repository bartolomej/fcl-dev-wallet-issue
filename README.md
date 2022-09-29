# fcl-dev-wallet-issue

Minimal reproducible example for this issue: https://github.com/onflow/fcl-dev-wallet/issues/154

Flow-cli version:
```
➜  ~ flow version
Version: v0.40.0
Commit: 30e91b0a05d7bbd2ce911ba0e4a1c763eb6e113a
```

How I ran the emulator:
```
➜  fcl-dev-wallet-issue git:(main) ✗ flow emulator
INFO[0000] ⚙️   Using service account 0xf8d6e0586b0a20c7  serviceAddress=f8d6e0586b0a20c7 serviceHashAlgo=SHA3_256 servicePrivKey=0660f98a97d73a374bab87d5b21d06a2a9285e6a71ca75babec113badb6ba58c servicePubKey=588e7f586822522b63e350f47efd9dd51fc04981614eb9eec55a6733dfe14a0de8fa9b53909120dd9dd4bd39ca16322d0d0708705f53ba3b76a90806246f0885 serviceSigAlgo=ECDSA_P256
INFO[0000] 📜  Flow contract                              FlowServiceAccount=0xf8d6e0586b0a20c7
INFO[0000] 📜  Flow contract                              FlowToken=0x0ae53cb6e3f42a79
INFO[0000] 📜  Flow contract                              FungibleToken=0xee82856bf20e2aa6
INFO[0000] 📜  Flow contract                              FlowFees=0xe5a8b7f23e8b548f
INFO[0000] 📜  Flow contract                              FlowStorageFees=0xf8d6e0586b0a20c7
INFO[0000] 🌱  Starting gRPC server on port 3569          port=3569
INFO[0000] 🌱  Starting REST API on port 8888             port=8888
INFO[0000] 🌱  Starting admin server on port 8080         port=8080
INFO[0027] ⭐  Transaction executed                       computationUsed=54 txID=88c36d251b0303618afd68c29290ea54e44c636c35539648a66d45c6f9730359
INFO[0027] ⭐  Script executed                            scriptID=9f27bcf1d399d777a8b9c7c08c9ee3e9a4346820c29af2247b86781d509104df
WARN[0027] ❗  Script reverted                            scriptID=52b9bcd485cb5f37a913feac6facb96dcdf692d3b8377d47e29d000bd93dc3e1
WARN[0027] ERR [52b9bc] [Error Code: 1101] cadence runtime error Execution failed:
error: invalid script return type: `PublicAccount`
--> 52b9bcd485cb5f37a913feac6facb96dcdf692d3b8377d47e29d000bd93dc3e1
WARN[0027] ❗  Script reverted                            scriptID=52b9bcd485cb5f37a913feac6facb96dcdf692d3b8377d47e29d000bd93dc3e1
WARN[0027] ERR [52b9bc] [Error Code: 1101] cadence runtime error Execution failed:
error: invalid script return type: `PublicAccount`
--> 52b9bcd485cb5f37a913feac6facb96dcdf692d3b8377d47e29d000bd93dc3e1
INFO[0041] ⭐  Script executed                            scriptID=9f27bcf1d399d777a8b9c7c08c9ee3e9a4346820c29af2247b86781d509104df
WARN[0041] ❗  Script reverted                            scriptID=52b9bcd485cb5f37a913feac6facb96dcdf692d3b8377d47e29d000bd93dc3e1
WARN[0041] ERR [52b9bc] [Error Code: 1101] cadence runtime error Execution failed:
```

How I ran dev-wallet:
```
➜  fcl-dev-wallet-issue git:(main) ✗ flow dev-wallet

❗   Version warning: a new version of Flow CLI is available (v0.39.3).
   Read the installation guide for upgrade instructions: https://docs.onflow.org/flow-cli/install

🎉 Starting dev wallet server on port 8701
❗   Make sure the emulator is running
```
