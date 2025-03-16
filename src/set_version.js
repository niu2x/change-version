import fs from "fs";

function setNodePackageVersion(input, newVersion) {
	input = JSON.parse(input)
	input.version = newVersion
	return JSON.stringify(input, null, "  ")
}

const delegate = {
	"Node": setNodePackageVersion,
}

export default function setVersion(inputPath, newVersion, type, inPlace) {
	// console.log(type)
	// console.log(input)
	// console.log(newVersion)
	// 
	const input = fs.readFileSync(inputPath, 'utf-8')
	const output = delegate[type](input, newVersion)
	if(!inPlace) {
		process.stdout.write(output);
	}
	else {
		
	}
} 