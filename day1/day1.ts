import * as fs from "fs";
import { exit } from "process";

type LocationIDs = Array<number>;

function parseInput(input: string) {
	const inputLines = input.split("\n");
	for (const inputElementIndex in inputLines) {
		const arrayItems = inputLines[inputElementIndex]
			.split("   ")
			.filter((e) => e);
		const firstElement = parseInt(arrayItems[0]);
		const secondElement = parseInt(arrayItems[1]);
		array1.push(firstElement);
		array2.push(secondElement);
	}
}

function sortList() {
	array1 = array1.sort();
	array2 = array2.sort();
}

function findSumOfDifferences() {
	let sum = 0;
	for (let i = 0; i < array1.length; i++) {
		sum += Math.abs(array1[i] - array2[i]);
	}
	return sum;
}

let array1: LocationIDs = [];
let array2: LocationIDs = [];

const input = fs.readFileSync("input.txt").toString();
if (!input) exit(1);

parseInput(input);
sortList();
const sum = findSumOfDifferences();
console.log(sum);
