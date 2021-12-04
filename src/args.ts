const cmdArgs = require("command-line-args");

type Args = {
    privateKey: string,
    rpcUrl: string,
};

const optionDefinitions = [
    { name: "private-key", alias: "k", type: String },
    { name: "rpc-url", alias: "u", type: String },
];
const options = cmdArgs(optionDefinitions);

// ensure all options are set
for (const o of optionDefinitions) {
    if (!options[o.name]) {
        console.error(`Missing argument --${o.name}`);
        process.exit(1);
    }
}

const args: Args = {
    privateKey: options["private-key"],
    rpcUrl: options["rpc-url"],
};

export default args;
